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

import useTextFileLoader from "./hooks/useTextFileLoader.js";

import printObject from "../public/macbook/macbook.js";

console.log(JSON.stringify(printObject, null, 4));

const deviceKey = "macbook";

function App() {
   const [width, height] = useWindowSize();
   const [topicId, setTopicId] = useState(null);
   const [subTopicIndex, setSubTopicIndex] = useState(0);
   const [screen, setScreen] = useState("home");
   const [selectedImage, setSelectedImage] = useState(0);
   const [viewIndex, setViewIndex] = useState(0);

   const deviceData = useTextFileLoader(`${deviceKey}/${deviceKey}-data.json`);

   console.log("deviceData", deviceData);

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

   useEffect(() => {
      if (!deviceData) return;
      if (deviceData.initialViewIndex) {
         setViewIndex(deviceData.initialViewIndex);
      }
   }, [deviceData]);

   const { title, text, animation, subTopicCount, status } = useMemo(() => {
      let title = null;
      let text = null;
      let animation = null;
      let subTopicCount = null;
      let status = "ok";

      if (!topicId || !deviceData) return { title, text, animation, subTopicCount, status };
      console.log("data", deviceData);

      const currContent = deviceData.panelContent[topicId];

      title = currContent.title[subTopicIndex] || currContent?.title[0];
      text = currContent?.content[subTopicIndex];
      const link = `/${deviceKey}/` + deviceData.animationsObject[topicId][subTopicIndex]?.link;
      animation = {
         ...deviceData.animationsObject[topicId][subTopicIndex],
         link,
      };

      if (!link) status = "error";
      if (status != "ok") {
         console.log("error with data", deviceData);
      }

      subTopicCount = currContent?.content.length;

      return { title, text, animation, subTopicCount, status };
   }, [topicId, subTopicIndex, deviceData]);
   // const newPanelContent = Object.entries(panelContent).map(([key, value]) => ({ key, ...value }));

   if (status) if (!deviceData) return null;

   const hotSpotData = deviceData.hotlinks.map((hotlink) => {
      return {
         id: hotlink.id,
         x: hotlink.x,
         y: hotlink.y,
         title: deviceData.panelContent[hotlink.id].title[0],
         view: hotlink.view || views[0],
      };
   });

   const filteredHotSpotData = hotSpotData.filter((hotlink) => hotlink.view === deviceData.views[viewIndex]);
   console.log("pre image view", deviceData.viewImages[viewIndex]);
   const imageSettings = {
      ...deviceData.viewImages[viewIndex],
      link: deviceKey + deviceData.viewImages[viewIndex].link,
   };

   console.log("image daettings", imageSettings);
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
                           <h1>{deviceData.title}</h1>
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
                  <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
                     <div className={styles.altTitleContainerHome}>
                        <h1>{deviceData.title}</h1>
                     </div>
                     <HotSpot
                        hotSpotData={filteredHotSpotData}
                        onLoadDetails={handleLoadDetails}
                        imageSettings={imageSettings}
                     />
                     <div
                        style={{
                           position: "absolute",
                           bottom: "0px",
                           paddingBottom: "10px",
                           left: "50%",
                           transform: "translateX(-50%)",

                           display: "flex",
                        }}
                     >
                        {deviceData.views.map((view, i) => {
                           const disabled = i === viewIndex;
                           return (
                              <button
                                 disabled={disabled}
                                 className={`${styles.viewButton}`}
                                 onClick={() => setViewIndex(i)}
                                 // style={{ opacity: disabled ? 0.5 : 1 }}
                              >
                                 {deviceData.viewButtons[i]}
                              </button>
                           );
                        })}
                        {/* {view !== "back" && (
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
                              onClick={() => setViewIndex("front")}
                              style={{ marginLeft: "auto", marginRight: "auto" }}
                           >
                              View iMac front
                           </button>
                        )} */}
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
