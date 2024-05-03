import React, { useEffect, useState, useMemo } from "react";
import styles from "./App.module.css";
import basicStyles from "./styles/basic.module.css";
import Animation from "./components/Animation";
import useWindowSize from "./hooks/useWindowSize";
import useURLSearchParams from "./hooks/useURLSearchParams";
import TextPanel from "./components/TextPanel";
import { animationsObject, panelContent, hotlinks, views, deviceTitle } from "../public/imac/imac.js";
import HotSpot from "./components/HotSpot.jsx";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import backImage from "./images/device_back.svg";
import frontImage from "./images/device_front.svg";

const images = { front: frontImage, back: backImage };

const dataFolder = "imac";

function App() {
   const [width, height] = useWindowSize();
   const [topicId, setTopicId] = useState(null);
   const [subTopicIndex, setSubTopicIndex] = useState(0);
   const [screen, setScreen] = useState("home");
   const [selectedImage, setSelectedImage] = useState(0);
   const [view, setView] = useState(views[0]);

   const vertical = width / height < 1.15;
   const removeWrapper = useURLSearchParams("removewrapper") === "true";

   const handleChapterChange = (i) => {
      setSubTopicIndex(i);
   };

   const handleLoadDetails = (id) => {
      setScreen("info");
      setTopicId(id);
   };

   const handleClose = () => {
      setScreen("home");
      setTopicId(null);
      setSubTopicIndex(0);
   };

   console.log("render App.");

   const { title, text, animation, subTopicCount } = useMemo(() => {
      console.log("calc values");
      let title = null;
      let text = null;
      let animation = null;
      let subTopicCount = null;
      if (!topicId) return { title, text, animation, subTopicCount };

      const currContent = panelContent[topicId];
      title = currContent.title[subTopicIndex] || currContent?.title[0];
      text = currContent?.content[subTopicIndex];
      animation = {
         ...animationsObject[topicId][subTopicIndex],
         link: `/${dataFolder}/` + animationsObject[topicId][subTopicIndex].link,
      };

      subTopicCount = currContent?.content.length;
      console.log("animation", animation);
      return { title, text, animation, subTopicCount };
   }, [topicId, subTopicIndex]);
   // const newPanelContent = Object.entries(panelContent).map(([key, value]) => ({ key, ...value }));
   console.log(animation);

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
      <div className={`${styles.app} ${vertical ? "vertical" : "horizontal"} ${removeWrapper ? "nowrapper" : ""}`}>
         <div className={styles.fullScreen}>
            {/* {!removeWrapper && (
               <div className={styles.title}>
                  <h1>{deviceTitle}</h1>
               </div>
            )} */}
            <div className={styles.content}>
               {screen === "info" && (
                  <>
                     <div className={styles.animationContainer}>
                        <div className={styles.altTitleContainer}>
                           <h1>iMac</h1>
                        </div>

                        <div className={styles.animationInner}>
                           <Animation settings={animation} />
                        </div>
                     </div>
                     <div className={styles.textPanelContainer}>
                        <TextPanel
                           onChapterChange={handleChapterChange}
                           onClose={handleClose}
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
                     <div className={styles.altTitleContainerHome}>
                        <h1>iMac</h1>
                     </div>
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
                              className={basicStyles.basicButton}
                              onClick={() => setView("back")}
                              style={{ marginLeft: "auto", marginRight: "auto" }}
                           >
                              View iMac back
                           </button>
                        )}
                        {view !== "front" && (
                           <button
                              className={basicStyles.basicButton}
                              onClick={() => setView("front")}
                              style={{ marginLeft: "auto", marginRight: "auto" }}
                           >
                              View iMac front
                           </button>
                        )}
                     </div>
                  </div>
               )}
            </div>

            {!removeWrapper && (
               <div className={styles.footer}>
                  <div className={styles.footerContent}>
                     <span>
                        You can also view the above interactive full screen in a <strong>new browser window</strong>.
                     </span>
                     <a href="?removewrapper=true" target="_blank" className={styles.borderButton}>
                        <button>
                           <span>Launch </span>full screen <span>{">"}</span>
                        </button>
                     </a>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

export default App;
