import React from "react";
import CreatePost from "./CreatePost";
import MyPosts from "./MyPosts";

import styles from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.userPage}>
        <ProfileInfo />
        <CreatePost />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
