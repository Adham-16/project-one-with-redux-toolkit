import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost } from "./postsSlice";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { DeleteButton } from './Delete';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import AddPostForm from "./AddPostForm";
const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleAddPost = () => {
    // dispatch action
    dispatch(addPost(newPost)).then(() => {
      setNewPost({ title: "", body: "" });
      toast.success("Post added successfully");
    });
  };


  return (
    <>
      <div className="posts-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts &&
                posts.map((post) => (
                  <div className="card post-item" key={post.id}>
                    <div className="card-body">
                      <h5>
                        <Link to={`/posts/${post.id}`}>{post.id} - {post.title}</Link>

                      </h5>
                      <p className="card-text">{post.body}</p>
                      <div className="postControlButtons">
                        <button className="btn btn-primary">
                          <FontAwesomeIcon icon={faEdit} /> Update
                        </button>
                        <DeleteButton ID={post.id}></DeleteButton>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="col-lg-4">
              {/* <div className="add-post-form">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => {
                      setNewPost({ ...newPost, title: e.target.value });
                    }}
                  />
                  <p className="text-danger">error: you should enter valid title contains chars and number</p>
                  <textarea
                    className="form-control mb-2"
                    placeholder="Body"
                    rows="4"
                    value={newPost.body}
                    onChange={(e) => {
                      setNewPost({ ...newPost, body: e.target.value });
                    }}
                  />
                  <p className="text-danger">error: you should enter valid title contains chars and number</p>
                  <button className="btn btn-success" onClick={handleAddPost}>
                    <FontAwesomeIcon icon={faPlus} /> Add Post
                  </button>
                </div> */}
              <AddPostForm></AddPostForm>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PostsList;
