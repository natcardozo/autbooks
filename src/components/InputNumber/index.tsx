import styles from "./InputNumber.module.scss";

type Props = {
    label: string
}

const InputNumber = ({ label }: Props) => {
    return (
        <div className={styles.container}>
            <span>{label}</span>
            <div className={styles.input}>
                <span>-</span>
                <span>1</span>
                <span>+</span>
            </div>
        </div>
    )
}

export default InputNumber;
