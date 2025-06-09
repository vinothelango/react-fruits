import React, { useState } from 'react'
import './Navbar.css'

import Logo from "../../assets/images/desktop/logo.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
      <nav className="navbar">
      <img src={Logo} alt="" color='#00686a'/>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

  )
}
  
export default Navbar