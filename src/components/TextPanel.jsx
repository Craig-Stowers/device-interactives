import React, { useEffect } from "react";
import styles from "./TextPanel.module.css";

import ChapterButtons from "./ChapterButtons";
import withSizeObserver from "../hoc/withSizeObserver";

const TextPanel = ({ title, text, buttonCount, size, ...props }) => {
   console.log("panel size", size);
   const panelArea = size.width * size.height * 0.1;

   let sizeClass = styles.extrasmall;
   if (panelArea > 10000) sizeClass = styles.small;
   if (panelArea > 15000) sizeClass = styles.medium;
   if (panelArea > 20000) sizeClass = styles.large;
   if (panelArea > 30000) sizeClass = styles.extralarge;

   useEffect(() => {
      const handleKeyPress = (event) => {
         switch (event.key) {
            case "Escape":
               props.onClose();
               break;
            case "ArrowLeft":
               console.log("Left arrow key pressed!");
               // Add your code here to handle the Left arrow key
               break;
            case "ArrowRight":
               console.log("Right arrow key pressed!");
               // Add your code here to handle the Right arrow key
               break;
            default:
               break;
         }
      };

      // Add event listener for keydown
      window.addEventListener("keydown", handleKeyPress);

      // Cleanup the event listener when the component unmounts
      return () => {
         window.removeEventListener("keydown", handleKeyPress);
      };
   }, []); // Empty dependency array means this effect runs only on mount and unmount

   return (
      <div className={`${styles.TextPanel} ${sizeClass}`}>
         <div className={styles.header}>
            <button onClick={props.onClose} className={styles.closeButton}>
               <span>Close</span> X
            </button>
         </div>
         <div className={styles.body}>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: text }} />
         </div>

         {buttonCount > 1 && (
            <div className={styles.chapterButtonsContainer}>
               <ChapterButtons count={buttonCount} {...props} />
            </div>
         )}
      </div>
   );
};

export default withSizeObserver(TextPanel);
