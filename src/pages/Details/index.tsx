import styles from "./styles.module.css"
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import {
  BookType
} from "../../@types/appTypes.ts";
import {
  useEffect
} from "react";
import {
  signal
} from "@preact/signals-react";

// const imgTest = "https://books.google.com/books/publisher/content/images/frontcover/VLg-EAAAQBAJ?fife=w240-h345"

export function Details({cover, title, authors, description}:BookType) {
  let bookScale:number = 1;
  const bookStyle = signal({
    transform: `rotateX(10deg) rotateY(-20deg) scale(${bookScale})`
  })

  function updateWindowWidth() {
    const gapValue = Math.floor(window.innerWidth - 640);
    const gap = gapValue > 0 ? gapValue < 560 ? gapValue : 560 : 0
    const bookScaleCalc = Math.floor(gap / 28) / 100;
    bookScale = 0.8 + bookScaleCalc;
    bookStyle.value = {
      transform: `rotateX(10deg) rotateY(-20deg) scale(${bookScale})`
    }

    console.log(bookScale);
  }

  useEffect(() => {
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)

    return () => window.removeEventListener('resize', updateWindowWidth)
  }, []);

  return(
    <>
      <div className={styles.container}>
        <section className={styles.top}>
          <nav
            className={styles.nav}>
            <IoArrowUpCircleOutline/>
            <IoArrowDownCircleOutline/>
          </nav>
          {/*<div className={styles.coverImg} style={{backgroundImage: `url(${cover})`}} />*/}
          <div
            className={styles.scene} >
            <div className={styles.book} style={bookStyle.value}>
              <div
                className={`${styles.face} ${styles.front} `} style={{backgroundImage: `url(${cover})`}}></div>
              <div
                className={`${styles.face} ${styles.back}`}></div>
              <div
                className={`${styles.face} ${styles.left}`}></div>
              <div
                className={`${styles.face} ${styles.right}`}></div>
              <div
                className={`${styles.face} ${styles.topView}`}></div>
              <div
                className={`${styles.face} ${styles.bottomView}`}></div>
            </div>
          </div>
          <div
            className={styles.info}>
            <h1>{title}</h1>
            <p>{authors}</p>
            {/*<p>{shortDescription}</p> Google API doesn't assist it*/}
            <div
              className={styles.trick}/>
          </div>
        </section>

        <section
          className={styles.bottom}>
          <div
            className={styles.description}>
            <h2>Description</h2>
            <div>
              <p>{description}</p>
            </div>
            <p>{authors[0]}</p>
          </div>
          <aside
            className={styles.aside}>
            <div
              className={styles.buttons}>
              <div
                className={styles.purchase}>
                <button>Purchase <MdArrowOutward/>
                </button>
              </div>
              <div
                className={styles.social}>
                <button>
                  <FaBookmark/>
                </button>
                <button>
                  <FaShareAlt/>
                </button>
                <button>
                  <IoDownloadOutline/>
                </button>
              </div>
            </div>
            <div
              className={styles.publisher}>
              <h2>Editors</h2>
              <p>Informação
                aqui</p>
              <h2>Language</h2>
              <p>Informação
                aqui</p>
              <h2>Paperback</h2>
              <p>Informação
                aqui</p>
            </div>
          </aside>
        </section>
      </div>
    </>
  )
}