import React, { useState } from 'react';
import { Navbar } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './hamburger.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="hamburger">
      <Navbar className="sticky-navbar">
        <div className="menu-container">
          <button className="hamburger-button" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`menu-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/about" className="navbar-link">About</Link></li>
            <li><Link to="/education" className="navbar-link">Education</Link></li>
            <li><Link to="/work" className="navbar-link">Work</Link></li>
          </ul>
        </div>
      </Navbar>
    </section>
  );
};

export default Hamburger;
