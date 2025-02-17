import styles from "./AdminLeft.module.css"
import AdminLeftPanel from "./AdminLeftPanel";
import AdminPassword from "./AdminPassword.jsx"
import { useEffect, useState } from "react"
function AdminLeft({ password, setPassword }) {

  console.log(password)
  return <>
    <div className={styles.container}>
      {password === import.meta.env.VITE_ADMIN_PASS ? <AdminLeftPanel></AdminLeftPanel> : <AdminPassword password={password} setPassword={setPassword}></AdminPassword>}

    </div>
  </>

}
export default AdminLeft;
