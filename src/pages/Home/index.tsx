import { useEffect, useState } from "react";
import useListOfBooks from "../../state/hooks/useListOfBooks";
import Card from "./Card";
import styles from "./Home.module.scss";
import { IBook } from "../../interfaces/IBook";
import { useSetRecoilState } from "recoil";
import { shoppingCartState } from "../../state/atom";

const Home = () => {
  const books = useListOfBooks();

  const [booksToBuy, setBooksToBuy] = useState<IBook[]>([]);

  const setShoppingCart = useSetRecoilState(shoppingCartState)

  const addToCart = (book: IBook) => {
    setBooksToBuy(currentBooks => [...currentBooks, book]);
  }

  useEffect(() => {
    setShoppingCart(currentState => ({
      ...currentState,
      books: booksToBuy,
    }))
  }, [booksToBuy])
  
  return (
    <>
      <img src="/images/banner.png" alt="Desconto progressivo" className={styles.banner} />
      <section className={styles.cards}>
        {books
          .map(value => ({ ...value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(book => (
            <Card {...book} key={book.id} addToCart={addToCart} />
          ))
        }
      </section>
    </>
  )
}

export default Home;
