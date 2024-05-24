import {FaBookOpen} from 'react-icons/fa6'
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import styles from './styles.module.css';

export function Sidebar() {
    return(
        <>
            <aside className={styles.aside}>
                <figure className={styles.figure}>
                    <FaBookOpen />
                </figure>
                <nav className={styles.nav}>
                    <FaHome />
                    <FaBookOpen />
                    <IoSettings />
                </nav>
            </aside>
        </>
    )
}