import styles from "./Intro.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import go from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Go.svg"
import goAnimate from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Go-Hover.svg"


function Intro() {
  const [isHovered, setIsHovered] = useState(false);
  return <>
    <div className={styles.container}>
      <p className={styles.heading}>Fatima is an art-focused screenprinting service. We want to print your goods for you. We want to make your life better.</p>
      <p className={styles.getaquote}>Get a quote from us today.</p>
      <Link to="/contact" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img className={styles.gobutton} src={isHovered ? goAnimate : go} />
      </Link>
    </div>
  </>
}

export default Intro;
