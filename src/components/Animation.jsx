import React, { useEffect } from "react";
import useAnimationLoader from "./useAnimationLoader";
import Lottie from "lottie-react";

const animationUrls = [
   "/animations/headphones.json",
   "/animations/homescreen.json",
   "/animations/test2.json",
   "/animations/imac.json",
];

export default function Animation() {
   //const { isLoading } = useAnimationLoader();
   const [grow, setGrow] = React.useState(false);
   const [animationData, setAnimationData] = React.useState(null);
   const [loading, setLoading] = React.useState(true);

   const [currAnimationIndex, setCurrAnimationIndex] = React.useState(0);

   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;

      setLoading(true);

      fetch(animationUrls[currAnimationIndex])
         .then((response) => response.json())
         .then((data) => {
            setAnimationData(data);
            setLoading(false);
         })
         .catch((error) => console.error("Failed to load animation", error));

      return () => controller.abort();
   }, [currAnimationIndex]);

   const nextAnimation = () => {
      setCurrAnimationIndex((currAnimationIndex + 1) % animationUrls.length);
   };

   const handleGrow = () => {
      setGrow(!grow);
   };

   return (
      <div>
         <button onClick={nextAnimation}>TOGGLE</button>
         <button onClick={handleGrow}>grow</button>
         <div
            style={{ marginLeft: "100px", width: grow ? "800px" : "600px", height: "1080px", border: "1px solid red" }}
         >
            {!loading && <Lottie animationData={animationData} loop={true} />}
            {loading && <div>loading...</div>}
         </div>
      </div>
   );
}
