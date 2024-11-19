import styles from "./DropdownButton.module.css";
function DropdownButton({ children, open, toggle }) {
  return <>
    <button onClick={toggle} className={styles.btn}>
      {children}
    </button>
  </>
}

export default DropdownButton;
