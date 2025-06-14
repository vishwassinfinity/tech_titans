import React, { useRef, useEffect } from 'react';
import './InteractiveCard.css';

const InteractiveCard = ({ title, description, icon, color }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      // Apply the rotation and other effects
      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
      `;

      // Move the glow effect
      glow.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.1) 20%,
          rgba(255, 255, 255, 0) 50%
        )
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      glow.style.background = 'none';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="card-container">
      <div className="interactive-card" ref={cardRef} style={{ '--card-color': color }}>
        <div className="card-glow" ref={glowRef}></div>
        <div className="card-content">
          <div className="card-icon">{icon}</div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-shine"></div>
          <div className="card-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard; 