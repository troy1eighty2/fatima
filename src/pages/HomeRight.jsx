import styles from "./HomeRight.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../parts/Intro.jsx";
import Logo from "../parts/Logo.jsx";

function HomeRight() {
  const location = useLocation();
  const [page, setPage] = useState(<Intro></Intro>);

  useEffect(() => {
    if (location.pathname === "/contact") {
      setPage(<Logo></Logo>)
    }
    else {
      setPage(<Intro></Intro>);
    }

  }, [location])
  return <>
    <div className={styles.container}>
      {page}
    </div>

  </>
}

export default HomeRight;
