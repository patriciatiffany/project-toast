import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const handleDismiss = (e) => {
      if (e.key === "Escape") {
        setToasts([]);
      }
    };
    document.addEventListener("keyup", handleDismiss);
    return () => {
      document.removeEventListener("keyup", handleDismiss)
    } // return the cleanup function, don't call it!
  },[])

  const values = React.useMemo(() => {
    const addToast = ({ variant, message }) => {
      const newToasts = [
        ...toasts,
        { id: crypto.randomUUID(), variant, message },
      ];
      setToasts(newToasts);
    };
    const removeToast = (id) => {
      const newToasts = toasts.filter((d) => d.id !== id);
      setToasts(newToasts);
    };
    return ({toasts, addToast, removeToast})},
  [toasts])

  return <ToastContext.Provider value={values}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
