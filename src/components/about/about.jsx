import './about.css'
import Pdf from 'C:/Users/Owner/Desktop/PersonalProjects/anya-website/src/assets/Regression Methods - Assignment 9.pdf'
import { useState } from "react";

const About = () => {
    const handleResume = () => {
        window.open(Pdf);
    };
    const [activeNav, setActiveNav] = useState('#about');

    return (
        <section id = "about">
            <h1>Anya Jairath</h1>
            <div className="about-container">
                <button onClick={handleResume}>Resume</button>
                <button 
  onClick={() => {
    setActiveNav('#work');
    const section = document.querySelector('#work');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className={activeNav === '#work' ? 'active' : ''}
>
  My Experience
</button>
            </div>
        </section>
    )
}
export default About