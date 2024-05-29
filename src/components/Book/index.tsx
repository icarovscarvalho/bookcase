import styles from "./styles.module.css"

export interface BookProps {
    id:string,
    title:string,
    imgSrc:string
}

export function Book({id, title, imgSrc}:BookProps) {

    return(
        <>
            <div alt={title} className={styles.book}>
                <div className={styles.cover} style={{backgroundImage:`url('${imgSrc}')` }} />
            </div>
        </>
    )
}