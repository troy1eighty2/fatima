import styles from "./AdminLeft.module.css"
import AdminLeftPanel from "./AdminLeftPanel";
import AdminPassword from "./AdminPassword.jsx"
import { useEffect, useState } from "react"
import axios from "axios";
function AdminLeft() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    // const verifyToken = async () =>{

    // if (!token){
    //   return
    // }
    // try{
    //   const res = await axios.get()
    //
    // }catch(error){
    //
    // }
    // }

  })
  return <>
    <div className={styles.container}>
      {authenticated === import.meta.env.VITE_ADMIN_PASS ? <AdminLeftPanel></AdminLeftPanel> : <AdminPassword setToken={setToken}></AdminPassword>}

    </div>
  </>

}
export default AdminLeft;
