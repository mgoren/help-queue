import React, { useContext } from 'react';
import './Footer.scss';
import { ColorThemeContext } from '../../contexts/ColorThemeContext';

export default function Footer() {
  const { colorTheme, setColorTheme } = useContext(ColorThemeContext);
  const themeText = colorTheme === 'dark' ? 'light' : 'dark';
  const buttonText = colorTheme === 'dark' ? 'turn on the lights' : 'make it dark'

  return (
    <section className='footer'>
      <div className='d-flex justify-content-center flex-nowrap'>
        <button className={`btn btn-$(colorTheme)`} onClick={()=>setColorTheme(themeText)}>{buttonText}</button>
      </div>
    </section>
  );
}