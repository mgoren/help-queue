import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from '../Header';
import Footer from '../Header/Footer.js';
import TicketControl from '../TicketControl';
import Auth from '../Auth';
import { AlertProvider } from '../../contexts/AlertContext'
import { ThemeContext } from '../../contexts/ThemeContext';

export default function App() { 
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <AlertProvider>
        <div className={`rootContainer ${theme}`}>
          <div className='container'>
            <Header />
            <Routes>
              <Route path='/sign-in' element={<Auth />} />
              <Route path='/' element={<TicketControl />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </AlertProvider>
    </Router>
  );
}