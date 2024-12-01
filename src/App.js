import logo from './logo.svg';
import './App.css';
import About from './components/about/about';
import Education from './components/education/education';
import Work from './components/work/work';
import Hamburger from './components/hamburgermenu/hamburger';
function App() {
  return (
    <div className="App">
      <Hamburger />
      <About />
      <Education />
      <Work />
    </div>
  );
}

export default App;
