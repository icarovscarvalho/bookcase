export type pageState = "home" | "bookmark" | "contact" | "config"

export type BookType = {
  id: string,
  place: number,
  title: string,
  cover: string,
  authors: string[],
  baseInfos: string,
  starRate: number
}

export type BookFetchType = {
  id: string,
  volumeInfo: {
    imageLinks: { thumbnail: string },
    title: string
    cover: string,
    authors: string[],
    categories: string[],
    averageRating: string
  }
}