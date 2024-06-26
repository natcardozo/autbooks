export interface IBook {
    id: string,
    name: string,
    author: string,
    price: number,
    synopsis: string,
    image: string,
    category: number,
    quantity?: number,
    addToCart?: (book: IBook) => void
}