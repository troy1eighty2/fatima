import styles from "./Cart.module.css"
import FooterRight from "../components/FooterRight";
import jawn from "../assets/Assets/Assets/temp/jawn.png";
import jawn1 from "../assets/Assets/Assets/temp/jawn1.png";
import CartEmpty from "../parts/CartEmpty.jsx"
import CartFull from "../parts/CartFull.jsx"
import testdata from "../cart.json"
function Cart() {
  return <>
    <div className={styles.container}>
      {testdata.length == 0 || testdata.length == null ? <CartEmpty></CartEmpty> : <CartFull products={testdata}></CartFull>}
    </div>
    <FooterRight></FooterRight>
  </>
}

export default Cart;
