import React from "react";

import styles from "./MyPosts.module.scss";
import Post from "./Post";

const MyPosts = ({ posts }) => {
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
