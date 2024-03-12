import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, setToasts}) {
  // toasts should be in this format: 
  // [
  //   { id: 1, variant: "notice", message: "Example notice toast" },
  //   { id: 2, variant: "error", message: "Example error toast" },
  // ];
  const removeToast = (id) => {
    const newToasts = toasts.filter(d => d.id !== id)
    setToasts(newToasts)
  }
  return (
    <ol className={styles.wrapper}>
      {toasts.map(d => (
        <li className={styles.toastWrapper} key={d.id}>
          <Toast variant={d.variant} handleClose={() => removeToast(d.id)}>{d.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
