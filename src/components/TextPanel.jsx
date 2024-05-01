import React from "react";
import styles from "./TextPanel.module.css";

import ChapterButtons from "./ChapterButtons";

export default function TextPanel({ title, text, buttonCount, ...props }) {
   return (
      <div className={styles.TextPanel}>
         <div className={styles.header}>
            <button className={styles.closeButton}>Close Xxx</button>
         </div>
         <div className={styles.body}>
            <h1>{title}</h1>
            <div>{text}</div>
         </div>

         <div className={styles.chapterButtonsContainer}>
            <ChapterButtons count={buttonCount} {...props} />
         </div>
      </div>
   );
}
