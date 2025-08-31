import styles from "./Remove.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";

function Remove({ product, cartItemID, removeItem }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <button onClick={() => {
          removeItem(cartItemID, product);
        }} className={styles.btn}>Remove</button>

      </div>
    </>
  );
}

export default Remove;

