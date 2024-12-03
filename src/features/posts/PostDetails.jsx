import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PostDetails = () => {
    const { id } = useParams();
    const post = useSelector((state) =>
        state.postsData.posts.find((post) => post.id === parseInt(id))
    );

    if (!post) {
        return <h2>Post not found</h2>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;
