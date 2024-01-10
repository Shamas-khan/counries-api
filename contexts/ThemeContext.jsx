import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const[isDark, isNotDark] = useState(JSON.parse(localStorage.getItem('DarkMode')))

    return(
        <ThemeContext.Provider value={[isDark, isNotDark]}>
            {children}
        </ThemeContext.Provider>
    )
}