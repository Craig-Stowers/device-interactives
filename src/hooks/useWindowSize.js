import React, { useEffect, useState } from "react";

const useWindowSize = () => {
   const [dimensions, setDimensions] = useState([window.innerWidth, window.innerHeight]);
   useEffect(() => {
      function adjustHeight() {
         setDimensions([window.innerWidth, window.innerHeight]);
         var vh = window.innerHeight * 0.01;
         document.documentElement.style.setProperty("--vh", `${vh}px`);
      }

      window.addEventListener("resize", adjustHeight);
      window.addEventListener("orientationchange", adjustHeight);
      adjustHeight();

      // Set the height initially
      return () => {
         window.removeEventListener("orientationchange", adjustHeight);
         window.removeEventListener("resize", adjustHeight);
      };
   }, []);

   return dimensions;
};

export default useWindowSize;
