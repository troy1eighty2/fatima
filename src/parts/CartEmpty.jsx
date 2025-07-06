import styles from "./CartEmpty.module.css"
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forward.png"
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forwardblack.png"
import { useState } from "react"
import { Link } from "react-router-dom"
function CartEmpty() {

  const [hover, setHover] = useState(false)

  return <>
    <div className={styles.container}>
      <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.first}>
        <Link to="/homeright">
          <img src={hover ? buttonhover : button} className={styles.button} />
        </Link>
      </button>
      <div className={styles.second}>
        <p className={styles.header}>Your Cart Is Empty.</p>
        <Link to="/shop">
          <button className={styles.continueshopping}>
            <p>Continue Shopping</p>
          </button>
        </Link>
      </div>
    </div>
  </>
}

export default CartEmpty;
