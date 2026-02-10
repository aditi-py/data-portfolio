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

      // Create gradient background with Milky Way colors
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(0.25, '#1a0f3a');
      gradient.addColorStop(0.5, '#2a1a4a');
      gradient.addColorStop(0.75, '#1a2a4a');
      gradient.addColorStop(1, '#0f1428');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add radial color gradients for nebula effect - Purple nebula
      const nebula1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time * 0.00008) * 100,
        canvas.height * 0.3 + Math.cos(time * 0.00006) * 100,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        500
      );
      nebula1.addColorStop(0, 'rgba(200, 100, 255, 0.15)');
      nebula1.addColorStop(0.5, 'rgba(150, 80, 220, 0.08)');
      nebula1.addColorStop(1, 'rgba(100, 50, 180, 0)');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Blue nebula
      const nebula2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.sin(time * 0.00006) * 80,
        canvas.height * 0.5 + Math.cos(time * 0.00008) * 80,
        0,
        canvas.width * 0.7,
        canvas.height * 0.5,
        400
      );
      nebula2.addColorStop(0, 'rgba(100, 200, 255, 0.12)');
      nebula2.addColorStop(0.5, 'rgba(80, 150, 220, 0.06)');
      nebula2.addColorStop(1, 'rgba(50, 100, 180, 0)');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Pink/Magenta nebula
      const nebula3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.00007) * 120,
        canvas.height * 0.7 + Math.cos(time * 0.00005) * 120,
        0,
        canvas.width * 0.5,
        canvas.height * 0.7,
        450
      );
      nebula3.addColorStop(0, 'rgba(255, 100, 200, 0.1)');
      nebula3.addColorStop(0.5, 'rgba(220, 80, 180, 0.05)');
      nebula3.addColorStop(1, 'rgba(180, 50, 150, 0)');
      ctx.fillStyle = nebula3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add additional subtle nebula clouds for depth
      for (let i = 0; i < 2; i++) {
        const nebula = ctx.createRadialGradient(
          canvas.width * (0.2 + i * 0.6) + Math.sin(time * 0.00009 + i) * 60,
          canvas.height * (0.5 + i * 0.2) + Math.cos(time * 0.00007 + i) * 60,
          0,
          canvas.width * (0.2 + i * 0.6),
          canvas.height * (0.5 + i * 0.2),
          350
        );
        nebula.addColorStop(0, `rgba(150, 100, 255, ${0.04 + i * 0.02})`);
        nebula.addColorStop(0.5, `rgba(100, 70, 200, ${0.02 + i * 0.01})`);
        nebula.addColorStop(1, 'rgba(80, 50, 180, 0)');
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

        // Draw star with twinkling effect and color variation
        const twinkle = Math.sin(time * 0.01 + star.x + star.y) * 0.3 + 0.7;
        const colorVariation = Math.sin(star.x * 0.01 + star.y * 0.01) * 0.5 + 0.5;

        let starColor = 'rgba(200, 220, 255, ';
        if (colorVariation < 0.33) {
          starColor = 'rgba(200, 150, 255, '; // Purple stars
        } else if (colorVariation < 0.66) {
          starColor = 'rgba(150, 200, 255, '; // Blue stars
        } else {
          starColor = 'rgba(200, 220, 255, '; // White stars
        }

        ctx.fillStyle = starColor + (star.opacity * twinkle) + ')';
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for brighter stars
        if (star.size > 0.8) {
          ctx.fillStyle = starColor + (star.opacity * twinkle * 0.3) + ')';
          ctx.beginPath();
          ctx.arc(x, y, size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Add vibrant milky way band with gradient
      const milkyWayGradient = ctx.createLinearGradient(0, canvas.height * 0.3, 0, canvas.height * 0.7);
      milkyWayGradient.addColorStop(0, 'rgba(150, 100, 255, 0.15)');
      milkyWayGradient.addColorStop(0.3, 'rgba(100, 200, 255, 0.2)');
      milkyWayGradient.addColorStop(0.5, 'rgba(100, 150, 255, 0.25)');
      milkyWayGradient.addColorStop(0.7, 'rgba(200, 100, 200, 0.15)');
      milkyWayGradient.addColorStop(1, 'rgba(150, 80, 200, 0.1)');
      ctx.strokeStyle = milkyWayGradient;
      ctx.lineWidth = 200;
      ctx.beginPath();
      ctx.quadraticCurveTo(
        canvas.width * 0.25 + Math.sin(time * 0.00005) * 100,
        canvas.height * 0.3,
        canvas.width * 0.75,
        canvas.height * 0.7
      );
      ctx.stroke();

      // Add secondary milky way band
      ctx.strokeStyle = 'rgba(100, 180, 255, 0.1)';
      ctx.lineWidth = 100;
      ctx.beginPath();
      ctx.quadraticCurveTo(
        canvas.width * 0.3 + Math.sin(time * 0.00004) * 80,
        canvas.height * 0.4,
        canvas.width * 0.8,
        canvas.height * 0.6
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
