import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { Bookmark } from "./pages/Bookmark";
import { Contact } from "./pages/Contact";
import { Config } from "./pages/Config";
import {useEffect, useState} from "react";
import {bestSellers as bslist} from "./snipets/bestSellers.ts";
import {CollectionBookProps} from "./components/CollectionBook";

export type pageState = "home" | "bookmark" | "contact" | "config"

type bestSellersType = CollectionBookProps[];

async function getBestSellers(name:string) {
  const rawData = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}`);
  const jsonData = await rawData.json();
  const list = jsonData.items;
  return list[0]
}

export function App() {

  const [bestSellers, setBestSellers] = useState<bestSellersType>([]);
  const [page, setPage] = useState<pageState>("home")
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    const newList:CollectionBookProps[] = [];

    bslist.forEach((bs, index)=>{
      getBestSellers(bs).then(r=>{
        newList.push({data:{
            place:index+1,
            id:r.id,
            cover: r.volumeInfo.imageLinks.thumbnail,
            title: r.volumeInfo.title,
            author: r.volumeInfo.authors,
            baseInfos: r.volumeInfo.categories[0],
            starRate: r.volumeInfo.averageRating
          }});
      }).then(()=>{
        setBestSellers(newList);
      })
    })
  }, []);

  useEffect(() => {
    console.log(bestSellers);
  }, [bestSellers]);

  return (
    <>
      <div className="container">
        <Sidebar setPage={setPage} />
        <div className="right-side">
          <Header page={page} searchState={{search, setSearch}} />
          {page==="home" && <Home bestSellers={bestSellers} />}
          {page==="bookmark" && <Bookmark />}
          {page==="contact" && <Contact />}
          {page==="config" && <Config />}
        </div>
      </div>
    </>
  )
}