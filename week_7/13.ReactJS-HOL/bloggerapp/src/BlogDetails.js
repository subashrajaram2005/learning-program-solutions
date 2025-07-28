import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Learning", author: "Stephen Biz", content: "Welcome to learning React!" },
    { id: 2, title: "Installation", author: "Schewzdenier", content: "You can install React from npm." }
  ];

  return (
    <div className="v1">
      <h1>Blog Details</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p><strong>{blog.author}</strong>: {blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
