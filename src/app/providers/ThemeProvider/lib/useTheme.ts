import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const changedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    
    setTheme(changedTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, changedTheme);
  };

  return { theme, toggleTheme };
}
