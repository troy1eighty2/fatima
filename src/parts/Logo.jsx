import logo from "../assets/Assets/Assets/Deliverables/Logos/Web/Fatima-Logo-Web-Large.svg";
import styles from "./Logo.module.css";

function Logo() {

  return <>
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
    </div>
  </>
}

export default Logo;
