import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from '../Header';
import TicketControl from '../TicketControl';
import Register from '../Auth/Register.js';
import SignIn from '../Auth/SignIn.js';
import { AlertProvider } from '../../contexts/AlertContext'
import { ColorThemeContext } from '../../contexts/ColorThemeContext';

export default function App() { 
  const { colorTheme, setColorTheme } = useContext(ColorThemeContext);
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setColorTheme(e.matches ? 'dark' : 'light'));

    // Setup dark/light mode for the first time
    setColorTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, [setColorTheme]);
  
  return (
    <Router>
      <AlertProvider>
        <div className={`rootContainer theme-${colorTheme}`}>
          <div className='container'>
            <Header user={user} />
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/' element={<TicketControl user={user} setUser={setUser} />} />
            </Routes>
          </div>
        </div>
      </AlertProvider>
    </Router>
  );
}