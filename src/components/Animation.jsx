import React, { useEffect, useState } from "react";

import Lottie from "lottie-react";
import withSizeObserver from "../hoc/withSizeObserver";
import { cache, loadAsset, onLoad } from "../helpers/FileCache";

const Animation = ({ size, settings }) => {
   //const { isLoading } = useAnimationLoader();

   const [animationData, setAnimationData] = React.useState(null);
   const [loading, setLoading] = React.useState(false);
   const [showLoading, setShowLoading] = React.useState(false);
   const [loadingAnimationCycle, setLoadingAnimationCycle] = useState(0);
   const [cacheUpdated, setCacheUpdated] = useState("");
   if (!settings) {
      console.error("No settings provided for Animation component");
      return null;
   }

   let animationWidth;
   let animationHeight;
   let left = 0;
   let top = 0;

   useEffect(() => {
      if (!settings.cacheKey) return;
      const cachedData = cache[settings.cacheKey];
      if (!cachedData || (cachedData && cachedData instanceof Promise)) {
         console.log("TEST adding loader for", settings.cacheKey);
         onLoad(() => {
            console.log("TEST it loaded!");
            setCacheUpdated(new Date().getTime());
         }, settings.cacheKey);
      }
   }, [settings.cacheKey]);

   //contain logic (WIP)

   //cover logic here
   if (settings.focusBox) {
      console.log("has focus box ==============================");
      const animationRatio = 800 / 1080;
      const containerRatio = size.width / size.height;
      const focusRatio = settings.focusBox.width / settings.focusBox.height;

      const scaleType = settings.focusBox.scaleType || "contain";

      if (scaleType === "cover") {
         if (containerRatio > focusRatio) {
            animationWidth = size.width * (800 / settings.focusBox.width);
            animationHeight = animationWidth / animationRatio;

            left = (size.width - animationWidth) / 2 - (settings.focusBox.x / 800) * animationWidth;
            top = (size.height - animationHeight) / 2 - (settings.focusBox.y / 1080) * animationHeight;
         } else {
            animationHeight = size.height / (settings.focusBox.height / 1080);
            animationWidth = animationHeight * animationRatio;
            left = (size.width - animationWidth) / 2 - (settings.focusBox.x / 800) * animationWidth;
            top = (size.height - animationHeight) / 2 - (settings.focusBox.y / 1080) * animationHeight;
         }
      }
      if (scaleType === "contain") {
         if (containerRatio > focusRatio) {
            animationHeight = size.height * (1080 / settings.focusBox.height);
            animationWidth = animationHeight * animationRatio;

            left = (size.width - animationWidth) / 2 - (settings.focusBox.x / 800) * animationWidth;
            top = (size.height - animationHeight) / 2 - (settings.focusBox.y / 1080) * animationHeight;
         } else {
            animationWidth = size.width * (800 / settings.focusBox.width);
            animationHeight = animationWidth / animationRatio;
            left = (size.width - animationWidth) / 2 - (settings.focusBox.x / 800) * animationWidth;
            top = (size.height - animationHeight) / 2 - (settings.focusBox.y / 1080) * animationHeight;
         }
      }

      // left += (settings.focusBox.x / settings.focusBox.width) * size.width;
      // top += (settings.focusBox.y / settings.focusBox.height) * size.height;
   } else {
      const animationRatio = 800 / 1080;
      const containerRatio = size.width / size.height;
      if (containerRatio > animationRatio) {
         animationWidth = size.width;
         animationHeight = size.width / animationRatio;
         top = (size.height - animationHeight) / 2;
      } else {
         animationHeight = size.height;
         animationWidth = size.height * animationRatio;
         left = (size.width - animationWidth) / 2;
      }
   }

   let loadingImage = false;
   const cachedData = cache[settings.cacheKey];
   console.log("TEST CACHE DATA", cachedData);
   if (!cachedData) loadingImage = true;
   if (cachedData && cachedData instanceof Promise) loadingImage = true;

   if (loadingImage) {
      console.log("still loading");
   }

   console.log("render animation", settings.cacheKey, cachedData);

   return (
      <div
         style={{
            width: animationWidth + "px",
            height: animationHeight + "px",
            top: top + "px",
            left: left + "px",
            position: "absolute",
         }}
      >
         {settings.isImage ? (
            <img src={cachedData} />
         ) : (
            <div>
               {/* <div style={{ width: "500px", height: "50px", backgroundColor: "red" }}>testing testing testing</div> */}
               {<Lottie animationData={cachedData} loop={settings.loop} />}
            </div>
         )}

         {loading && (
            <div
               style={{
                  fontSize: "30px",
                  position: "absolute",
                  left: "50%",
                  color: "white",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: "bold",
                  opacity: showLoading ? 1 : 0,
                  transition: "opacity 0.3s",
               }}
            >
               loading<span style={{ visibility: loadingAnimationCycle > 0 ? "visible" : "hidden" }}>.</span>
               <span style={{ visibility: loadingAnimationCycle > 1 ? "visible" : "hidden" }}>.</span>
               <span style={{ visibility: loadingAnimationCycle > 2 ? "visible" : "hidden" }}>.</span>
            </div>
         )}
      </div>
   );
};

export default withSizeObserver(Animation);
