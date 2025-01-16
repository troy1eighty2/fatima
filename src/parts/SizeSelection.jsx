import styles from "./SizeSelection.module.css"
import { useState } from "react";
function SizeSelection() {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const colors = ["#E46635", "#C58EB6", "#F86381"]
  const [selected, setSelected] = useState(null);
  return <>

    <div className={styles.container}>
      {sizes.map((size, index) => (
        <button key={index} className={styles.size} style={selected === size ? { backgroundColor: colors[index % colors.length] } : { backgroundColor: "unset" }} onClick={() => {
          setSelected(size)
        }}>
          <p>{size}</p>

        </button>
      ))}
    </div >
  </>

}
export default SizeSelection;
