import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import { useState } from "react";
import closetri from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/blacktri.png";
import opentri from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/blacktriopen.png";
import styles from "./Dropdown.module.css";
import { motion } from "motion/react";
import darko from "../assets/Assets/Assets/Deliverables/Illustrations/monster.png"
function Dropdown({ buttonText, content, onSelectionChange }) {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  }
  return <>
    <div className={styles.container}>
      <motion.img src={darko} initial={{ opacity: 0 }} animate={open ? { opacity: 1, transition: { duration: 0.5 } } : { opacity: 0, transition: { duration: 0 } }} className={styles.image}></motion.img>
      <DropdownButton toggle={toggleDropdown} open={open}>{<span className={styles.txt}>{buttonText}</span>}{open ? <img src={closetri} className={styles.openclose} /> : <img src={opentri} className={styles.openclose} />}</DropdownButton>
      <DropdownContent open={open} content={content} onSelectionChange={onSelectionChange}></DropdownContent>
    </div>

  </>
}

export default Dropdown;
