import styles from "./AdminPassword.module.css"
import { useState } from "react";
import axios from "axios";

function AdminPassword({ setToken }) {
  const [passwordEntry, setPasswordEntry] = useState("");
  const handleChange = (e) => {
    setPasswordEntry(e.target.value); // Update state as user types
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/admin`, { password: passwordEntry })
      localStorage.setItem("token", res.data.token)
    } catch (error) {
      console.log(error)
    }


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
