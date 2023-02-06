import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from '../Header';
import TicketControl from '../TicketControl';
import Register from '../Auth/Register.js';
import SignIn from '../Auth/SignIn.js';
import { AlertProvider } from '../../contexts/AlertContext'
import { ThemeContext } from '../../contexts/ThemeContext';

export default function App() { 
  const { theme, setTheme } = useContext(ThemeContext);
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setTheme(e.matches ? 'dark' : 'light'));

    // Setup dark/light mode for the first time
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, [setTheme]);
  
  return (
    <Router>
      <AlertProvider>
        <div className={`rootContainer theme-${theme}`}>
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