import styles from "./Quantity.module.css"
import { useState } from "react"
function Quantity({ count, setCount }) {


  return <>
    <div className={styles.container}>
      <button className={styles.moreless} onClick={() => count > 1 && setCount(count - 1)} >
        <p>-</p>
      </button>
      <p>{count}</p>
      <button className={styles.moreless} onClick={() => count < 25 && setCount(count + 1)}>
        <p>+</p>
      </button>
    </div>
  </>
}
export default Quantity;
