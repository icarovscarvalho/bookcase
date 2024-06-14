import React from "react";
import styles from "./styles.module.css"

import { FaSearch } from "react-icons/fa";
import {searchBarTerms} from "../../texts/terms.ts";

interface searchBarProps{
    search:string,
    setSearch:React.Dispatch<React.SetStateAction<string>>
}

export function Searchbar({search, setSearch}:searchBarProps) {
    return(
        <>
            <FaSearch className={styles.icon} />
            <input
            className={styles.searchbar}
            type="search"
            name="searchbar"
            id="searchbar"
            placeholder={searchBarTerms.placeholder}
            onChange={(e) => {
                setSearch(e.target.value)
            }}
            value={search}
            />
        </>
    )
}