import { useEffect, useRef } from 'react';

export default function MilkyWayBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star particle system
    interface Star {
      x: number;
      y: number;
      z: number;
      size: number;
      opacity: number;
      vx: number;
      vy: number;
      vz: number;
    }

    const stars: Star[] = [];
    const starCount = 150;

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: Math.random() * 2 + 0.5,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 1;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(0.5, '#1a1f3a');
      gradient.addColorStop(1, '#0f1428');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle nebula clouds
      for (let i = 0; i < 3; i++) {
        const nebula = ctx.createRadialGradient(
          canvas.width * (0.3 + i * 0.2) + Math.sin(time * 0.0001 + i) * 50,
          canvas.height * (0.4 + i * 0.15) + Math.cos(time * 0.00008 + i) * 50,
          0,
          canvas.width * (0.3 + i * 0.2),
          canvas.height * (0.4 + i * 0.15),
          300
        );
        nebula.addColorStop(0, `rgba(106, 90, 205, ${0.03 + i * 0.01})`);
        nebula.addColorStop(0.5, `rgba(72, 52, 212, ${0.01 + i * 0.005})`);
        nebula.addColorStop(1, 'rgba(72, 52, 212, 0)');
        ctx.fillStyle = nebula;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw and update stars
      stars.forEach((star) => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;
        star.z -= star.vz;

        // Reset star if it goes too far back
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Calculate perspective
        const scale = 1000 / star.z;
        const x = (star.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = star.size * scale;

        // Draw star with twinkling effect
        const twinkle = Math.sin(time * 0.01 + star.x + star.y) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(200, 220, 255, ${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for brighter stars
        if (star.size > 0.8) {
          ctx.fillStyle = `rgba(150, 200, 255, ${star.opacity * twinkle * 0.3})`;
          ctx.beginPath();
          ctx.arc(x, y, size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Add subtle milky way band
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.08)';
      ctx.lineWidth = 150;
      ctx.beginPath();
      ctx.quadraticCurveTo(
        canvas.width * 0.25 + Math.sin(time * 0.00005) * 100,
        canvas.height * 0.3,
        canvas.width * 0.75,
        canvas.height * 0.7
      );
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
