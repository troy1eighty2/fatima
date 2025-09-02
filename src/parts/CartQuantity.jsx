import styles from "./CartQuantity.module.css"
import { useState } from "react"
function CartQuantity({ product, add, subtract }) {

  return <>
    <div className={styles.container}>
      <button className={styles.moreless} onClick={() => subtract(product)} >
        <p>-</p>
      </button>
      <p>{product.quantity}</p>
      <button className={styles.moreless} onClick={() => add(product)}>
        <p>+</p>
      </button>
    </div>
  </>
}
export default CartQuantity
