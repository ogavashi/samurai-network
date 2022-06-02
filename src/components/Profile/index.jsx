import React from "react";
import MyPosts from "./MyPosts";

import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className="profileWrapper">
      <div className={styles.profile}>
        <div className={styles.userPage}>
          <div className={styles.userProfile}>
            <img
              src="https://media.cntraveller.com/photos/611be8c7f6bd8f17556dac6a/master/w_1600%2Cc_limit/james-mcavoy-soho-new-york-conde-nast-traveller-27sept17-getty_.jpg"
              alt="avatar"
            />
            <div className={styles.userInfo}>
              <h2>James McAvoy</h2>
              <span>Age: 35</span>
              <span>Country: Ukraine</span>
              <span>City: Kyiv</span>
            </div>
          </div>
          <div className={styles.createPost}>
            <textarea placeholder="What is on your mind?"></textarea>
            <div className={styles.postButonWrapper}>
              <img src="./images/send.png" alt="send" />
            </div>
          </div>
        </div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
