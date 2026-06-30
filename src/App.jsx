import React from 'react';
import Navbar from './components/Navbar';
import ScrollyCanvas from './components/ScrollyCanvas';
import Projects from './components/Projects';
import DeveloperStats from './components/DeveloperStats';
import Journey from './components/Journey';
import Resume from './components/Resume';
import NoiseOverlay from './components/NoiseOverlay';
import EngineeringToolkit from './components/EngineeringToolkit';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeetCodeHeatmap from './components/Activity/LeetCodeHeatmap';

function App() {
  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white/30 selection:text-white antialiased">
      <NoiseOverlay />
      <Navbar />
      <ScrollyCanvas />
      
      <div id="projects">
        <Projects />
      </div>
      
      {/* <Achievements /> */}
      <DeveloperStats />
      <LeetCodeHeatmap />
      <EngineeringToolkit />
      {/* <Journey /> */}

      <About />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
