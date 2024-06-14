import {useEffect, useRef, useState} from "react";
import {getBestSellersShelf} from "./APIs/apiFunctions.ts";

import {BookType, pageState} from "./@types/appTypes.ts";

import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";

import {Home} from "./pages/Home";
import {Bookmark} from "./pages/Bookmark";
import {Contact} from "./pages/Contact";
import {Config} from "./pages/Config";

export function App() {
  const fetchOnce = useRef(false);
  const [bookList, setBookList] = useState<BookType[] | []>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [page, setPage] = useState<pageState>("home")
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    if (!fetchOnce.current) {
      fetchOnce.current = true;
      setIsFetching(true);
      getBestSellersShelf().then(r => r ? setBookList(r) : null).then(() => setIsFetching(false))
    }
  }, []);

  return (
    <>
      <div className="container">
        <Sidebar setPage={setPage}/>
        <div className="right-side">
          <Header page={page} searchState={{search, setSearch}}/>
          <div className="content">
            {page === "home" && <Home bookList={bookList} isFetching={isFetching}/>}
            {page === "bookmark" && <Bookmark/>}
            {page === "contact" && <Contact/>}
            {page === "config" && <Config/>}
          </div>
        </div>
      </div>
    </>
  )

}