import logo from "../assets/Assets/Assets/Deliverables/Logos/Web/Fatima-Logo-Web-Large.svg";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom"

function Logo() {

  return <>
    <Link to="/">
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
      </div>
    </Link>
  </>
}

export default Logo;
