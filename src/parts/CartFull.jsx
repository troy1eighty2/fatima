import styles from "./CartFull.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem.jsx";
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forward.png";
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forwardblack.png";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { PayPalButtons } from "@paypal/react-paypal-js";

function CartFull({ cartItems, removeItem, add, subtract }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)
  // console.log(cart)

  const handleCheckout = () => {
    const orderID = uuidv4()

  }
  //paypal
  const createOrder = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/PayPal/create-paypal-order`, {})

    } catch (error) {
      console.log(error)

    }

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
          {/* button */}
          <button className={styles.checkout} onClick={handleCheckout}>Checkout {
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalPrice)}</button>
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

