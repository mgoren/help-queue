import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import App from './components/App';
import { ColorThemeProvider } from "./contexts/ColorThemeContext";
TimeAgo.addDefaultLocale(en)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorThemeProvider>
      <App />
    </ColorThemeProvider>
  </React.StrictMode>
);