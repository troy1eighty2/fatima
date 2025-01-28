import styles from "./CartFull.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem.jsx";
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forward.png";
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forwardblack.png";

function CartFull({ cart, removeItem }) {
  const [hover, setHover] = useState(false);
  // console.log(cart)

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={styles.button}
        >
          <Link to="/homeright">
            <img src={hover ? buttonhover : button} className={styles.button} />
          </Link>
        </button>
      </div>
      <div className={styles.second}>
        {cart.map((item) => (
          <CartItem product={item} key={item.itemId} removeItem={removeItem} />
        ))}
      </div>
      <div className={styles.third}>
        <div className={styles.checkoutcontainer}>
          <button className={styles.checkout}>Checkout</button>
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

