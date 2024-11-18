import styles from "./DropdownContent.module.css";
function DropdownContent({ open, content }) {
  return <>
    <div className={`${styles.dropdownContent} ${open ? styles.contentOpen : ""}`}>
      {content.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
    </div>
  </>
}

export default DropdownContent;
