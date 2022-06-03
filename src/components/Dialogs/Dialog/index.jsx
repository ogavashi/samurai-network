import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Dialog.module.scss";

const Dialog = ({ name, id }) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default Dialog;
