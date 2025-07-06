import styles from "./Faq.module.css"
import Question from "../parts/Question.jsx"
function Faq() {
  return <>
    <div className={styles.container}>
      <p className={styles.header}>Frequently Asked Questions</p>
      <Question></Question>
    </div>
  </>
}

export default Faq;
