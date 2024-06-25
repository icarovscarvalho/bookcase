import {BookType} from "../../@types/appTypes.ts";

import {FaStar} from "react-icons/fa6";

import styles from "./styles.module.css"
import React from "react";

interface CollectionBookProps {
  bookData: BookType,
  setDetailed:React.Dispatch<React.SetStateAction<BookType>>
}

export function CollectionBook({bookData, setDetailed}: CollectionBookProps) {

  function handleBookClick () {
    setDetailed(bookData)
  }

  return (
    <>
      <div className={styles.container} onClick={handleBookClick}>
        <p className={styles.place}>{bookData.place}.</p>
        <div className={styles.cover}>
          <img src={bookData.cover} alt="Capa do Livro"/>
        </div>
        <div className={styles.bookInfos}>
          <h3>{bookData.title}</h3>
          <p>{bookData.authors[0]}</p>
          <p>{bookData.baseInfos}</p>
          <div className={styles.rateStar}>
            <FaStar/>
            <p>{bookData.starRate}</p>
          </div>
        </div>
      </div>
    </>
  )
}