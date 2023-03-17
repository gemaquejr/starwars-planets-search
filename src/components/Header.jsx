import React from 'react';
import logo from '../assets/star-wars-logo.png';
import './styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-title-container">
        <img src={ logo } alt="star wars logo" className="star-wars-logo" />
      </div>
    </header>
  );
}

export default Header;
