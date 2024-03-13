import React from 'react';

import { ToastContext } from '../ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  // toasts should be in this format: 
  // [
  //   { id: 1, variant: "notice", message: "Example notice toast" },
  //   { id: 2, variant: "error", message: "Example error toast" },
  // ];

  const { toasts, removeToast } = React.useContext(ToastContext);

  const wrapperAriaProps = {
    role: "region",
    "aria-live": "polite",
    "aria-label": "Notification",
  };

  return (
    <ol className={styles.wrapper} {...wrapperAriaProps}>
      {toasts.map(d => (
        <li className={styles.toastWrapper} key={d.id}>
          <Toast variant={d.variant} handleClose={() => removeToast(d.id)}>{d.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
