import styles from "./Intro.module.css";
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
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.heading}>{description}</p>
        <p className={styles.getaquote}>Get a quote from us today.</p>
        <Link to="/contact" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <img className={styles.gobutton} src={isHovered ? goAnimate : go} />
        </Link>
      </div>
    </div>
  </>
}

export default Intro;
