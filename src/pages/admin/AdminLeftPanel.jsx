import styles from "./AdminPanel.module.css"
function AdminLeftPanel() {
  const handleStyleSubmit = () => {

    console.log("stylesubmit")
  }
  const handleStyleChange = () => {
    console.log("stylechange")
  }
  return <>
    <div className={styles.container}>
      <h1>Config</h1>
      <form className={styles.pagestyle} onSubmit={handleStyleSubmit}>
        <label>Page Styling</label>
        <input type="text" onChange={handleStyleChange} />
        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  </>

}
export default AdminLeftPanel;
