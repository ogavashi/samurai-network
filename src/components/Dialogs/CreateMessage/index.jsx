import React from "react";

import styles from "./CreateMessage.module.scss";

const CreateMessage = () => {
  return (
    <div className={styles.createMessage}>
      <textarea placeholder="Enter your message..." />
      <div className={styles.createMessageButonWrapper}>
        <img src="./images/send.png" alt="send" />
      </div>
    </div>
  );
};

export default CreateMessage;
