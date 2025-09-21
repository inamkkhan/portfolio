import { createContext, useState, useEffect, useContext } from 'react';

// 1. Context create karo
export const ThemeContext = createContext();

// 2. Provider component banao
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom hook for ease of use
export const useTheme = () => useContext(ThemeContext);
