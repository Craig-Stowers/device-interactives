import React, { useEffect, useState } from "react";

import Lottie from "lottie-react";
import withSizeObserver from "../hoc/withSizeObserver";

const animationUrls = [
   "/animations/headphones.json",
   "/animations/homescreen.json",
   "/animations/test2.json",
   "/animations/imac.json",
];

const Animation = ({ size, settings }) => {
   //const { isLoading } = useAnimationLoader();

   const [animationData, setAnimationData] = React.useState(null);
   const [loading, setLoading] = React.useState(true);
   const [showLoading, setShowLoading] = React.useState(false);
   const [loadingAnimationCycle, setLoadingAnimationCycle] = useState(0);
   if (!settings) {
      console.error("No settings provided for Animation component");
      return null;
   }

   const link = settings?.link.replace("./", "/");

   useEffect(() => {
      console.log("run loader delay");
      if (!loading) return;
      const timer = setTimeout(() => {
         if (!showLoading) {
            //  console.log("change show loading");
            setShowLoading(true);
            return;
         }
      }, 400);
      return () => clearTimeout(timer);
   }, [loading]);

   useEffect(() => {
      //   console.log("run loader interval");
      if (!loading || !showLoading) return;
      const timer = setInterval(() => {
         console.log("change cycle");
         setLoadingAnimationCycle((prev) => (prev + 1) % 4);
      }, 300);
      return () => clearInterval(timer);
   }, [loading, showLoading]);

   useEffect(() => {
      console.log("settings changed");
      if (settings.isImage) {
         setLoading(false);
         return;
      }
      const controller = new AbortController();
      const signal = controller.signal;

      setLoading(true);
      setShowLoading(false);
      setLoadingAnimationCycle(0);

      let timer = null;
      let timer2 = null;

      fetch(link)
         .then((response) => response.json())
         .then((data) => {
            //setLoading(false);
            timer = setTimeout(() => {
               setAnimationData(data);
            }, 300);
            timer2 = setTimeout(() => {
               setLoading(false);
            }, 400);
         })
         .catch((error) => console.error("Failed to load animation", error));

      return () => {
         controller.abort();
         clearTimeout(timer);
         clearTimeout(timer2);
      };
   }, [settings]);

   let animationWidth;
   let animationHeight;
   let left = 0;
   let top = 0;

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
            animationWidth = size.width / (settings.focusBox.width / 800);
            animationHeight = animationWidth / animationRatio;

            console.log("fit width - cover");

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
            console.log("focus box contain height");
            animationHeight = size.height * (1080 / settings.focusBox.height);
            animationWidth = animationHeight * animationRatio;

            left = (size.width - animationWidth) / 2 - (settings.focusBox.x / 800) * animationWidth;
            top = (size.height - animationHeight) / 2 - (settings.focusBox.y / 1080) * animationHeight;

            console.log("NEW SIZE", animationWidth, animationHeight, left, top);
         } else {
            console.log("focus box contain width");
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

   console.log("render Animation xxx", settings);
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
            <img src={settings.link} />
         ) : (
            <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.30s" }}>
               {/* <div style={{ width: "500px", height: "50px", backgroundColor: "red" }}>testing testing testing</div> */}
               {animationData && <Lottie animationData={animationData} loop={settings.loop} />}
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
