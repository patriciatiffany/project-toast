import React from "react";

import Button from "../Button";
// import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  // const [showToast, setShowToast] = React.useState(false);
  const [toasts, setToasts] = React.useState([
    {id: 1, variant: "notice", message: "Example notice toast"},
    {id: 2, variant: 'error', message: "Example error toast"}
  ]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* {showToast && (
        <Toast variant={variant} handleClose={(e) => setShowToast(false)}>
          {message}
        </Toast>
      )} */}

      <ToastShelf toasts={toasts} setToasts={setToasts}/>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((opt) => (
              <label htmlFor={`variant-${opt}`} key={opt}>
                <input
                  id={`variant-${opt}`}
                  type="radio"
                  name={`variant-${opt}`}
                  value={opt}
                  checked={variant === opt}
                  onChange={(e) => {
                    // on change is triggered when that radio option is selected
                    setVariant(e.target.value);
                  }}
                />
                {opt}
              </label>
            ))}
            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={(e) => setShowToast(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
