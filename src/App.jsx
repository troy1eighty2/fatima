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

  return (
    <>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route index element={<HomeLeft></HomeLeft>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/shop/:id/:name" element={<Product updateCart={updateCart}></Product>}></Route>
          <Route path="/faq" element={<Faq></Faq>}></Route>

          <Route path="/cart" element={<Cart initialCart={cartItems} mergeCart={mergeCart} removeItem={removeItem}></Cart>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
