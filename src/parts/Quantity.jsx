import styles from "./Quantity.module.css"
function Quantity({isCartEmptyingStock, selected, cartItems, product, count, setCount }) {
 
  if (selected){
    console.log(isCartEmptyingStock(selected))
  }
  return <>
    <div className={styles.container}>
      <button className={styles.moreless} onClick={() => count > 1 && setCount(count - 1)} >
          <p >-</p>
      </button>
      <p>{count}</p>
      {selected ?
        <button className={styles.moreless} onClick={() => setCount(count + 1)} disabled={isCartEmptyingStock(selected) - count <= 0}>
            <p>+</p>
        </button>
        :<button className={styles.moreless} disabled={true}><p>+</p></button>
      }

    </div>
  </>
}
export default Quantity;
