import NavBar from "./components/Navbar.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx"
import Product from "./parts/Product.jsx";
import HomeLeft from "./pages/HomeLeft.jsx";
import HomeRight from "./pages/HomeRight.jsx";

import styles from "./App.module.css";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CheckOut from "./pages/CheckOut.jsx";
import Cart from "./pages/Cart.jsx";
// random coment
function App() {
  // console.log(cartItems)
  // localStorage.clear();
  if (!localStorage.getItem("userCart")) {
    const newCart = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      items: []
    };
    localStorage.setItem("userCart", JSON.stringify(newCart))

  }
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("userCart"))?.items
  );
  const [leftContent, setLeftContent] = useState(<HomeLeft></HomeLeft>);
  const [rightContent, setRightContent] = useState(<HomeRight></HomeRight>);
  const [onContact, setOnContact] = useState(false);

  const location = useLocation();
  const updateCart = (newItem) => {
    const updatedCart = [...cartItems, newItem];
    setCartItems(updatedCart);
    localStorage.setItem("userCart", JSON.stringify({ items: updatedCart }));
  };
  const mergeCart = (newCart) => {
    const updatedCart = newCart;
    localStorage.setItem("userCart", JSON.stringify({ items: updatedCart }));
  };
  const removeItem = (itemKey) => {
    console.log(cartItems)
    console.log(itemKey)
    const updatedCart = cartItems.filter((item) => item.itemId !== itemKey);
    setCartItems(updatedCart);
    localStorage.setItem("userCart", JSON.stringify({ items: updatedCart }));
  }

  // useEffect(() => {
  // localStorage.clear();
  // switch (location.pathname) {
  //   case "/":
  //     setLeftContent(<HomeLeft></HomeLeft>);
  //     setRightContent(<HomeRight ></HomeRight>);
  //     break;
  //   case "/contact":
  //     setLeftContent(<Contact></Contact>);
  //     break;
  //   case "/shop":
  //     setLeftContent(<Shop updateCart={updateCart}></Shop>);
  //
  //     break;
  //   case "/shop/:id/:name":
  //     setLeftContent(<Product updateCart={updateCart}></Product>);
  //     break;
  // case "/cart":
  //   setRightContent(<Cart initialCart={cartItems} updateCart={updateCart} removeItem={removeItem}></Cart>);
  //   setRightContent(null);
  // break;
  // case "/faq":
  //   setLeftContent(<Faq></Faq>);
  //   break;
  // case "/homeright":
  //   setRightContent(<HomeRight></HomeRight>);
  //   break;
  // }
  // }, [location]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.contentleft}>
            <Routes>
              <Route path="/" element={<HomeLeft></HomeLeft>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
              <Route path="/shop" element={<Shop></Shop>}></Route>
              <Route path="/shop/:id/:name" element={<Product updateCart={updateCart}></Product>}></Route>
              <Route path="/cart" element={leftContent}></Route>
              <Route path="/faq" element={<Faq></Faq>}></Route>
              <Route path="/homeright" element={leftContent}></Route>
            </Routes>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.navbar}>
            <NavBar></NavBar>
          </div>
          <div className={styles.contentright}>
            <Routes>
              <Route path="/" element={<HomeRight content={onContact}></HomeRight>}></Route>
              <Route path="/contact" element={rightContent}></Route>
              <Route path="/shop" element={rightContent}></Route>
              <Route path="/shop/:id/:name" element={rightContent}></Route>
              <Route path="/cart" element={<Cart initialCart={cartItems} mergeCart={mergeCart} removeItem={removeItem}></Cart>}></Route>
              <Route path="/faq" element={rightContent}></Route>
              <Route path="/homeright" element={rightContent}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
