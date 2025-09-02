import styles from "./CartFull.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem.jsx";
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forward.png";
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forwardblack.png";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function CartFull({ cartItems, removeItem, add, subtract, clearCart }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

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
        <div className={styles.list}>
          {cartItems.map((item) => (
            <CartItem product={item} key={item.cartItemID} removeItem={removeItem} add={add} subtract={subtract} />
          ))}
        </div>
      </div>
      <div className={styles.third}>
      </div>
    </div>
  );
}

export default CartFull;

