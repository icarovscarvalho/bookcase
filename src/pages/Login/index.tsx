import styles from "./styles.module.css"

export function Login(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <div className={styles.title}></div>
                    <input type="text"/>
                    <input type="password"/>
                    <div className={styles.button}></div>
                    <div className={styles.button}></div>
                    <div className={styles.text}>
                        <span></span>
                        <span className={styles.link}></span>
                    </div>
                    <span className={styles.link}></span>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.bookShelf}>

                    </div>
                    <div>
                        <div className={styles.shelf}></div>
                        <div>
                            <div className={styles.girl}></div>
                            <div className={styles.plant}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}