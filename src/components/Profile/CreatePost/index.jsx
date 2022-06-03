import React from "react";

import styles from "./CreatePost.module.scss";

const CreatePost = () => {
  return (
    <div className={styles.createPost}>
      <textarea placeholder="What is on your mind?"></textarea>
      <div className={styles.postButonWrapper}>
        <img src="./images/send.png" alt="send" />
      </div>
    </div>
  );
};

export default CreatePost;
