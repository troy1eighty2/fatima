import NavBar from "./components/Navbar.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx"
import Product from "./parts/Product.jsx";
import HomeLeft from "./pages/HomeLeft.jsx";
import HomeRight from "./pages/HomeRight.jsx";
import Layout from "./Layout.jsx";

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
  const [leftContent, setLeftContent] = useState(<HomeLeft></HomeLeft>);
  const [rightContent, setRightContent] = useState(<HomeRight></HomeRight>);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("userCart"))?.items
  );

  const updateCart = (newItem) => {
    const updatedCart = [...cartItems, newItem];
    setCartItems(updatedCart);
    localStorage.setItem("userCart", JSON.stringify({ items: updatedCart }));
  };
  const mergeCart = (newCart) => {
    const updatedCart = newCart;
    setCartItems(updatedCart);
    localStorage.setItem("userCart", JSON.stringify({ items: updatedCart }));
  };
  const removeItem = (itemKey) => {
    console.log(cartItems)
    console.log(itemKey)
    const updatedCart = cartItems.filter((item) => item.itemId !== itemKey);
    setCartItems(updatedCart);
    localStorage.setItem("userCart", JSON.stringify({ items: updatedCart }));
  }
  const location = useLocation().pathname;
  useEffect(() => {
    switch (location) {
      case "/":
        setLeftContent(<HomeLeft></HomeLeft>);
        setRightContent(<HomeRight></HomeRight>);
        break;
      case "/homeright":
        setRightContent(<HomeRight></HomeRight>);
        break;
      case "/contact":
        setLeftContent(<Contact></Contact>);
        break;
      case "/shop":
        setLeftContent(<Shop></Shop>);
        break;
      case "/cart":
        setLeftContent(<Shop></Shop>);
        setRightContent(<Cart initialCart={cartItems} mergeCart={mergeCart} removeItem={removeItem}></Cart>);
        break;
      default:
        setLeftContent(<Product updateCart={updateCart}></Product>);
        break;

    }
  }, [location])
  return (
    <>
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
  )
}

export default App
