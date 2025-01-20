import styles from "./Cart.module.css"
import FooterRight from "../components/FooterRight";
import CartEmpty from "../parts/CartEmpty.jsx"
import CartFull from "../parts/CartFull.jsx"
import testdata from "../cart.json";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

// cart is string
function Cart({ cart }) {

  const [items, setItems] = useState([])
  useEffect(() => {
    try {
      const cartJSONParsed = cart ? JSON.parse(cart) : { items: [] };
      setItems(cartJSONParsed.items);
    } catch (error) {
      console.error("Error parsing cart:", error);
      setItems([]);
    }
  }, [cart]);

  return <>

    <div className={styles.container}>
      {items.length > 0 ? <CartFull productsArray={items} /> : <CartEmpty />}
    </div>
    <FooterRight></FooterRight>
  </>
}

export default Cart;
