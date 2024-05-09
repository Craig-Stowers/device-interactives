const cache = {};
const fetchControllers = {}; // Store controllers for aborting fetches
const onLoadCallbacks = {}; // Store callbacks for when data is loaded

// Function to load animation data
const fetchJSON = (key, path) => {
   // console.log("Attempting to fetch JSON data", key, path);

   if (!cache[key]) {
      console.log("FETCHING NEW");
      const controller = new AbortController();
      fetchControllers[key] = controller; // Store the controller
      const { signal } = controller;

      cache[key] = fetch(path, { signal })
         .then((response) => {
            if (!response.ok) {
               console.error(`HTTP error ${response.status} for ${path}`);
               throw new Error(`HTTP error ${response.status}`);
            }
            return response.json(); // Process the response as JSON
         })
         .then((jsonData) => {
            console.log(`JSON data processed for ${key}`);
            cache[key] = jsonData; // Cache the actual JSON data
            if (onLoadCallbacks[key]) {
               console.log("TEST callback");
               onLoadCallbacks[key].forEach((callback) => callback(jsonData));
               onLoadCallbacks[key] = null; // Clear the callback
            }

            return jsonData;
         })
         .catch((error) => {
            console.error("Error processing JSON data for key", key, error);
            delete cache[key]; // Ensure cleanup on error
            delete fetchControllers[key]; // Clean up controller reference
            throw error;
         });

      //console.log("Cache entry (promise) stored for", path);
   } else {
      // console.log("Using existing cache entry for", path);
   }
   return cache[key];
};

// Function to unload or delete animation data
const unloadAsset = (key) => {
   console.log("unload asset", key);
   if (fetchControllers[key]) {
      fetchControllers[key].abort(); // Abort the fetch
      delete fetchControllers[key]; // Remove controller reference
   }
   if (cache[key]) {
      delete cache[key];
      // console.log(`Cache entry and fetch for ${key} have been aborted and cleared.`);
   }
};

const unloadAll = () => {
   Object.keys(cache).forEach((key) => {
      unloadAsset(key);
   });
};

const unloadAllBut = (keys) => {
   Object.keys(cache).forEach((key) => {
      if (!keys.includes(key)) {
         unloadAsset(key);
      }
   });
};

const fetchImageAsDataURL = (key, path) => {
   //  console.log("Attempting to fetch image as data URL", key, path);

   if (!cache[key]) {
      console.log("FETCHING NEW");
      const controller = new AbortController();
      fetchControllers[key] = controller; // Store the controller
      const { signal } = controller;

      cache[key] = fetch(path, { signal })
         .then((response) => {
            //console.log("Received HTTP response for", response);

            if (!response.ok) {
               console.error(`HTTP error ${response.status} for ${path}`);
               throw new Error(`HTTP error ${response.status}`);
            }
            return response.blob();
         })
         .then((blob) => {
            console.log(`Response Body: ${blob}`);
            return new Promise((resolve, reject) => {
               const reader = new FileReader();
               reader.onloadend = () => {
                  console.log(`Image data URL processed for ${key}`);
                  cache[key] = reader.result;
                  resolve(reader.result);
               };
               reader.onerror = () => {
                  console.error(`FileReader error for ${key}`);
                  reject(new Error("Failed to read blob as data URL"));
               };
               reader.readAsDataURL(blob);
            });
         })
         .catch((error) => {
            console.error("Error processing image data URL:", error);
            delete cache[key]; // Ensure cleanup on error
            delete fetchControllers[key]; // Clean up controller reference
            throw error;
         });

      console.log("Cache entry (promise) stored for", path);
   } else {
      console.log("Using existing cache entry for", path);
   }
   return cache[key];
};

function determineFileType(url) {
   if (url.endsWith(".json")) {
      return "json";
   } else if (url.endsWith(".svg")) {
      return "svg";
   } else {
      return "unknown";
   }
}

const onLoad = (callback, key) => {
   if (!onLoadCallbacks[key]) {
      onLoadCallbacks[key] = [];
   }
   onLoadCallbacks[key].push(callback);
};

const loadAsset = async (key, url = null) => {
   if (!url) {
      if (cache[key]) {
         console.log("returning existing key data", key, cache[key]);
         return cache[key];
      }
   }
   const assetType = determineFileType(url);

   if (assetType == "svg") {
      return fetchImageAsDataURL(key, url);
   }

   if (assetType == "json") {
      return fetchJSON(key, url);
   }

   console.log("unhandled asset", assetType, key, url);

   //console.log("key", key);
   //       if (asset.type === "json") {
   //          return fetchJSONData(asset.key, asset.path);
   //       } else if (asset.type === "image") {
   //          return fetchImageAsDataURL(asset.key, asset.path);
   //       }
   //    });
   //    return await Promise.all(promises);
};

export { cache, loadAsset, onLoad, unloadAsset, unloadAll, unloadAllBut };
