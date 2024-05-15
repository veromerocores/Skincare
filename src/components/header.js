import React, { useState, useEffect } from 'react';
import BasicMenu from './menu';
import DarkModes from '../components/darkMode';

export default function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDarkMode ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <header className={`header ${theme}`}>
            <a role='button' tabIndex={0} href="/home">FroGa</a>
            <div className='header-right'>
                <DarkModes theme={theme} toggleTheme={toggleTheme} />
                <BasicMenu />
            </div>
        </header>
    );
}
