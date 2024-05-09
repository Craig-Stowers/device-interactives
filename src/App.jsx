import React, { useEffect, useState, useMemo } from "react";
import styles from "./App.module.css";
import basicStyles from "./styles/basic.module.css";
import Animation from "./components/Animation";
import useWindowSize from "./hooks/useWindowSize";
import useURLSearchParams from "./hooks/useURLSearchParams";
import TextPanel from "./components/TextPanel";
//import { animationsObject, panelContent, hotlinks, views, deviceTitle } from "../public/imac/imac.js";
import HotSpot from "./components/HotSpot.jsx";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import DropdownMenu from "./components/DropdownMenu";

import useTextFileLoader from "./hooks/useTextFileLoader.js";

import { cache, loadAsset, unloadAsset } from "./helpers/FileCache";

//import printObject from "../public/macbook/macbook.js";

//console.log(JSON.stringify(printObject, null, 4));

const adminMode = true;
const editMode = false;

const options = [
   { value: "imac", disabled: false },
   { value: "ipad", disabled: false },
   { value: "iphone", disabled: false },
   { value: "macbook", disabled: false },
   { value: "android", disabled: false },
   { value: "androidtablet", disabled: false },
   { value: "desktop", disabled: false },
   { value: "laptop", disabled: false },
];

const defaultDeviceKey = "iphone";

function App() {
   const [width, height] = useWindowSize();
   const [topicId, setTopicId] = useState(null);
   const [subTopicIndex, setSubTopicIndex] = useState(0);
   const [screen, setScreen] = useState("home");
   const [selectedImage, setSelectedImage] = useState(0);
   const [viewIndex, setViewIndex] = useState(null);

   const [adminDeviceKey, setAdminDeviceKey] = useState(defaultDeviceKey);

   const deviceKey = adminMode && adminDeviceKey ? adminDeviceKey : defaultDeviceKey;

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
      //preload first animation of each topic
      if (!deviceData) return;

      // const getAsset = async (key, url) => {
      //    const fetchImage = await loadAsset(key, url);
      // };

      for (let i = 0; i < deviceData.viewImages.length; i++) {
         const url = "/" + deviceKey + "basxxssdlink" + deviceData.viewImages[i].link;
         const key = "view-" + deviceData.views[i];
         loadAsset(key, url);
         // console.log("image promise?", image);
      }

      // console.log("curr cache", cache);
      // const fetchAnimationData = async (key, url) => {
      //    const data = await fetchImageAsDataURL(key, url);
      // };

      // // fetchAnimationData("largeAnimation1").then(() => {
      // //    unloadAnimationData("largeAnimation1");
      // // });

      // const topic = deviceData.hotlinks[0].id;
      // const link = deviceData.animationsObject[topic][0].link;
      // const url = "/" + deviceKey + link;

      // fetchAnimationData(topic, url);
      // console.log("PRE CACHE", cache);
   }, [deviceData]);

   useEffect(() => {
      if (!deviceData) return;

      setViewIndex(deviceData.initialViewIndex || 0);
      setScreen("home");
   }, [deviceData]);

   const { title, text, animation, subTopicCount, status } = useMemo(() => {
      let title = null;
      let text = null;
      let animation = null;
      let subTopicCount = null;
      let status = "ok";

      if (!topicId || !deviceData) return { title, text, animation, subTopicCount, status };

      console.log("test topic", topicId, deviceData.animationsObject[topicId]);
      if (deviceData.animationsObject[topicId] === undefined) {
         console.log("undefined");
         return { title, text, animation, subTopicCount, status };
      }

      if (!deviceData.animationsObject[topicId] && !deviceData.animationsObject[topicId][subTopicIndex]) {
         title, text, animation, subTopicCount, status;
      }

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
   }, [topicId, subTopicIndex, deviceData, deviceKey]);
   // const newPanelContent = Object.entries(panelContent).map(([key, value]) => ({ key, ...value }));

   if (status) if (!deviceData) return null;

   if (viewIndex == null) {
      console.log("aborting viewIndex", viewIndex, deviceData.views[0]);
      return null;
   }

   const hotSpotData = deviceData.hotlinks.map((hotlink) => {
      return {
         id: hotlink.id,
         x: hotlink.x,
         y: hotlink.y,
         title: hotlink.title || deviceData.panelContent[hotlink.id].title[0],
         view: hotlink.view || deviceData.views[0],
      };
   });

   const filteredHotSpotData = hotSpotData.filter((hotlink) => hotlink.view === deviceData.views[viewIndex]);
   console.log("pre image view", deviceData.viewImages[viewIndex]);
   const imageSettings = {
      ...deviceData.viewImages[viewIndex],
      link: deviceKey + deviceData.viewImages[viewIndex].link,
   };

   const handleDeviceSelect = (option) => {
      setAdminDeviceKey(option);
      setViewIndex(null);
   };

   const handlePrintData = (newViewData) => {
      const outputData = hotSpotData.map((item) => {
         const object = { ...item };
         for (let i = 0; i < newViewData.length; i++) {
            if (newViewData[i].id === item.id) {
               object.x = Math.round(newViewData[i].x * 100) / 100;
               object.y = Math.round(newViewData[i].y * 100) / 100;
            }
         }
         return object;
      });

      console.log("outputData", outputData);
   };

   const showTopBorder = !removeWrapper && !isMobile;

   return (
      <div className={`${styles.app} ${vertical ? "vertical" : "horizontal"} ${removeWrapper ? "nowrapper" : ""}`}>
         <div className={styles.fullScreen}>
            {showTopBorder && (
               <div className={styles.title}>
                  <h1>{deviceData.title}</h1>
               </div>
            )}
            <div className={styles.content}>
               {screen === "info" && (
                  <>
                     <div className={styles.animationContainer}>
                        {/* <div className={styles.altTitleContainer}>
                           <h1>{deviceData.title}</h1>
                        </div> */}

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
                  <div className={styles.hotSpotContainer}>
                     {!showTopBorder && (
                        <div className={styles.altTitleContainerHome}>
                           <h1>{deviceData.title}</h1>
                        </div>
                     )}
                     <div className={styles.hotSpotInner}>
                        <HotSpot
                           hotSpotData={filteredHotSpotData}
                           onLoadDetails={handleLoadDetails}
                           imageSettings={imageSettings}
                           onPrintData={handlePrintData}
                           editMode={editMode}
                        />
                     </div>

                     {deviceData.views.length > 1 && (
                        <div className={styles.viewButtonsContainer}>
                           {deviceData.views.map((view, i) => {
                              const disabled = i === viewIndex;
                              return (
                                 <button
                                    key={"viewbtn" + i}
                                    disabled={disabled}
                                    className={`${styles.viewButton}`}
                                    onClick={() => setViewIndex(i)}
                                    // style={{ opacity: disabled ? 0.5 : 1 }}
                                 >
                                    {deviceData.viewButtons[i]}
                                 </button>
                              );
                           })}
                        </div>
                     )}
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

         <div style={{ position: "absolute", top: "0px", left: "0px" }}>
            <DropdownMenu label="device" options={options} onSelect={handleDeviceSelect} selectedOption={deviceKey} />
         </div>
      </div>
   );
}

export default App;
