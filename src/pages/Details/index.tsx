import styles from "./styles.module.css"
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

export function Details() {
  return(
    <>
      <div className={styles.container}>
        <section className={styles.top}>
          <nav className={styles.nav}>
            <IoArrowUpCircleOutline />
            <IoArrowDownCircleOutline />
          </nav>
          <div className={styles.cover}></div>
          <div className={styles.info}>
            <h1>O Título do Livro vem aqui</h1>
            <p>Nome do Autor</p>
            <p>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Adipisci, amet cupiditate
              dignissimos harum id, iste magni
              nobis non porro provident, quas
              ratione sed tempora.
              Fugiat modi non rem rerum ut!</p>
          </div>
        </section>

        <section className={styles.bottom}>
          <div className={styles.description}>
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Consequatur eveniet omnis
              optio perspiciatis provident repellendus
              reprehenderit. Adipisci dignissimos ducimus
              laboriosam tempore voluptatem voluptatibus.
              Architecto ipsum officia, repudiandae
              sapiente veritatis vitae.</p>
            <p>Nome do Autor</p>
          </div>
          <aside className={styles.aside}>
            <div className={styles.buttons}>
              <div className={styles.purchase}>
                <button>Purchase <MdArrowOutward /></button>
              </div>
              <div className={styles.social}>
                <button><FaBookmark /></button>
                <button><FaShareAlt /></button>
                <button><IoDownloadOutline /></button>
              </div>
            </div>
            <div className={styles.publisher}>
              <h2>Editors</h2>
              <p>Informação aqui</p>
              <h2>Language</h2>
              <p>Informação aqui</p>
              <h2>Paperback</h2>
              <p>Informação aqui</p>
            </div>
          </aside>
        </section>
      </div>
    </>
  )
}