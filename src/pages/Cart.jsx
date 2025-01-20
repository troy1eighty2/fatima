import styles from "./Cart.module.css"
import FooterRight from "../components/FooterRight";
import CartEmpty from "../parts/CartEmpty.jsx"
import CartFull from "../parts/CartFull.jsx"
import testdata from "../cart.json";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

// cart is string
function Cart({ cart }) {

  const [content, setContent] = useState(<CartEmpty></CartEmpty>)
  const [items, setItems] = useState([])
  useEffect(() => {
    let cartJSONParsed = []
    if (cart) {
      cartJSONParsed = JSON.parse(cart)
    }
    else {
      cartJSONParsed = null
    }
    if (cartJSONParsed && cartJSONParsed.items && cartJSONParsed.items.length !== 0) {
      setContent(<CartFull productsArray={cartJSONParsed.items} />)
      setItems(cartJSONParsed.items)
    } else {
      setContent(<CartEmpty></CartEmpty>);

    }
  }, [cart])
  return <>

    <div className={styles.container}>
      {content}
    </div>
    <FooterRight></FooterRight>
  </>
}

export default Cart;
