import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EachPost = () => {
  const params = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div className="mt-5">
      <h2>This post is about {post.id}</h2>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default EachPost;
