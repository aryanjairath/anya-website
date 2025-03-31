import './about.css'
import './bubble.css'
import Pdf from '../../assets/Resume (4).pdf'
import Pic from '../../../src/assets/main-pic.jpeg';
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
                <button><Link to="/work" className="button-link">My Experience</Link></button>
              
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={Pic} style={{width:'25%', height: '25%', borderRadius:'1rem'}} />
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