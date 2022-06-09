import React from "react";

import Dialog from "./Dialog";
import styles from "./Dialogs.module.scss";
import Message from "./Message";
import CreateMessage from "./CreateMessage";

const Dialogs = ({ state }) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {state.dialogs.map((dialog) => (
          <Dialog name={dialog.name} avatart={dialog.avatart} id={dialog.id} key={dialog.id} />
        ))}
      </div>
      <div className={styles.messagesWrapper}>
        <div className={styles.messages}>
          {state.messages.map((message) => (
            <Message
              message={message.text}
              key={message.id}
              timeStamp={message.timeStamp}
              isSent={message.isSent}
            />
          ))}
        </div>
        <CreateMessage />
      </div>
    </div>
  );
};

export default Dialogs;
