import React, { useContext } from 'react';
import './Header.scss';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeText = theme === 'dark' ? 'light' : 'dark';

  return (
    <section className='footer'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav center-justify-content mb-2 mb-lg-0">
              <li className="nav-item">
                <span className='toggleTheme nav-link px-3' onClick={()=>setTheme(themeText)}>Switch to {themeText} mode</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}