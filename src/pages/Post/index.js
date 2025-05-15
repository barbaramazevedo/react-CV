import './Post.css';

import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import ReactMarkdown from "react-markdown";

export default function Post() {
    const parameters = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameters.id);
    })

    if (!post) {
        return <h1>Post not found...</h1>
    }

    return (
        <ModelPost 
            coverPhoto={`/assets/posts/${post.id}/capa.png`}
            title={post.title}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.text}
                </ReactMarkdown>
            </div>
        </ModelPost>
    )
}