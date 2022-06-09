import React from "react";
import CreatePost from "./CreatePost";
import MyPosts from "./MyPosts";

import styles from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo";

const Profile = ({ state }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.userPage}>
        <ProfileInfo />
        <CreatePost />
      </div>
      <MyPosts posts={state.posts} />
    </div>
  );
};

export default Profile;
