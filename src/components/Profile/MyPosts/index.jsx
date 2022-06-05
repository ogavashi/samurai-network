import React from "react";

import styles from "./MyPosts.module.scss";
import Post from "./Post";

const posts = [
  {
    id: 1,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada tortor tellus.Nunc quis vulputate est, id suscipit justo. Curabitur at massa felis.",
  },
  {
    id: 2,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada tortor tellus.Nunc quis vulputate est, id suscipit justo. Curabitur at massa felis.",
  },
  {
    id: 3,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada tortor tellus.Nunc quis vulputate est, id suscipit justo. Curabitur at massa felis.",
  },
  {
    id: 4,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada tortor tellus.Nunc quis vulputate est, id suscipit justo. Curabitur at massa felis.",
  },
  {
    id: 5,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada tortor tellus.Nunc quis vulputate est, id suscipit justo. Curabitur at massa felis.",
  },
  {
    id: 6,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada tortor tellus.Nunc quis vulputate est, id suscipit justo. Curabitur at massa felis.",
  },
];

const MyPosts = () => {
  return (
    <div className={styles.myPostsWrapper}>
      <div className={styles.title}>
        <h1>My posts</h1>
      </div>
      <div className={styles.myPosts}>
        {posts.map((post) => (
          <Post text={post.text} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
