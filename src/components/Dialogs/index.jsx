import React from "react";

import Dialog from "./Dialog";
import styles from "./Dialogs.module.scss";
import Message from "./Message";

const disalogs = [
  {
    name: "Vasya",
    id: 1,
  },
  {
    name: "Dima",
    id: 2,
  },
  {
    name: "Anton",
    id: 3,
  },
  {
    name: "Sveta",
    id: 4,
  },
  {
    name: "Sasha",
    id: 5,
  },
  {
    name: "Ivan",
    id: 6,
  },
  {
    name: "Roma",
    id: 7,
  },
  {
    name: "Petro",
    id: 8,
  },
];

const messages = ["Hello!", "Hello, how are you?", "I'm cool, thank you!"];

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {disalogs.map((dialog) => (
          <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />
        ))}
      </div>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
