import {BookFetchType, BookType} from "../@types/appTypes.ts";
import {googleBooksFetchBestSellersURL} from "./apiVars.ts";

export async function getBook(name: string, maxResults: number = 1) {
  try {
    const rawData = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=${maxResults}`);
    const jsonData = await rawData.json();
    const list = jsonData.items;
    const bookList:BookType[] | [] = list.map((book: BookFetchType) => {
      return {
        id: book.id,
        cover: book.volumeInfo.imageLinks.thumbnail,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        baseInfos: book.volumeInfo.categories[0],
        starRate: book.volumeInfo.averageRating
      }
    })
    return bookList || []
  } catch (e) {
    console.log(e)
  }
}

export async function getBookList(list: string[], maxResult:number) {
  try {
    const promises = list.map(async bookName => await getBook(bookName, maxResult) || [])
    return await Promise.all(promises);
  } catch (e) {
    console.log(e)
  }
}

export async function getBestSellersShelf() {
  console.log(googleBooksFetchBestSellersURL)
  try {
    const rawData = await fetch(`${googleBooksFetchBestSellersURL}`);
    const jsonData = await rawData.json();
    console.log(jsonData);
    const list = jsonData.items;
    const bookList: BookType[] = list.map((book: BookFetchType, i: number) => {
      console.log(book)
      return {
        place: i + 1,
        id: book.id,
        cover: book.volumeInfo.imageLinks.thumbnail,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        baseInfos: book.volumeInfo.categories[0],
        starRate: book.volumeInfo.averageRating,
        description: book.volumeInfo.description,
        // shortDescription: book.searchInfo.textSnippet,
        shortDescription: "book.searchInfo.textSnippet",
      }
    })
    return bookList
  } catch (e) {
    console.log(e)
  }
}