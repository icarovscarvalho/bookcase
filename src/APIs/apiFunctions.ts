import {BookFetchType, BookType} from "../@types/appTypes.ts";
import {googleBooksFetchBestSellersURL} from "./apiVars.ts";

export async function getBook(name: string, place: number) {
  try {
    const rawData = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=1`);
    const jsonData = await rawData.json();
    const list = jsonData.items;
    const book = list[0] || null // inserida verificação para não receber "undefined"
    const r: BookType = {
      place: place,
      id: book.id,
      cover: book.volumeInfo.imageLinks.thumbnail,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      baseInfos: book.volumeInfo.categories[0],
      starRate: book.volumeInfo.averageRating
    }
    return r
  } catch (e) {
    console.log(e)
  }
}

export async function getBookList(list: string[]) {
  try {
    const promises = list.map(async (bookName, index) => await getBook(bookName, index + 1))
    return await Promise.all(promises);
  } catch (e) {
    console.log(e)
  }
}

export async function getBestSellersShelf() {
  try {
    const rawData = await fetch(`${googleBooksFetchBestSellersURL}`);
    const jsonData = await rawData.json();
    console.log(jsonData);
    const list = jsonData.items;
    const bookList: BookType[] = list.map((book: BookFetchType, i: number) => {
      return {
        place: i + 1,
        id: book.id,
        cover: book.volumeInfo.imageLinks.thumbnail,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        baseInfos: book.volumeInfo.categories[0],
        starRate: book.volumeInfo.averageRating
      }
    })
    return bookList
  } catch (e) {
    console.log(e)
  }
}