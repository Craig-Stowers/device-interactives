import React, { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./Ring.module.css";
//import { isMobile, isTablet } from "react-device-detect";

const Ring = forwardRef(
    (
        {
            top,
            left,
            width,
            onSelected,
            onFocusEnter,
            onUnselect,
            selected,
            text,
            highlightWidth,
            adminSelected,
            editMode,
        },
        ref
    ) => {
        // const [hovering, setHovering] = useState(false);
        const renderedWidthRef = useRef(width);
        const targetWidthRef = useRef(width);
        const [renderedWidth, setRenderedWidth] = useState(width);

        const [isTouchDevice, setIsTouchDevice] = useState(true);
        //const hitCircleRef = useRef(null);
        const touchOffRef = useRef(null);

        //  const isTouchDevice = isMobile || isTablet;

        useEffect(() => {
            // console.log("isTouchDevice", isTouchDevice);
            return () => {
                if (touchOffRef.current) {
                    document.removeEventListener(
                        "touchstart",
                        touchOffRef.current
                    );
                }
            };
        }, []);

        useEffect(() => {
            if (selected) {
                targetWidthRef.current = highlightWidth;
            } else {
                targetWidthRef.current = width;
            }
        }, [selected, width]);

        useEffect(() => {
            const interval = setInterval(() => {
                //  console.log("TARGET", targetWidthRef.current);
                //console.log("renderedWidthRef", renderedWidthRef.current);
                const diff = targetWidthRef.current - renderedWidthRef.current;
                // console.log(diff);
                if (Math.abs(diff) < 0.5) {
                    renderedWidthRef.current = targetWidthRef.current;
                    setRenderedWidth(targetWidthRef.current);
                    return;
                }
                const newWidth = renderedWidthRef.current + diff * 0.4;

                renderedWidthRef.current = newWidth;
                setRenderedWidth(newWidth);
            }, 1000 / 60);
            return () => clearInterval(interval);
        }, []);

        // useEffect(() => {
        //    if (!isTouchDevice) return;
        //    if (hovering) {
        //       console.log("add thing", hovering);

        //       const clickOff = (event) => {
        //          console.log(event.target);
        //          if (event.target === hitCircleRef.current && hovering) {
        //             console.log("ENTER DETAILS");
        //          } else {
        //             setHovering(false);
        //          }
        //       };

        //       const timer = setTimeout(() => {
        //          // document.addEventListener("click", clickOff);
        //          document.addEventListener("touchstart", clickOff);
        //       }, 10);
        //       // document.addEventListener("click", clickOff);
        //       // document.addEventListener("touchstart", clickOff);
        //       return () => {
        //          clearTimeout(timer);
        //          document.removeEventListener("touchstart", clickOff);
        //          //  document.removeEventListener("click", clickOff);
        //       };
        //    }
        // }, [hovering]);

        const handleTouchStart = (event) => {
            setIsTouchDevice(true);
            //  if (!isTouchDevice) return;

            onSelected();
        };

        const handleMouseClick = (event) => {};

        const handleMouseOver = () => {
            setIsTouchDevice(false);
            onSelected(true);
            // if (isTouchDevice) return;
            // setHovering(true);
        };

        const handleMouseOut = () => {
            if (isTouchDevice) return;
            onUnselect();
        };

        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                onFocusEnter();
            }
        };

        // console.log(renderedWidth);

        const svgWidth = highlightWidth + 4; //account for border
        const offsetLeft = `-${svgWidth / 2}px`;

        let hitBoxRadius = svgWidth * 0.15;
        if (selected) {
            hitBoxRadius = svgWidth * 0.4;
        }
        // if (selected && isTouchDevice) {
        //     hitBoxRadius = svgWidth * 0.4;
        // }
        // if (selected && !isTouchDevice) {
        //     hitBoxRadius = svgWidth * 0.5;
        // }

        // const hitBoxRadius =
        //     selected && isTouchDevice ? svgWidth * 0.4 : svgWidth * 0.15;

        //  const hitBoxRadius = selected ? svgWidth * 0.4 : svgWidth * 0.15;

        return (
            <div
                className={`${styles.Ring} ${selected ? styles.hovering : ""}`}
                style={{ top, left }}
            >
                {editMode && (
                    <div
                        style={{
                            position: "absolute",
                            color: "white",
                            width: "200px",
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        {text}
                    </div>
                )}
                <div
                    className={styles.outline}
                    style={{
                        position: "absolute",
                        left: offsetLeft,
                        top: offsetLeft,
                    }}
                >
                    <svg
                        width={svgWidth}
                        height={svgWidth}
                        viewBox={`0 0 ${svgWidth} ${svgWidth}`}
                    >
                        <circle
                            tabIndex={"0"}
                            onKeyDown={handleKeyDown}
                            onFocus={handleMouseOver}
                            cx={svgWidth / 2}
                            cy={svgWidth / 2}
                            r={renderedWidth / 2}
                            stroke="black"
                            strokeWidth="4"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>

                <div
                    className={styles.hitbox}
                    style={{
                        position: "absolute",
                        left: offsetLeft,
                        top: offsetLeft,
                        height: svgWidth,
                        width: svgWidth,
                    }}
                >
                    <svg
                        width={svgWidth}
                        height={svgWidth}
                        viewBox={`0 0 ${svgWidth} ${svgWidth}`}
                        style={{
                            ...(adminSelected && editMode
                                ? { outline: "3px solid green" }
                                : {}),
                        }}
                    >
                        <circle
                            // ref={hitCircleRef}
                            cx={svgWidth / 2}
                            cy={svgWidth / 2}
                            r={hitBoxRadius}
                            fill="rgba(255,255,0,0)"
                            // onClick={handleMouseClick}
                            ref={ref}
                            onTouchStart={handleTouchStart}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        />
                    </svg>
                    <div
                        style={{
                            fontSize:
                                Math.round(highlightWidth * 0.1565 * 10) / 10 +
                                "px",
                            width: "95%",
                        }}
                        className={styles.text}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>

                {/* <div className={styles.outline} style={{ width: newWidth + "px", height: newWidth + "px" }}></div> */}
            </div>
        );
    }
);

Ring.displayName = "Ring";

export default Ring;
