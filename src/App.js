import PostForm from "./components/PostForm";
import { PostsList } from "./components/PostList";
import "./index.scss";

function App() {
  return (
    <div className="app">
      <PostForm />
      <h1>Online Posts App</h1>
      <h2>Add Post</h2>
      <PostsList />
    </div>
  );
}

export default App;
