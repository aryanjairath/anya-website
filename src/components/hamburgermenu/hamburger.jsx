import { useState } from "react";
import "@blueprintjs/core/lib/css/blueprint.css"; 
import { Navbar } from "@blueprintjs/core";
import './hamburger.css';

const Hamburger = () => {
  const [activeNav, setActiveNav] = useState('#about');

  return (
    <section id="hamburger">
      <Navbar className="sticky-navbar">
        <a 
          href="#about" 
          onClick={() => setActiveNav('#about')} 
          className={activeNav === '#about' ? 'active' : ''}
        >
          About
        </a>
        <a 
          href="#education" 
          onClick={() => setActiveNav('#education')} 
          className={activeNav === '#education' ? 'active' : ''}
        >
          Education
        </a>
        <a 
          href="#work" 
          onClick={() => setActiveNav('#work')} 
          className={activeNav === '#work' ? 'active' : ''}
        >
          Work
        </a>
      </Navbar> 
    </section>
  );
};

export default Hamburger;
