import styles from "./Question.module.css"
import axios from "axios";
import {useEffect, useState} from "react";

function Question() {
  const [faqs, setFaqs] = useState(null)
  useEffect(()=>{
    axios
      .get(`${import.meta.env.VITE_API_URL}/faqs`)
      .then((response) => {
        const res = response.data.faqs
        setFaqs(res)

      })

  })
  return <>
    <div className={styles.containerouter}>
      {faqs ? faqs.map((item)=>(
        <div className={styles.container} key={item.temp_id}>
          <p className={styles.header}>{item.question}</p>
          <p className={styles.content}>{item.answer}</p>
        </div>
      )): null}
    </div>
  </>
}

export default Question;
