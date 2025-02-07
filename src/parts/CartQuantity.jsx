import styles from "./Quantity.module.css"
import { useState } from "react"
function CartQuantity({ product, add, subtract }) {

  return <>
    <div className={styles.container}>
      <button className={styles.moreless} onClick={() => subtract(product.cartItemID)} >
        <p>-</p>
      </button>
      <p>{product.quantity}</p>
      <button className={styles.moreless} onClick={() => add(product.cartItemID)}>
        <p>+</p>
      </button>
    </div>
  </>
}
export default CartQuantity
