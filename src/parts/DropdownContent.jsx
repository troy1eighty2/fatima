import styles from "./DropdownContent.module.css";
import { useState } from "react";

const colors = ["#E46635", "#C58EB6", "#F86381"]

function DropdownContent({ open, content }) {

  const [hover, setHover] = useState(null)

  return <>
    <div className={`${styles.dropdownContent} ${open ? styles.contentOpen : ""}`}>
      {content.map((item, index) => (
        <button key={index} className={styles.eachblock} style={{ backgroundColor: hover == index ? colors[index % colors.length] : "#FFFEF6" }} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)}>{<span className={styles.txt} >{item}</span>}</button>
      ))}
    </div>
  </>
}

export default DropdownContent;
