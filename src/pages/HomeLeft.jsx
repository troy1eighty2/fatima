import logo from "../assets/Assets/Assets/Deliverables/Logos/Web/Fatima-Logo-Web-Large.svg";
import styles from "./HomeLeft.module.css";
import FooterLeft from "../components/FooterLeft.jsx";
import { Link } from "react-router-dom";

function HomeLeft() {
  return <>
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
    </div>
    <FooterLeft></FooterLeft>
  </>
}

export default HomeLeft;
