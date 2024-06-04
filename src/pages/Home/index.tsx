import styles from "./styles.module.css"
import openBook from "../../assets/images/openBook.svg"
import {ColletionBook} from "../../components/ColletionBook";

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
                        <ColletionBook/>
                        <ColletionBook/>
                        <ColletionBook/>
                        <ColletionBook/>
                        <ColletionBook/>
                        <ColletionBook/>
                        <ColletionBook/>
                        <ColletionBook/>
                        <ColletionBook/>
                        <ColletionBook/>
                    </div>
                </div>
            </main>
        </>
    )
}