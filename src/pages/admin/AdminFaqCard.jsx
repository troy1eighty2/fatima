import { useState, useEffect } from "react";
import styles from "./AdminShopCard.module.css";

function AdminFaqCard({handleFaqDelete, _id, question, answer}) {
  const [q, setQuestion] = useState(question)
  const [a, setAnswer] = useState(answer)
  const handleQuestionChange = (e) =>{
    setQuestion(e.target.value)
  }
  const handleAnswerChange = (e) =>{
    setAnswer(e.target.value)
  }

  return <>
    <div className={styles.container}>
      <button className={styles.delete} onClick={() => handleFaqDelete(_id)} type="button">DELETE</button>
      <p>Question</p>
      <textarea className={styles.smallinput} name="question" onChange={handleQuestionChange} value={q || ""} />
      <p>Answer</p>
      <textarea className={styles.smallinput} name="answer" onChange={handleAnswerChange} value={a || ""} />
    </div >
  </>

}
export default AdminFaqCard;
