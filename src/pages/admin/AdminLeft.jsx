import styles from "./AdminLeft.module.css"
import AdminLeftPanel from "./AdminLeftPanel";
import AdminPassword from "./AdminPassword.jsx"
import { useEffect, useState } from "react"
import axios from "axios";
function AdminLeft({ authenticated, setToken, verifyToken }) {

  return <>
    <div className={styles.container}>
      {authenticated ? <AdminLeftPanel verifyToken={verifyToken}></AdminLeftPanel> : <AdminPassword setToken={setToken}></AdminPassword>}

    </div>
  </>

}
export default AdminLeft;
