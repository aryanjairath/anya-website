import './about.css'
import './bubble.css'
import Pdf from '../../assets/Regression Methods - Assignment 9.pdf'
import { useState } from "react";
import { Link } from 'react-router-dom';

const About = () => {
    const handleResume = () => {
        window.open(Pdf);
    };

    return (
        <section id = "about">
            <h1>Anya Jairath</h1>
            <div className="about-container">
                <button onClick={handleResume}>Resume</button>
                <Link to="/work" className="button-link">My Experience</Link>

              
            </div>
            <div className="text-bubble">
            <div className="other">
              <h4>Hey! Tell me about yourself!</h4>
            </div>
            <div className="user">
              <h4>
                Hi! I am Anya Jairath. I am an aspiring finance major with a
                background in accounting, business organization & management, and
                entrepreneurship. I currently attend SBHS. In my free time, I love
                dancing and hanging out with friends.
              </h4>
            </div>
          </div>
        </section>
    )
}
export default About