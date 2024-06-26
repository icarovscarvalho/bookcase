import styles from "./styles.module.css";
import {useEffect, useState} from "react";

export function Book3D({cover}: { cover: string }){
  const [bookScale, setBookScale] = useState(8)

  function updateWindowWidth() {
    const gapValue = Math.floor(window.innerWidth - 640);
    const gap = gapValue > 0 ? gapValue < 560 ? gapValue : 560 : 0
    const bookScaleCalc = Math.floor(gap / 280) + 8; //8~10
    setBookScale(bookScaleCalc);
  }

  useEffect(() => {
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, []);
  return (
    <div className={styles.scene}>
      <div className={`${styles.book} ${bookScale === 10 ? styles.scale100 : bookScale === 9 ? styles.scale90 : styles.scale80}`}>
        <div className={`${styles.face} ${styles.front}`} style={{backgroundImage: `url(${cover})`}}></div>
        <div className={`${styles.face} ${styles.back}`}></div>
        <div className={`${styles.face} ${styles.left}`}></div>
        <div className={`${styles.face} ${styles.right}`}></div>
        <div className={`${styles.face} ${styles.topView}`}></div>
        <div className={`${styles.face} ${styles.bottomView}`}></div>
      </div>
    </div>
  )
}