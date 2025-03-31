import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './hamburger.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(location)
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <section id="hamburger">
      <Navbar className="sticky-navbar">
        <div className="menu-container" ref = {menuRef}>
          <button className="hamburger-button" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`menu-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/about" className= {`navbar-link ${location.pathname === '/about' ? 'zed' :''}`}>About</Link></li>
            <li><Link to="/education" className= {`navbar-link ${location.pathname === '/education' ? 'zed' :''}`}>Education</Link></li>
            <li><Link to="/work" className= {`navbar-link ${location.pathname === '/work' ? 'zed' :''}`}>Work</Link></li>
            <li><Link to="/contact" className= {`navbar-link ${location.pathname === '/contact' ? 'zed' :''}`}>Contact Me</Link></li>

          </ul>
        </div>
      </Navbar>
    </section>
  );
};

export default Hamburger;
