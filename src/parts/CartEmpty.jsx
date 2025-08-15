import styles from "./CartEmpty.module.css"
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forward.png"
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forwardblack.png"
import ORDER_CONF from "../assets/Assets/Assets/Deliverables/Graphics Animation/Order-Conf.gif"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
function CartEmpty({show_order_conf, setShowOrderConf}) {

  const [hover, setHover] = useState(false)

  
  useEffect(()=>{
    setTimeout(() => {
      setShowOrderConf(false);
    }, 5000);

  }, [show_order_conf])

  return <>
    {
      show_order_conf ? 
      <div className={styles.OrderConf}>
        <img src={ORDER_CONF}/>
      </div>:
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
    }
  </>
}

export default CartEmpty;
