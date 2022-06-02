import React from "react";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <img src="./images/home.png" className={styles.icons} alt="home" />
          <span className="icon-title">Profile</span>
        </li>
        <li className={styles.navItem}>
          <img src="./images/messages.png" className={styles.icons} alt="home" />
          <span className="icon-title">Messages</span>
        </li>
        <li className={styles.navItem}>
          <img src="./images/news.png" className={styles.icons} alt="home" />
          <span className="icon-title">News</span>
        </li>
        <li className={styles.navItem}>
          <img src="./images/music.png" className={styles.icons} alt="home" />
          <span className="icon-title">Music</span>
        </li>
        <li className={styles.navItem}>
          <img src="./images/settings.png" className={styles.icons} alt="home" />
          <span className="icon-title">Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
