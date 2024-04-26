import { Button, Paper } from "@mui/material";
import { IBook } from "../../../interfaces/IBook";
import useListOfCategories from "../../../state/hooks/useListOfCategories";
import styles from "./Card.module.scss";
import { useState } from "react";

const Card = (book: IBook) => {
  const { image, name, author, price, category, addToCart } = book;

  const [mouseHover, setMouseHover] = useState(false);

  const categories = useListOfCategories()

  const categoryName = () => {
    const cat = categories.find(c => c.value === category)
    return cat?.label
  }
  
  return (
    <Paper 
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      elevation={mouseHover ? 1 : 6} 
      className={styles.card}
    >
      <img src={image} alt={name} className={styles.card__image} />
      <span className={styles.card__category}>{categoryName()}</span>
      <div className={styles.card__info}>
        <h3 className={styles.card__name}>{name}</h3>
        <span className={styles.card__author}>{author}</span>
        <p className={styles.card__price}>R$ {price.toFixed(2).replace(".", ",")}</p>
      </div>
      {addToCart ? (
        <Button onClick={() => addToCart(book)} variant="contained" size="small" fullWidth>Adicionar ao carrinho</Button>
      ) : <></>}
    </Paper>
  )
}

export default Card;
