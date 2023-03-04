import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSomething } from "../store/postsSlice";

function FetchPosts() {
  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          id > 0 && id < 100 && dispatch(fetchSomething(id));
          setId(id + 1);
          id === 100 && setId(1);
        }}
        className="delete-button">
        Fetch
      </button>
    </div>
  );
}

export default FetchPosts;
