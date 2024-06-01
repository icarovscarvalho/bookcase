import styles from "./styles.module.css"
import {Book, BookProps} from "../Book/index"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface BookShelfProps{
    books:BookProps[]
    label:string
}

export function BookShelf({books, label}:BookShelfProps) {

    return(
        // AQUI
        <div className={styles.shelfContainer}>
            <div className={styles.shelf}>
                <div className={styles.leftButton}>
                    <FaArrowCircleLeft />
                </div>

                <div className={styles.border}></div>
                <div className={styles.base}></div>
                <div className={styles.border}></div>

                <div className={styles.rightButton}>
                    <FaArrowCircleRight />
                </div>
            </div>

            <div className={styles.shelfLabel}>
                <span>{label}</span>
            </div>

            <div className={styles.carrosel}>
                {books.map(book => (

                    <div className={styles.bookContainer}>
                        <Book id={book.id}
                        title={book.title}
                        imgSrc={book.imgSrc} />
                    </div>
                ))}
            </div>
        </div>
    )
}