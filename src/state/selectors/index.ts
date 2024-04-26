import { selector } from "recoil";
import { IBook } from "../../interfaces/IBook";

export const booksAsync = selector({
  key: "booksAsync",
  get: async () => {
    const respostaHttp = await fetch("http://localhost:8080/books")
    const eventosJson: IBook[] = await respostaHttp.json()
    return eventosJson;
}
})