import styles from "./DropdownContent.module.css";
import { useState, useEffect } from "react";

const colors = ["#E46635", "#C58EB6", "#F86381"]

function DropdownContent({ open, content, onSelectionChange }) {

  const [hover, setHover] = useState(null)
  const [selected, setSelected] = useState([]); // Tracks clicked (selected) element
  const toggleSelection = (item) => {
    setSelected((prev) => {
      const newSelected = prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item];
      onSelectionChange(newSelected);
      return newSelected
    });
  };

  return <>
    <div className={`${styles.dropdownContent} ${open ? styles.contentOpen : ""}`}>
      {content.map((item, index) => (
        <button type="button" key={index} className={styles.eachblock} style={{ backgroundColor: selected.includes(item) ? colors[index % colors.length] : hover == index ? colors[index % colors.length] : "#FFFEF6" }} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)} onClick={() => toggleSelection(item)}>{<span className={styles.txt} >{item}</span>}</button>
      ))}
    </div>
  </>
}

export default DropdownContent;
