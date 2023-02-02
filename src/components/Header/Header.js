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
                <Link to='/' className={`nav-link px-3 ${url === '/' && 'active'}`}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle px-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</span>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><Link to='/sign-in' className={`dropdown-item ${url === '/sign-in' && 'active'}`}>Sign In</Link></li>
              <li><Link to='/sign-in' className={`dropdown-item ${url === '/sign-in' && 'active'}`}>Register</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      <AlertPopup />

      <img src={jackImage} height="250" alt="Jack Terricloth" />
      <hr/>
    </section>
  );
}