import React, { useEffect, useState } from "react";
import frontImage from "../images/device_back.svg";
import backImage from "../images/device_front.svg";
import Ring from "./Ring";

import { hotlinks } from "../data/imac";

export default function HotSpot() {
   const [circleWidth, setCircleWidth] = useState(50);
   useEffect(() => {
      function pulse() {
         const time = (Date.now() / 1000) * 0.4; // Apply speed factor
         const scale = Math.sin(time * Math.PI) * 20 + 50; // Adjust frequency based on speed

         //          circle.style.width = `${scale}px`;
         //   circle.style.height = `${scale}px`;

         setCircleWidth(Math.round(scale * 10) / 10);
      }

      const interval = setInterval(pulse, 16); // Update the size every 50 milliseconds
      return () => clearInterval(interval); // Cleanup the interval when the component unmounts
   }, []);
   return (
      <div style={{ position: "relative", width: "800px", height: "1080px", transform: "scale(0.8)" }}>
         <img
            src={backImage}
            width={"100%"}
            height={"100%"}
            style={{ position: "absolute", left: "0px", top: "0px" }}
         />

         <div
            style={{
               position: "absolute",
               top: "0px",
               left: "0px",
               backgroundColor: "rgba(200,0,0,0.2)",
               width: "100%",
               height: "100%",
            }}
         >
            {hotlinks.map((hotlink) => {
               const x = (hotlink.x / 80) * 100;
               const y = (hotlink.y / 108) * 100;
               const left = `${x}%`;
               const top = `${y}%`;
               return <Ring key={hotlink.id} top={top} left={left} width={circleWidth} />;
            })}
         </div>
      </div>
   );
}
