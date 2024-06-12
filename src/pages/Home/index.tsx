import styles from "./styles.module.css"
import openBook from "../../assets/images/openBook.svg"
import {CollectionBook, CollectionBookProps} from "../../components/CollectionBook";

interface HomeProps{
    bestSellers:CollectionBookProps[] | []
}

export function Home({bestSellers}:HomeProps) {
    console.log('HomeProps', bestSellers)
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
                        {bestSellers?.map((book:CollectionBookProps) => <CollectionBook key={book.data.id} data={book.data} />)}
                    </div>
                </div>
            </main>
        </>
    )
}