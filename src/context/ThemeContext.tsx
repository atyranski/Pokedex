import { createContext, useContext } from "react";

export type ThemeContent = {
    theme: string,
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContent>({
    theme: 'light',
    setTheme: () => {},
})
    
export const useThemeContext = () => useContext(ThemeContext);