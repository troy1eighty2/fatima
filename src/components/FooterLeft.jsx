import { Link } from "react-router-dom";
import styles from "./FooterLeft.module.css"
function FooterLeft() {
  return <>
    <div className={styles.container}>
      <Link to="/" className={styles.item1}>Home</Link>
      <Link to="/contact" className={styles.item2}>Get A Quote</Link>
      <a href="mailto:troytran000@gmail.com" className={styles.item3}>Email</a>
      <a href="https://www.instagram.com/jonydoce/" target="_blank" className={styles.item4}>Instagram</a>
      <Link to="/faq" className={styles.item5}>FAQ's</Link>
    </div >
  </>
}

export default FooterLeft;
