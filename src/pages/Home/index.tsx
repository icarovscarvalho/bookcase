import {BookType} from "../../@types/appTypes.ts";

import {CollectionBook} from "../../components/CollectionBook";
import {Loading} from "../../uiComponents/Loading";

import {buttonTerms, homeTerms} from "../../texts/terms.ts";

import openBook from "../../assets/images/openBook.svg"

import styles from "./styles.module.css"
import React from "react";

interface HomeProps {
  bookList: BookType[] | [],
  isFetching: boolean,
  setDetailed:React.Dispatch<React.SetStateAction<number|null>>
}

export function Home({bookList, isFetching, setDetailed}: HomeProps) {
  return (
    <>
      <main className={styles.main}>
          <div className={styles.welcome}>
            <h1>{homeTerms.welcome}</h1>
            <p>{homeTerms.sub}</p>
              {isFetching?<Loading/>:<img src={openBook} alt="Imagem de livro aberto"/>}
            <button>{buttonTerms.suggestion}</button>
          </div>
        <div
          className={styles.bookSearchField}>
          <div
            className={styles.titleBar}>
            <h2>{homeTerms.trending}</h2>
            <button>
              {buttonTerms.more}
            </button>
          </div>
          <div
            className={styles.books}>
            {bookList?.map((book: BookType, index:number) =>
              <CollectionBook
                key={book.id}
                bookData={book}
                setDetailed={setDetailed}
                index={index}
              />)}
          </div>
        </div>
      </main>
    </>
  )
}