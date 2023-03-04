import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const fetchSomething = createAsyncThunk("posts/fetchPosts", async (id, thunkAPI) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
});

const initialState = {
  postsList: [
    { id: 1, title: "First Post", content: "This is the first post" },
    { id: 2, title: "Second Post", content: "This is the second post" },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { title, content } = action.payload;
      const id = state.postsList.length + 1;
      console.log(state.postsList);
      state.postsList.push({ id, title, content });
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      state.postsList = state.postsList.filter((post) => post.id !== postId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSomething.fulfilled, (state, action) => {
      const { title, body } = action.payload;
      const id = state.postsList.length + 1;
      state.postsList.push({ id, title, content: body });
      console.log("fulfilled");
    });
  },
});
export const { addPost, deletePost } = postsSlice.actions;
export { fetchSomething };
export default postsSlice.reducer;
