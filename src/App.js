import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hamburger from './components/hamburgermenu/hamburger';
import About from './components/about/about';
import Education from './components/education/education';
import Work from './components/work/work';
import Contact from './components/contact/contact';
const App = () => {
  return (
    <Router>
      <Hamburger />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="contact" element = {<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;
