import React from "react";

import styles from "./MyPosts.module.scss";
import Post from "./Post";

const MyPosts = () => {
  return (
    <div className={styles.myPostsWrapper}>
      <div className={styles.title}>
        <h1>My posts</h1>
      </div>
      <div className={styles.myPosts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
