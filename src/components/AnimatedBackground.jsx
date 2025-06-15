import React, { useRef, useEffect } from 'react';

const NUM_CIRCLES = 18;
const MIN_RADIUS = 2;
const MAX_RADIUS = 4;
const LINE_DISTANCE = 250;
const COLORS = ['#eb7161', '#fff'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createCircle(width, height) {
  return {
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    r: randomBetween(MIN_RADIUS, MAX_RADIUS),
    dx: randomBetween(-0.7, 0.7),
    dy: randomBetween(-0.7, 0.7),
    color: COLORS[Math.floor(Math.random() * COLORS.length)]
  };
}

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create circles
    circlesRef.current = Array.from({ length: NUM_CIRCLES }, () => createCircle(width, height));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines between close circles
      for (let i = 0; i < circlesRef.current.length; i++) {
        for (let j = i + 1; j < circlesRef.current.length; j++) {
          const a = circlesRef.current[i];
          const b = circlesRef.current[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINE_DISTANCE) {
            ctx.save();
            ctx.globalAlpha = 1 - dist / LINE_DISTANCE;
            ctx.strokeStyle = '#ff7e6b';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw circles
      for (const c of circlesRef.current) {
        ctx.save();
        ctx.globalAlpha = 0.56;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
        ctx.fillStyle = c.color;
        ctx.shadowColor = c.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    function update() {
      for (const c of circlesRef.current) {
        c.x += c.dx;
        c.y += c.dy;
        // Bounce off edges
        if (c.x < 0 || c.x > width) c.dx *= -1;
        if (c.y < 0 || c.y > height) c.dy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Reposition circles within new bounds
      circlesRef.current.forEach(c => {
        c.x = Math.max(0, Math.min(c.x, width));
        c.y = Math.max(0, Math.min(c.y, height));
      });
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default AnimatedBackground; 