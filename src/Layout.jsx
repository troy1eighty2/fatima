import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import styles from "./App.module.css";
import HomeRight from "./pages/HomeRight.jsx";
import Shop from "./pages/Shop.jsx";

function Layout() {
  const location = useLocation();
  const isRightPage = location.pathname === "/cart";
  return <>
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.contentleft}>
          {isRightPage ? <Shop></Shop> : <Outlet></Outlet>}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.navbar}>
          <NavBar></NavBar>
        </div>
        <div className={styles.contentright}>
          {isRightPage ? <Outlet ></Outlet> : <HomeRight></HomeRight>}
        </div>
      </div>
    </div>
  </>
};

export default Layout;
