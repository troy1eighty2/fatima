import styles from "./FooterRight.module.css";
import logo from "../assets/Assets/Assets/Deliverables/Logos/Web/Fatima-Logo-Web-Small.svg"
import { Link } from "react-router-dom";
function FooterRight() {
  return <>
    <div className={styles.container}>
      <Link to="/" className={styles.image}>
        <img className={styles.logo} src={logo} />
      </Link>
      <div className={styles.tinyfooter}>
        <p className={styles.copyright}>© Copyright 2025</p>
        <a href="https://jonydoce.com/" target="_blank" className={styles.link}>Site by Jony Doce</a>
      </div>
    </div>
  </>
}

export default FooterRight;
