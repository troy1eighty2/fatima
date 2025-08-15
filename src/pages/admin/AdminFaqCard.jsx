import { useState, useEffect } from "react";
import styles from "./AdminShopCard.module.css";

function AdminFaqCard({handleFaqDelete, _id, question, answer, handleFaqChange, temp_id}) {
  return <>
    <div className={styles.container}>
      <button className={styles.delete} onClick={() => handleFaqDelete(_id)} type="button">DELETE</button>
      <p>Question</p>
      <textarea className={styles.smallinput} name="question" onChange={(e) => handleFaqChange(e, temp_id)} value={question} />
      <p>Answer</p>
      <textarea className={styles.smallinput} name="answer" onChange={(e) => handleFaqChange(e, temp_id)} value={answer} />
    </div >
  </>

}
export default AdminFaqCard;
