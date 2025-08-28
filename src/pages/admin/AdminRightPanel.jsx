import styles from "./AdminRightPanel.module.css"
import axios from "axios";
import Orders from "../../parts/Orders.jsx"
import { useState, useEffect } from "react";
function AdminRightPanel() {

  const [orders, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [curr_orders, setCurrOrders] = useState([])
  const [search, setSearch] = useState("")
  const ordersPerPage = 20
  const indexLastOrder = currentPage * ordersPerPage
  const indexFirstOrder = indexLastOrder - ordersPerPage
  const max_pages = Math.ceil(curr_orders.length / ordersPerPage);
  
  const handleChange = (e) =>{
    setSearch(e.target.value);
  }

  useEffect(()=>{
    axios
      .get(`${import.meta.env.VITE_API_URL}/order`)
      .then((response) => {
        setOrders(response.data.toReversed())

      })
      .catch((error) => {
        console.log(error)

      })
  },[])
  useEffect(() => {

    // filter orders if necessary
    if (search.trim() == ""){
      setCurrOrders(orders)
    }else{
      //partial matches
      setCurrOrders(orders.filter((order)=> order.id.toLowerCase().includes(search.toLowerCase())))
    }
  }, [search, orders])
  return <>
    <div className={styles.container}>
      <h1 className={styles.header}>Orders</h1>
      <div className={styles.row}>
        <div className={styles.search}>
          <input placeholder={'search by id'} className={styles.input} value={search} onChange={handleChange}/>
        </div>
        <div className={styles.buttons}>
          <button className={styles.increment} onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}>-</button>
          <p>page {currentPage}</p>
          <button className={styles.increment} onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.floor(max_pages)))}>+</button>
        </div>
      </div>
      <div className={styles.orders}>
        <Orders orders={curr_orders.slice(indexFirstOrder, indexLastOrder)}></Orders>
      </div>
    </div>
  </>

}
export default AdminRightPanel;
