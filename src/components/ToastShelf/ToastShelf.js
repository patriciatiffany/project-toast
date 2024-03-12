import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, setToasts}) {
  const removeToast = (id) => {
    const newToasts = toasts.filter(d => d.id !== id)
    setToasts(newToasts)
  }
  return (
    <ol className={styles.wrapper}>
      {toasts.map(d => (
        <li className={styles.toastWrapper}>
          <Toast variant={d.variant} handleClose={() => removeToast(d.id)}>{d.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
