import React from "react";

function useKeyHandler(key, fn) {
  const handleKeyPress = React.useCallback((e) => {
    if (e.key === key) {
      fn();
    }
  }, [key, fn]);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }; // return the cleanup function, don't call it!
  }, [handleKeyPress]);
}

export default useKeyHandler;
