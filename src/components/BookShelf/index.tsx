import styles from "./styles.module.css"

export function BookShelf() {
    return(
        <>
            <div className={styles.shelf}>
                <div className={styles.border}></div>
                <div className={styles.base}></div>
                <div className={styles.border}></div>
            </div>
        </>
    )
}