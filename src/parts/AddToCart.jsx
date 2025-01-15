import Quantity from "./Quantity.jsx";
import styles from "./AddToCart.module.css";
import SizeSelection from "./SizeSelection.jsx";
import cartstatic from "../assets/Assets/Assets/Deliverables/Nav Icons/Static/Web/Fatima-Web-Icons-Cart.svg";
import cartanimate from "../assets/Assets/Assets/Deliverables/Nav Icons/Gifs/Deliverables/Cart.gif";
import { useState } from "react";
function AddToCart() {

  const [isHover, setIsHover] = useState(false);

  return <>

    <div className={styles.container}>
      <Quantity></Quantity>
      <button className={styles.addtocart} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <p>Add to </p>
        <img src={isHover ? cartanimate : cartstatic} className={styles.img} />
      </button>

    </div>
  </>
}
export default AddToCart;
