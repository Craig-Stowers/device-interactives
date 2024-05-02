import React, { useEffect, useState, useMemo } from "react";
import styles from "./App.module.css";
import Animation from "./components/Animation";
import useWindowSize from "./hooks/useWindowSize";
import useURLSearchParams from "./hooks/useURLSearchParams";
import TextPanel from "./components/TextPanel";
import { animationsObject, panelContent, hotlinks, views } from "./data/imac.js";
import HotSpot from "./components/HotSpot.jsx";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import backImage from "./images/device_back.svg";
import frontImage from "./images/device_front.svg";

const images = { front: frontImage, back: backImage };

function App() {
   const [width, height] = useWindowSize();
   const [topicId, setTopicId] = useState(0);
   const [subTopicIndex, setSubTopicIndex] = useState(0);
   const [screen, setScreen] = useState("home");
   const [selectedImage, setSelectedImage] = useState(0);
   const [view, setView] = useState(views[0]);

   const vertical = width / height < 1;
   const removeWrapper = useURLSearchParams("removewrapper") === "true";

   const handleChapterChange = (i) => {
      setSubTopicIndex(i);
   };

   const handleLoadDetails = (id) => {
      setScreen("info");
      setTopicId(id);
   };

   const { title, text, animation, subTopicCount } = useMemo(() => {
      let title = null;
      let text = null;
      let animation = null;
      let subTopicCount = null;
      if (!topicId) return { title, text, animation, subTopicCount };

      const currContent = panelContent[topicId];
      title = currContent.title[subTopicIndex] || currContent?.title[0];
      text = currContent?.content[subTopicIndex];
      animation = animationsObject[topicId][subTopicIndex];
      subTopicCount = currContent?.content.length;
      console.log("animation", animation);
      return { title, text, animation, subTopicCount };
   }, [topicId, subTopicIndex]);
   // const newPanelContent = Object.entries(panelContent).map(([key, value]) => ({ key, ...value }));

   const hotSpotData = hotlinks.map((hotlink) => {
      return {
         id: hotlink.id,
         x: hotlink.x,
         y: hotlink.y,
         title: panelContent[hotlink.id].title[0],
         view: hotlink.view || views[0],
      };
   });

   const filteredHotSpotData = hotSpotData.filter((hotlink) => hotlink.view === view);
   const image = images[view];

   return (
      <div className={`${styles.app} ${vertical ? "vertical" : "horizontal"}`}>
         <div className={styles.fullScreen}>
            {!removeWrapper && (
               <div className={styles.title}>
                  <h1>Title is here</h1>
               </div>
            )}
            <div className={styles.content}>
               {screen === "info" && (
                  <>
                     <div className={styles.animationContainer}>
                        <Animation settings={animation} />
                     </div>
                     <div className={styles.textPanelContainer}>
                        <TextPanel
                           onChapterChange={handleChapterChange}
                           onClose={() => setScreen("home")}
                           title={title}
                           text={text}
                           chapterIndex={subTopicIndex}
                           buttonCount={subTopicCount}
                        />
                     </div>
                  </>
               )}

               {screen === "home" && (
                  <div style={{ width: "100%", height: "100%", position: "relative" }}>
                     <HotSpot hotSpotData={filteredHotSpotData} onLoadDetails={handleLoadDetails} image={image} />
                     <div
                        style={{
                           position: "absolute",
                           bottom: "0px",
                           paddingBottom: "10px",
                           width: "100%",
                           display: "flex",
                        }}
                     >
                        {view !== "back" && (
                           <button
                              onClick={() => setView("back")}
                              style={{ marginLeft: "auto", marginRight: "auto", padding: "20px" }}
                           >
                              show back
                           </button>
                        )}
                        {view !== "front" && (
                           <button
                              onClick={() => setView("front")}
                              style={{ marginLeft: "auto", marginRight: "auto", padding: "20px" }}
                           >
                              show front
                           </button>
                        )}
                     </div>
                  </div>
               )}
            </div>

            <div className={styles.footer}>
               <div className={styles.footerContent}>
                  <span>
                     You can also view the above interactive full screen in a <strong>new browser window</strong>.
                  </span>
                  <a href="?removewrapper=true" target="_blank" className={styles.borderButton}>
                     <button>Launch full screen {">"}</button>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
