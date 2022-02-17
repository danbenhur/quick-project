import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import Portal from "react-dom";

const ErrorModal = (props) => {
  const Backdrop = () => {
    return (
      <div className={styles.backdrop} onClick={props.removeErrorMessage} />
    );
  };

  const ErrorMessage = () => {
    return (
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.removeErrorMessage}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {Portal.createPortal(
        <Backdrop />,
        document.getElementById("error-modal-backdrop")
      )}
      {Portal.createPortal(
        <ErrorMessage />,
        document.getElementById("error-modal-message")
      )}
    </>
  );
};

export default ErrorModal;
