import { FaStar } from "react-icons/fa6";
import styles from "./styles.module.css"

interface CellectionBookProps{
    data: {
        place: string,
        cover: string,
        title: string,
        author: string,
        baseInfos: string,
        starRate: string
    }
}

export function CollectionBook({data}:CellectionBookProps) {
    const {place, cover, title, author, baseInfos, starRate} = data

    return(
        <>
            <div className={styles.container}>
                <p className={styles.place}>{place}.</p>

                <div className={styles.cover}>
                    <img
                        src={cover} alt="Capa do Livro"/>
                </div>

                <div className={styles.bookInfos}>
                    <h3>{title}</h3>
                    <p>{author}</p>
                    <p>{baseInfos}</p>
                    <div className={styles.rateStar}>
                        <FaStar/>
                        <p>{starRate}</p>
                    </div>
                </div>

            </div>
        </>
    )
}