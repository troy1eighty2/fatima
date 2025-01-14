import styles from "./Cart.module.css"
import FooterRight from "../components/FooterRight";
import CartEmpty from "../parts/CartEmpty.jsx"
import CartFull from "../parts/CartFull.jsx"
import testdata from "../cart.json";
import { v4 as uuidv4 } from 'uuid';
function Cart() {
  return <>
    <div className={styles.container}>
      {testdata.length == 0 || testdata.length == null ? <CartEmpty></CartEmpty> : <CartFull products={testdata}></CartFull>}
    </div>
    <FooterRight></FooterRight>
  </>
}

export default Cart;
