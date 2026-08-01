import { useEffect, useRef } from "react";

// Lightweight canvas particle trail — spawns glowing motes on
// pointer movement/tap and lets them drift and fade.
export default function SparkleTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const raf = useRef(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion.current) return; // respect accessibility preference

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#7cffb2", "#4fcf8c", "#eaf5ee", "#ff7a5c"];

    function spawn(x, y) {
      const count = 2;
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -Math.random() * 0.8 - 0.2,
          r: Math.random() * 1.8 + 0.6,
          life: 1,
          decay: Math.random() * 0.012 + 0.012,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      if (particles.current.length > 220) {
        particles.current.splice(0, particles.current.length - 220);
      }
    }

    function onMove(e) {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      spawn(x, y);
    }

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);
      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life > 0) {
          ctx.globalAlpha = Math.max(p.life, 0);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;
      particles.current = particles.current.filter((p) => p.life > 0);
      raf.current = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("resize", onResize);
    tick();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (reduceMotion.current) return null;

  return <canvas ref={canvasRef} className="sparkle-canvas" aria-hidden="true" />;
}
