import { Book } from "../../components/Book";
import { BookShelf } from "../../components/BookShelf";
import styles from "./styles.module.css"

const book = {
        id:"Icaro",
        title:"Vieira",
        imgSrc:"https://books.google.com/books/publisher/content/images/frontcover/JVjJDwAAQBAJ?fife=w240-h345"
    }

const bookList = [
    book, book, book, book, book
]

export function Bookmark(){
    return(
        <>
            <div className={styles.bookContainer}>
                <BookShelf books={bookList} />
            </div>
        </>
    )
}