import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Sparkles, ChevronDown } from 'lucide-react';
import '../../styles/serv5-kinetic-intro.css';

// System-Matched Brutalist Glyphs (White & Blue Theme)
const BrutalistGlyph = ({ letter, isMorphing }) => {
  return (
    <svg
      viewBox="0 0 100 130"
      className="w-full h-full"
      style={{
        filter: isMorphing
          ? 'drop-shadow(0 15px 30px rgba(37,99,235,0.2))'
          : 'drop-shadow(0 10px 22px rgba(37,99,235,0.14))',
        transition: 'all 0.75s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <defs>
        <linearGradient id="glyphGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="55%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="slabIceBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="slabBrandAccent" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* When morphing, render solid rounded slab in System White & Blue */}
      {isMorphing ? (
        <rect
          x="3"
          y="3"
          width="94"
          height="124"
          rx="26"
          fill={letter === '5' ? 'url(#slabBrandAccent)' : 'url(#slabIceBlue)'}
          stroke={letter === '5' ? 'rgba(147,197,253,0.85)' : 'rgba(255,255,255,0.95)'}
          strokeWidth="2"
        />
      ) : (
        // The architectural brutalist letter typography in Navy & Sapphire
        <text
          x="50"
          y="108"
          textAnchor="middle"
          fill="url(#glyphGrad)"
          fontSize="120"
          fontWeight="900"
          fontFamily="'Syne', 'Space Grotesk', system-ui, sans-serif"
          letterSpacing="-0.04em"
          style={{ userSelect: 'none' }}
        >
          {letter}
        </text>
      )}
    </svg>
  );
};

export default function Serv5KineticIntro({ onComplete, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  // Stages:
  // 0: Initial centered bold S-E-R-V 5 letters in white-and-blue theme
  // 1: Letters morph into 5 solid rounded white-and-ice-blue glass cards with sweeping wave animation
  // 2: Cards part, revealing the clean digital tech landscape & giant SERV 5
  // 3: Luxury curtain lift revealing the actual website
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());
  const totalDuration = 4800; // 4.8s fast, snappy, elegant duration

  const handleComplete = () => {
    setStage(3);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Progress bar runner
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, Math.round((elapsed / totalDuration) * 100));
      setProgress(pct);
    }, 30);

    // Timeline stages:
    // 0 -> 1: Morph into 5 cards with wave sweep after 1.5s
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 1500);

    // 1 -> 2: Reveal tech landscape & giant SERV 5 after 3.0s
    const timer2 = setTimeout(() => {
      setStage(2);
    }, 3000);

    // 2 -> 3: Complete & reveal website at totalDuration
    const timer3 = setTimeout(() => {
      handleComplete();
    }, totalDuration);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearInterval(progressInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const letters = ['S', 'E', 'R', 'V', '5'];

  return (
    <AnimatePresence>
      {stage < 4 && (
        <motion.div
          key="serv5-kinetic-intro-screen"
          className="serv5-kinetic-intro-root"
          initial={{ opacity: 1, y: 0 }}
          animate={
            stage === 3
              ? {
                  y: '-100%',
                  opacity: 0.98,
                  transition: { duration: 0.75, ease: [0.85, 0, 0.15, 1] }
                }
              : { opacity: 1, y: 0 }
          }
          exit={{ y: '-100%', opacity: 0 }}
        >
          {/* Luminous White & Blue Ambient Lighting */}
          <div className="intro-atmosphere">
            <div className="intro-ambient-orb-1" />
            <div className="intro-ambient-orb-2" />
            <div className="intro-grid-pattern" />
          </div>

          {/* Top Bar Navigation */}
          <div className="intro-top-bar">
            <div className="intro-brand-tag">
              <span className="intro-tag-dot" />
              <span>
                {isRtl
                  ? 'سيرف فايف · هندسة المنظومات الرقمية الكبرى'
                  : 'SERV5 · ENTERPRISE DIGITAL ARCHITECTURE'}
              </span>
            </div>

            <button
              onClick={handleComplete}
              className="intro-skip-btn"
              title="Skip to Website (Esc)"
            >
              <span>{isRtl ? 'تخطي إلى الموقع' : 'Skip to Site'}</span>
              <X size={14} />
            </button>
          </div>

          {/* Stage 2: Enterprise Software & Tech Architecture Scene */}
          <div className={`intro-architectural-scene ${stage >= 2 ? 'active' : ''}`}>
            {/* Expressive Modern Coding & Cloud Architecture Backdrop */}
            <div
              className="intro-scenic-backdrop"
              style={{
                backgroundImage: `url('/images/serv5-coding-enterprise.jpg')`
              }}
            />
            <div className="intro-scenic-gradient-overlay" />

            {/* Editorial Top Content */}
            <div className="intro-editorial-row">
              <div>
                <motion.h2
                  className="intro-editorial-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={stage >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {isRtl ? 'هندسة برمجية وحلول رقمية رائدة.' : 'Pioneering Software Engineering.'}
                </motion.h2>
                <div className="intro-editorial-meta">
                  RIYADH · CAIRO · MANSOURA · EST. 2008
                </div>
              </div>

              <motion.div
                className="intro-editorial-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={stage >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p>
                  {isRtl
                    ? '١٦+ عاماً في برمجة المنظومات السحابية المعقدة، تطبيقات الجوال والويب المتطورة، وحلول التحول الرقمي لأكثر من ٥٠٠+ مؤسسة كبرى.'
                    : '16+ years engineering mission-critical cloud systems, advanced web & mobile apps, and scalable digital solutions for 500+ enterprises.'}
                </p>

                {/* Instant Action */}
                <button
                  onClick={handleComplete}
                  className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>{isRtl ? 'دخول موقع سيرف فايف' : 'Enter SERV5 Site'}</span>
                  <ArrowUpRight size={14} />
                </button>
              </motion.div>
            </div>

            {/* Monumental SERV 5 Giant Centered Banner */}
            <div className="intro-scenic-anchor">
              <h1 className={`intro-giant-serv5-banner ${stage >= 2 ? 'visible' : ''}`}>
                SERV 5
              </h1>
            </div>
          </div>

          {/* Center Stage: Monolithic S-E-R-V   5 into 5 White-and-Blue Cubes with Sequential Wave */}
          <motion.div
            className="intro-kinetic-stage"
            animate={
              stage === 2
                ? {
                    scale: 1.15,
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
                  }
                : { scale: 1, opacity: 1 }
            }
          >
            {letters.map((char, idx) => {
              // Parting offsets for gate reveal in stage 2
              const partX =
                idx === 0 ? -180 : idx === 1 ? -90 : idx === 2 ? 0 : idx === 3 ? 90 : 180;

              return (
                <motion.div
                  key={`char-${char}-${idx}`}
                  className="intro-monolith-item"
                  style={char === '5' ? { marginLeft: 'clamp(14px, 2.5vw, 36px)' } : {}}
                  initial={{ opacity: 0, y: 30, scale: 0.92 }}
                  animate={
                    stage === 0
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: 0.55,
                            delay: idx * 0.07,
                            ease: [0.22, 1, 0.36, 1]
                          }
                        }
                      : stage === 1
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: 0.65,
                            ease: [0.16, 1, 0.3, 1]
                          }
                        }
                      : {
                          x: partX,
                          scale: 1.3,
                          opacity: 0,
                          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                        }
                  }
                >
                  {/* The Slab with Sequential Kinetic Wave Across All 5 (wave-active) */}
                  <div
                    className={`intro-monolith-slab ${stage === 1 ? 'wave-active' : ''}`}
                    style={{
                      opacity: stage >= 1 ? 1 : 0,
                      transform: stage >= 1 ? 'scale(1) rotateX(0deg)' : 'scale(0.88) rotateX(12deg)'
                    }}
                  />

                  {/* Brutalist Character Typography */}
                  <motion.div
                    className="intro-glyph-wrapper"
                    animate={
                      stage >= 1
                        ? {
                            opacity: 0,
                            scale: 0.65,
                            filter: 'blur(8px)',
                            transition: { duration: 0.45, delay: idx * 0.05 }
                          }
                        : {
                            opacity: 1,
                            scale: 1,
                            filter: 'blur(0px)'
                          }
                    }
                  >
                    <BrutalistGlyph letter={char} isMorphing={false} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Bar Technical Line */}
          <div className="intro-bottom-bar">
            <span>24.7136° N, 46.6753° E · DIGITAL ENTERPRISE</span>

            <div className="intro-progress-track">
              <div
                className="intro-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span>{isRtl ? 'المملكة العربية السعودية & مصر' : 'SAUDI ARABIA & EGYPT'}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
