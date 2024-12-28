import styles from "./Cart.module.css";
import FooterRight from "../components/FooterRight";
import jawn from "../assets/Assets/Assets/temp/jawn.png";
import jawn1 from "../assets/Assets/Assets/temp/jawn1.png";
import CartEmpty from "../parts/CartEmpty.jsx"
function Cart() {
  const items = [
    // jawn,
    // jawn1,
    // jawn,
    // jawn1,
    // jawn,
    // jawn1,
    // jawn,
  ]
  return <>
    <div className={styles.container}>
      <div className={styles.container}>
        {items.length == 0 || items.length == null ? <CartEmpty></CartEmpty> : "yo"}
      </div>
    </div>
    <FooterRight></FooterRight>
  </>
}

export default Cart;
