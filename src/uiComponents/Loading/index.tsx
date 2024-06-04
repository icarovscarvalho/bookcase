import styles from "./styles.module.css"
import pages from "../../assets/images/book_pages.png"
import base from "../../assets/images/book_base.png"

export  function Loading() {
    return(
        <>
            <div className={styles.loading}>
                <div className={styles.pages}>
                    <img src={pages} alt=""/>
                </div>
                <div className={styles.base}>
                    <img src={base} alt=""/>
                </div>
            </div>
        </>
    )
}