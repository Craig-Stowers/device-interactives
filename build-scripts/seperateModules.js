// Import the necessary modules from Node.js
import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import archiver from "archiver";

// Helper to get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Array of devices representing sub-projects
const devices = ["iphone", "ipad", "imac", "macbook", "android", "androidtablet", "desktop", "laptop"];

async function copyFilesExcludingDevices(srcFolder, destFolder) {
   const entries = await fsp.readdir(srcFolder, { withFileTypes: true });
   for (const entry of entries) {
      if (devices.includes(entry.name) || entry.name === "devicekey.json") {
         // Skip device-specific folders and devicekey.json
         continue;
      }
      const srcPath = path.join(srcFolder, entry.name);
      const destPath = path.join(destFolder, entry.name);
      if (entry.isDirectory()) {
         await fsp.mkdir(destPath, { recursive: true });
         await copyFilesExcludingDevices(srcPath, destPath);
      } else {
         await fsp.copyFile(srcPath, destPath);
      }
   }
}

async function createDeviceJSON(deviceDir, device) {
   try {
      const jsonPath = path.join(deviceDir, "devicekey.json");
      const jsonData = {
         key: device,
      };
      await fsp.writeFile(jsonPath, JSON.stringify(jsonData, null, 2));
   } catch (error) {
      console.error(`Error creating JSON for ${device}:`, error);
   }
}

async function copyDeviceSpecificFolder(sourceDir, rootDir, device) {
   try {
      const deviceSourceDir = path.join(sourceDir, device);
      const deviceDestDir = path.join(rootDir, device, device); // Now includes device subdirectory
      const exists = await fsp.stat(deviceSourceDir).catch(() => null);
      if (exists && exists.isDirectory()) {
         await fsp.mkdir(deviceDestDir, { recursive: true });
         await copyFilesExcludingDevices(deviceSourceDir, deviceDestDir);
      }
   } catch (error) {
      console.error(`Error copying device-specific folder for ${device}:`, error);
   }
}

async function zipDeviceFolder(rootDir, device) {
   return new Promise((resolve, reject) => {
      const output = fs.createWriteStream(path.join(rootDir, `${device}.zip`));
      const archive = archiver("zip", {
         zlib: { level: 9 }, // Set the compression level
      });

      output.on("close", function () {
         console.log(`${device}.zip has been created successfully.`);
         resolve();
      });

      archive.on("error", function (err) {
         reject(err);
      });

      archive.pipe(output);
      // This ensures the folder itself is included in the zip
      archive.directory(path.join(rootDir, device, "/"), device);
      archive.finalize();
   });
}

async function createDeviceDirectoriesAndCopyFiles() {
   try {
      // Define the root directory for all devices
      const rootDir = path.join(__dirname, "../dist-all");
      const sourceDir = path.join(__dirname, "../dist");

      // Ensure the root directory is clean
      await fsp.rm(rootDir, { recursive: true, force: true });
      await fsp.mkdir(rootDir, { recursive: true });

      // Create subdirectories for each device and copy files
      for (const device of devices) {
         const deviceDir = path.join(rootDir, device);
         await fsp.mkdir(deviceDir, { recursive: true });

         // Copy all non-device-specific files to each device directory
         await copyFilesExcludingDevices(sourceDir, deviceDir);

         // Create devicekey.json file in each device directory
         await createDeviceJSON(deviceDir, device);

         // Copy device-specific folder contents to device directory
         await copyDeviceSpecificFolder(sourceDir, rootDir, device);

         // Zip the device directory
         await zipDeviceFolder(rootDir, device);
      }

      console.log("All files have been copied and zipped successfully.");
   } catch (error) {
      console.error("Error during setup, file copying, and zipping:", error);
   }
}

createDeviceDirectoriesAndCopyFiles();
