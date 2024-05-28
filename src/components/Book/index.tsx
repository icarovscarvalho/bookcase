import styles from "./styles.module.css"

export function Book() {
    return(
        <>
            <div className={styles.book }>
                <div className={styles.cover} style={{backgroundImage: "url(background-image: url(https://play-lh.googleusercontent.com/YP6XK1Xxrd_XPKZvE7fhQJEhROShQgSl5-5E6DcEd0i_61HqvYl0QHpzf_L0ig5HBJRzLGyeehrH_Q=w240-h345-rw)"}} />
            </div>
        </>
    )
}