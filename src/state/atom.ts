import { atom } from "recoil";
import { IBook } from "../interfaces/IBook";
import { ICategory } from "../interfaces/ICategory";
import { booksAsync } from "./selectors";
import { ICart } from "../interfaces/ICart";

export const booksState = atom<IBook[]>({
  key: 'booksState',
  default: booksAsync
})

export const categoriesState = atom<ICategory[]>({
  key: "categoriesState",
  default: [{
    value: 1,
    label: 'Infanto-Juvenil',
  },
  {
    value: 2,
    label: 'Infantil',
  },
  {
    value: 3,
    label: 'Didáticos',
  },
  {
    value: 4,
    label: 'Romance',
  }]
})

export const shoppingCartState = atom<ICart>({
  key: "shoppingCartState",
  default: {
    cartId: 1,
    differentBooks: 2,
    books: [{
      id: "ahd45-deef64656-sddaa224s",
      name: "Harry Potter e a Pedra Filosofal",
      author: "J.K. Rowling",
      price: 40,
      image: "/images/produto-1.png",
      synopsis: "Synopsis",
      category: 1,
    }]
  }
})

export const cartOpenState = atom<boolean>({
  key: "cartOpenState",
  default: false
})
