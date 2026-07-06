"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

/* ---- sky phase keyframes: [topRGB, midRGB, bottomRGB] at scroll p = 0 / .5 / 1 ---- */
type RGB = [number, number, number];
const PHASES: { top: RGB; mid: RGB; bottom: RGB }[] = [
  { top: [5, 7, 15], mid: [10, 14, 28], bottom: [12, 18, 40] }, // night
  { top: [8, 7, 22], mid: [22, 12, 44], bottom: [30, 17, 52] }, // deep space
  { top: [12, 10, 26], mid: [34, 22, 46], bottom: [74, 44, 30] }, // dawn / horizon
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const rgb = (c: RGB) => `rgb(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])})`;
const lerpRGB = (a: RGB, b: RGB, t: number): RGB => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
  lerp(a[2], b[2], t),
];
const smoothstep = (e0: number, e1: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

function phaseColor(key: "top" | "mid" | "bottom", p: number): RGB {
  const scaled = p * (PHASES.length - 1);
  const i = Math.min(PHASES.length - 2, Math.floor(scaled));
  return lerpRGB(PHASES[i][key], PHASES[i + 1][key], scaled - i);
}

type Star = {
  x: number;
  y: number;
  r: number;
  depth: number; // parallax + brightness
  baseAlpha: number;
  tw: number; // twinkle speed
  phase: number;
  warm: boolean;
  onBand: boolean;
};

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number;
  maxLife: number;
};

/**
 * Single-canvas celestial engine.
 * - Base sky gradient interpolates night → deep-space → dawn across scroll.
 * - Infinite parallax starfield (wraps as you scroll), twinkle + pointer drift.
 * - Milky Way band that brightens through the deep-space phase.
 * - Occasional shooting stars.
 * Honors prefers-reduced-motion: static night sky, no rAF.
 */
