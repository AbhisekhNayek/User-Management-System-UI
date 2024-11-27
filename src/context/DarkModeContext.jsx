import React, { createContext, useContext, useState } from "react";

// Create the DarkMode context
const DarkModeContext = createContext();

// Custom hook to use DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);

// DarkModeProvider component to wrap the application
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    // Add or remove 'dark' class 
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
