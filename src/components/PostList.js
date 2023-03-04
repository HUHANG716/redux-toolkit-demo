import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

export const PostsList = () => {
  const postsList = useSelector((state) => state.posts.postsList);
  return (
    <div className="post-list">
      {postsList.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
