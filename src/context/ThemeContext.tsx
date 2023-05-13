import {
  useMemo,
  useState,
  Dispatch,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
  useCallback
} from "react";
import { darkTheme, lightTheme } from "../../styles/themes/themes";
import { ThemeProvider } from "styled-components"

interface StateProps {
  color: string | undefined
  handleColor: (color: 'dark' | 'light') => void
}

const ThemeContext = createContext({} as StateProps)

export const useTheme = () => useContext(ThemeContext)

const GetThemeOnLocalStorage = () => {
  if (typeof window !== "undefined") {
    const currentTheme = localStorage.getItem("theme")

    if (currentTheme) {
      return JSON.parse(currentTheme)
    }
    return "dark"
  }
}

export const ThemesProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState(GetThemeOnLocalStorage())
  const [theme, setTheme] = useState(darkTheme)

  const handleColor = (color: 'dark' | 'light') => {
    setColor(color)
    localStorage.setItem("theme", JSON.stringify(color));
  }

  const setCurrentTheme = useMemo(() => {
    if (typeof window !== "undefined") {
      color === "light" ? setTheme(lightTheme) : setTheme(darkTheme)
    }
    return theme
  }, [color, theme]);

  return (
    <ThemeContext.Provider value={{ color, handleColor }}>
      <ThemeProvider theme={setCurrentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}