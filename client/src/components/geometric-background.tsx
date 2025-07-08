import { useEffect, useRef } from "react";

export default function GeometricBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;

    const geometricBg = backgroundRef.current;
    const particleCount = 50;
    const particles: Array<{
      element: HTMLDivElement;
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      
      geometricBg.appendChild(particle);
      particles.push({
        element: particle,
        x: parseFloat(particle.style.left),
        y: parseFloat(particle.style.top),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    // Animate particles
    function animateParticles() {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around screen
        if (particle.x < 0 || particle.x > 100) particle.vx *= -1;
        if (particle.y < 0 || particle.y > 100) particle.vy *= -1;
        
        particle.element.style.left = particle.x + '%';
        particle.element.style.top = particle.y + '%';
      });
      
      requestAnimationFrame(animateParticles);
    }
    
    animateParticles();

    return () => {
      particles.forEach(particle => {
        particle.element.remove();
      });
    };
  }, []);

  return <div ref={backgroundRef} className="geometric-bg" />;
}
