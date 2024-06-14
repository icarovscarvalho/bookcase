import styles from "./styles.module.css"
import {BookType} from "../../@types/appTypes.ts";

export function Book({cover}:BookType) {
    return(
        <>
            <div className={styles.book}>
                <div className={styles.cover} style={{backgroundImage:`url('${cover}')` }} />
            </div>
        </>
    )
}