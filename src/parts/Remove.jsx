import styles from "./Remove.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Remove({ itemKey }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    // Retrieve cart from localStorage safely
    let cart = JSON.parse(localStorage.getItem("userCart")) || { items: [] };

    // Filter out the item with the given itemKey
    cart.items = cart.items.filter(item => item.itemId !== itemKey);

    // Save the updated cart back to localStorage
    localStorage.setItem("userCart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <>
      <div className={styles.container}>
        {/* <button onClick={handleClick} className={styles.btn}>Remove</button> */}
        <button onClick={handleClick} className={styles.btn}>Remove</button>

      </div>
    </>
  );
}

export default Remove;

