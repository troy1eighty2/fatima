import styles from "./StoreItem.module.css"
import { Link } from "react-router-dom";
function StoreItem({ id, name, image, price, stock }) {
  return <>
    <Link to={`/shop/${id}/${name}`}>
      <div className={styles.container} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.infobox}>
          <p className={styles.header}>{name}</p>
          <p className={styles.price}>{
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
        </div>

      </div>
    </Link>
  </>
}
export default StoreItem;
