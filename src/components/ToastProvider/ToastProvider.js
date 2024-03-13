import React from 'react';
import useKeyHandler from '../../hooks/useKeyHandler';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  useKeyHandler("Escape", () => setToasts([]));

  const addToast = ({ variant, message }) => {
    // using this syntax with the setter function removes the dependency on toasts
    setToasts((oldToasts) => {
      const newToasts = [
        ...oldToasts,
        { id: crypto.randomUUID(), variant, message },
      ];
      return newToasts;
    });
  };
  const removeToast = (id) => {
    setToasts((oldToasts) => {
      const newToasts = oldToasts.filter((d) => d.id !== id);
      return newToasts;
    });
  };

  const values = React.useMemo(() => {
    return ({toasts, addToast, removeToast})},
  [toasts])

  return <ToastContext.Provider value={values}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
