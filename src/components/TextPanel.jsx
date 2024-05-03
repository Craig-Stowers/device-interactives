import React, { useEffect } from "react";
import styles from "./TextPanel.module.css";

import ChapterButtons from "./ChapterButtons";
import withSizeObserver from "../hoc/withSizeObserver";

const TextPanel = ({ title, text, buttonCount, size, ...props }) => {
   const panelArea = size.width * size.height * 0.1;

   let sizeClass = styles.extrasmall;
   if (panelArea > 10000) sizeClass = styles.small;
   if (panelArea > 15000) sizeClass = styles.medium;
   if (panelArea > 22000) sizeClass = styles.large;
   if (panelArea > 60000) sizeClass = styles.extralarge;

   return (
      <div className={`${styles.TextPanel} ${sizeClass}`}>
         {/* <div style={{ position: "absolute", left: "20px", top: "20px" }}>AREA: {panelArea}</div> */}
         <div className={styles.header}>
            <button onClick={props.onClose} className={styles.closeButton}>
               <span>Close</span> X
            </button>
         </div>
         <div className={styles.body}>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: text }} />
         </div>

         <div className={styles.chapterButtonsContainer}>
            <ChapterButtons count={buttonCount} {...props} />
         </div>
      </div>
   );
};

export default withSizeObserver(TextPanel);
