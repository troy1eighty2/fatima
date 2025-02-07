import styles from "./AdminLeft.module.css"
function AdminLeft({ password, setPassword }) {
  return <>
    <div className={styles.container}>
      <div className={styles.enterpassword}>
        <label>Enter password</label>
        <input type="text" name="quantity" />
      </div>

    </div>
  </>

}
export default AdminLeft;
