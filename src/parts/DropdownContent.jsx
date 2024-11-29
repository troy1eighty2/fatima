import styles from "./DropdownContent.module.css";
import { useState, useEffect } from "react";

const colors = ["#E46635", "#C58EB6", "#F86381"]

function DropdownContent({ open, content, onSelectionChange }) {

  const [hover, setHover] = useState(null)
  const [selected, setSelected] = useState([]); // Tracks clicked (selected) element
  const toggleSelection = (index) => {
    setSelected((prev) => {
      const newSelected = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];
      onSelectionChange(newSelected);
      return newSelected
    });
  };
  // useEffect(() => {
  // }, [selected]);

  return <>
    <div className={`${styles.dropdownContent} ${open ? styles.contentOpen : ""}`}>
      {content.map((item, index) => (
        <button key={index} className={styles.eachblock} style={{ backgroundColor: selected.includes(index) ? colors[index % colors.length] : hover == index ? colors[index % colors.length] : "#FFFEF6" }} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)} onClick={() => toggleSelection(index)}>{<span className={styles.txt} >{item}</span>}</button>
      ))}
    </div>
  </>
}

export default DropdownContent;
