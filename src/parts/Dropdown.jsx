import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import { useState } from "react";
function Dropdown({ buttonText, content }) {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  }
  return <>
    <DropdownButton toggle={toggleDropdown} open={open}>{buttonText}</DropdownButton>
    <DropdownContent open={open} content={content}></DropdownContent>

  </>
}

export default Dropdown;
