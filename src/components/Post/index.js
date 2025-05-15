import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

export default function Post() {
    const parameters = useParams();

    return (
        <h1>Post {parameters.id}</h1>
    )
}