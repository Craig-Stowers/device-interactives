import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Animation from "./components/Animation";
import useWindowSize from "./hooks/useWindowSize";
import useURLSearchParams from "./hooks/useURLSearchParams";
import TextPanel from "./components/TextPanel";
import { animationsObject, panelContent } from "./data/imac.js";
import HotSpot from "./components/HotSpot.jsx";

function App() {
   const [width, height] = useWindowSize();
   const [topicIndex, setTopicIndex] = useState(0);
   const [chapterIndex, setChapterIndex] = useState(0);
   const [screen, setScreen] = useState("home");

   const vertical = width / height < 1;

   const removeWrapper = useURLSearchParams("removewrapper") === "true";

   const handleChapterChange = (i) => {
      setChapterIndex(i);
   };

   const newPanelContent = Object.entries(panelContent).map(([key, value]) => ({ key, ...value }));
   const currContent = newPanelContent[topicIndex];

   const title = currContent.title[chapterIndex] || currContent.title[0];
   const text = currContent.content[chapterIndex];

   console.log("newPanelContent", newPanelContent);
   const animation = animationsObject[currContent.key][chapterIndex];

   return (
      <div className={`${styles.app} ${vertical ? "vertical" : "horizontal"}`}>
         <div className={styles.fullScreen}>
            {!removeWrapper && <div className={styles.title}>title here</div>}
            <div className={styles.content}>
               {screen === "info" && (
                  <>
                     <div className={styles.animationContainer}>
                        <Animation settings={animation} />
                     </div>
                     <div className={styles.textPanelContainer}>
                        <TextPanel
                           onChapterChange={handleChapterChange}
                           content={newPanelContent[chapterIndex]}
                           title={title}
                           text={text}
                           chapterIndex={chapterIndex}
                           buttonCount={currContent.content.length}
                        />
                     </div>
                  </>
               )}

               {screen === "home" && <HotSpot />}
            </div>

            <div className={styles.footer}>
               <a href="?removewrapper=true" target="_blank">
                  FULL SCREEN
               </a>
            </div>
         </div>
      </div>
   );
}

export default App;
