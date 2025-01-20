import Quantity from "./Quantity.jsx";
import styles from "./AddToCart.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import SizeSelection from "./SizeSelection.jsx";
import cartstatic from "../assets/Assets/Assets/Deliverables/Nav Icons/Static/Web/Fatima-Web-Icons-Cart.svg";
import cartanimate from "../assets/Assets/Assets/Deliverables/Nav Icons/Gifs/Deliverables/Cart.gif";
import { useState } from "react";
function AddToCart({ itemId, selected }) {

  const { id, name } = useParams();
  console.log(id)
  console.log(name)
  const [isHover, setIsHover] = useState(false);
  const [count, setCount] = useState(1)
  const handleAddToCart = () => {
    // console.log(itemId)
    // console.log(count)
    // console.log(selected)
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

      <Link to={`/shop/${id}/${name}`} className={styles.addtocart} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={() => handleAddToCart()}>
        <p>Add to </p>
        <img src={isHover ? cartanimate : cartstatic} className={styles.img} />
      </Link>

    </div >
  </>
}
export default AddToCart;
