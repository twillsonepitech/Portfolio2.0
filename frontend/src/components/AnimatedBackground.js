import React, { useEffect, useRef } from 'react';
import { random } from 'animejs';

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
    const color = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
    const dotColor = isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.12)';

    // Branch Tree System
    class Branch {
      constructor(x, y, angle, length, thickness, generation = 0) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.length = length;
        this.thickness = thickness;
        this.generation = generation;
        this.growth = 0;
        this.maxGrowth = 1;
        this.children = [];
      }

      grow(ctx) {
        if (this.growth < this.maxGrowth) {
          // Much slower growth - reduced from 0.02 to 0.005
          this.growth += 0.005;
        }

        const endX = this.x + Math.cos(this.angle) * this.length * this.growth;
        const endY = this.y + Math.sin(this.angle) * this.length * this.growth;

        // Smooth gradient stroke
        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)');

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Draw dot at the end with glow effect
        if (this.growth >= this.maxGrowth) {
          // Glow
          ctx.beginPath();
          ctx.arc(endX, endY, this.thickness * 2.5, 0, Math.PI * 2);
          const glowGradient = ctx.createRadialGradient(endX, endY, 0, endX, endY, this.thickness * 2.5);
          glowGradient.addColorStop(0, dotColor);
          glowGradient.addColorStop(1, 'transparent');
          ctx.fillStyle = glowGradient;
          ctx.fill();

          // Core dot
          ctx.beginPath();
          ctx.arc(endX, endY, this.thickness * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }

        return { x: endX, y: endY, grown: this.growth >= this.maxGrowth };
      }

      split() {
        if (this.generation >= 5) return [];

        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;

        const branches = Math.floor(random(2, 3));
        const newBranches = [];

        for (let i = 0; i < branches; i++) {
          const angleOffset = (Math.random() - 0.5) * Math.PI / 4;
          const newAngle = this.angle + angleOffset;
          const newLength = this.length * random(0.65, 0.8);
          const newThickness = this.thickness * 0.75;

          newBranches.push(
            new Branch(
              endX,
              endY,
              newAngle,
              newLength,
              newThickness,
              this.generation + 1
            )
          );
        }

        return newBranches;
      }
    }

    // Create tree systems from sides
    const trees = [];
    const treesPerSide = 4;

    // Left side trees
    for (let i = 0; i < treesPerSide; i++) {
      const startX = random(20, 100); // Start from left edge
      const startY = (canvas.height / (treesPerSide + 1)) * (i + 1);
      const initialAngle = random(-Math.PI / 6, Math.PI / 6); // Grow towards right
      
      trees.push({
        root: new Branch(startX, startY, initialAngle, random(60, 100), 2.5, 0),
        branches: [],
        side: 'left'
      });
    }

    // Right side trees
    for (let i = 0; i < treesPerSide; i++) {
      const startX = canvas.width - random(20, 100); // Start from right edge
      const startY = (canvas.height / (treesPerSide + 1)) * (i + 1);
      const initialAngle = Math.PI + random(-Math.PI / 6, Math.PI / 6); // Grow towards left
      
      trees.push({
        root: new Branch(startX, startY, initialAngle, random(60, 100), 2.5, 0),
        branches: [],
        side: 'right'
      });
    }

    // Initialize first generation
    trees.forEach(tree => {
      tree.branches.push(tree.root);
    });

    // Dot Wave System
    const dots = [];
    for (let i = 0; i < 80; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseY: Math.random() * canvas.height,
        radius: random(1, 2.5),
        speed: random(0.0005, 0.0015), // Slower wave movement
        amplitude: random(15, 35),
        phase: Math.random() * Math.PI * 2,
        opacity: random(0.15, 0.35)
      });
    }

    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dot waves - very slow
      time += 0.005; // Reduced from 0.01
      dots.forEach(dot => {
        dot.y = dot.baseY + Math.sin(time * dot.speed * 100 + dot.phase) * dot.amplitude;
        
        // Subtle glow on dots
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius * 2);
        gradient.addColorStop(0, isDark 
          ? `rgba(255, 255, 255, ${dot.opacity})` 
          : `rgba(0, 0, 0, ${dot.opacity})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw and grow branches
      trees.forEach(tree => {
        const newBranches = [];
        
        tree.branches.forEach(branch => {
          const result = branch.grow(ctx);
          
          // Less frequent splitting for smoother effect
          if (result.grown && branch.generation < 5 && Math.random() > 0.85) {
            const splits = branch.split();
            newBranches.push(...splits);
          }
        });

        if (newBranches.length > 0) {
          tree.branches.push(...newBranches);
        }

        // Limit total branches per tree
        if (tree.branches.length > 40) {
          tree.branches = tree.branches.slice(-40);
        }
      });

      // Very slow regeneration
      if (Math.random() > 0.995) {
        const treeIndex = Math.floor(Math.random() * trees.length);
        const tree = trees[treeIndex];
        
        if (tree.side === 'left') {
          const startX = random(20, 100);
          const startY = random(canvas.height * 0.2, canvas.height * 0.8);
          const initialAngle = random(-Math.PI / 6, Math.PI / 6);
          tree.root = new Branch(startX, startY, initialAngle, random(60, 100), 2.5, 0);
        } else {
          const startX = canvas.width - random(20, 100);
          const startY = random(canvas.height * 0.2, canvas.height * 0.8);
          const initialAngle = Math.PI + random(-Math.PI / 6, Math.PI / 6);
          tree.root = new Branch(startX, startY, initialAngle, random(60, 100), 2.5, 0);
        }
        
        tree.branches = [tree.root];
      }

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