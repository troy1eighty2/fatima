import styles from "./Question.module.css"
import axios from "axios";
import {useEffect, useState} from "react";

function Question() {
  const [faqs, setFaqs] = useState(null)
  useEffect(()=>{
    axios
      .get(`${import.meta.env.VITE_API_URL}/faqs`)
      .then((response) => {
        const res = response.data
        setFaqs(faqs)

      })

  })
  return <>
    <div className={styles.containerouter}>
      <div className={styles.container}>
        <p className={styles.header}>Is there a minimum number of garments I can have made?</p>
        <p className={styles.content}>12 is the minimum, but we're always open to discussing your project no matter the size!</p>
      </div>
      <div className={styles.container}>
        <p className={styles.header}>How many colors can I get printed?</p>
        <p className={styles.content}>6 colors is the max we currently offer, however there are ways we can possibly do more depending on the art.</p>
      </div>
      <div className={styles.container}>
        <p className={styles.header}>What’s the biggest size art I can have printed?</p>
        <p className={styles.content}>Generally the largest we offer is 14”W x 18”H. While we don’y typically do oversize prints, don’t hesitate to reach out about your idea!</p>
      </div>
      <div className={styles.container}>
        <p className={styles.header}>I want to print on more than just the front or
          back of my garment, where else can I get imprints?</p>
        <p className={styles.content}>We can print size tags, sleeves, and along the collar as well. Anything beyond that is just a matter of problem solving and collaboration between our team and yours!</p>
      </div>
      <div className={styles.container}>
        <p className={styles.header}>Are there things you won’t print?</p>
        <p className={styles.content}>We will not aid in the promotion of hate speech or bigotry. We will not print in the support of systems, institutions, or movements that bring harm to marginalized groups. We reserve the right to deny any project we do not wish to proceed with.</p>
      </div>
    </div>
  </>
}

export default Question;