export function CelestialSky() {
  const skyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const sky = skyRef.current;
    const canvas = canvasRef.current;
    if (!sky || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let raf = 0;
    let nextMeteor = 1200;
    const startTime = performance.now();

    const scroll = { y: window.scrollY, p: 0 };
    const pointer = { x: 0.5, y: 0.5, cx: 0.5, cy: 0.5 };

    // Milky Way band geometry (diagonal), recomputed on resize
    let band = { angle: -0.5, width: 0 };

    const seed = () => {
      const count = Math.min(360, Math.round((W * H) / 7000));
      stars = Array.from({ length: count }, () => {
        const depth = Math.random();
        const onBand = Math.random() < 0.4;
        return {
          x: Math.random(),
          y: Math.random(),
          r: (Math.random() * 1.1 + 0.35) * (0.55 + depth * 0.95),
          depth,
          baseAlpha: Math.random() * 0.55 + 0.28,
          tw: Math.random() * 1.5 + 0.4,
          phase: Math.random() * Math.PI * 2,
          warm: Math.random() < 0.13,
          onBand,
        };
      });
      band = { angle: -0.5, width: Math.max(W, H) * 0.42 };
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const updateScroll = () => {
      scroll.y = window.scrollY || window.pageYOffset || 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scroll.p = Math.max(0, Math.min(1, scroll.y / max));
    };

    const paintSky = () => {
      const p = scroll.p;
      const top = phaseColor("top", p);
      const mid = phaseColor("mid", p);
      const bottom = phaseColor("bottom", p);
      const amber = smoothstep(0.55, 1, p) * 0.32;
      const glowTop = smoothstep(0, 0.35, p); // hero warm glow fades out early
      sky.style.background = `
        radial-gradient(130% 70% at 50% 118%, rgba(245,166,35,${amber}), transparent 62%),
        radial-gradient(60% 42% at 50% 44%, rgba(245,166,35,${0.09 * (1 - glowTop)}), transparent 70%),
        linear-gradient(180deg, ${rgb(top)} 0%, ${rgb(mid)} 52%, ${rgb(bottom)} 100%)`;
    };

    const drawMilkyWay = (p: number) => {
      const intensity = smoothstep(0.12, 0.5, p) * (1 - smoothstep(0.72, 1, p));
      if (intensity <= 0.01) return;
      ctx.save();
      ctx.translate(W * 0.5, H * 0.5);
      ctx.rotate(band.angle);
      const g = ctx.createLinearGradient(0, -band.width, 0, band.width);
      g.addColorStop(0, "rgba(120,110,190,0)");
      g.addColorStop(0.45, `rgba(150,130,210,${0.05 * intensity})`);
      g.addColorStop(0.5, `rgba(190,170,230,${0.09 * intensity})`);
      g.addColorStop(0.55, `rgba(150,130,210,${0.05 * intensity})`);
      g.addColorStop(1, "rgba(120,110,190,0)");
      ctx.fillStyle = g;
      ctx.fillRect(-W, -band.width, W * 2, band.width * 2);
      ctx.restore();
    };

    const drawStars = (elapsed: number) => {
      const p = scroll.p;
      const px = (pointer.cx - 0.5) * 2;
      const py = (pointer.cy - 0.5) * 2;
      const bandBoost = smoothstep(0.12, 0.5, p);

      for (const s of stars) {
        // parallax: deeper stars move less; scroll pushes field upward
        const parScroll = scroll.y * (0.03 + s.depth * 0.16);
        let y = s.y * H - parScroll - py * 14 * s.depth;
        y = ((y % H) + H) % H;
        const x = s.x * W - px * 16 * s.depth;

        let alpha = reduced
          ? s.baseAlpha
          : s.baseAlpha * (0.5 + 0.5 * Math.sin(elapsed * 0.001 * s.tw + s.phase));
        if (s.onBand) alpha *= 0.55 + bandBoost * 0.9;
        alpha = Math.max(0, Math.min(1, alpha));
        const color = s.warm ? "255,214,150" : "234,241,255";

        if (s.r > 1.15) {
          const gl = ctx.createRadialGradient(x, y, 0, x, y, s.r * 4.5);
          gl.addColorStop(0, `rgba(${color},${alpha * 0.5})`);
          gl.addColorStop(1, `rgba(${color},0)`);
          ctx.fillStyle = gl;
          ctx.beginPath();
          ctx.arc(x, y, s.r * 4.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = `rgba(${color},${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const spawnMeteor = () => {
      const fromLeft = Math.random() < 0.5;
      const startX = fromLeft ? Math.random() * W * 0.5 : W * 0.5 + Math.random() * W * 0.5;
      const startY = Math.random() * H * 0.4;
      const angle = (fromLeft ? 0.55 : 2.59) + (Math.random() - 0.5) * 0.3;
      const speed = 9 + Math.random() * 7;
      const len = 140 + Math.random() * 160;
      meteors.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len,
        life: 0,
        maxLife: 60 + Math.random() * 30,
      });
    };

    const drawMeteors = () => {
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life += 1;
        const lifeT = m.life / m.maxLife;
        const fade = Math.sin(Math.min(1, lifeT) * Math.PI); // fade in + out
        const tailX = m.x - (m.vx / Math.hypot(m.vx, m.vy)) * m.len;
        const tailY = m.y - (m.vy / Math.hypot(m.vx, m.vy)) * m.len;
        const g = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        g.addColorStop(0, `rgba(255,244,214,${0.9 * fade})`);
        g.addColorStop(0.25, `rgba(245,190,120,${0.5 * fade})`);
        g.addColorStop(1, "rgba(245,166,35,0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        // bright head
        ctx.fillStyle = `rgba(255,250,235,${0.9 * fade})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        if (m.life >= m.maxLife || m.x < -m.len || m.x > W + m.len || m.y > H + m.len) {
          meteors.splice(i, 1);
        }
      }
    };

    const frame = (now: number) => {
      pointer.cx += (pointer.x - pointer.cx) * 0.05;
      pointer.cy += (pointer.y - pointer.cy) * 0.05;
      const elapsed = now - startTime;
      updateScroll();
      paintSky();
      ctx.clearRect(0, 0, W, H);
      drawMilkyWay(scroll.p);
      drawStars(elapsed);
      if (now > nextMeteor) {
        spawnMeteor();
        nextMeteor = now + 2600 + Math.random() * 4200;
      }
      drawMeteors();
      raf = window.requestAnimationFrame(frame);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth;
      pointer.y = e.clientY / window.innerHeight;
    };

    resize();
    updateScroll();
    window.addEventListener("resize", resize);

    if (reduced) {
      paintSky();
      ctx.clearRect(0, 0, W, H);
      drawMilkyWay(scroll.p);
      drawStars(0);
      const onScrollStatic = () => {
        updateScroll();
        paintSky();
      };
      window.addEventListener("scroll", onScrollStatic, { passive: true });
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("scroll", onScrollStatic);
      };
    }

    window.addEventListener("pointermove", onPointer, { passive: true });
    raf = window.requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <>
      <div ref={skyRef} className="celestial-sky" aria-hidden />
      <canvas ref={canvasRef} className="celestial-stars" aria-hidden />
    </>
  );
}
