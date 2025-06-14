import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Generate multiple shapes with different animations */}
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="floating-shape"
          style={{
            '--delay': `${Math.random() * 10}s`,
            '--duration': `${10 + Math.random() * 20}s`,
            '--scale': `${0.5 + Math.random() * 1.5}`,
            '--start-pos': `${Math.random() * 100}%`,
            '--hue': `${Math.random() * 360}deg`,
          }}
        />
      ))}

      {/* Animated gradient overlay */}
      <div className="gradient-overlay"></div>

      {/* Interactive particles */}
      <div className="particles">
        {[...Array(50)].map((_, index) => (
          <div
            key={`particle-${index}`}
            className="particle"
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--duration': `${2 + Math.random() * 4}s`,
              '--delay': `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated grid */}
      <div className="grid-overlay">
        {[...Array(100)].map((_, index) => (
          <div
            key={`grid-${index}`}
            className="grid-cell"
            style={{
              '--delay': `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground; 