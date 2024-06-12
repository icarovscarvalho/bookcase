import { FaStar } from "react-icons/fa6";
import styles from "./styles.module.css"

export interface CollectionBookProps {
    data: {
        id:string,
        place: number,
        cover: string,
        title: string,
        author: string[],
        baseInfos: string,
        starRate: number
    }
}

export function CollectionBook({data}:CollectionBookProps) {
        console.log('Collection Book Components:', data)

    return(
        <>
            <div className={styles.container}>
                <p className={styles.place}>{data.place}.</p>

                <div className={styles.cover}>
                    <img
                        src={data.cover} alt="Capa do Livro"/>
                </div>

                <div className={styles.bookInfos}>
                    <h3>{data.title}</h3>
                    <p>{data.author}</p>
                    <p>{data.baseInfos}</p>
                    <div className={styles.rateStar}>
                        <FaStar/>
                        <p>{data.starRate}</p>
                    </div>
                </div>

            </div>
        </>
    )
}