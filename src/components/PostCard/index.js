import styles from "./PostCard.module.css";

export default function PostCard ({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.cover}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt='post cover image'
                    />
                <h2 className={styles.title}>{post.title}</h2>
                <button className={styles.readbutton}>Project</button>
            </div>
        </Link>
    )
}