import Quantity from "./Quantity.jsx";
import styles from "./AddToCart.module.css";
import cartstatic from "../assets/Assets/Assets/Deliverables/Nav Icons/Static/Web/Fatima-Web-Icons-Cart.svg";
import cartanimate from "../assets/Assets/Assets/Deliverables/Nav Icons/Gifs/Deliverables/Cart.gif";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function AddToCart({ cartItems, selected, updateCart, productID }) {
  const [isHover, setIsHover] = useState(false);
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {

    if (!product || !selected) return; // Prevent adding if product is not loaded or size is not selected

    const userCartItem = {
      name: product.name,
      productID: productID,
      cartItemID: uuidv4(), // Generates a new ID for each entry
      image: product.pictures[0],
      price: product.price,
      quantity: count,
      size: selected,
    };

    updateCart(userCartItem);
  }
  useEffect(() => {
    if (!productID) return; // Prevent API call if productID is missing

    axios
      .get(`${import.meta.env.VITE_API_URL}/shop/${productID}`)
      .then((response) => {
        setProduct(response.data); // Store product data separately
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.quantity}>
        <Quantity count={count} setCount={setCount} />
      </div>

      <button
        className={styles.addtocart}
        onClick={() => handleClick()}
        onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}
      >
        <p>Add to </p>
        <img src={isHover ? cartanimate : cartstatic} className={styles.img} />
      </button>
    </div>
  );
}

export default AddToCart;

