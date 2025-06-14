import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CheckIn from './pages/CheckIn';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import ParticleBackground from './components/ParticleBackground';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
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
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;
