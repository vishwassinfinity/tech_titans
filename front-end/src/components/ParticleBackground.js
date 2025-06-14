import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function ParticleBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: '#F9FBFF' } },
        particles: {
          number: { value: 20 },
          size: { value: { min: 1, max: 2 } },
          color: { value: '#5EAAA8' },
          opacity: { value: 0.25 },
          move: { enable: true, speed: 0.6 },
          links: { enable: false },
        },
      }}
    />
  );
}

export default ParticleBackground; 