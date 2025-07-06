import styles from "./AdminRight.module.css"
import AdminRightPanel from "./AdminRightPanel";
import { useEffect } from "react";
function AdminRight({ authenticated, verifyToken }) {

  return <>
    <div className={styles.container}>
      {authenticated ? <AdminRightPanel></AdminRightPanel> : <img style={{ textAlign: "center" }} className={styles.funny} src="https://media0.giphy.com/media/cYZkY9HeKgofpQnOUl/200w.gif?cid=6c09b952la670mv8oxbveuadkfkvhlvx98whoyq82ci9j6pg&ep=v1_gifs_search&rid=200w.gif&ct=g" />}

    </div>
  </>

}
export default AdminRight;
