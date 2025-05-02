import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar'; 
import About from './components/About';  
import Skills from './components/Skills';  
import Projects from './components/Projects'; 
import Education from './components/Education';
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import './App.css'; 
import Training from './components/Traning';
import Certifications from './components/Certifications';

function App() {
  useEffect(() => {
    // Scroll animations or any other effect
  }, []);

  return (
    <div className="App">
      {/* <BackgroundEffects/> */}
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Training />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
