import styles from "./styles.module.css"
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const imgTest = "https://books.google.com/books/publisher/content/images/frontcover/VLg-EAAAQBAJ?fife=w240-h345"

export function Details() {
  return(
    <>
      <div className={styles.container}>
        <section className={styles.top}>
          <nav className={styles.nav}>
            <IoArrowUpCircleOutline />
            <IoArrowDownCircleOutline />
          </nav>
          <div className={styles.book}>
            <div className={styles.coverImg} style={{backgroundImage: `url(${imgTest})`}} />
          </div>
          <div className={styles.info}>
            <h1>O Título do Livro vem aqui</h1>
            <p>Nome do Autor</p>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Adipisci, amet cupiditate
              dignissimos harum id, iste magni
              nobis non porro provident, quas
              ratione sed tempora.
              Fugiat modi non rem rerum ut!
            </p>
            <div className={styles.trick} />
          </div>
        </section>

        <section className={styles.bottom}>
          <div className={styles.description}>
            <h2>Description</h2>
            <div>
              <p>
                Uma vida de dor e abandono fizeram de Beyah uma pessoa cética, desconfiada e boa em guardar segredos. Mas, até o verão terminar, ela terá que rever tudo o que acredita. Da mesma autora dos sucessos É assim que acaba, Layla e Verity. Filha de uma mãe problemática e um pai ausente, Beyah precisou aprender a se virar sozinha desde pequena. Sua vida foi trilhada com muitas decepeções. Mas ela está prestes a mudar a sua sorte graças a si mesma, e a mais ninguém, por conta da bolsa de estudos que ganhou para estudar em uma boa universidade. Apenas dois curtos meses separam o tão sonhado futuro do passado que tanto deseja deixar para trás. Mas uma reviravolta faz Beyah perder até mesmo a casa em que mora. Sem opção, ela recorre ao último recurso que tem e precisará passar o resto do verão na casa de praia do pai que mal conhece, da nova esposa e da filha dela que nem ao menos ouvira falar. O plano de Beyah é se manter quase invisível até poder ir para a faculdade. Mas o vizinho da casa ao lado torna tudo muito mais complicado. Afinal, é difícil ignorar o rico, bonito e misterioso Samson. Os dois parecem não ter nada em comum. Ela viveu uma vida sem dinheiro ou amor enquanto ele tem uma família rica e privilegiada. Mas no olhar dele vive uma tristeza que apenas quem também a carrega dentro de si consegue reconhecer. E isso os torna irresístiveis um para o outro. Sem terem como fugir da atração que sentem, Beyah e Samson resolvem se dar uma chance, mas apenas até o verão terminar. Uma história de amor, recomeços, despedidas e reencontros. \"Desde 2015, Hoover conquista os corações dos leitores de romance de todo o mundo com suas histórias contemporâneas sobre os altos e baixos do amor verdadeiro.\" — Goodreads
              </p>
            </div>
            <p>Nome do Autor
              ...</p>
          </div>
          <aside
            className={styles.aside}>
            <div
              className={styles.buttons}>
              <div
                className={styles.purchase}>
                <button>Purchase <MdArrowOutward/>
                </button>
              </div>
              <div
                className={styles.social}>
                <button>
                  <FaBookmark/>
                </button>
                <button>
                  <FaShareAlt/>
                </button>
                <button>
                  <IoDownloadOutline/>
                </button>
              </div>
            </div>
            <div
              className={styles.publisher}>
              <h2>Editors</h2>
              <p>Informação
                aqui</p>
              <h2>Language</h2>
              <p>Informação
                aqui</p>
              <h2>Paperback</h2>
              <p>Informação
                aqui</p>
            </div>
          </aside>
        </section>
      </div>
    </>
  )
}