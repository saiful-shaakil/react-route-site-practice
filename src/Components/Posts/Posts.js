import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="row">
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} className="col-1 mb-2" key={post.userId}>
          {post.id}
        </Link>
      ))}
      <br />
      <br />
      <Outlet></Outlet>
    </div>
  );
};

export default Posts;
