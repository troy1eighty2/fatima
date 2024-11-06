import styles from "./Faq.module.css"
import Question from "../parts/Question.jsx"
function Faq() {
  return <>
    {/* database for questions */}
    <div className={styles.container}>
      <h1 className={styles.header}>Frequently Asked Questions</h1>
      <Question></Question>
    </div>
  </>
}

export default Faq;
