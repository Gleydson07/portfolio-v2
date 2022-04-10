import { createContext, ReactNode, useContext, useState } from "react";

type ThemeProviderProps = {
  children: ReactNode;
}
interface ThemeProps {
  theme: string,
  toggleTheme: () => void
}

const storageTheme = "gsantos@theme";

const ThemeContext = createContext({} as ThemeProps);

export const ThemeProvider = ({children}:ThemeProviderProps) => {
  const [theme, setTheme] = useState(localStorage.getItem(storageTheme) || "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem(storageTheme, theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);