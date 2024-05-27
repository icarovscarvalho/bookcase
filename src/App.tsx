import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { Bookmark } from "./pages/Bookmark";
import { Contact } from "./pages/Contact";
import { Config } from "./pages/Config";

export type pageState = "home" | "bookmark" | "contact" | "config"

export function App() {
  const [page, setPage] = useState<pageState>("home")

  return (
    <>
      <div className="container">
        <Sidebar setPage={setPage} />
        <div className="right-side">
          <Header page={page} />
          {page==="home" && <Home />}
          {page==="bookmark" && <Bookmark />}
          {page==="contact" && <Contact />}
          {page==="config" && <Config />}
        </div>
      </div>
    </>
  )
}