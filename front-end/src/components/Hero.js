import React, { useEffect, useRef } from 'react';
import { TextScramble } from '../utils/animations';

const Hero = () => {
  const titleRef = useRef(null);
  const scrambleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && !scrambleRef.current) {
      scrambleRef.current = new TextScramble(titleRef.current);
      scrambleRef.current.setText('Welcome to MindWave');
    }
  }, []);

  return (
    <div className="hero-section">
      {/* Parallax background */}
      <div className="parallax-bg parallax" data-speed="0.5">
        <div className="gradient-overlay"></div>
      </div>

      {/* Hero content */}
      <div className="hero-content reveal-on-scroll">
        <h1 ref={titleRef} className="hero-title magnetic-button">
          Welcome to MindWave
        </h1>
        
        <p className="hero-subtitle fade-in-up">
          Your personal mental wellness companion
        </p>
        
        <div className="cta-container stagger-children">
          <button className="button button-primary hover-lift hover-glow">
            Get Started
          </button>
          <button className="button button-outline hover-lift">
            Learn More
          </button>
        </div>

        {/* Feature cards */}
        <div className="feature-grid">
          {['Track Mood', 'Set Goals', 'Get Support', 'Stay Mindful'].map((feature, index) => (
            <div 
              key={feature}
              className="feature-card card hover-lift reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3>{feature}</h3>
              <div className="shimmer">
                <p>Experience the power of mental wellness tracking and support.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator fade-in-up">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Hero; 