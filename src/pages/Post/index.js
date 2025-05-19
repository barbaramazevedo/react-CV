import './Post.css';

import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import ReactMarkdown from "react-markdown";
import PageNotFound from 'pages/PageNotFound';
import DefaultPage from 'components/DefaultPage';

export default function Post() {
    const parameters = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameters.id);
    })

    if (!post) {
        return <PageNotFound />
    }

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
                    </ModelPost>
                } />    
            </Route>
        </Routes>
    )
}