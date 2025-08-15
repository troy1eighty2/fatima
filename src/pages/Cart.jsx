import styles from "./Cart.module.css";
import FooterRight from "../components/FooterRight";
import CartEmpty from "../parts/CartEmpty.jsx";
import CartFull from "../parts/CartFull.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import wrestler from "../assets/Assets/Assets/Deliverables/Illustrations/wwe.png"

function Cart({ cartItems, mergeCart, removeItem, add, subtract, clearCart, show_order_conf, setShowOrderConf}) {
  // console.log(cartItems)
  const [loading, setLoading] = useState(true)
  // const [updatedCart, setUpdatedCart] = useState(cartItems)


  // useEffect(() => {
    // console.log("Cart updated")
  // }, [cartItems, show_order_conf]);

  return (
    <>
      <div className={styles.container}>
        {cartItems.length > 0 ? (<CartFull cartItems={cartItems} removeItem={removeItem} add={add} subtract={subtract} clearCart={clearCart} />) : (<CartEmpty show_order_conf={show_order_conf} setShowOrderConf={setShowOrderConf}/>)}
      </div>
    </>
  );
}

export default Cart;

