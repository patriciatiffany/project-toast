import React from 'react';
import useKeyHandler from '../../hooks/useKeyHandler';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  // Define escape handler so that it doesn't get regenerated when the component re-renders
  const handleEscape = React.useCallback(() => setToasts([]), []);
  useKeyHandler("Escape", handleEscape);

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
