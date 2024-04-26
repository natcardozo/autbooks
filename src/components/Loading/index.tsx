import ReactLoading from "react-loading";
import styles from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={styles.loading}>
            <ReactLoading type="spinningBubbles" color="#333652" height={150} width={150}/>
            <p>Loading...</p>
        </div>
    )
}

export default Loading;
