import { Link } from "react-router-dom";
import styles from "./FooterLeft.module.css"
function FooterLeft() {
  return <>
    <div className={styles.container}>
      <div className={styles.item1}><Link to="/">Home</Link></div>
      <div className={styles.item2}><Link to="/contact">Get A Quote</Link></div>
      <div className={styles.item3}><a href="mailto:troytran000@gmail.com" target="">Email</a></div>
      <div className={styles.item4}><a href="https://www.instagram.com/jonydoce/" target="_blank">Instagram</a></div>
      <div className={styles.item5}><Link to="/faq">FAQ's</Link></div>
    </div>
  </>
}

export default FooterLeft;
