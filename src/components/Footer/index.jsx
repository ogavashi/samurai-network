import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className={styles.footer}>
        <div className={styles.footerInfo}>
          <a href="https://github.com/ogavashi" target="blank">
            <img src=".././images/github.png" className={styles.footerIcon} alt="github" />
          </a>
          <h3>Made by Oleg Gavashi</h3>
        </div>
        <h3>All rights reserved 2022</h3>
      </div>
    </footer>
  );
};

export default Footer;
