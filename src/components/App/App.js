import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from '../Header';
import Footer from '../Header/Footer.js';
import TicketControl from '../TicketControl';
import Register from '../Auth/Register.js';
import SignIn from '../Auth/SignIn.js';
import { AlertProvider } from '../../contexts/AlertContext'
import { ThemeContext } from '../../contexts/ThemeContext';

export default function App() { 
  const { theme } = useContext(ThemeContext);
  const [ user, setUser ] = useState(null);

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
            <Footer />
          </div>
        </div>
      </AlertProvider>
    </Router>
  );
}