import styles from "./styles.module.css"
import {IoArrowDownCircleOutline, IoArrowUpCircleOutline} from "react-icons/io5";
import {FaBookmark, FaShareAlt} from "react-icons/fa";
import {IoDownloadOutline} from "react-icons/io5";
import {MdArrowOutward} from "react-icons/md";
import {BookType} from "../../@types/appTypes.ts";
import {Book3D} from "../../components/Book3D";
import React from "react";

interface DetailsTypes extends BookType{
  setDetailed:React.Dispatch<React.SetStateAction<number|null>>,
  length:number,
  index: number
}

export function Details({cover, title, authors, description, setDetailed, length, index}: DetailsTypes) {
  function handleArrowUp() {
    setDetailed(prevState => {
      const newValue = prevState! -1;
      if(newValue >= 0) {
        return newValue
      }else{
        return prevState
      }
    });
  }

  function handleArrowDown() {
    setDetailed(prevState => {
      const newValue = prevState! +1;
      if(newValue < length) {
        return newValue
      }else{
        return prevState
      }
    });
  }

  return (
    <>
      <div className={styles.container}>
        <section className={styles.top}>
          <nav
            className={styles.nav}>
            <IoArrowUpCircleOutline onClick={handleArrowUp} className={index===0?styles.inactive:undefined}/>
            <IoArrowDownCircleOutline onClick={handleArrowDown} className={index===length-1?styles.inactive:undefined}/>
          </nav>
          {<Book3D cover={cover}/>}
          <div
            className={styles.info}>
            <h1>{title}</h1>
            <p>{...authors}</p>
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