export type pageState = "home" | "bookmark" | "contact" | "config" | "details"

export type BookType = {
  place?: number,
  id: string,
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