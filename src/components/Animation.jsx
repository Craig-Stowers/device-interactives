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
      if (!loading) return;
      const timer = setTimeout(() => {
         if (!showLoading) {
            setShowLoading(true);
            return;
         }
      }, 400);
      return () => clearTimeout(timer);
   }, [loading]);

   useEffect(() => {
      if (!loading && !showLoading) return;
      const timer = setInterval(() => {
         setLoadingAnimationCycle((prev) => (prev + 1) % 4);
      }, 300);
      return () => clearInterval(timer);
   }, [loading, showLoading]);

   useEffect(() => {
      console.log("change animation", settings);
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
   }, [link]);

   const animationRatio = 800 / 1080;
   const containerRatio = size.width / size.height;

   let animationWidth;
   let animationHeight;
   let left = 0;
   let top = 0;

   if (containerRatio > animationRatio) {
      animationWidth = size.width;
      animationHeight = size.width / animationRatio;
      top = (size.height - animationHeight) / 2;
   } else {
      animationHeight = size.height;
      animationWidth = size.height * animationRatio;
      left = (size.width - animationWidth) / 2;
   }

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
         <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.30s" }}>
            {/* <div style={{ width: "500px", height: "50px", backgroundColor: "red" }}>testing testing testing</div> */}
            {animationData && <Lottie animationData={animationData} loop={settings.loop} />}
         </div>

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
