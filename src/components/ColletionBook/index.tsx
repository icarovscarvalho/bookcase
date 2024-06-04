import { FaStar } from "react-icons/fa6";
import styles from "./styles.module.css"

export function ColletionBook() {
    return(
        <>
            <div className={styles.container}>
                <p className={styles.place}>1.</p>

                <div className={styles.cover}>
                    <img
                        src="https://books.google.com/books/publisher/content/images/frontcover/9TcQCwAAQBAJ?fife=w240-h345"
                        alt="Capa do Livro"/>
                </div>

                <div className={styles.informations}>
                    <h3>Harry Potter e a Ordem...</h3>
                    <p>J.K Rowling</p>
                    <p>Livro 5</p>
                    <div className={styles.rateStar}>
                        <FaStar/>
                        <p>4,8</p>
                    </div>
                </div>

            </div>
        </>
    )
}