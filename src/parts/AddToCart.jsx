import Quantity from "./Quantity.jsx";
import styles from "./AddToCart.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import SizeSelection from "./SizeSelection.jsx";
import cartstatic from "../assets/Assets/Assets/Deliverables/Nav Icons/Static/Web/Fatima-Web-Icons-Cart.svg";
import cartanimate from "../assets/Assets/Assets/Deliverables/Nav Icons/Gifs/Deliverables/Cart.gif";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
function AddToCart({ selected, updateCart, productID }) {

  const [isHover, setIsHover] = useState(false);
  const [count, setCount] = useState(1)
  const [userCartItem, setUserCartItem] = useState(null)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/shop/${productID}`)
      .then((response) => {
        const name = response.data.name
        const picture = response.data.pictures[0]
        const price = response.data.price
        setUserCartItem({
          name: name,
          productID: productID,
          cartItemID: uuidv4(),
          image: picture,
          price: price,
          quantity: count,
          size: selected
        })

      })
      .catch((error) => {
        console.log(error)
      })

  }, [selected, count])
  return <>

    <div className={styles.container}>
      <Quantity count={count} setCount={setCount}></Quantity>

      <button className={styles.addtocart} onClick={(e) => {
        updateCart(userCartItem)
      }}>
        <p>Add to </p>
        <img src={isHover ? cartanimate : cartstatic} className={styles.img} />
      </button>

    </div >
  </>
}
export default AddToCart;
