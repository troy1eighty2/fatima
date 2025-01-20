import styles from "./CartQuantity.module.css"
import { useState } from "react"
function CartQuantity() {

  return <>
    <div className={styles.container}>
      {/* <button className={styles.moreless} onClick={() => count > 1 && setCount(count - 1)} > */}
      {/*   <p>-</p> */}
      {/* </button> */}
      {/* <p>{count}</p> */}
      {/* <button className={styles.moreless} onClick={() => count < 25 && setCount(count + 1)}> */}
      {/*   <p>+</p> */}
      {/* </button> */}
    </div>
  </>
}
export default CartQuantity
