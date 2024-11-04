import styles from "./FooterRight.module.css";
import logo from "../assets/Assets/Assets/Deliverables/Logos/Web/Fatima-Logo-Web-Small.svg"
function FooterRight() {
  return <>
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
      <p className={styles.copyright}>© Copyright 2024</p>
      <a href="https://jonydoce.com/" target="_blank" className={styles.link}>Site by Jony Doce</a>
    </div>
  </>
}

export default FooterRight;
