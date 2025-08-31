import styles from "./SizeSelection.module.css"
import { useState, useEffect } from "react";
import StrikeThrough from "./StrikeThrough.jsx"
import axios from "axios"
function SizeSelection({cartItems, size_choice, setSelected ,item}) {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const colors = ["#E46635", "#C58EB6", "#F86381"]
  const [hover, setHover] = useState(null);

  const isCartEmptyingStock = (size) =>{
    const filtered = cartItems.filter((cartItem)=> cartItem.productID === item._id && cartItem.size === size)
    const item_count_cart = filtered.reduce((sum, curr)=> sum + curr.quantity, 0)
    if (item.stock[size.toLowerCase()] - item_count_cart <= 0){
      return true
    }
    return false
  }
  return <>
    {item ?
    <div className={styles.container}>
      {sizes.map((size, index) => (
        item.stock[size.toLowerCase()] === 0 || isCartEmptyingStock(size) ? <div className={styles.size} key={index}><StrikeThrough size={size}  ></StrikeThrough></div>
            :<button key={index} className={styles.size} style={size_choice === size || hover === index ? { backgroundColor: colors[index % colors.length] } : { backgroundColor: "unset" }} onClick={() => {setSelected(size)}} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)}><p>{size}</p></button>
      ))}

    </div >
      :null}
  </>

}
export default SizeSelection;
