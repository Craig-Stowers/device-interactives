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
      const timer = setInterval(() => {
         if (!showLoading) {
            setShowLoading(true);
            return;
         }
         setLoadingAnimationCycle((prev) => (prev + 1) % 4);
      }, 300);
      return () => clearInterval(timer);
   }, [loading]);

   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;

      setLoading(true);

      fetch(link)
         .then((response) => response.json())
         .then((data) => {
            setAnimationData(data);
            setLoading(false);
         })
         .catch((error) => console.error("Failed to load animation", error));

      return () => controller.abort();
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
         {!loading && <Lottie animationData={animationData} loop={true} />}
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
                  transition: "opacity 0.5s",
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
