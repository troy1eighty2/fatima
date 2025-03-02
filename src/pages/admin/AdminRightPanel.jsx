import styles from "./AdminPanel.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
function AdminRightPanel() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/order`)
      .then((response) => {
        setOrders(...orders, [response.data])

      })
      .catch((error) => {
        console.log(error)

      })

  }, [])
  return <>
    <div className={styles.container}>
      <h1 className={styles.header}>Orders</h1>
      <div className={styles.orders}>
        {orders.length === 0 ? <p>No orders yet.</p> : orders.map((order) => {
          <p>{JSON.stringify(order)}</p>
        })}
      </div>
    </div>
  </>

}
export default AdminRightPanel;
