import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  // Step 6 - Load posts from API
  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const postsList = data.map((post) => new Post(post.id, post.title, post.body));
        this.setState({ posts: postsList });
      })
      .catch((error) => {
        throw error;
      });
  }

  // Step 7 - Lifecycle hook
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9 - Catch errors
  componentDidCatch(error, info) {
    alert("An error occurred: " + error.toString());
  }

  // Step 8 - Render posts
  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
