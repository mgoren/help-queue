import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import jackImage from '../../img/jack.jpg';
import './Header.scss';
import AlertPopup from '../AlertPopup'
import { ColorThemeContext } from '../../contexts/ColorThemeContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.js';
import useAlert from '../../hooks/useAlert';

export default function Header() {
  const url = useLocation().pathname;
  const { colorTheme } = useContext(ColorThemeContext);
  const { setAlert } = useAlert();

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setAlert("You have successfully signed out!", 'alert-success');
      }).catch(function(err) {
        setAlert(`There was an error signing out: ${err.message}!`, 'alert-danger');
      });
  }

  return (
    <section className='header'>
      <nav className={`navbar navbar-expand-lg navbar-${colorTheme}`}>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {auth.currentUser ? auth.currentUser.email : 'Account'}
                </span>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  {!auth.currentUser && <li><Link to='/register' className={`dropdown-item ${url === '/register' && 'active'}`}>Register</Link></li>}
                  {!auth.currentUser && <li><Link to='/sign-in' className={`dropdown-item ${url === '/sign-in' && 'active'}`}>Sign In</Link></li>}
                  {auth.currentUser && <li className='sign-out dropdown-item' onClick={doSignOut}>Sign out</li>}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <AlertPopup />

      {/* <img src={jackImage} height="250" alt="Jack Terricloth" /> */}
    </section>
  );
}