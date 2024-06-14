import {BookType} from "../../@types/appTypes.ts";

import {CollectionBook} from "../../components/CollectionBook";
import {Loading} from "../../uiComponents/Loading";

import {buttonTerms, homeTerms} from "../../texts/terms.ts";

import openBook from "../../assets/images/openBook.svg"

import styles from "./styles.module.css"

interface HomeProps {
  bookList: BookType[] | [],
  isFetching: boolean,
}

export function Home({bookList, isFetching}: HomeProps) {
  return (
    <>
      <main className={styles.main}>
          <div className={styles.welcome}>
            <h1>{homeTerms.welcome}</h1>
            <p>{homeTerms.sub}</p>
              {isFetching?<Loading/>:<img src={openBook} alt="Imagem de livro aberto"/>}
            <button>{buttonTerms.suggestion}</button>
          </div>
        <div className={styles.bookSearchField}>
          <div className={styles.titleBar}>
            <h2>{homeTerms.trending}</h2>
            <button>{buttonTerms.more}</button>
          </div>
          <div className={styles.books}>
            {bookList?.map((book: BookType) => <CollectionBook key={book.id} bookData={book}/>)}
          </div>
        </div>
      </main>
    </>
  )
}