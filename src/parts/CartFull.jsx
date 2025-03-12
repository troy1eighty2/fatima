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
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  // console.log(cartItems)

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
    "width": 290
  }
  return (
    <div className={styles.container}>
      <div className={styles.second}>
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
        <div className={styles.list}>
          {cartItems.map((item) => (
            <CartItem product={item} key={item.cartItemID} removeItem={removeItem} add={add} subtract={subtract} />
          ))}
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.subtotal}>
          <p className={styles.title}>Subtotal</p>
          <p>{`$${(cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2)}`}</p>
          <div className={styles.checkoutcontainer}>
            <div className={styles.paypalButtonstyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <PayPalButtons style={buttonInit} createOrder={createOrder} onApprove={onApprove}></PayPalButtons>
            </div>
            <motion.img className={styles.clown} initial={{ width: "60%", translateY: "0%" }} animate={isHovered ? { translateY: "-80%", opacity: 1 } : { translateY: "0%", opacity: 1 }} src={clown} ></motion.img>
            <p className={styles.disclaimer}>
              *Taxes and shipping calculated at checkout*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartFull;

