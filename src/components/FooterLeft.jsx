import { Link } from "react-router-dom";
import styles from "./FooterLeft.module.css"
import { motion } from "motion/react";
import angel from "../assets/Assets/Assets/Deliverables/Illustrations/angel.png"
import { useState } from "react";
function FooterLeft() {
  const [isHovered, setIsHovered] = useState(false)
  return <>
    <div className={styles.container} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.footer}>
        <Link to="/" className={styles.item1}>Home</Link>
        <Link to="/contact" className={styles.item2}>Get A Quote</Link>
        <a href="mailto:troytran000@gmail.com" className={styles.item3}>Email</a>
        <a href="https://www.instagram.com/jonydoce/" target="_blank" className={styles.item4}>Instagram</a>
        <Link to="/faq" className={styles.item5}>FAQ's</Link>
      </div>
      <motion.img className={styles.jackinthebox} src={angel} initial={{ width: "100px", translateY: "0%", opacity: 0 }} animate={isHovered ? { width: "20%", translateY: "-90%", opacity: 1 } : { translateY: "0%", opacity: 1 }}>
      </motion.img>
    </div >
  </>
}

export default FooterLeft;
