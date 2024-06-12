import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { Bookmark } from "./pages/Bookmark";
import { Contact } from "./pages/Contact";
import { Config } from "./pages/Config";
import {useEffect, useState} from "react";

export type pageState = "home" | "bookmark" | "contact" | "config"

async function getBestSellers() {
  const rawData = await fetch(`https://www.googleapis.com/books/v1/volumes?q=verity`);
  const jsonData = await rawData.json();
  const list = jsonData.items;
  return list[0]
}

export function App() {

  const [bestSellers, setBestSellers] = useState([]);
  const [page, setPage] = useState<pageState>("home")
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    getBestSellers().then(r=>console.log(r))
  }, []);

  return (
    <>
      <div className="container">
        <Sidebar setPage={setPage} />
        <div className="right-side">
          <Header page={page} searchState={{search, setSearch}} />
          {page==="home" && <Home />}
          {page==="bookmark" && <Bookmark />}
          {page==="contact" && <Contact />}
          {page==="config" && <Config />}
        </div>
      </div>
    </>
  )
}