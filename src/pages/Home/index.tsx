import styles from "./styles.module.css"
import openBook from "../../assets/images/openBook.svg"
import {CollectionBook} from "../../components/CollectionBook";
import {bestSellers} from "../../snipets/bestSellers.ts";

const prefix: string = "https://books.google.com/books/publisher/content/images/frontcover/";

const bookObj = {
    place: "1",
    cover: `${prefix}ucYABAAAQBAJ?fife=w240-h345`,
    title: "Os segredos de Colin blablablablablabla",
    author: "Julia Quinn",
    baseInfos: "Livro 4 - Romance",
    starRate: "4,6"
}

const bookList = [
    bookObj,bookObj,bookObj,bookObj,bookObj,bookObj,bookObj,bookObj,bookObj
]

export function Home(){
    return(
        <>
            <main className={styles.main}>
                <div className={styles.welcome}>
                    <h1>Bem Vindo(a)</h1>
                    <p>Que diferentes mundos você quer explorar hoje?</p>
                    <img src={openBook} alt="Imagem de livro aberto"/>
                    <button>Quer uma sugestão?</button>
                </div>

                <div className={styles.bookSearchField}>
                    <div className={styles.titleBar}>
                        <h2>Em Alta</h2>
                        <button>Veja mais</button>
                    </div>
                    <div className={styles.books}>
                        {bookList.map((book, i) => <CollectionBook key={`cbc${i}`} data={book} />)}
                    </div>
                </div>
            </main>
        </>
    )
}