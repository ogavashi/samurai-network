import React from "react";

import Dialog from "./Dialog";
import styles from "./Dialogs.module.scss";
import Message from "./Message";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <Dialog name={"Vasya"} id={1} />
        <Dialog name={"Dima"} id={2} />
        <Dialog name={"Anton"} id={3} />
        <Dialog name={"Sveta"} id={4} />
        <Dialog name={"Sasha"} id={5} />
        <Dialog name={"Ivan"} id={6} />
        <Dialog name={"Roma"} id={7} />
        <Dialog name={"Petro"} id={8} />
      </div>
      <div className={styles.messages}>
        <Message message={"Hello!"} />
        <Message message={"Hello, how are you?"} />
        <Message message={"I'm cool, thank you!"} />
      </div>
    </div>
  );
};

export default Dialogs;
