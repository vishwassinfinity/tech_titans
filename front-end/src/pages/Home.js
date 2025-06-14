import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaHeart, FaMeditation } from 'react-icons/fa';
import AnimatedBackground from '../components/AnimatedBackground';
import InteractiveCard from '../components/InteractiveCard';
import './Home.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const features = [
    {
      title: 'Mind Tracking',
      description: 'Track your mental state and emotional patterns with advanced analytics',
      icon: <FaBrain />,
      color: '#4F46E5'
    },
    {
      title: 'Progress Analytics',
      description: 'Visualize your journey with beautiful, interactive charts and insights',
      icon: <FaChartLine />,
      color: '#2563EB'
    },
    {
      title: 'Emotional Support',
      description: 'Get personalized support and guidance when you need it most',
      icon: <FaHeart />,
      color: '#7C3AED'
    },
    {
      title: 'Mindfulness Tools',
      description: 'Access a suite of meditation and mindfulness exercises',
      icon: <FaMeditation />,
      color: '#EC4899'
    }
  ];

  return (
    <div className="home-page">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="hero-title"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          Welcome to MindWave
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Your personal mental wellness companion
        </motion.p>
        
        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button className="button button-primary">Get Started</button>
          <button className="button button-outline">Learn More</button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="features">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Discover MindWave
        </motion.h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <InteractiveCard {...feature} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="stats-grid">
          {[
            { number: '10K+', label: 'Active Users' },
            { number: '500K+', label: 'Mood Entries' },
            { number: '98%', label: 'User Satisfaction' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="stat-card"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 