import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/images/desktop/logo.svg';

const Navbar = ({ onHomeClick, onAboutClick, onServiceClick, onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (callback) => {
    callback();
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" />

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><button onClick={() => handleClick(onHomeClick)}>Home</button></li>
        <li><button onClick={() => handleClick(onAboutClick)}>About</button></li>
        <li><button onClick={() => handleClick(onServiceClick)}>Services</button></li>
        <li><button onClick={() => handleClick(onContactClick)}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
