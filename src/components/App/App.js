import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../Header'
import TicketControl from '../TicketControl'
import SignIn from "../SignIn";
import { AlertProvider } from '../../AlertContext'

export default function App() {
  return (
    <div className='container'>
      <Router>
        <AlertProvider>
          <Header />
          <Routes>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/' element={<TicketControl />} />
          </Routes>
        </AlertProvider>
      </Router>
    </div>
  );
}