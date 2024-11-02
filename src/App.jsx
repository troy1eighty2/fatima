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
          <ContentLeft className={styles.contentleft}>{ }</ContentLeft>
          <FooterLeft className={styles.bottomleft}></FooterLeft>
        </div>
        <div className={styles.right}>
          <NavBar className={styles.navbar}></NavBar>
          <ContentRight className={styles.contentright}></ContentRight>
          <FooterRight className={styles.bottomright}></FooterRight>
        </div>
      </div>
    </>
  )
}

export default App
