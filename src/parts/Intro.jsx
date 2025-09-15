import styles from "./Intro.module.css";
import {motion} from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import go from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Go.svg"
import goAnimate from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Go-Hover.svg"
import { useEffect } from "react";
import axios from "axios";


function Intro() {
  const [isHovered, setIsHovered] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/config`)
      .then((response) => {
        const config = response.data[0]
        setDescription(config.description)

      })

  }, [])
  return <>
    <motion.div className={styles.container}>
      <motion.div className={styles.content}initial={{y:-500}}animate={{y:0}}transition={{duration:.5, ease:"easeOut"}}>
        <p className={styles.heading} >{description}</p>
        <p className={styles.getaquote}>Get a quote from us today.</p>
        <Link to="/contact" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <img className={styles.gobutton} src={isHovered ? goAnimate : go} />
        </Link>
      </motion.div>
    </motion.div>
  </>
}

export default Intro;
