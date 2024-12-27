import styles from "./Faq.module.css"
import Question from "../parts/Question.jsx"
import FooterLeft from "../components/FooterLeft.jsx";
function Faq() {
  return <>
    {/* database for questions */}
    <div className={styles.container}>
      <p className={styles.header}>Frequently Asked Questions</p>
      <Question></Question>
    </div>
  </>
}

export default Faq;
