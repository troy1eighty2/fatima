import styles from "./AdminPassword.module.css"
import { useState } from "react";

function AdminPassword({ password, setPassword }) {
  const [passwordEntry, setPasswordEntry] = useState("");
  const handleChange = (e) => {
    setPasswordEntry(e.target.value); // Update state as user types
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword(passwordEntry);
  }
  return <>
    <div className={styles.container}>
      <form className={styles.enterpassword} onSubmit={handleSubmit}>
        <label>Enter password</label>
        <input type="text" onChange={handleChange} />
        <button type="submit" className={styles.submit}>Submit</button>
      </form>

    </div>
  </>
}
export default AdminPassword;
