import styles from "./AdminRightPanel.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
function AdminRightPanel() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/order`)
      .then((response) => {
        setOrders(response.data)

      })
      .catch((error) => {
        console.log(error)

      })

  }, [])
  return <>
    <div className={styles.container}>
      <h1 className={styles.header}>Orders</h1>
      <div className={styles.orders}>
        {orders.length === 0 ? <p>No orders yet.</p> : orders.map((order, index) => (
          <div key={index} className={styles.item}>
            <h1 className={styles.label}>{order.id}</h1>
            <p>{`Status: ${order.status}`}</p>
            <p>{`Create Time: ${order.create_time}`}</p>
            <p>{`Update Time: ${order.update_time}`}</p>
            <p>{`Customer: ${order.payer.name.given_name} ${order.payer.name.surname}`}</p>
            <p>{`Customer Email: ${order.payer.name.given_name} ${order.payer.email_address}`}</p>
            <p>{`Shipping: ${order.purchase_units[0].shipping.address.address_line_1} ${order.purchase_units[0].shipping.address.admin_area_2} ${order.purchase_units[0].shipping.address.admin_area_1} ${order.purchase_units[0].shipping.address.country_code} ${order.purchase_units[0].shipping.address.postal_code} `}</p>

            <div className={styles.receipt}>
              <h1 className={styles.label2}>receipt</h1>
              {order.purchase_units[0].items.map((item) => {
                return <div className={styles.receiptItem} key={item._id}>
                  <p>{`${item.name} x ${item.quantity}`}</p>
                </div>
              })}
              <p>------------------------------------------</p>
              <p>{`Subtotal: ${order.purchase_units[0].amount.breakdown.item_total.value} ${order.purchase_units[0].amount.breakdown.item_total.currency_code}`}</p>
              <p>{`Tax: ${order.purchase_units[0].amount.breakdown.tax_total.value} ${order.purchase_units[0].amount.breakdown.tax_total.currency_code}`}</p>
              <p>{`Shipping: ${order.purchase_units[0].amount.breakdown.shipping.value} ${order.purchase_units[0].amount.breakdown.shipping.currency_code}`}</p>
              <p>{`Total: ${order.purchase_units[0].amount.value} ${order.purchase_units[0].amount.currency_code}`}</p>
            </div>



          </div>
        ))}
      </div>
    </div>
  </>

}
export default AdminRightPanel;
