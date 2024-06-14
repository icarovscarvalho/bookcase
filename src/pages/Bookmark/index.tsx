import {BookShelf} from "../../components/BookShelf";
import {timelineLabel} from "../../texts/terms.ts";
import styles from "./styles.module.css"


const book = {
  id: "Icaro",
  place: 1,
  title: "Vieira",
  cover: "https://books.google.com/books/publisher/content/images/frontcover/JVjJDwAAQBAJ?fife=w240-h345",
  authors: ["Icaro"],
  baseInfos: "blah",
  starRate: 3
}

const bookList = new Array(5).fill(book)

export function Bookmark() {

  return (
    <>
      <div className={styles.bookContainer}>
        <BookShelf label={timelineLabel.past} books={bookList}/>
        <BookShelf label={timelineLabel.present} books={bookList}/>
        <BookShelf label={timelineLabel.future} books={bookList}/>
      </div>
    </>
  )
}