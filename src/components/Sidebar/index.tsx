import React from 'react';
import {
    BookType,
    pageState
} from "../../@types/appTypes.ts";
import styles from './styles.module.css';
import {FaBookOpen} from 'react-icons/fa6'
import {FaHome} from "react-icons/fa";
import {IoSettings} from "react-icons/io5";
import {GrContact} from "react-icons/gr";

interface SidebarProps{
    setPage:React.Dispatch<React.SetStateAction<pageState>>
    setDetailed:React.Dispatch<React.SetStateAction<BookType|null>>
}

export function Sidebar({setPage, setDetailed}:SidebarProps) {

    function handleSetPage(page:pageState) {
        setPage(page)
        setDetailed(null)
    }

    return(
        <>
            <aside className={styles.aside}>
                <figure className={styles.figure}>
                    <FaBookOpen />
                </figure>
                <nav className={styles.nav}>
                    <FaHome onClick={() => handleSetPage("home")} />
                    <FaBookOpen onClick={() => handleSetPage("bookmark")} />
                    <GrContact onClick={() => handleSetPage("contact")} />
                    <IoSettings onClick={() => handleSetPage("config")} />
                </nav>
            </aside>
        </>
    )
}