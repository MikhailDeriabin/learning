import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme, lightTheme, darkTheme } from './themes';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    const [theme, setTheme] = useState<Theme>(lightTheme);
    const [themeType, setThemeType] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
        setThemeType(themeType === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            <StyledThemeProvider theme={themeType === 'light' ? lightTheme : darkTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
