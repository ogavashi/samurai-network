import React from "react";

import styles from "./Message.module.scss";

const Message = ({ message }) => {
  return <div className={styles.message}>{message}</div>;
};

export default Message;
