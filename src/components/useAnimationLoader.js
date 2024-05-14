import React, { useEffect, useRef, useState } from "react";
import { animationsObject } from "../animations/androidtablet";

export default function useAnimationLoader() {
   const [isLoading, setIsLoading] = useState(true);
   const animations = useRef([]);

   useEffect(() => {
      async function fetchAllAnimations(animationObj) {
         const res = await Promise.all(
            Object.values(animationObj)
               .map((animations) => animations.map((animation) => animation.link))
               .flat(1)
               .filter((link) => link.includes("json"))
               .map((json) => fetch(json).then((resp) => resp.json()))
         );

         animations.current = await res;
         setIsLoading(false);
      }

      fetchAllAnimations(animationsObject);
   }, []);

   return { isLoading };
}
