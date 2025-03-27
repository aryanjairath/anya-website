import './about.css'
import './bubble.css'
import Pdf from '../../assets/Regression Methods - Assignment 9.pdf'
import { useState } from "react";
import data from './textbubbledata'
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
            {data.map(item => (
                <div className = {item.type}>
                  <h4>
                    {item.content}
                  </h4>
                </div>
            ))}

          </div>
        </section>
    )
}
export default About