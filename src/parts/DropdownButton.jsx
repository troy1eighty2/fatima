import styles from "./DropdownButton.module.css";
function DropdownButton({ children, open, toggle }) {
  return <>
    <button type="button" onClick={toggle} className={styles.btn}>
      {children}
    </button>
  </>
}

export default DropdownButton;
