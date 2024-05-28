import styles from "./styles.module.css"

import { FaSearch } from "react-icons/fa";

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
            placeholder="Procurar por livro, autor ou edição"
            onChange={(e) => {
                setSearch(e.target.value)
            }}
            value={search}
            />
        </>
    )
}