import styles from "./AdminPanel.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
function AdminLeftPanel() {
  const handleStyleSubmit = () => {

    console.log("stylesubmit")
  }
  const handleStyleChange = () => {
    console.log("stylechange")
  }
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/admin`)



  }, [])
  return <>
    <div className={styles.container}>
      <h1 className={styles.header}>Config</h1>
      <p>description</p>
      <p>homeRight pictures</p>
      <p>gif</p>
      <p>testomonials</p>
      <p>shop</p>
      <p>password</p>

      {/* <form className={styles.pagestyle} onSubmit={handleStyleSubmit}> */}
      {/*   <label>Page Styling</label> */}
      {/*   <input type="text" onChange={handleStyleChange} /> */}
      {/*   <button type="submit" className={styles.submit}>Submit</button> */}
      {/* </form> */}
    </div>
  </>

}
export default AdminLeftPanel;
