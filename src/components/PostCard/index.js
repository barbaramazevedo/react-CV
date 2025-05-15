import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import MainButton from "components/MainButton";

export default function PostCard ({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.cover}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt='post cover'
                    />
                <h2 className={styles.title}>{post.title}</h2>
                <MainButton className={styles.mainButton}>
                    View
                </MainButton>
            </div>
        </Link>
    )
}