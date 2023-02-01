import React from 'react';
import './App.css';
import Header from '../Header'
import TicketControl from '../TicketControl'

export default function App() {
  return (
    <div className='container'>
      <Header />
      <TicketControl />
    </div>
  );
}