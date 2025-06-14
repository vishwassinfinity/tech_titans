import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import CheckIn from './pages/CheckIn';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import ParticleBackground from './components/ParticleBackground';
import { AnimatePresence } from 'framer-motion';
import { initScrollAnimations, initParallax, initMagneticButtons } from './utils/animations';
import './styles/animations.css';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize animations
    initScrollAnimations();
    initParallax();
    initMagneticButtons();

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('scroll', initParallax);
    };
  }, []);

  return (
    <Router>
      <Layout>
        <ParticleBackground />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkin" element={<CheckIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;
