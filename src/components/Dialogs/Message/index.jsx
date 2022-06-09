import React from "react";

import styles from "./Message.module.scss";

const Message = ({ message, timeStamp, isSent }) => {
  return (
    <div className={`${styles.message} ${isSent ? styles.messageSent : styles.messageReceived}`}>
      {message}
      <div className={`${isSent ? styles.messageTimestampSent : styles.messageTimestampReceived}`}>
        {timeStamp}
      </div>
    </div>
  );
};

export default Message;
