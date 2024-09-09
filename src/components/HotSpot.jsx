import React, { useEffect, useState, useMemo, useRef } from "react";

import Ring from "./Ring";
import withSizeObserver from "../hoc/withSizeObserver";
import { isMobile, isTablet } from "react-device-detect";

import { cache, loadAsset } from "../helpers/FileCache";

const defaultDimensions = { width: 800, height: 1080 };

const HotSpot = ({
    hotSpotData,
    onLoadDetails,
    imageSettings,
    size,
    onPrintData,
    editMode = false,
}) => {
    const [circleWidth, setCircleWidth] = useState(50);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const hitboxRefs = useRef({});
    const clicks = useRef(0);

    const [localHotSpotData, setLocalHotSpotData] = useState([...hotSpotData]);
    const [editIndex, setEditIndex] = useState(0);
    const [modAmount, setModAmount] = useState(1);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    const [cacheExists, setCacheExists] = useState(false);

    //  const isTouchDevice = isMobile || isTablet;

    useEffect(() => {
        setLocalHotSpotData(hotSpotData);
        setEditIndex(0);
    }, [hotSpotData]);

    useEffect(() => {
        if (!editMode) return;
        const handleKeyPress = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    modifyLocalData(editIndex, 0, -modAmount);

                    break;
                case "ArrowDown":
                    modifyLocalData(editIndex, 0, modAmount);

                    break;
                case "ArrowLeft":
                    modifyLocalData(editIndex, -modAmount, 0);

                    break;
                case "ArrowRight":
                    modifyLocalData(editIndex, modAmount, 0);
                    break;
                case "1":
                    setModAmount(0.1);
                    break;
                case "2":
                    setModAmount(1);

                    break;
                case "3":
                    setModAmount(3);

                    break;
                case "q":
                    setEditIndex(
                        (oldIndex) =>
                            (oldIndex - 1 + localHotSpotData.length) %
                            localHotSpotData.length
                    );
                    break;
                case "w":
                    setEditIndex(
                        (oldIndex) => (oldIndex + 1) % localHotSpotData.length
                    );

                    break;
                case "Enter":
                    onPrintData(localHotSpotData);
                    break;
                case "h":
                    const userInput = prompt("Please enter a number:");
                    if (userInput !== null) {
                        const numberInput = Number(userInput); // Converts the input to a number
                        if (!isNaN(numberInput)) {
                            if (numberInput < 0) return;
                            if (numberInput >= localHotSpotData.length) return;
                            setEditIndex(numberInput);
                        } else {
                        }
                    }
                    break;
                default:
                // handle other keys if needed
            }
        };

        // Attach the event listener
        window.addEventListener("keydown", handleKeyPress);

        // Clean up the event listener
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [editIndex, modAmount, localHotSpotData]); // Empty array means this effect runs only once after the initial render

    const modifyLocalData = (index, modX = 0, modY = 0) => {
        setLocalHotSpotData((oldValue) => {
            const newData = [...oldValue];
            newData[index] = {
                ...newData[index],
                x: newData[index].x + modX,
                y: newData[index].y + modY,
            };
            return newData;
        });
    };

    useEffect(() => {
        clicks.current = 0;
    }, [selectedIndex]);

    useEffect(() => {
        function pulse() {
            const time = (Date.now() / 1000) * 0.4; // Apply speed factor
            const scale = Math.sin(time * Math.PI) * 20 + 50; // Adjust frequency based on speed

            //          circle.style.width = `${scale}px`;
            //   circle.style.height = `${scale}px`;

            setCircleWidth(Math.round(scale * 10) / 10);
        }

        const interval = setInterval(pulse, 16); // Update the size every 50 milliseconds
        // return () => clearInterval(interval); // Cleanup the interval when the component unmounts

        const mouseDown = (e) => {
            if (e.target === hitboxRefs.current[selectedIndex]) {
                console.log("touch device", isTouchDevice);
                if (isTouchDevice) {
                    clicks.current++;
                    if (clicks.current >= 2) {
                        onLoadDetails(selectedIndex);
                    }
                } else {
                    onLoadDetails(selectedIndex);
                }
                return;
            }
            setSelectedIndex(null);
        };

        window.addEventListener("mousedown", mouseDown);
        return () => {
            clearInterval(interval);

            window.removeEventListener("mousedown", mouseDown);
        };
    }, [selectedIndex, isTouchDevice]);

    // console.log("containerRatio", containerRatio, "newRatio", newRatio);

    const [newWidth, newHeight] = useMemo(() => {
        let width = 0;
        let height = 0;

        const newDimensions = { ...defaultDimensions };

        if (imageSettings.bracketHeight) {
            newDimensions.height =
                defaultDimensions.height * imageSettings.bracketHeight;
        }
        if (imageSettings.bracketWidth) {
            newDimensions.width =
                defaultDimensions.width * imageSettings.bracketWidth;
        }

        const originalRatio =
            defaultDimensions.width / defaultDimensions.height;
        const newRatio = newDimensions.width / newDimensions.height;

        const newSize = { ...size };
        if (imageSettings.paddingX) {
            newSize.width -= imageSettings.paddingX * 2;
        }
        if (imageSettings.paddingY) {
            newSize.height -= imageSettings.paddingY * 2;
        }

        const containerRatio = newSize.width / newSize.height;

        if (containerRatio > newRatio) {
            height =
                newSize.height *
                (defaultDimensions.height / newDimensions.height);
            width = height * originalRatio;
        } else {
            width =
                newSize.width * (defaultDimensions.width / newDimensions.width);
            height = width / originalRatio;
        }

        return [width, height];
    }, [size, imageSettings]);

    const handleSelected = (i, isMouse) => {
        if (isMouse) {
            setIsTouchDevice(false);
        } else {
            setIsTouchDevice(true);
        }
        setSelectedIndex(i);
    };

    const handleUnselected = (i) => {
        setSelectedIndex(null);
    };

    const handleFocusEnter = () => {
        onLoadDetails(selectedIndex);
    };

    //console.log("curr index", selectedIndex);
    // console.log("hot size", size);
    // console.log("image settings", imageSettings);

    // const scalevValue = imageSettings.scale ? imageSettings.scale : 1;

    const rotationTransform = imageSettings.rotation
        ? `rotate(${imageSettings.rotation}deg)`
        : null;
    const scaleTransform = imageSettings.scale
        ? `scale(${imageSettings.scale})`
        : null;

    const transforms = [rotationTransform, scaleTransform].join(" ");

    // console.log("scale", scaleValue);
    const scale = size.width / defaultDimensions.width;

    const newScale = useMemo(() => {
        //  console.log("new scale", scale);
        return scale;
    }, [scale]);

    // if (!localHotSpotData[0]) {
    //    console.log("no hotspot data for view");
    //    return null;
    // }

    let loadingImage = false;
    const cachedData = cache[imageSettings.cacheKey];
    if (!cachedData) loadingImage = true;
    if (cachedData && cachedData instanceof Promise) loadingImage = true;

    return (
        <div
            style={{
                position: "absolute",
                width: newWidth + "px",
                height: newHeight + "px",

                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                transformOrigin: "center",
                pointerEvents: "none",

                // border: "1px solid red",
            }}
        >
            {loadingImage && (
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        color: "white",
                        transform: "translate(-50%, -50%)",
                        fontSize: "32px",
                        fontWeight: "bold",
                    }}
                >
                    Loading...
                </div>
            )}
            {!loadingImage && (
                <>
                    <img
                        src={cachedData}
                        width={"100%"}
                        height={"100%"}
                        style={{
                            pointerEvents: "none",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            transform: transforms,
                            // border: "2px solid green",
                            // ...(imageSettings.rotation ? { transform: `rotate(${imageSettings.rotation}deg)` } : {}),
                            // ...(imageSettings.scale ? { transform: `rotate(${imageSettings.rotation}deg)` } : {}),
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            // backgroundColor: "rgba(200,0,0,0.2)",
                            transform: scaleTransform,
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {localHotSpotData.map((hotlink, i) => {
                            const highlightWidth = Math.min(
                                Math.max(130 * scale, 115),
                                140
                            );

                            const pulseBase = Math.max(50 * scale, 20);
                            const pulseWidth =
                                highlightWidth * 0.14 + circleWidth * 0.3;

                            const x = (hotlink.x / 80) * 100;
                            const y = (hotlink.y / 108) * 100;
                            const props = {
                                left: `${x}%`,
                                top: `${y}%`,
                                text: hotlink.title,
                                tabIndex: i,
                                width: pulseWidth,
                                highlightWidth: highlightWidth,
                                adminSelected: editIndex === i,
                                editMode,
                                onSelected: (isTouch) =>
                                    handleSelected(hotlink.id, isTouch),
                                onUnselect: () => handleUnselected(hotlink.id),
                                selected: selectedIndex === hotlink.id,
                                onFocusEnter: handleFocusEnter,
                                ref: (ref) =>
                                    (hitboxRefs.current[hotlink.id] = ref),
                            };

                            return <Ring key={"ring-" + i} {...props} />;
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default withSizeObserver(HotSpot);
