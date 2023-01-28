import React from 'react';
import jackImage from "../img/jack.jpg";

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={jackImage} height="250" alt="Jack Terricloth" />
      <hr/>
    </React.Fragment>
  );
}

export default Header;