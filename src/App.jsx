import NavBar from "./components/Navbar.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx"
import Product from "./parts/Product.jsx";
import HomeLeft from "./pages/HomeLeft.jsx";
import HomeRight from "./pages/HomeRight.jsx";
import AdminLeft from "./pages/admin/AdminLeft.jsx";
import AdminRight from "./pages/admin/AdminRight.jsx";
import Layout from "./Layout.jsx";

import styles from "./App.module.css";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CheckOut from "./pages/CheckOut.jsx";
import Cart from "./pages/Cart.jsx";
// random coment
function App() {
  // localStorage.clear();
  if (!localStorage.getItem("userCart")) {
    const newCart = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      items: []
    };
    localStorage.setItem("userCart", JSON.stringify(newCart))

  }
  const location = useLocation().pathname;
  const url = location.split("/")
  const [leftContent, setLeftContent] = useState(<HomeLeft></HomeLeft>);
  const [rightContent, setRightContent] = useState(<HomeRight></HomeRight>);
  const [productID, setProductID] = useState(url.length < 3 ? null : url[2])
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("userCart"))?.items
  );

  const updateCart = (newItem) => {
    // newItem is object
    const latestCart = JSON.parse(localStorage.getItem("userCart"));
    const item_exists = latestCart.items.find((item) => item.productID === newItem.productID && item.size === newItem.size)
    let updatedCart;
    if (item_exists) {
      // produces items array
      updatedCart = latestCart.items.map((item) =>
        item.productID === newItem.productID && item.size === newItem.size ? { ...item, quantity: item.quantity + newItem.quantity } : item
      )
      // console.log(newLatestCart)
    }
    else {
      updatedCart = [...latestCart.items, newItem];
    }
    localStorage.setItem("userCart", JSON.stringify({
      ...latestCart, // Parse it first
      items: updatedCart // Update only the items
    }));
    setCartItems(updatedCart);
    navigate("/cart");

  };
  const removeItem = (itemKey) => {
    const latestCart = JSON.parse(localStorage.getItem("userCart"));
    const updatedCart = latestCart.items.filter((item) => item.cartItemID !== itemKey);
    localStorage.setItem("userCart", JSON.stringify({
      ...JSON.parse(localStorage.getItem("userCart")), // Parse it first
      items: updatedCart // Update only the items
    }));
    setCartItems([...updatedCart]);
    navigate("/cart");
  }
  const add = (cartItemID) => {
    const latestCart = JSON.parse(localStorage.getItem("userCart"))

    const updatedCart = latestCart.items.map((item) =>
      item.cartItemID === cartItemID ? { ...item, quantity: item.quantity + 1 } : item
    )
    localStorage.setItem("userCart", JSON.stringify({
      ...JSON.parse(localStorage.getItem("userCart")), // Parse it first
      items: updatedCart // Update only the items
    }));
    setCartItems([...updatedCart]);
    navigate("/cart");
  }
  const subtract = (cartItemID) => {
    const latestCart = JSON.parse(localStorage.getItem("userCart"))
    // const item_exists = latestCart.items.find((item) => item.productID === newItem.productID && item.size === newItem.size)
    const item = latestCart.items.find((item) => item.cartItemID === cartItemID)
    if (item.quantity < 2) {
      return
    }

    const updatedCart = latestCart.items.map((item) =>
      item.cartItemID === cartItemID ? { ...item, quantity: item.quantity - 1 } : item
    )
    localStorage.setItem("userCart", JSON.stringify({
      ...JSON.parse(localStorage.getItem("userCart")), // Parse it first
      items: updatedCart // Update only the items
    }));
    setCartItems([...updatedCart]);
    navigate("/cart");
  }
  useEffect(() => {
    // console.log(url)
    setProductID(url.length < 3 ? null : url[2]);
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
        setRightContent(<Cart cartItems={cartItems} removeItem={removeItem} add={add} subtract={subtract} ></Cart>);
        break;
      case "/faq":
        setLeftContent(<Faq></Faq>);
        break;
      case "/admin":
        setLeftContent(<AdminLeft password={password} setPassword={setPassword}></AdminLeft>);
        setRightContent(<AdminRight password={password} setPassword={setPassword}></AdminRight>);
        break;
      default:
        if (url[1] === "shop" && url.length >= 4) {
          const id = url[2];
          const product = url[3];
          setLeftContent(<Product cartItems={cartItems} updateCart={updateCart} productID={productID} setProductID={setProductID}></Product>);
        } else {
          setLeftContent(<HomeLeft></HomeLeft>);
          setRightContent(<HomeRight></HomeRight>);
        }

        break;

    }
  }, [location, cartItems, password])
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
            <NavBar cartItems={cartItems}></NavBar>
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
