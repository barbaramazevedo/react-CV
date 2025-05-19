import './Post.css';
import styles from './Post.module.css';


import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import ReactMarkdown from "react-markdown";
import PageNotFound from 'pages/PageNotFound';
import DefaultPage from 'components/DefaultPage';
import PostCard from 'components/PostCard';

export default function Post() {
    const parameters = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameters.id);
    })

    if (!post) {
        return <PageNotFound />
    }

    const recommendedPosts = posts
        .filter((post) => post.id !== Number(parameters.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);
        
    return (
        <Routes>
            <Route path="*" element={<DefaultPage />}>
                <Route index element={
                    <ModelPost 
                        coverPhoto={`/assets/posts/${post.id}/capa.png`}
                        title={post.title}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.text}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.titleOthersPosts}>
                            You may also like:
                        </h2>

                        <ul className={styles.recommendedPosts}>
                            {recommendedPosts.map((post) => {
                                return (
                                    <li key={post.id}>
                                        <PostCard post={post} />
                                    </li>
                                )
                            })}
                        </ul>
                    </ModelPost>
                } />    
            </Route>
        </Routes>
    )
}