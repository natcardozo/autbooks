import InputNumber from "../../InputNumber";
import styles from "./Item.module.scss";

const Item = () => {
    return (
        <div className={styles.item}>
            <img className={styles.item__image} src="/images/produto-1.png" alt="" />
            <div className={styles.item__info}>
                <div>
                    <p>Nome do Livro</p>
                    <span>Nome do Autor</span>
                </div>
                <InputNumber label="Quantidade" />
                <p className={styles.item__price}>R$ 40,00</p>
            </div>
        </div>
    )
}

export default Item;
