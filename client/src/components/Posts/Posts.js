import React from "react";
import Post from "./post/Post";
import useStyles from "./style";
import { useSelector } from "react-redux";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);

  return (
    <div>
      <h1>Posts</h1>
      <Post />
      <Post />
    </div>
  );
}
