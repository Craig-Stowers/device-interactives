import React, { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./Ring.module.css";
import { isMobile } from "react-device-detect";

const Ring = forwardRef(({ top, left, width, onSelected, onUnselect, selected, text, highlightWidth }, ref) => {
   const [hovering, setHovering] = useState(false);
   const renderedWidthRef = useRef(width);
   const targetWidthRef = useRef(width);
   const [renderedWidth, setRenderedWidth] = useState(width);
   const hitCircleRef = useRef(null);
   const touchOffRef = useRef(null);

   useEffect(() => {
      // console.log("isMobile", isMobile);
      return () => {
         if (touchOffRef.current) {
            document.removeEventListener("touchstart", touchOffRef.current);
         }
      };
   }, []);

   useEffect(() => {
      if (selected) {
         targetWidthRef.current = highlightWidth;
      } else {
         targetWidthRef.current = width;
      }
   }, [selected, width]);

   useEffect(() => {
      const interval = setInterval(() => {
         //  console.log("TARGET", targetWidthRef.current);
         //console.log("renderedWidthRef", renderedWidthRef.current);
         const diff = targetWidthRef.current - renderedWidthRef.current;
         // console.log(diff);
         if (Math.abs(diff) < 0.5) {
            renderedWidthRef.current = targetWidthRef.current;
            setRenderedWidth(targetWidthRef.current);
            return;
         }
         const newWidth = renderedWidthRef.current + diff * 0.4;

         renderedWidthRef.current = newWidth;
         setRenderedWidth(newWidth);
      }, 1000 / 60);
      return () => clearInterval(interval);
   }, []);

   useEffect(() => {
      if (!isMobile) return;
      if (hovering) {
         console.log("add thing", hovering);

         const clickOff = (event) => {
            console.log(event.target);
            if (event.target === hitCircleRef.current && hovering) {
               console.log("ENTER DETAILS");
            } else {
               setHovering(false);
            }
         };

         const timer = setTimeout(() => {
            // document.addEventListener("click", clickOff);
            document.addEventListener("touchstart", clickOff);
         }, 10);
         // document.addEventListener("click", clickOff);
         // document.addEventListener("touchstart", clickOff);
         return () => {
            clearTimeout(timer);
            document.removeEventListener("touchstart", clickOff);
            //  document.removeEventListener("click", clickOff);
         };
      }
   }, [hovering]);

   const handleTouchStart = (event) => {
      if (!isMobile) return;
      onSelected();
   };

   const handleMouseClick = (event) => {};

   const handleMouseOver = () => {
      onSelected();
      // if (isMobile) return;
      // setHovering(true);
   };

   const handleMouseOut = () => {
      if (isMobile) return;
      onUnselect();
   };

   const handleKeyDown = (event) => {
      if (event.key === "Enter") {
         // if (!isMobile) return;
         setHovering(true);
         console.log("Enter key was pressed while SVG button was focused");
         // Execute any additional functionality here
      }
   };

   // console.log(renderedWidth);

   const svgWidth = highlightWidth + 4; //account for border
   const offsetLeft = `-${svgWidth / 2}px`;

   return (
      <div className={`${styles.Ring} ${selected ? styles.hovering : ""}`} style={{ top, left }}>
         <div className={styles.outline} style={{ position: "absolute", left: offsetLeft, top: offsetLeft }}>
            <svg width={svgWidth} height={svgWidth} viewBox={`0 0 ${svgWidth} ${svgWidth}`} tabIndex={"0"}>
               <circle
                  tabIndex={"0"}
                  onKeyDown={handleKeyDown}
                  cx={svgWidth / 2}
                  cy={svgWidth / 2}
                  r={renderedWidth / 2}
                  stroke="black"
                  strokeWidth="4"
                  vectorEffect="non-scaling-stroke"
               />
            </svg>
         </div>

         <div
            className={styles.hitbox}
            style={{ position: "absolute", left: offsetLeft, top: offsetLeft, height: svgWidth, width: svgWidth }}
         >
            <svg width={svgWidth} height={svgWidth} viewBox={`0 0 ${svgWidth} ${svgWidth}`}>
               <circle
                  // ref={hitCircleRef}
                  cx={svgWidth / 2}
                  cy={svgWidth / 2}
                  r={50}
                  fill="rgba(255,255,0,0.0)"
                  // onClick={handleMouseClick}
                  ref={ref}
                  onTouchStart={handleTouchStart}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
               />
            </svg>
            <div
               style={{ fontSize: highlightWidth * 0.16 + "px", width: highlightWidth * 0.9 + "px" }}
               className={styles.text}
            >
               {text}
            </div>
         </div>

         {/* <div className={styles.outline} style={{ width: newWidth + "px", height: newWidth + "px" }}></div> */}
      </div>
   );
});

export default Ring;
