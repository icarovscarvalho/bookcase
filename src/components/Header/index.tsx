import React from "react";

import { pageState } from "../../@types/appTypes"
import { Searchbar } from "../Searchbar";

import { FaBookmark } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";

import styles from "./styles.module.css"

interface HeaderProps{
    page:pageState,
    searchState:{
        search:string,
        setSearch:React.Dispatch<React.SetStateAction<string>>
    }
}

export function Header({page, searchState}:HeaderProps) {
    return(
        <>
            <header className={styles.header}>
                {page !== "home" && <div className={styles.icon}>
                    {page === "bookmark" && <FaBookmark />}
                    {page === "contact" && <GrContact />}
                    {page === "config" && <IoSettings />}
                </div>}
                <div className={styles.titleAndSearch}>
                    {page === "home" && <Searchbar search={searchState.search} setSearch={searchState.setSearch} /> }
                    {page === "bookmark" && "Favoritos"}
                    {page === "contact" && "Sobre"}
                    {page === "config" && "Configurações"}
                </div>
                <div className={styles.userImg} style={{backgroundImage: "url(https://static.significados.com.br/foto/pessoa-og.jpg?class=ogImageWide)"}} />
            </header>
        </>
    )
}