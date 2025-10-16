import styles from "./Intro.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import go from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Go.svg"
import goAnimate from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Go-Hover.svg"
import { useEffect, useRef, useLayoutEffect } from "react";
import axios from "axios";


function Intro({window_height, setWindowHeight}) {
  const [isHovered, setIsHovered] = useState(false);
  const [description, setDescription] = useState("");
  const ref = useRef(null)

  useLayoutEffect(() => {
    const container = ref.current
    if (!container) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const {height} = entry.contentRect
        setWindowHeight(height)
      }
    })

    resizeObserver.observe(container)
    return () => resizeObserver.disconnect()
  }, [])
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/config`)
      .then((response) => {
        const config = response.data[0]
        setDescription(config.description)

      })

  }, [])
  return <>
    <div className={styles.container} ref={ref}>
      <div className={styles.content}>
        <p className={styles.heading} >{description}</p>
        <p className={styles.getaquote}>Get a quote from us today.</p>
        <Link to="/contact" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <img className={styles.gobutton} src={isHovered ? goAnimate : go} />
        </Link>
      </div>
    </div>
  </>
}

export default Intro;
