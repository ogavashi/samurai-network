import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Nav.module.scss";

const Nav = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? styles.active : "";
  };

  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.nav}>
        <li className={getNavLinkClass("/profile")}>
          <Link to="/profile">
            <img src="./images/home.png" className={styles.icons} alt="home" />
            <span className="icon-title">Profile</span>
          </Link>
        </li>
        <li className={getNavLinkClass("/messages")}>
          <Link to="/messages">
            <img src="./images/messages.png" className={styles.icons} alt="home" />
            <span className="icon-title">Messages</span>
          </Link>
        </li>
        <li className={getNavLinkClass("/news")}>
          <Link to="/news">
            <img src="./images/news.png" className={styles.icons} alt="home" />
            <span className="icon-title">News</span>
          </Link>
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
