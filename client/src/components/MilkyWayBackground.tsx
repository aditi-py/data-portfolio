import { useEffect, useRef } from 'react';

export default function MilkyWayBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ── Stars ─────────────────────────────────────────────────────────────────
    interface Star {
      x: number; y: number;
      size: number; opacity: number;
      twinkleOffset: number;
      color: string;
    }
    const starColors = ['220,230,255', '200,180,255', '180,220,255', '255,255,255'];
    const makeStars = (): Star[] =>
      Array.from({ length: 220 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.4 + 0.2,
        opacity: Math.random() * 0.65 + 0.25,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      }));
    let stars = makeStars();
    window.addEventListener('resize', () => { stars = makeStars(); });

    // ── Shooting Stars ─────────────────────────────────────────────────────────
    interface ShootingStar {
      x: number; y: number;
      vx: number; vy: number;
      length: number;
      opacity: number;
      life: number;       // 0→1 progress
      maxLife: number;    // frames total
    }
    const shootingStars: ShootingStar[] = [];

    const spawnShootingStar = () => {
      const angle = (Math.random() * 30 + 10) * (Math.PI / 180); // 10–40° downward
      const speed = Math.random() * 14 + 8;
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        vx: Math.cos(angle) * speed * (Math.random() < 0.5 ? 1 : -1),
        vy: Math.sin(angle) * speed,
        length: Math.random() * 120 + 60,
        opacity: Math.random() * 0.6 + 0.4,
        life: 0,
        maxLife: Math.random() * 40 + 30,
      });
    };

    // ── Translucent floating objects ───────────────────────────────────────────
    type ObjShape = 'ellipse' | 'ring' | 'blob';
    interface FloatObj {
      x: number; y: number;
      vx: number; vy: number;
      rx: number; ry: number;       // radii
      rotation: number;
      rotSpeed: number;
      opacity: number;
      color: string;
      shape: ObjShape;
      blobSeed: number;
    }
    const floatColors = [
      '255,20,147',   // hot pink
      '0,200,255',    // electric cyan
      '255,100,0',    // vivid orange
      '57,255,20',    // neon green
      '255,220,0',    // electric yellow
      '180,0,255',    // vivid purple
      '0,255,180',    // neon teal
      '255,60,100',   // hot coral
    ];
    const floatObjs: FloatObj[] = [];

    const spawnFloatObj = () => {
      const fromLeft = Math.random() < 0.5;
      const shape: ObjShape = (['ellipse', 'ring', 'blob'] as ObjShape[])[Math.floor(Math.random() * 3)];
      floatObjs.push({
        x: fromLeft ? -200 : canvas.width + 200,
        y: Math.random() * canvas.height * 0.85,
        vx: (fromLeft ? 1 : -1) * (Math.random() * 0.4 + 0.1),
        vy: (Math.random() - 0.5) * 0.15,
        rx: Math.random() * 90 + 40,
        ry: Math.random() * 50 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.003,
        opacity: Math.random() * 0.22 + 0.12,
        color: floatColors[Math.floor(Math.random() * floatColors.length)],
        shape,
        blobSeed: Math.random() * 1000,
      });
    };

    // Pre-spawn a couple so screen isn't empty at start
    for (let i = 0; i < 3; i++) {
      spawnFloatObj();
      // scatter their x so they're already on screen
      floatObjs[i].x = Math.random() * canvas.width;
    }

    let animationFrameId: number;
    let time = 0;
    let shootingTimer = 0;
    let floatTimer = 0;

    // Grid config
    const NUM_RINGS = 22;
    const NUM_SPOKES = 18;
    const GRID_SPEED = 0.6;

    const animate = () => {
      time += 1;
      shootingTimer++;
      floatTimer++;

      const w = canvas.width;
      const h = canvas.height;
      const vanishX = w * 0.5;
      const vanishY = h * 0.5;

      // ── Background ─────────────────────────────────────────────────────────
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      // Faint deep glow at screen centre
      const hGlow = ctx.createRadialGradient(vanishX, vanishY, 0, vanishX, vanishY, w * 0.55);
      hGlow.addColorStop(0, 'rgba(100,40,180,0.10)');
      hGlow.addColorStop(0.5, 'rgba(60,20,120,0.04)');
      hGlow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = hGlow;
      ctx.fillRect(0, 0, w, h);

      // ── Stars ───────────────────────────────────────────────────────────────
      stars.forEach(star => {
        const twinkle = Math.sin(time * 0.018 + star.twinkleOffset) * 0.28 + 0.72;
        const alpha = star.opacity * twinkle;
        ctx.fillStyle = `rgba(${star.color},${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        if (star.size > 1.0) {
          const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4.5);
          glow.addColorStop(0, `rgba(${star.color},${alpha * 0.3})`);
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 4.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // ── Tunnel grid (concentric rings + radial spokes from centre) ──────────
      const offset = ((time * GRID_SPEED) / NUM_RINGS) % (1 / NUM_RINGS);
      // Max radius to guarantee rings reach screen corners
      const maxR = Math.hypot(w, h) * 0.55;

      // Concentric expanding rings — spawn at centre, fly outward
      for (let i = 0; i <= NUM_RINGS; i++) {
        const t = (i / NUM_RINGS + offset) % 1.0;
        const tP = Math.pow(t, 2.0); // perspective bunching near centre
        const rx = tP * maxR;
        const ry = tP * maxR * (h / w); // keep screen-proportional
        if (rx < 1) continue;
        const cr = Math.round(140 * tP + 80 * (1 - tP));
        const cg = Math.round(80 * tP + 160 * (1 - tP));
        ctx.strokeStyle = `rgba(${cr},${cg},255,${tP * 0.5 + 0.04})`;
        ctx.lineWidth = tP * 1.4 + 0.2;
        ctx.beginPath();
        ctx.ellipse(vanishX, vanishY, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Radial spokes from centre to all screen edges
      for (let i = 0; i < NUM_SPOKES; i++) {
        const angle = (i / NUM_SPOKES) * Math.PI * 2;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        // Find intersection with screen boundary
        let scale = Infinity;
        if (cosA > 0) scale = Math.min(scale, (w - vanishX) / cosA);
        else if (cosA < 0) scale = Math.min(scale, -vanishX / cosA);
        if (sinA > 0) scale = Math.min(scale, (h - vanishY) / sinA);
        else if (sinA < 0) scale = Math.min(scale, -vanishY / sinA);
        const edgeX = vanishX + cosA * scale;
        const edgeY = vanishY + sinA * scale;
        const gS = ctx.createLinearGradient(vanishX, vanishY, edgeX, edgeY);
        gS.addColorStop(0, 'rgba(80,160,255,0.01)');
        gS.addColorStop(0.5, 'rgba(140,80,255,0.15)');
        gS.addColorStop(1, 'rgba(140,80,255,0.38)');
        ctx.strokeStyle = gS;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(vanishX, vanishY);
        ctx.lineTo(edgeX, edgeY);
        ctx.stroke();
      }

      // ── Translucent floating objects ────────────────────────────────────────
      // Spawn new one every ~420 frames (~7 s at 60fps)
      if (floatTimer > 420 + Math.random() * 240 && floatObjs.length < 6) {
        spawnFloatObj();
        floatTimer = 0;
      }

      for (let i = floatObjs.length - 1; i >= 0; i--) {
        const obj = floatObjs[i];
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.rotation += obj.rotSpeed;

        // Remove when off screen
        if (obj.x < -300 || obj.x > w + 300 || obj.y < -300 || obj.y > h + 300) {
          floatObjs.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(obj.x, obj.y);
        ctx.rotate(obj.rotation);
        ctx.globalAlpha = obj.opacity;

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(obj.rx, obj.ry));
        grad.addColorStop(0, `rgba(${obj.color},1)`);
        grad.addColorStop(0.5, `rgba(${obj.color},0.7)`);
        grad.addColorStop(1, `rgba(${obj.color},0)`);

        // Shared neon border helper
        const applyNeonStroke = (color: string) => {
          ctx.shadowColor = `rgb(${color})`;
          ctx.shadowBlur = 18;
          ctx.strokeStyle = `rgba(${color},0.95)`;
          ctx.lineWidth = 1.5;
        };

        if (obj.shape === 'ellipse') {
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(0, 0, obj.rx, obj.ry, 0, 0, Math.PI * 2);
          ctx.fill();
          // Neon border
          applyNeonStroke(obj.color);
          ctx.beginPath();
          ctx.ellipse(0, 0, obj.rx, obj.ry, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;

        } else if (obj.shape === 'ring') {
          applyNeonStroke(obj.color);
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(0, 0, obj.rx, obj.ry, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;
          // Faint inner glow
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(0, 0, obj.rx * 0.7, obj.ry * 0.7, 0, 0, Math.PI * 2);
          ctx.fill();

        } else {
          // blob: distorted ellipse
          const blobPath = () => {
            ctx.beginPath();
            const steps = 8;
            for (let s = 0; s <= steps; s++) {
              const angle = (s / steps) * Math.PI * 2;
              const wobble = 1 + Math.sin(obj.blobSeed + angle * 3 + time * 0.008) * 0.25;
              const px = Math.cos(angle) * obj.rx * wobble;
              const py = Math.sin(angle) * obj.ry * wobble;
              s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.closePath();
          };
          ctx.fillStyle = grad;
          blobPath();
          ctx.fill();
          // Neon border
          applyNeonStroke(obj.color);
          blobPath();
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        ctx.globalAlpha = 1;
        ctx.restore();
      }

      // ── Shooting stars ──────────────────────────────────────────────────────
      // Spawn every ~180–360 frames
      if (shootingTimer > 180 + Math.random() * 180 && shootingStars.length < 3) {
        spawnShootingStar();
        shootingTimer = 0;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;

        const progress = s.life / s.maxLife;
        // Fade in then fade out
        const fade = progress < 0.2
          ? progress / 0.2
          : progress > 0.7
            ? 1 - (progress - 0.7) / 0.3
            : 1;

        const tailX = s.x - (s.vx / Math.hypot(s.vx, s.vy)) * s.length;
        const tailY = s.y - (s.vy / Math.hypot(s.vx, s.vy)) * s.length;

        const streak = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        streak.addColorStop(0, 'rgba(255,255,255,0)');
        streak.addColorStop(0.7, `rgba(220,230,255,${s.opacity * fade * 0.5})`);
        streak.addColorStop(1, `rgba(255,255,255,${s.opacity * fade})`);

        ctx.strokeStyle = streak;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        if (s.life >= s.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

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
