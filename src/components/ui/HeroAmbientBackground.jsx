import React, { useEffect, useRef } from 'react';

const VARIANT_CONFIG = {
  home: { particleCount: 38, linkDist: 135, speed: 0.38 },
  page: { particleCount: 28, linkDist: 120, speed: 0.34 },
  split: { particleCount: 30, linkDist: 125, speed: 0.34 },
  bank: { particleCount: 28, linkDist: 120, speed: 0.32 },
  about: { particleCount: 30, linkDist: 125, speed: 0.32 },
  contact: { particleCount: 32, linkDist: 125, speed: 0.34 }
};

/**
 * ReactBits-inspired animated hero background combining:
 * - Aurora gradient ribbons
 * - Architectural grid with animated light beams
 * - Interactive particle & constellation canvas
 * - Cursor-reactive spotlight
 * - Soft blurred SERV5 logo atmospheric watermark
 */
export default function HeroAmbientBackground({ variant = 'page' }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return undefined;

    const section = root.parentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const config = VARIANT_CONFIG[variant] || VARIANT_CONFIG.page;

    const pointer = {
      x: 0.5,
      y: 0.45,
      targetX: 0.5,
      targetY: 0.45,
      active: false
    };

    const handlePointerMove = (event) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const ny = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      pointer.targetX = nx;
      pointer.targetY = ny;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.targetX = 0.5;
      pointer.targetY = 0.45;
    };

    if (section && !reducedMotion) {
      section.addEventListener('pointermove', handlePointerMove, { passive: true });
      section.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return () => {
        if (section && !reducedMotion) {
          section.removeEventListener('pointermove', handlePointerMove);
          section.removeEventListener('pointerleave', handlePointerLeave);
        }
      };
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let isVisible = true;

    const particles = [];

    const seedParticles = () => {
      particles.length = 0;
      const count = width < 640 ? Math.max(14, Math.floor(config.particleCount * 0.55)) : config.particleCount;
      for (let i = 0; i < count; i++) {
        const isWarm = i % 5 === 0;
        const angle = (i * 2.39996) % (Math.PI * 2);
        const speedMag = config.speed * (0.45 + ((i * 17) % 10) / 14);
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speedMag,
          vy: Math.sin(angle) * speedMag - 0.08,
          radius: 1.3 + ((i * 7) % 5) * 0.42,
          alpha: 0.28 + ((i * 13) % 7) * 0.07,
          phase: i * 0.65,
          isWarm
        });
      }
    };

    const resize = () => {
      const rect = root.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (particles.length === 0) {
        seedParticles();
      } else {
        for (const p of particles) {
          p.x = Math.min(width, Math.max(0, p.x));
          p.y = Math.min(height, Math.max(0, p.y));
        }
      }
    };

    resize();

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(root);
    } else {
      window.addEventListener('resize', resize);
    }

    let intersectionObserver;
    if (typeof IntersectionObserver !== 'undefined') {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          isVisible = entries.some((entry) => entry.isIntersecting);
          if (isVisible && !rafId && !reducedMotion) {
            rafId = window.requestAnimationFrame(tick);
          }
        },
        { threshold: 0.02 }
      );
      intersectionObserver.observe(root);
    }

    const isDarkTheme = () =>
      document.documentElement.classList.contains('dark') ||
      document.documentElement.getAttribute('data-theme') === 'dark';

    const drawFrame = (timeMs) => {
      const dark = isDarkTheme();
      const t = timeMs * 0.001;

      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      root.style.setProperty('--hero-px', `${(pointer.x * 100).toFixed(2)}%`);
      root.style.setProperty('--hero-py', `${(pointer.y * 100).toFixed(2)}%`);
      root.style.setProperty('--hero-shift-x', `${((pointer.x - 0.5) * 28).toFixed(2)}px`);
      root.style.setProperty('--hero-shift-y', `${((pointer.y - 0.5) * 22).toFixed(2)}px`);

      ctx.clearRect(0, 0, width, height);

      const mx = pointer.x * width;
      const my = pointer.y * height;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (pointer.active) {
            const dx = p.x - mx;
            const dy = p.y - my;
            const distSq = dx * dx + dy * dy;
            if (distSq > 4 && distSq < 18000) {
              const force = (1 - distSq / 18000) * 0.22;
              const dist = Math.sqrt(distSq);
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }

          if (p.x < -16) p.x = width + 16;
          else if (p.x > width + 16) p.x = -16;
          if (p.y < -16) p.y = height + 16;
          else if (p.y > height + 16) p.y = -16;
        }

        const pulse = 0.72 + 0.28 * Math.sin(t * 1.4 + p.phase);
        const alpha = p.alpha * pulse * (dark ? 1.15 : 0.85);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.isWarm) {
          ctx.fillStyle = dark
            ? `rgba(251, 146, 60, ${Math.min(0.85, alpha)})`
            : `rgba(234, 88, 12, ${Math.min(0.55, alpha)})`;
        } else {
          ctx.fillStyle = dark
            ? `rgba(96, 165, 250, ${Math.min(0.88, alpha)})`
            : `rgba(37, 99, 235, ${Math.min(0.58, alpha)})`;
        }
        ctx.fill();
      }

      const maxDist = config.linkDist;
      const maxDistSq = maxDist * maxDist;
      ctx.lineWidth = 0.9;

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < maxDistSq) {
            const strength = 1 - dSq / maxDistSq;
            const lineAlpha = strength * (dark ? 0.18 : 0.11);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.isWarm || b.isWarm
              ? `rgba(249, 115, 22, ${lineAlpha * 0.85})`
              : dark
                ? `rgba(96, 165, 250, ${lineAlpha})`
                : `rgba(37, 99, 235, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }
    };

    const tick = (now) => {
      if (!isVisible) {
        rafId = 0;
        return;
      }
      drawFrame(now);
      rafId = window.requestAnimationFrame(tick);
    };

    if (reducedMotion) {
      drawFrame(0);
    } else {
      rafId = window.requestAnimationFrame(tick);
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener('resize', resize);
      if (intersectionObserver) intersectionObserver.disconnect();
      if (section && !reducedMotion) {
        section.removeEventListener('pointermove', handlePointerMove);
        section.removeEventListener('pointerleave', handlePointerLeave);
      }
    };
  }, [variant]);

  return (
    <div
      ref={rootRef}
      className={`hero-ambient-bg hero-ambient-${variant}`}
      aria-hidden="true"
    >
      {/* Layer 1: ReactBits-inspired Aurora Gradient Ribbons */}
      <div className="hero-ambient-aurora">
        <span className="hero-aurora-ribbon hero-aurora-ribbon-a" />
        <span className="hero-aurora-ribbon hero-aurora-ribbon-b" />
        <span className="hero-aurora-ribbon hero-aurora-ribbon-c" />
      </div>

      {/* Layer 2: Blurred SERV5 Brand Logo Watermark */}
      <div className="hero-ambient-logo-stage">
        <div className="hero-ambient-logo-halo" />
        <div className="hero-ambient-logo-float">
          <img
            src="/serv5-official-logo.webp"
            alt=""
            className="hero-ambient-logo-img"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/serv5_logo_transparent.png';
            }}
          />
        </div>
      </div>

      {/* Layer 3: Architectural Grid & Travelling Light Beams */}
      <div className="hero-ambient-grid" />
      <div className="hero-ambient-beams">
        <span className="hero-beam hero-beam-h hero-beam-h1" />
        <span className="hero-beam hero-beam-h hero-beam-h2" />
        <span className="hero-beam hero-beam-v hero-beam-v1" />
        <span className="hero-beam hero-beam-v hero-beam-v2" />
      </div>

      {/* Layer 4: Interactive Particle Constellation Canvas */}
      <canvas ref={canvasRef} className="hero-ambient-canvas" />

      {/* Layer 5: Cursor-Reactive Spotlight */}
      <div className="hero-ambient-spotlight" />
    </div>
  );
}
