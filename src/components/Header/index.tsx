import { pageState } from "../../App"

import { FaBookmark } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";

import styles from "./styles.module.css"

export function Header({page}:{page:pageState}) {
    return(
        <>
            <header className={styles.header}>
                {page !== "home" && <div className={styles.icon}>
                    {page === "bookmark" && <FaBookmark />}
                    {page === "contact" && <GrContact />}
                    {page === "config" && <IoSettings />}
                </div>}
                <div className={styles.titleAndSearch}>
                    {page === "home" && "searchbar"}
                    {page === "bookmark" && "Favoritos"}
                    {page === "contact" && "Sobre"}
                    {page === "config" && "Configurações"}
                </div>
                <div className={styles.userImg} style={{backgroundImage: "url(https://static.significados.com.br/foto/pessoa-og.jpg?class=ogImageWide)"}} />
            </header>
        </>
    )
}