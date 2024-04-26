import useListOfBooks from "../../state/hooks/useListOfBooks";
import Card from "./Card";
import styles from "./Home.module.scss";

const Home = () => {
  const books = useListOfBooks();
  
  return (
    <>
      <img src="/images/banner.png" alt="Desconto progressivo" className={styles.banner} />
      <section className={styles.cards}>
        {books
          .map(value => ({ ...value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(book => (
            <Card {...book} key={book.id} />
          ))
        }
      </section>
    </>
  )
}

export default Home;
