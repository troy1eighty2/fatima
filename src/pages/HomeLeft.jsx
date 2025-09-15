import logo from "../assets/Assets/Assets/Deliverables/Logos/Web/Fatima-Logo-Web-Large.svg";
import styles from "./HomeLeft.module.css";
import { Link } from "react-router-dom";
import {motion} from "motion/react";

function HomeLeft() {
  return <>
    <motion.div className={styles.container} initial={{y:-500}}animate={{y:0}}transition={{duration:.5, ease:"easeOut"}}>
    {/* <motion.div className={styles.container} initial={{y:0}}animate={{y:"%100%"}}> */}
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
    </motion.div>
  </>
}

export default HomeLeft;
