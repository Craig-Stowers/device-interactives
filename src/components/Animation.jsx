import React, { useEffect } from "react";

import Lottie from "lottie-react";
import withSizeObserver from "../hoc/withSizeObserver";

const animationUrls = [
   "/animations/headphones.json",
   "/animations/homescreen.json",
   "/animations/test2.json",
   "/animations/imac.json",
];

const Animation = ({ size, settings }) => {
   //const { isLoading } = useAnimationLoader();

   const [animationData, setAnimationData] = React.useState(null);
   const [loading, setLoading] = React.useState(true);

   const link = settings.link.replace("./", "/");

   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;

      setLoading(true);

      fetch(link)
         .then((response) => response.json())
         .then((data) => {
            setAnimationData(data);
            setLoading(false);
         })
         .catch((error) => console.error("Failed to load animation", error));

      return () => controller.abort();
   }, [link]);

   const animationRatio = 800 / 1080;
   const containerRatio = size.width / size.height;

   let animationWidth;
   let animationHeight;
   let left = 0;
   let top = 0;

   if (containerRatio > animationRatio) {
      animationWidth = size.width;
      animationHeight = size.width / animationRatio;
      top = (size.height - animationHeight) / 2;
   } else {
      animationHeight = size.height;
      animationWidth = size.height * animationRatio;
   }

   console.log("animationHeight", animationHeight);
   console.log("animationWidth", animationWidth);

   return (
      <div
         style={{
            width: animationWidth + "px",
            height: animationHeight + "px",
            top: top + "px",
            left: left + "px",
            position: "absolute",
         }}
      >
         {!loading && <Lottie animationData={animationData} loop={true} />}
         {loading && <div>loading...</div>}
      </div>
   );
};

export default withSizeObserver(Animation);
