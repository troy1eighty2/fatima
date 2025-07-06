import styles from "./Remove.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";

function Remove({ cartItemID, removeItem }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <button onClick={() => {
          removeItem(cartItemID);
        }} className={styles.btn}>Remove</button>

      </div>
    </>
  );
}

export default Remove;

