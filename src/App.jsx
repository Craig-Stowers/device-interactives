import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Animation from "./components/Animation";

function App() {
   const [removeWrapper, setRemoveWrapper] = useState(getWrapperValue());

   // Helper function to parse query and return 'wrapper' parameter
   function getWrapperValue() {
      const query = new URLSearchParams(window.location.search);
      return query.get("removewrapper") === "true"; // Assuming 'wrapper' is either 'true' or not set
   }

   useEffect(() => {
      // Handles URL change from browser navigation or manual change
      const handleLocationChange = () => {
         setRemoveWrapper(getWrapperValue());
      };

      window.addEventListener("popstate", handleLocationChange);
      window.addEventListener("load", handleLocationChange); // Handle initial load

      return () => {
         window.removeEventListener("popstate", handleLocationChange);
         window.removeEventListener("load", handleLocationChange);
      };
   }, []);

   console.log("removeWrapper", removeWrapper);

   return (
      <div className={styles.app}>
         <div className={styles.fullScreen}>
            {!removeWrapper && <div className={styles.title}>title here</div>}
            <div className={styles.content}>
               <div className={styles.animation}>
                  <Animation />
               </div>

               <div className={styles.panel}>panel here</div>
            </div>

            <div className={styles.footer}>
               footer here{" "}
               <a href="?removewrapper=true" target="_blank">
                  FULL SCREEN
               </a>
            </div>
         </div>
      </div>
   );
}

export default App;
