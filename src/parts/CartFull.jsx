import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forward.png"
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forwardblack.png"
import styles from "./CartFull.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import CartItem from "./CartItem.jsx"
function CartFull({ products }) {
  const [hover, setHover] = useState(false)
  return <>
    <div className={styles.container}>
      <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.first}>
        <Link to="/homeright">
          <img src={hover ? buttonhover : button} className={styles.button} />
        </Link>
      </button>
      <div className={styles.second}>
        {products.map((item, index) => <div className={styles.product} key={item.name}><CartItem product={item}></CartItem></div>)}
        {/* {products.map((item, index) => <p className={styles.product}>{item.name}</p>)} */}
      </div>
      <div className={styles.third}>
        <button className={styles.checkout}>Checkout</button>
        <p className={styles.disclaimer}>Taxes and shipping calculated at checkout
          *All Sales Final No Returns*</p>
      </div>
    </div>

  </>
}
export default CartFull;
