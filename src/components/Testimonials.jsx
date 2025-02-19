import styles from "./Testimonials.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Testimonials() {

  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/config`)
      .then((response) => {
        const config = response.data[0]
        setTestimonials(config.testimonials)
        console.log(config.testimonials)

      })

  }, [])
  return <>
    <div className={styles.container}>
      {testimonials.map((item, index) => (<div key={index}>
        <p className={styles.quote}>{item.text}</p>
        <p className={styles.customer}>{`- ${item.author}`}</p>
      </div>))}
    </div>
  </>

}
export default Testimonials;

