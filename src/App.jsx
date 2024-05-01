import styles from "./App.module.css";

import Animation from "./components/Animation";

function App() {
   return (
      <div className={styles.app}>
         <div className={styles.fullScreen}>
            <div className={styles.title}>title here</div>
            <div className={styles.content}>
               <div className={styles.animation}>
                  <Animation />
               </div>

               <div className={styles.panel}>panel here</div>
            </div>

            <div className={styles.footer}>footer here</div>
         </div>
      </div>
   );
}

export default App;
