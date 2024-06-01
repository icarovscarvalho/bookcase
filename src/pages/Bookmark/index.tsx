import { BookShelf } from "../../components/BookShelf";
import styles from "./styles.module.css"

const book = {
    id:"Icaro",
    title:"Vieira",
    imgSrc:"https://books.google.com/books/publisher/content/images/frontcover/JVjJDwAAQBAJ?fife=w240-h345"
}

const bookList = [
    book, book, book, book, book
];

const labelTime = {
    pass:"readed",
    present:"reading",
    future:"intend"
}

export function Bookmark(){

    return(
        <>
            <div className={styles.bookContainer}>
                <BookShelf label={labelTime.pass} books={bookList} />
                <BookShelf label={labelTime.present} books={bookList} />
                <BookShelf label={labelTime.future} books={bookList} />
            </div>
        </>
    )
}