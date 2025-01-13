import styles from "./Product.module.css";
import FooterLeft from "../components/FooterLeft";
import { Link } from "react-router-dom";
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Back-26.svg"
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Back-27.svg"
import { useState } from "react";
function Product() {
  const [hover, setHover] = useState(false)
  return <>
    <div className={styles.container}>
      <div className={styles.first}>
        <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.button}>
          <Link to="/shop">
            <img src={hover ? buttonhover : button} className={styles.button} />
          </Link>
        </button>
      </div>
      <div className={styles.row}>
        <div className={styles.second}>
        </div>
        <div className={styles.third}>
        </div>
      </div>
    </div>
    {/*     <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.button}> */}
    {/*       <Link to="/homeright"> */}
    {/*         <img src={hover ? buttonhover : button} className={styles.button} /> */}
    {/*       </Link> */}
    {/*     </button> */}
    {/*   </div> */}
    {/*   <div className={styles.second}> */}
    {/*     {products.map((item, index) => <div className={styles.product} key={item.name}><CartItem product={item}></CartItem></div>)} */}
    {/*   </div> */}
    {/*   <div className={styles.third}> */}
    {/*     <button className={styles.checkout}>Checkout</button> */}
    {/*     <p className={styles.disclaimer}>*Taxes and shipping calculated at checkout*</p> */}
    {/*     <p className={styles.disclaimer}>*All Sales Final No Returns*</p> */}
    <FooterLeft></FooterLeft>


  </>
}

export default Product;
