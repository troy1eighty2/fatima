import styles from "./SizeSelection.module.css"
import { useState } from "react";
import StrikeThrough from "./StrikeThrough.jsx"
import xs from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/xs.png"
import s from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/s.png"
import m from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/m.png"
import l from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/l.png"
import xl from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/xl.png"
function SizeSelection({ size_choice, setSelected ,item}) {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const colors = ["#E46635", "#C58EB6", "#F86381"]
  const [hover, setHover] = useState(null);
  console.log(item)
  return <>


    <div className={styles.container}>
      {sizes.map((size, index) => (
        item.stock[size.toLowerCase()]!= 0 ? <button key={index} className={styles.size} style={size_choice === size || hover === index ? { backgroundColor: colors[index % colors.length] } : { backgroundColor: "unset" }} onClick={() => {
          setSelected(size)
        }} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)}>
          <p>{size}</p>
        </button> : <div className={styles.size} key={index}><StrikeThrough size={size}  ></StrikeThrough></div>
      ))}

    </div >
  </>

}
export default SizeSelection;
