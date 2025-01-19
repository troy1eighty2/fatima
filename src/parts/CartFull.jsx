import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forward.png"
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/forwardblack.png"
import styles from "./CartFull.module.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CartItem from "./CartItem.jsx"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"
function CartFull({ productsArray }) {

  const [hover, setHover] = useState(false)
  const [productDetails, setProductDetails] = useState([])
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const responses = await Promise.all(
          productsArray.map((product) =>
            axios.get(`${import.meta.env.VITE_API_URL}/shop/${product.id}`)
          )
        );
        setProductDetails(responses)
        console.log(responses)

      } catch (error) {
        console.log(error)

      }
    }
    fetchProductDetails()



    // needs to auto refresh on cart change
  }, [productsArray])
  return <>

    <div className={styles.container}>
      <div className={styles.first}>
        <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.button}>
          <Link to="/homeright">
            <img src={hover ? buttonhover : button} className={styles.button} />
          </Link>
        </button>
      </div>
      <div className={styles.second}>
        {productDetails.map((item, index) => <div className={styles.product} key={uuidv4()}><CartItem product={item}></CartItem></div>)}
      </div>
      <div className={styles.grow}>
      </div>
      <div className={styles.third}>
        <div className={styles.checkoutcontainer}>
          <button className={styles.checkout}>Checkout</button>
          <p className={styles.disclaimer}>*Taxes and shipping calculated at checkout*</p>
          <p className={styles.disclaimer}>*All Sales Final No Returns*</p>
        </div>
      </div>
    </div>

  </>
}
export default CartFull;
