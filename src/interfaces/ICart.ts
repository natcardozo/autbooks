import { IBook } from "./IBook"

export interface ICart {
    cartId: number
    differentBooks: number
    books: IBook[]
}