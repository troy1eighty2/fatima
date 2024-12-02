import styles from "./HomeRight.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../parts/Intro.jsx";
import Logo from "../parts/Logo.jsx";
import gif from "../assets/Assets/Assets/Deliverables/Graphics Animation/Graphics-Animation.gif"
import FooterRight from "../components/FooterRight.jsx";

import jawn from "../assets/Assets/Assets/temp/jawn.png"
import jawn1 from "../assets/Assets/Assets/temp/jawn1.png"

import axios from "axios";

const tempData = [
  jawn,
  jawn1,
  jawn,
  jawn1
]


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
      <div className={styles.container2}>
        <div className={styles.left}>
          <div className={styles.gallery}>
            {tempData.map((item, index) => (<img key={index} src={item} className={styles.display} />))}
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.gif} src={gif} />
          <div className={styles.container3}>
            <div className={styles.quote}>Lorem ipsum dolor sit amet consectetur. Pharetra lacinia massa tempor praesent. Mattis pellentesque ut nec sapien in tellus diam.</div>
            <div className={styles.customer}>-Johnny Tran</div>
          </div>
        </div>
      </div>
      <FooterRight></FooterRight>
    </div >

  </>
}

export default HomeRight;
