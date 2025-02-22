import styles from "./Testimonials.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import nub from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Vector.svg"

function Testimonials() {

  const [testimonials, setTestimonials] = useState([])
  const [curr, setCurr] = useState(0)

  const handleBack = () => {
    if (curr === 0) {
      setCurr(testimonials.length - 1)
    }
    else {
      setCurr((prevCurr) => prevCurr - 1)
    }


  }
  const handleForward = () => {
    if (curr === testimonials.length - 1) {
      setCurr(0)
    }
    else {
      setCurr((prevCurr) => prevCurr + 1)
    }

  }
  const handleNub = (index) => {
    console.log("asdads")
    setCurr(index)

  }


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/config`)
      .then((response) => {
        const config = response.data[0]
        setTestimonials(config.testimonials)
        console.log(config.testimonials)

      })
      .catch((error) => {
        console.log(error)
      })

  }, [])
  return <>
    <div className={styles.container}>
      <div className={styles.slider} style={{
        transform: `translateX(-${curr * 100}%)`
      }}>
        {testimonials.length > 0 ? (
          testimonials.map((item, index) => (
            <div key={index} className={styles.testimonial}>
              <p className={styles.quote}>{item.text}</p>
              <p className={styles.customer}>{`- ${item.author}`}</p>
            </div>))
        ) : null}

      </div>
      <div className={styles.selectorbuttons}>
        {testimonials.map((item, index) => (
          <button key={index} className={`${styles.individualselectorbutton} ${index === curr ? styles.selected : ""}`} onClick={() => handleNub(index)}><img src={nub} /></button>
        ))}

      </div>
      <div className={styles.navigate}>
        <button onClick={handleBack} className={styles.button}></button>
        <button onClick={handleForward} className={styles.button}></button>
      </div>
    </div>
  </>

}
export default Testimonials;

