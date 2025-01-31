import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/Navbar.jsx";
import styles from "./App.module.css";
import HomeRight from "./pages/HomeRight.jsx";
import Shop from "./pages/Shop.jsx";

function Layout({ leftContent, rightContent }) {


  return <>
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.contentleft}>
          {leftContent}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.navbar}>
          <NavBar></NavBar>
        </div>
        <div className={styles.contentright}>
          {rightContent}

        </div>
      </div>
    </div>
  </>
};

export default Layout;
