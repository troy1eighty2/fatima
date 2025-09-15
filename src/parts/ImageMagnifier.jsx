import React, { useState } from 'react';
import styles from "./ImageMagnifier.module.css"

function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifierWidth = 100,
  zoomLevel = 3
}) {
  // curr position of csor
  const [[x, y], setXY] = useState([0, 0]);
  // actual dimensions of image
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return <>
    <div className={styles.container}>
      <img
        src={src}
        className={styles.image}
        style={{ height: height, width: width }}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt={"img"}
      />
      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          pointerEvents: "none",
          height: `${magnifierHeight}%`,
          width: `${magnifierWidth}%`,
          // top: `${y - magnifierHeight / 2}px`,
          // left: `${x - magnifierWidth / 2}px`,
          top:0,
          left:0,
          opacity: "1",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
        }}
      ></div>
    </div>

  </>
}
export default ImageMagnifier;
