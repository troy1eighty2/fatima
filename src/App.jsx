import NavBar from "./components/Navbar";
import FooterLeft from "./components/FooterLeft";
import FooterRight from "./components/FooterRight";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
import styles from "./App.module.css";

import { useState } from "react";
function App() {

  const [leftContent, setLeftContent] = useState();
  const [rightContent, setRightContent] = useState();
  const [homeContent, setHomeContent] = useState();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.contentleft}><ContentLeft></ContentLeft></div>
          <div className={styles.footerleft}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.navbar}></div>
          <div className={styles.contentright}></div>
          <div className={styles.footerright}></div>
        </div>
      </div>
    </>
  )
}

export default App
