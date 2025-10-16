import styles from "./HomeRight.module.css";
import { useLayoutEffect, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../parts/Intro.jsx";
import Logo from "../parts/Logo.jsx";
import Testimonials from "../components/Testimonials.jsx";


import axios from "axios";

function HomeRight() {
  const location = useLocation();
  const [homeRightPictures, setHomeRightPictures] = useState([])
  const [gif, setGif] = useState("")
  const [window_height, setWindowHeight] = useState(0)
  const [page, setPage] = useState(<Intro window_height={window_height} setWindowHeight={setWindowHeight}></Intro>);

  //set gallery height
  // const rightRef = useRef(null);
  // const [rightHeight, setRightHeight] = useState(0);
  // const [config_ready, setConfigReady] = useState(false);

  useEffect(() => {
    if (location.pathname === "/contact") {
      setPage(<Logo window_height={window_height}></Logo>)
    }
    else {
      setPage(<Intro window_height={window_height} setWindowHeight={setWindowHeight}></Intro>);
    }
    axios
      .get(`${import.meta.env.VITE_API_URL}/config`)
      .then((response) => {
        const config = response.data[0]
        setHomeRightPictures(config.homeRightPictures)
        setGif(config.gif)
        // setConfigReady(true)
      })
    // if (config_ready && rightRef.current) {
    // setRightHeight(rightRef.current.offsetHeight);
    // }

  // }, [location, config_ready])
  }, [location])
  return <>
    <div className={styles.container}>
      {page}
      <div className={styles.container2}>
        {/* <div className={styles.left} style={{height:rightHeight}}> */}
        <div className={styles.left}>
          <div className={styles.gallery}>
            {homeRightPictures.map((item, index) => {
              if (item === "") {
                return
              }
              return <img key={index} src={item} className={styles.display} />
            })}
          </div>
        </div>
        {/* <div className={styles.right} ref={rightRef}> */}
        <div className={styles.right}>
          <img className={styles.gif} src={gif} />
          <Testimonials></Testimonials>
        </div>
      </div>
    </div >

  </>
}

export default HomeRight;
