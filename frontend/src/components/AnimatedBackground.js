import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Line {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 200 + 100;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Wrap around screen
        if (this.x < -this.length) this.x = canvas.width + this.length;
        if (this.x > canvas.width + this.length) this.x = -this.length;
        if (this.y < -this.length) this.y = canvas.height + this.length;
        if (this.y > canvas.height + this.length) this.y = -this.length;
      }

      draw(isDark) {
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;

        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
        const color = isDark ? '255, 255, 255' : '0, 0, 0';
        gradient.addColorStop(0, `rgba(${color}, 0)`);
        gradient.addColorStop(0.5, `rgba(${color}, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }

    // Create lines
    const lines = [];
    for (let i = 0; i < 15; i++) {
      lines.push(new Line());
    }

    // Animation loop
    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Clear canvas with fade effect
      ctx.fillStyle = isDark ? 'rgba(15, 15, 15, 0.05)' : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw lines
      lines.forEach(line => {
        line.update();
        line.draw(isDark);
      });

      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedBackground;