const cache = {};
const fetchControllers = {}; // Store controllers for aborting fetches

// Function to load animation data
const fetchJSONData = async (key, path) => {
   if (!cache[key]) {
      console.log("cache - sending fetch request", path);
      const response = await fetch(path);
      console.log("cache - fetch request complete", response);
      const animationData = await response.json();
      console.log("-====== cache - animation data loaded", animationData);
      cache[key] = animationData;
   }
   return cache[key];
};

// Function to unload or delete animation data
const unloadAsset = (key) => {
   if (fetchControllers[key]) {
      fetchControllers[key].abort(); // Abort the fetch
      delete fetchControllers[key]; // Remove controller reference
   }
   if (cache[key]) {
      delete cache[key];
      console.log(`Cache entry and fetch for ${key} have been aborted and cleared.`);
   }
};
const fetchImageAsDataURL = (key, path) => {
   console.log("Attempting to fetch image as data URL", key, path);

   if (!cache[key]) {
      console.log("FETCHING NEW");
      const controller = new AbortController();
      fetchControllers[key] = controller; // Store the controller
      const { signal } = controller;

      cache[key] = fetch(path, { signal })
         .then((response) => {
            //console.log("Received HTTP response for", response);
            console.log(`Status: ${response.status}`); // Check the status code
            console.log(`Headers: ${JSON.stringify([...response.headers])}`); // Log headers
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

// const fetchImageAsDataURL = (key, path) => {
//    console.log("fetch image as data url", key, path, cache[key]);

//    if (!cache[key]) {
//       const controller = new AbortController();
//       fetchControllers[key] = controller; // Store the controller
//       const { signal } = controller;

//       cache[key] = fetch(path, { signal })
//          .then((response) => {
//             console.log("got a response");
//             if (!response.ok) {
//                throw new Error(`HTTP error ${response.status}`);
//             }
//             return response.blob();
//          })
//          .then((blob) => {
//             return new Promise((resolve, reject) => {
//                const reader = new FileReader();
//                reader.onloadend = () => resolve(reader.result);
//                reader.onerror = reject;
//                reader.readAsDataURL(blob);
//             });
//          })
//          .catch((error) => {
//             console.error("Error loading image:", error);
//             delete cache[key]; // Clean up cache on error
//             throw error;
//          });

//       console.log("cache - promise stored for", path);
//    }
//    return cache[key];
// };

function determineFileType(url) {
   if (url.endsWith(".json")) {
      return "json";
   } else if (url.endsWith(".svg")) {
      return "svg";
   } else {
      return "unknown";
   }
}

const loadAsset = async (key, url) => {
   const assetType = determineFileType(url);

   if (assetType == "svg") {
      console.log("fetch svg");
      return fetchImageAsDataURL(key, url);
   }

   //console.log("key", key);
   //       if (asset.type === "json") {
   //          return fetchJSONData(asset.key, asset.path);
   //       } else if (asset.type === "image") {
   //          return fetchImageAsDataURL(asset.key, asset.path);
   //       }
   //    });
   //    return await Promise.all(promises);
};

export { cache, loadAsset, unloadAsset };
