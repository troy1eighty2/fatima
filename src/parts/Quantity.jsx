import styles from "./Quantity.module.css"
function Quantity() {

  return <>
    <div className={styles.container}>
      <button>
        <p>-</p>
      </button>
      <p>1</p>
      <button>
        <p>+</p>
      </button>
    </div>
  </>
}
export default Quantity;
