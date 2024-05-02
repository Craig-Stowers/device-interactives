import React, { useEffect, useState, useMemo, useRef } from "react";

import Ring from "./Ring";
import withSizeObserver from "../hoc/withSizeObserver";
import { isMobile } from "react-device-detect";

import { hotlinks } from "../data/imac";

const defaultDimensions = { width: 800, height: 1080 };

const HotSpot = ({ hotSpotData, size, onLoadDetails, image }) => {
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
         console.log("selected index xxx", selectedIndex);
         console.log("hitboxRefs", hitboxRefs.current);
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

   const [newWidth, newHeight] = useMemo(() => {
      let width = 0;
      let height = 0;

      if (size.width / size.height > defaultDimensions.width / defaultDimensions.height) {
         width = size.height * (defaultDimensions.width / defaultDimensions.height);
         height = size.height;
      } else {
         width = size.width;
         height = size.width * (defaultDimensions.height / defaultDimensions.width);
      }

      return [width, height];
   }, [size]);

   const handleSelected = (i) => {
      console.log("handle-selected", i);
      setSelectedIndex(i);
   };

   const handleUnselected = (i) => {
      setSelectedIndex(null);
   };

   //console.log("curr index", selectedIndex);
   // console.log("hot size", size);
   return (
      <div
         style={{
            position: "absolute",
            width: newWidth + "px",
            height: newHeight + "px",
            transform: "scale(1)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
         }}
      >
         <img src={image} width={"100%"} height={"100%"} style={{ position: "absolute", left: "0px", top: "0px" }} />

         <div
            style={{
               position: "absolute",
               top: "0px",
               left: "0px",
               // backgroundColor: "rgba(200,0,0,0.2)",
               width: "100%",
               height: "100%",
            }}
         >
            {hotSpotData.map((hotlink, i) => {
               const x = (hotlink.x / 80) * 100;
               const y = (hotlink.y / 108) * 100;
               const props = {
                  left: `${x}%`,
                  top: `${y}%`,
                  text: hotlink.title,
                  tabIndex: i,
                  width: circleWidth * (newWidth / defaultDimensions.width),
                  onSelected: () => handleSelected(hotlink.id),
                  onUnselect: () => handleUnselected(hotlink.id),
                  selected: selectedIndex === hotlink.id,
                  ref: (ref) => (hitboxRefs.current[hotlink.id] = ref),
               };

               return <Ring key={"ring-" + i} {...props} />;
            })}
         </div>
      </div>
   );
};

export default withSizeObserver(HotSpot);
