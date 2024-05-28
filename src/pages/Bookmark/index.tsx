import { Book } from "../../components/Book";
import { BookShelf } from "../../components/BookShelf";
import styles from "./styles.module.css"

export function Bookmark(){
    return(
        <>
            <div className={styles.bookContainer}>
                <Book />
                <BookShelf />
                <BookShelf />
                <BookShelf />
            </div>
        </>
    )
}