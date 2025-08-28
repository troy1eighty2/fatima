import {useRef, useState, useEffect} from "react"
import styles from "./StrikeThrough.module.css"
function StrikeThrough({size}){
  const [dimensions, setDimensions] = useState({width: 0, height: 0})
  const containerRef = useRef(null)
  useEffect(() => {
    function updateDimensions() {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const h = containerRef.current.offsetHeight;
      setDimensions({ width: w, height: h });
    }

    updateDimensions(); // initial measurement
    window.addEventListener("resize", updateDimensions); // update on resize
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return <>
    <div className={styles.container} ref={containerRef}>
      {size}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "200%",
          height: "1px",
          backgroundColor: "black",
          transform: `rotate(-${Math.atan(dimensions["height"]/dimensions["width"])* (180/Math.PI) - 1}deg)`,
          transformOrigin: "left bottom",
        }}
      />
    </div>
  </>

}
export default StrikeThrough;
