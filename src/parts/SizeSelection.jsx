import styles from "./SizeSelection.module.css"
function SizeSelection() {
  return <>
    <div className={styles.container}>
      <button className={styles.size}>
        <p>XS</p>
      </button>
      <button className={styles.size}>
        <p>S</p>
      </button>
      <button className={styles.size}>
        <p>M</p>
      </button>
      <button className={styles.size}>
        <p>L</p>
      </button>
      <button className={styles.size}>
        <p>XL</p>
      </button>
      <button className={styles.size}>
        <p>XXL</p>
      </button>
    </div>
  </>

}
export default SizeSelection;
