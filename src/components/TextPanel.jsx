import React from "react";
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
   if (panelArea > 28000) sizeClass = styles.extralarge;

   console.log("size", sizeClass);

   return (
      <div className={`${styles.TextPanel} ${sizeClass}`}>
         <div className={styles.header}>
            <button onClick={props.onClose} className={styles.closeButton}>
               <span>Close</span> X
            </button>
         </div>
         <div className={styles.body}>
            <h1>{sizeClass}</h1>
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
