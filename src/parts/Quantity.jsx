import styles from "./Quantity.module.css"
function Quantity() {

  return <>
    <div className={styles.container}>
      <button className={styles.moreless}>
        <p>-</p>
      </button>
      <p>1</p>
      <button className={styles.moreless}>
        <p>+</p>
      </button>
    </div>
  </>
}
export default Quantity;
