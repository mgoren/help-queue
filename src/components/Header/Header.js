import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import jackImage from '../../img/jack.jpg';
import './Header.scss';
import AlertPopup from '../AlertPopup'

export default function Header() {
  const url = useLocation().pathname;

  return (
    <section className='header'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand" href="/">Help Queue</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className={`nav-link ${url === '/' && 'active'}`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/sign-in' className={`nav-link ${url === '/sign-in' && 'active'}`}>Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <AlertPopup />

      <img src={jackImage} height="250" alt="Jack Terricloth" />
      <hr/>
    </section>
  );
}