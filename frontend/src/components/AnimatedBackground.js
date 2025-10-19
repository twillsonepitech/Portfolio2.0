import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const isDark = document.documentElement.classList.contains('dark');

    // Dot Wave System - full page coverage
    const dots = [];
    const dotCount = 150; // More dots for full coverage
    
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseY: Math.random() * canvas.height,
        baseX: Math.random() * canvas.width,
        radius: Math.random() * 2 + 1,
        speedY: Math.random() * 0.001 + 0.0005, // Vertical wave speed
        speedX: Math.random() * 0.0005 + 0.0002, // Horizontal drift speed
        amplitudeY: Math.random() * 30 + 20, // Vertical wave amplitude
        amplitudeX: Math.random() * 20 + 10, // Horizontal drift amplitude
        phaseY: Math.random() * Math.PI * 2,
        phaseX: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.3 + 0.2
      });
    }

    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update dark mode state
      const currentDark = document.documentElement.classList.contains('dark');

      // Draw dot waves across entire page
      time += 0.01;
      
      dots.forEach(dot => {
        // Wave motion in Y axis
        dot.y = dot.baseY + Math.sin(time * dot.speedY * 100 + dot.phaseY) * dot.amplitudeY;
        
        // Gentle drift in X axis
        dot.x = dot.baseX + Math.sin(time * dot.speedX * 100 + dot.phaseX) * dot.amplitudeX;
        
        // Keep dots within canvas bounds
        if (dot.x < 0) dot.baseX = canvas.width;
        if (dot.x > canvas.width) dot.baseX = 0;
        if (dot.y < 0) dot.baseY = canvas.height;
        if (dot.y > canvas.height) dot.baseY = 0;
        
        // Draw dot with subtle glow
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius * 3);
        gradient.addColorStop(0, currentDark 
          ? `rgba(255, 255, 255, ${dot.opacity})` 
          : `rgba(0, 0, 0, ${dot.opacity})`);
        gradient.addColorStop(0.5, currentDark 
          ? `rgba(255, 255, 255, ${dot.opacity * 0.5})` 
          : `rgba(0, 0, 0, ${dot.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = currentDark 
          ? `rgba(255, 255, 255, ${dot.opacity * 1.2})` 
          : `rgba(0, 0, 0, ${dot.opacity * 1.2})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.5 }}
    />
  );
};

export default AnimatedBackground;