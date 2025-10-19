import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const isDark = document.documentElement.classList.contains('dark');
    const particleCount = 50;
    const particles = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 1}px;
        height: ${Math.random() * 4 + 1}px;
        background: ${isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      containerRef.current.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles floating
    particles.forEach((particle, index) => {
      anime({
        targets: particle,
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        scale: () => anime.random(0.5, 1.5),
        opacity: [
          { value: anime.random(0.1, 0.4), duration: 1000 },
          { value: anime.random(0.1, 0.4), duration: 1000 }
        ],
        duration: () => anime.random(3000, 6000),
        easing: 'easeInOutSine',
        loop: true,
        delay: index * 20,
      });
    });

    // Create flowing lines
    const lineCount = 8;
    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement('div');
      line.className = 'flow-line';
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      line.style.cssText = `
        position: absolute;
        width: 2px;
        height: 0px;
        background: linear-gradient(180deg, 
          transparent, 
          ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)'}, 
          transparent
        );
        left: ${startX}%;
        top: ${startY}%;
        transform-origin: top;
      `;
      containerRef.current.appendChild(line);

      anime({
        targets: line,
        height: [
          { value: 0, duration: 0 },
          { value: anime.random(100, 300), duration: 1500, easing: 'easeOutQuad' },
          { value: 0, duration: 1500, easing: 'easeInQuad' }
        ],
        translateY: () => anime.random(-200, 200),
        translateX: () => anime.random(-50, 50),
        rotate: () => anime.random(-45, 45),
        opacity: [
          { value: 0, duration: 0 },
          { value: 0.8, duration: 750 },
          { value: 0, duration: 750 }
        ],
        loop: true,
        delay: i * 500,
        duration: 4000,
      });
    }

    // Create geometric shapes
    const shapes = ['circle', 'square', 'triangle'];
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('div');
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      const size = Math.random() * 30 + 10;
      
      shape.className = `shape-${shapeType}`;
      shape.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border: 1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        ${shapeType === 'circle' ? 'border-radius: 50%;' : ''}
        ${shapeType === 'triangle' ? 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);' : ''}
      `;
      containerRef.current.appendChild(shape);

      anime({
        targets: shape,
        translateX: () => anime.random(-200, 200),
        translateY: () => anime.random(-200, 200),
        rotate: () => anime.random(0, 360),
        scale: [
          { value: 0.5, duration: 2000 },
          { value: 1.2, duration: 2000 }
        ],
        opacity: [
          { value: 0.05, duration: 2000 },
          { value: 0.2, duration: 2000 }
        ],
        duration: () => anime.random(4000, 8000),
        easing: 'easeInOutQuad',
        loop: true,
        delay: i * 100,
      });
    }

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 0, opacity: 0.3 }}
    />
  );
};

export default AnimatedBackground;