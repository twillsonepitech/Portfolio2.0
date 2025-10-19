import React, { useEffect, useRef } from 'react';
import { animate, random, stagger } from 'animejs';

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
    const color = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)';
    const dotColor = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.15)';

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
          this.growth += 0.02;
        }

        const endX = this.x + Math.cos(this.angle) * this.length * this.growth;
        const endY = this.y + Math.sin(this.angle) * this.length * this.growth;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = color;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Draw dot at the end
        if (this.growth >= this.maxGrowth) {
          ctx.beginPath();
          ctx.arc(endX, endY, this.thickness * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }

        return { x: endX, y: endY, grown: this.growth >= this.maxGrowth };
      }

      split() {
        if (this.generation >= 4) return [];

        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;

        const branches = Math.floor(random(2, 4));
        const newBranches = [];

        for (let i = 0; i < branches; i++) {
          const angleOffset = (Math.random() - 0.5) * Math.PI / 3;
          const newAngle = this.angle + angleOffset;
          const newLength = this.length * random(0.6, 0.85);
          const newThickness = this.thickness * 0.7;

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

    // Create multiple tree systems
    const trees = [];
    const treeCount = 6;

    for (let i = 0; i < treeCount; i++) {
      const startX = (canvas.width / (treeCount + 1)) * (i + 1);
      const startY = canvas.height * (Math.random() * 0.4 + 0.3);
      const initialAngle = (Math.random() - 0.5) * Math.PI / 4;
      
      trees.push({
        root: new Branch(startX, startY, initialAngle, random(80, 120), 3, 0),
        branches: [],
        growthQueue: []
      });
    }

    // Initialize first generation
    trees.forEach(tree => {
      tree.branches.push(tree.root);
    });

    // Dot Wave System
    const dots = [];
    for (let i = 0; i < 100; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseY: Math.random() * canvas.height,
        radius: random(1, 3),
        speed: random(0.001, 0.003),
        amplitude: random(20, 50),
        phase: Math.random() * Math.PI * 2,
        opacity: random(0.2, 0.5)
      });
    }

    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dot waves
      time += 0.01;
      dots.forEach(dot => {
        dot.y = dot.baseY + Math.sin(time * dot.speed * 100 + dot.phase) * dot.amplitude;
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${dot.opacity})` 
          : `rgba(0, 0, 0, ${dot.opacity})`;
        ctx.fill();
      });

      // Draw and grow branches
      trees.forEach(tree => {
        const newBranches = [];
        
        tree.branches.forEach(branch => {
          const result = branch.grow(ctx);
          
          if (result.grown && branch.generation < 4 && Math.random() > 0.7) {
            const splits = branch.split();
            newBranches.push(...splits);
          }
        });

        if (newBranches.length > 0) {
          tree.branches.push(...newBranches);
        }

        // Limit total branches per tree
        if (tree.branches.length > 50) {
          tree.branches = tree.branches.slice(-50);
        }
      });

      // Periodically reset some trees
      if (Math.random() > 0.99) {
        const treeIndex = Math.floor(Math.random() * trees.length);
        const tree = trees[treeIndex];
        const startX = (canvas.width / (treeCount + 1)) * (treeIndex + 1);
        const startY = canvas.height * (Math.random() * 0.4 + 0.3);
        const initialAngle = (Math.random() - 0.5) * Math.PI / 4;
        
        tree.root = new Branch(startX, startY, initialAngle, random(80, 120), 3, 0);
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
      style={{ zIndex: 0, opacity: 0.4 }}
    />
  );
};

export default AnimatedBackground;