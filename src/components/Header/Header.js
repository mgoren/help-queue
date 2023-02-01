import React from 'react';
import jackImage from "../../img/jack.jpg";
import './Header.css';

export default function Header() {
  return (
    <section className='header'>
      <h1>Help Queue</h1>
      <img src={jackImage} height="250" alt="Jack Terricloth" />
      <hr/>
    </section>
  );
}