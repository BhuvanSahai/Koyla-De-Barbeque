import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // Check local storage or default to dark mode (as originally requested)
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('koyla-theme');
        return savedTheme ? savedTheme : 'dark';
    });

    useEffect(() => {
        // Apply theme to body
        document.body.className = theme === 'light' ? 'light-mode' : '';
        // Save to local storage
        localStorage.setItem('koyla-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
