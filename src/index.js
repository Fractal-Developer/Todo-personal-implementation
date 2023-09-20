import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';
export const ThemeContext = createContext(null);

document.documentElement.setAttribute('data-theme', 'dark');

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <ThemeContext.Provider value="light">
            <App />
        </ThemeContext.Provider>
    );
