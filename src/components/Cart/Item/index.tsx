import { IBook } from "../../../interfaces/IBook";
import InputNumber from "../../InputNumber";
import { formatPrice } from "../helpers/priceFormatter";
import styles from "./Item.module.scss";

const Item = ({name, author, image, price}: IBook) => {
    return (
        <div className={styles.item}>
            <img className={styles.item__image} src={image} alt="" />
            <div className={styles.item__info}>
                <div>
                    <p>{name}</p>
                    <span>{author}</span>
                </div>
                <InputNumber label="Quantidade" />
                <p className={styles.item__price}>R$ {formatPrice(price)}</p>
            </div>
        </div>
    )
}

export default Item;
