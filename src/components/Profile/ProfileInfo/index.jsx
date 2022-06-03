import React from "react";

import styles from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
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
  );
};

export default ProfileInfo;
