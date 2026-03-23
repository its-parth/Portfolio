import React from 'react';
import ScrollyCanvas from './components/ScrollyCanvas';
import Projects from './components/Projects';
import NoiseOverlay from './components/NoiseOverlay';

function App() {
  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white/30 selection:text-white antialiased">
      <NoiseOverlay />
      <ScrollyCanvas />
      <Projects />
      
      <footer className="py-8 text-center text-sm text-gray-500 bg-[#121212] border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} Parth Magar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
