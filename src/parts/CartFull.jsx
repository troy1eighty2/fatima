import styles from "./CartFull.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem.jsx";
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forward.png";
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forwardblack.png";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { motion } from "motion/react";
import clown from "../assets/Assets/Assets/Deliverables/Illustrations/clown.png"

function CartFull({ cartItems, removeItem, add, subtract, clearCart }) {
  const [hover, setHover] = useState(false);
  const [checkoutHover, setCheckoutHover] = useState(false);
  const navigate = useNavigate();

  //paypal
  const createOrder = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/PayPal/create-paypal-order`, cartItems)
      return response.data.orderID;
    } catch (error) {
      console.log(error)
    }
  }
  const onApprove = async (data) => {
    try {
      const onApproveResponse = await axios.post(`${import.meta.env.VITE_API_URL}/PayPal/capture-paypal-order`, data)
      const originalOrder = await axios.get(`${import.meta.env.VITE_API_URL}/PayPal/get-order/${onApproveResponse.data.id}`)
      console.log({ onApproveResponse: onApproveResponse.data, originalOrder: originalOrder.data })
      const addToDatabase = await axios.post(`${import.meta.env.VITE_API_URL}/order/post`, { onApproveResponse: onApproveResponse.data, originalOrder: originalOrder.data })
      return addToDatabase

    } catch (error) {
      console.log(error)
    }


  }
  const buttonInit = {
    "shape": "sharp",
    "layout": "vertical",
    "label": "checkout",
    "height": 50,
  }
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={styles.button}
          onClick={() => navigate("/homeright")}
        >
          <img src={hover ? buttonhover : button} className={styles.button} />
        </button>
      </div>
      <div className={styles.second}>
        {cartItems.map((item) => (
          <CartItem product={item} key={item.cartItemID} removeItem={removeItem} add={add} subtract={subtract} />
        ))}
      </div>
      <div className={styles.third}>
        <div className={styles.checkoutcontainer}>
          <div className={styles.paypalButtonstyle} onMouseEnter={() => setCheckoutHover(true)} onMouseLeave={() => setCheckoutHover(false)}>
            <PayPalButtons style={buttonInit} createOrder={createOrder} onApprove={onApprove}></PayPalButtons>
          </div>
          <motion.img className={styles.clown} src={clown} initial={{ opacity: "0" }} animate={checkoutHover ? { opacity: "1", width: "50%", translateY: "-80%" } : { opacity: "1", width: "1px", translateY: "0%" }}></motion.img>
          <p className={`${styles.disclaimer} ${styles.firstlinedisclaimer}`}>
            *Taxes and shipping calculated at checkout*
          </p>
          <p className={styles.disclaimer}>*All Sales Final No Returns*</p>
        </div>
      </div>
    </div>
  );
}

export default CartFull;

