import React from "react";

function useKeyHandler(key, fn) {
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === key) {
        fn();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }; // return the cleanup function, don't call it!
  }, [key, fn]);
}

export default useKeyHandler;
