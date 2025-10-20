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

    // Gradient Orbs System
    class Orb {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 300 + 200;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.hue = Math.random() * 60 + 200; // Blue-ish hues
        this.opacity = Math.random() * 0.15 + 0.05;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < -this.radius || this.x > canvas.width + this.radius) {
          this.speedX *= -1;
        }
        if (this.y < -this.radius || this.y > canvas.height + this.radius) {
          this.speedY *= -1;
        }
      }

      draw(ctx, isDark) {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );

        if (isDark) {
          gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, ${this.opacity})`);
          gradient.addColorStop(0.5, `hsla(${this.hue}, 50%, 40%, ${this.opacity * 0.5})`);
          gradient.addColorStop(1, 'transparent');
        } else {
          gradient.addColorStop(0, `hsla(${this.hue}, 60%, 85%, ${this.opacity})`);
          gradient.addColorStop(0.5, `hsla(${this.hue}, 40%, 75%, ${this.opacity * 0.5})`);
          gradient.addColorStop(1, 'transparent');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Subtle Grid Lines
    class GridLine {
      constructor(isVertical) {
        this.isVertical = isVertical;
        this.position = Math.random() * (isVertical ? canvas.width : canvas.height);
        this.offset = 0;
        this.speed = Math.random() * 0.1 + 0.05;
      }

      update() {
        this.offset += this.speed;
        if (this.offset > 20) this.offset = 0;
      }

      draw(ctx, isDark) {
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)';
        ctx.lineWidth = 1;
        ctx.setLineDash([10, 10]);
        ctx.lineDashOffset = -this.offset;

        ctx.beginPath();
        if (this.isVertical) {
          ctx.moveTo(this.position, 0);
          ctx.lineTo(this.position, canvas.height);
        } else {
          ctx.moveTo(0, this.position);
          ctx.lineTo(canvas.width, this.position);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Create orbs
    const orbs = [];
    for (let i = 0; i < 5; i++) {
      orbs.push(new Orb());
    }

    // Create grid lines
    const gridLines = [];
    for (let i = 0; i < 8; i++) {
      gridLines.push(new GridLine(true)); // vertical
      gridLines.push(new GridLine(false)); // horizontal
    }

    // Animation loop
    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Clear with subtle background
      ctx.fillStyle = isDark ? 'rgba(15, 15, 15, 0.1)' : 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update grid lines
      gridLines.forEach(line => {
        line.update();
        line.draw(ctx, isDark);
      });

      // Draw and update orbs
      orbs.forEach(orb => {
        orb.update();
        orb.draw(ctx, isDark);
      });

      time += 0.01;
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
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedBackground;