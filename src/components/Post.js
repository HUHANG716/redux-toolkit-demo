import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../store/postsSlice";

function Post({ post }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deletePost(post.id));
  };
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={deleteHandler} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default Post;
