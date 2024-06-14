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