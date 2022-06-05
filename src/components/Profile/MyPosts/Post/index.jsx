import React from "react";

import styles from "./Post.module.scss";

const Post = ({ text }) => {
  return (
    <div className={styles.postWrapper}>
      <div className={styles.postHeader}>
        <div className={styles.postInfoWrapper}>
          <img
            src="https://media.cntraveller.com/photos/611be8c7f6bd8f17556dac6a/master/w_1600%2Cc_limit/james-mcavoy-soho-new-york-conde-nast-traveller-27sept17-getty_.jpg"
            alt="avatar"
          />
          <div className={styles.postInfo}>
            <h3>James McAvoy</h3>
            <span>12 hours ago</span>
          </div>
        </div>
        <div className={styles.postSettings}>
          <img src="./images/edit.png" alt="settings" />
        </div>
      </div>
      <div className={styles.postContent}>
        <p className={styles.postText}>{text}</p>
        <div className={styles.postInteraction}>
          <img src="./images/heart.png" alt="like" />
        </div>
      </div>
    </div>
  );
};

export default Post;
