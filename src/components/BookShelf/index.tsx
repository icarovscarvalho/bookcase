import styles from "./styles.module.css"
import {Book} from "../Book"
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";
import {BookType} from "../../@types/appTypes.ts";

interface BookShelfProps {
  books: BookType[]
  label: string
}

export function BookShelf({books, label}: BookShelfProps) {

  return (
    <div className={styles.shelfContainer}>
      <div className={styles.shelf}>
        <div className={styles.leftButton}>
          <FaArrowCircleLeft/>
        </div>

        <div className={styles.border}></div>
        <div className={styles.base}></div>
        <div className={styles.border}></div>

        <div className={styles.rightButton}>
          <FaArrowCircleRight/>
        </div>
      </div>

      <div className={styles.shelfLabel}>
        <span>{label}</span>
      </div>

      <div className={styles.carrosel}>
        {books.map(book => (
          <div className={styles.bookContainer}>
            <Book
              {...book}
            />
          </div>
        ))}
      </div>
    </div>
  )
}