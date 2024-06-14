import {useEffect, useState} from "react";
import {BookType, pageState} from "./@types/appTypes.ts";
import {bestSellers as bsList} from "./snipets/bestSellers.ts";
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {Home} from "./pages/Home";
import {Bookmark} from "./pages/Bookmark";
import {Contact} from "./pages/Contact";
import {Config} from "./pages/Config";

async function getBook(name: string, place: number) {
  try {
    const rawData = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}`);
    const jsonData = await rawData.json();
    const list = jsonData.items;
    const book = list[0]
    return {
      place: place,
      id: book.id,
      cover: book.volumeInfo.imageLinks.thumbnail,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      baseInfos: book.volumeInfo.categories[0],
      starRate: book.volumeInfo.averageRating
    }
  } catch (e) {
    console.log(e)
  }
}

async function getBookList(list: string[]) {
  try {
    const promises = list.map(async (bookName, index) => await getBook(bookName, index + 1))
    return await Promise.all(promises);
  } catch (e) {
    console.log(e)
  }
}

export function App() {

  const [bookList, setBookList] = useState<BookType[] | []>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [page, setPage] = useState<pageState>("home")
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    setIsFetching(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    getBookList(bsList).then(r => r ? setBookList(r) : null).then(()=>setIsFetching(false))
  }, []);

  return (
    <>
      <div className="container">
        <Sidebar setPage={setPage}/>
        <div className="right-side">
          <Header page={page} searchState={{search, setSearch}}/>
          {page === "home" && <Home bookList={bookList} isFetching={isFetching}/>}
          {page === "bookmark" && <Bookmark/>}
          {page === "contact" && <Contact/>}
          {page === "config" && <Config/>}
        </div>
      </div>
    </>
  )
}