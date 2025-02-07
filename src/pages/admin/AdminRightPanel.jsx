import styles from "./AdminPanel.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
function AdminRightPanel() {

  const [orders, setOrders] = useState([])

  return <>
    <div className={styles.container}>
      <h1>Orders</h1>
      <div className={styles.orders}>
        {orders.length === 0 ? <p>No orders yet.</p> : orders.map((order) => {
          <p>{order}</p>
        })}
      </div>
    </div>
  </>

}
export default AdminRightPanel;
