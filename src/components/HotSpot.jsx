import React, { useEffect, useState, useMemo, useRef } from "react";

import Ring from "./Ring";
import withSizeObserver from "../hoc/withSizeObserver";
import { isMobile } from "react-device-detect";

import { hotlinks } from "../../public/imac/imac";

const defaultDimensions = { width: 800, height: 1080 };

const HotSpot = ({ hotSpotData, onLoadDetails, imageSettings, size }) => {
   const [circleWidth, setCircleWidth] = useState(50);
   const [selectedIndex, setSelectedIndex] = useState(null);
   const hitboxRefs = useRef({});

   useEffect(() => {
      function pulse() {
         const time = (Date.now() / 1000) * 0.4; // Apply speed factor
         const scale = Math.sin(time * Math.PI) * 20 + 50; // Adjust frequency based on speed

         //          circle.style.width = `${scale}px`;
         //   circle.style.height = `${scale}px`;

         setCircleWidth(Math.round(scale * 10) / 10);
      }

      const interval = setInterval(pulse, 16); // Update the size every 50 milliseconds
      // return () => clearInterval(interval); // Cleanup the interval when the component unmounts
      let clicks = 0;

      const mouseDown = (e) => {
         if (e.target === hitboxRefs.current[selectedIndex]) {
            if (isMobile) {
               clicks++;
               if (clicks >= 2) {
                  onLoadDetails(selectedIndex);
               }
            } else {
               onLoadDetails(selectedIndex);
            }
            return;
         }
         setSelectedIndex(null);
      };

      window.addEventListener("mousedown", mouseDown);
      return () => {
         clearInterval(interval);

         window.removeEventListener("mousedown", mouseDown);
      };
   }, [selectedIndex]);

   // console.log("containerRatio", containerRatio, "newRatio", newRatio);

   const [newWidth, newHeight] = useMemo(() => {
      let width = 0;
      let height = 0;

      console.log("change image scale");

      const newDimensions = { ...defaultDimensions };

      if (imageSettings.bracketHeight) {
         newDimensions.height = defaultDimensions.height * imageSettings.bracketHeight;
      }
      if (imageSettings.bracketWidth) {
         newDimensions.width = defaultDimensions.width * imageSettings.bracketWidth;
      }

      const originalRatio = defaultDimensions.width / defaultDimensions.height;
      const newRatio = newDimensions.width / newDimensions.height;
      const containerRatio = size.width / size.height;

      if (containerRatio > newRatio) {
         height = size.height * (defaultDimensions.height / newDimensions.height);
         width = height * originalRatio;
      } else {
         width = size.width * (defaultDimensions.width / newDimensions.width);
         height = width / originalRatio;
      }

      return [width, height];
   }, [size, imageSettings]);

   const handleSelected = (i) => {
      setSelectedIndex(i);
   };

   const handleUnselected = (i) => {
      setSelectedIndex(null);
   };

   const handleFocusEnter = () => {
      onLoadDetails(selectedIndex);
   };

   //console.log("curr index", selectedIndex);
   // console.log("hot size", size);
   // console.log("image settings", imageSettings);

   // const scalevValue = imageSettings.scale ? imageSettings.scale : 1;

   const rotationTransform = imageSettings.rotation ? `rotate(${imageSettings.rotation}deg)` : null;
   const scaleTransform = imageSettings.scale ? `scale(${imageSettings.scale})` : null;

   const transforms = [rotationTransform, scaleTransform].join(" ");

   // console.log("scale", scaleValue);
   const scale = newWidth / defaultDimensions.width;

   const newScale = useMemo(() => {
      console.log("new scale", scale);
      return scale;
   }, [scale]);

   return (
      <div
         style={{
            position: "absolute",
            width: newWidth + "px",
            height: newHeight + "px",

            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
            pointerEvents: "none",

            // border: "1px solid red",
         }}
      >
         <img
            src={imageSettings.link}
            width={"100%"}
            height={"100%"}
            style={{
               pointerEvents: "none",
               position: "absolute",
               left: "0px",
               top: "0px",
               transform: transforms,
               // border: "2px solid green",
               // ...(imageSettings.rotation ? { transform: `rotate(${imageSettings.rotation}deg)` } : {}),
               // ...(imageSettings.scale ? { transform: `rotate(${imageSettings.rotation}deg)` } : {}),
            }}
         />

         <div
            style={{
               position: "absolute",
               top: "0px",
               left: "0px",
               // backgroundColor: "rgba(200,0,0,0.2)",
               transform: scaleTransform,
               width: "100%",
               height: "100%",
            }}
         >
            {hotSpotData.map((hotlink, i) => {
               const highlightWidth = Math.max(150 * scale, 100);

               const pulseBase = Math.max(50 * scale, 20);
               const pulseWidth = pulseBase + circleWidth * scale * 0.7;

               const x = (hotlink.x / 80) * 100;
               const y = (hotlink.y / 108) * 100;
               const props = {
                  left: `${x}%`,
                  top: `${y}%`,
                  text: hotlink.title,
                  tabIndex: i,
                  width: pulseWidth,
                  highlightWidth: highlightWidth,
                  onSelected: () => handleSelected(hotlink.id),
                  onUnselect: () => handleUnselected(hotlink.id),
                  selected: selectedIndex === hotlink.id,
                  onFocusEnter: handleFocusEnter,
                  ref: (ref) => (hitboxRefs.current[hotlink.id] = ref),
               };

               return <Ring key={"ring-" + i} {...props} />;
            })}
         </div>
      </div>
   );
};

export default withSizeObserver(HotSpot);
