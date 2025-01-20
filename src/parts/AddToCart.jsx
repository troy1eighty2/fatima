import Quantity from "./Quantity.jsx";
import styles from "./AddToCart.module.css";
import { Link } from "react-router-dom";
import SizeSelection from "./SizeSelection.jsx";
import cartstatic from "../assets/Assets/Assets/Deliverables/Nav Icons/Static/Web/Fatima-Web-Icons-Cart.svg";
import cartanimate from "../assets/Assets/Assets/Deliverables/Nav Icons/Gifs/Deliverables/Cart.gif";
import { useState } from "react";
function AddToCart({ itemId, selected }) {

  const [isHover, setIsHover] = useState(false);
  const [count, setCount] = useState(1)
  const handleAddToCart = () => {
    console.log(itemId)
    console.log(count)
    console.log(selected)
    const userCart = JSON.parse(localStorage.getItem("userCart"));
    userCart.items.push({
      id: itemId,
      quantity: count,
      size: selected
    });
    localStorage.setItem("userCart", JSON.stringify(userCart));
  }


  return <>

    <div className={styles.container}>
      <Quantity count={count} setCount={setCount}></Quantity>

      <Link to="/cart" className={styles.addtocart} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} disabled={selected === null} onClick={() => handleAddToCart()}>
        <p>Add to </p>
        <img src={isHover ? cartanimate : cartstatic} className={styles.img} />
      </Link>
      {/* <button className={styles.addtocart} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} disabled={selected === null} onClick={() => handleAddToCart()}> */}
      {/*   <p>Add to </p> */}
      {/*   <img src={isHover ? cartanimate : cartstatic} className={styles.img} /> */}
      {/* </button> */}

    </div >
  </>
}
export default AddToCart;
