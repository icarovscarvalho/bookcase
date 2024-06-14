import { FaStar } from "react-icons/fa6";
import styles from "./styles.module.css"
import {BookType} from "../../@types/appTypes.ts";

interface CollectionBookProps {
    bookData: BookType
}

export function CollectionBook({bookData}:CollectionBookProps) {
        console.log('Collection Book Components:', bookData)

    return(
        <>
            <div className={styles.container}>
                <p className={styles.place}>{bookData.place}.</p>

                <div className={styles.cover}>
                    <img
                        src={bookData.cover} alt="Capa do Livro"/>
                </div>

                <div className={styles.bookInfos}>
                    <h3>{bookData.title}</h3>
                    <p>{bookData.authors[0]}</p>
                    <p>{bookData.baseInfos}</p>
                    <div className={styles.rateStar}>
                        <FaStar/>
                        <p>{bookData.starRate}</p>
                    </div>
                </div>

            </div>
        </>
    )
}