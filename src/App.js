import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Import components and pages
import NavBar from './components/NavBar';
import Project from './pages/Project';
import Achievement from './pages/Achievement';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';

// Cursor import
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(1500px_circle_at_50%_10%,_#0f172a,_#000000_50%)]">
      <AnimatedCursor
        innerSize={4}
        outerSize={30}
        color="255, 105, 180"
        outerAlpha={2}
        innerScale={1}
        outerScale={2}
        outerStyle={{
          border: '2px solid #ff69b4',
          background: 'transparent',
        }}
        innerStyle={{
          backgroundColor: '#ff69b4',
        }}
      />

      {/* Navigation */}
      <NavBar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
