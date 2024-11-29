import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import { useState } from "react";
import closetri from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/blacktri.png";
import opentri from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/blacktriopen.png";
import styles from "./Dropdown.module.css";
function Dropdown({ buttonText, content, onSelectionChange }) {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  }
  return <>
    <DropdownButton toggle={toggleDropdown} open={open}>{<span className={styles.txt}>{buttonText}</span>}{open ? <img src={closetri} className={styles.openclose} /> : <img src={opentri} className={styles.openclose} />}</DropdownButton>
    <DropdownContent open={open} content={content} onSelectionChange={onSelectionChange}></DropdownContent>

  </>
}

export default Dropdown;
