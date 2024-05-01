import React from "react";
import styles from "./ChapterButtons.module.css";

export default function ChapterButtons({ count, ...props }) {
   const handleButtonClick = (i) => {
      props.onChapterChange(i);
   };

   const handlePrevious = () => {
      if (props.chapterIndex === 0) return;
      const nextIndex = props.chapterIndex - 1;
      props.onChapterChange(nextIndex);
   };
   const handleNext = () => {
      if (props.chapterIndex === count - 1) return;
      const nextIndex = props.chapterIndex + 1;
      console.log("chapterIndex", props.chapterIndex);
      props.onChapterChange(nextIndex);
   };
   return (
      <div className={styles.ChapterButtons}>
         <div
            className={styles.arrow}
            style={{ visibility: props.chapterIndex > 0 ? "visible" : "hidden" }}
            role="button"
            tabindex="999"
            onClick={handlePrevious}
         >
            {"<"}
         </div>

         <div className={styles.buttons}>
            {Array.from({ length: count }, (_, i) => (
               <button
                  className={`${styles.button} ${i === props.chapterIndex ? styles.active : ""} `}
                  onClick={() => {
                     handleButtonClick(i);
                  }}
                  key={i}
               ></button>
            ))}
         </div>

         <div
            className={styles.arrow}
            style={{ visibility: props.chapterIndex < count - 1 ? "visible" : "hidden" }}
            role="button"
            tabindex="999"
            onClick={handleNext}
         >
            {">"}
         </div>
      </div>
   );
}
