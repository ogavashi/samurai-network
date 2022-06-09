import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Dialog.module.scss";

const Dialog = ({ name, avatar, id }) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${id}`}>
        <img
          className={styles.avatar}
          src="https://media.cntraveller.com/photos/611be8c7f6bd8f17556dac6a/master/w_1600%2Cc_limit/james-mcavoy-soho-new-york-conde-nast-traveller-27sept17-getty_.jpg"
          alt="avatar"
        />
        <p>{name}</p>
      </NavLink>
    </div>
  );
};

export default Dialog;
