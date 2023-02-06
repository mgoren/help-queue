import React, { useContext } from 'react';
import './Footer.scss';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeText = theme === 'dark' ? 'light' : 'dark';
  const buttonText = theme === 'dark' ? 'turn on the lights' : 'make it dark'

  return (
    <section className='footer'>
      <div className='d-flex justify-content-center flex-nowrap'>
        <button className={`btn btn-$(theme)`} onClick={()=>setTheme(themeText)}>{buttonText}</button>
      </div>
    </section>
  );
}