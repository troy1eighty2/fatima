import logo from "../assets/Assets/Assets/Deliverables/Logos/Web/Fatima-Logo-Web-Large.svg";
import styles from "./HomeLeft.module.css";
function HomeLeft() {
  return <>
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
    </div>
  </>
}

export default HomeLeft;
