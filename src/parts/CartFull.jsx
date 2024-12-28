import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forward.png"
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forwardblack.png"
import styles from "./CartFull.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"
function CartFull() {
  const [hover, setHover] = useState(false)
  return <>
    <div className={styles.container}>
      <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.first}>
        <Link to="/">
          <img src={hover ? buttonhover : button} className={styles.button} />
        </Link>
      </button>
      <div className={styles.second}>
      </div>
    </div>

  </>
}
export default CartFull;
