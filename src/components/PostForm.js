import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../store/postsSlice";
import FetchPosts from "./FetchPosts";

function PostForm() {
  const [post, setPost] = useState({ title: "", content: "" });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    post.title && post.content && dispatch(addPost(post));
  };
  return (
    <div className="post-form">
      <h2>Add Post</h2>
      <form className="post-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          onChange={(e) => {
            setPost((prevState) => ({ ...prevState, title: e.target.value }));
          }}
          id="title"
        />
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          onChange={(e) => {
            setPost((prevState) => ({ ...prevState, content: e.target.value }));
          }}
          id="content"
        />
        <button className="button" type="submit">
          Post
        </button>
        <FetchPosts />
      </form>
    </div>
  );
}

export default PostForm;
