import React, { useState } from "react";
import styles from "./Ring.module.css";

export default function Ring({ top, left, width, onHover }) {
   const [hovering, setHovering] = useState(false);

   const newWidth = hovering ? 130 : width;

   const stringWidth = `\"${newWidth}\"`;

   return (
      <div
         className={styles.Ring}
         style={{ top, left, transform: "scale(2)" }}
         onMouseEnter={() => setHovering(true)}
         onMouseLeave={() => setHovering(false)}
      >
         <div style={{ position: "absolute", left: "-100px", top: "-100px" }}>
            <svg width="200" height="200" viewBox="0 0 100 100">
               <circle
                  cx="50"
                  cy="50"
                  r={newWidth / 2}
                  fill="red"
                  stroke="black"
                  stroke-width="2"
                  vector-effect="non-scaling-stroke"
               />
            </svg>
         </div>

         {/* <div className={styles.outline} style={{ width: newWidth + "px", height: newWidth + "px" }}></div> */}
      </div>
   );
}
