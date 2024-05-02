import React from "react";
import styles from "./TextPanel.module.css";

import ChapterButtons from "./ChapterButtons";

export default function TextPanel({ title, text, buttonCount, ...props }) {
   return (
      <div className={styles.TextPanel}>
         <div className={styles.header}>
            <button onClick={props.onClose} className={styles.closeButton}>
               Close
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
}
