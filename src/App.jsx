import NavBar from "./components/Navbar.jsx";
import FooterLeft from "./components/FooterLeft.jsx";
import FooterRight from "./components/FooterRight.jsx";
import ContentLeft from "./components/ContentLeft.jsx";
import ContentRight from "./components/ContentRight.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx"
import Product from "./pages/Product.jsx";
import HomeLeft from "./pages/HomeLeft.jsx";
import HomeRight from "./pages/HomeRight.jsx";

import styles from "./App.module.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut.jsx";
import Cart from "./pages/Cart.jsx";
function App() {

  const [leftContent, setLeftContent] = useState();
  const [rightContent, setRightContent] = useState();
  const [homeContent, setHomeContent] = useState();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.contentleft}>
            <Routes>
              <Route path="/" element={<HomeLeft></HomeLeft>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
              <Route path="/shop" element={<Shop></Shop>}></Route>
              <Route path="/shop/:productId" element={<Product></Product>}></Route>
              <Route path="/faq" element={<Faq></Faq>}></Route>
            </Routes>
          </div>
          <div className={styles.footerleft}>
            <FooterLeft></FooterLeft>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.navbar}>
            <NavBar></NavBar>
          </div>
          <div className={styles.contentright}>
            <Routes>
              <Route path="/" element={<HomeRight></HomeRight>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
            </Routes>
          </div>
          <div className={styles.footerright}>
            <FooterRight></FooterRight>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
