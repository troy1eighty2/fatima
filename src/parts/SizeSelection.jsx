import styles from "./SizeSelection.module.css"
function SizeSelection() {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const colors = ["#E46635", "#C58EB6", "#F86381"]
  return <>

    <div className={styles.container}>
      {sizes.map((size, index) => (
        <button key={index} className={styles.size}>
          <p>{size}</p>

        </button>
      ))}
    </div>
  </>

}
export default SizeSelection;
