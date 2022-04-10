import { createContext } from "react";

interface ThemeProps {
  theme: "light" | "dark"
}

const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider = ({children}:ReactNode)