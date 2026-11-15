import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, MessageCircle, ArrowUp, X, Layers, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function RobotMascotGuide({ lang = 'ar', onOpenConsultation }) {
  const isRtl = lang === 'ar';
  const mascotRef = useRef(null);
  const robotImgRef = useRef(null);
  const speechBubbleRef = useRef(null);
  const [bubbleText, setBubbleText] = useState('');
  const [currentSection, setCurrentSection] = useState('hero');
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [showQuickActions, setShowQuickActions] = useState(false);

  // Section-specific dialogue messages in Arabic & English
  const messages = {
    ar: {
      hero: 'مرحباً بك في سيرف فايف! أنا دليلك الذكي 👋 انقر علي للمساعدة السريعة',
      about: '16+ عاماً من الابتكار الهندسي وتطوير الأنظمة السحابية 🚀',
      services: 'استكشف لوحة حلولنا البرمجية المتقدمة المصممة حولك ⚡',
      products: 'أنظمتنا السحابية المؤسسية الجاهزة للإطلاق الفوري 💼',
      portfolio: 'قصص نجاح ومشاريع حقيقية تم تشغيلها عبر 14 دولة 🏆',
      whyUs: 'معايير أداء فائقة 100/100 ودعم هندسي 24/7 🛡️',
      blog: 'أحدث الرؤى والخرائط المعمارية من مهندسي سيرف فايف 💡',
      contact: 'جاهز لبدء مشروعك القادم؟ انقر هنا لنبدأ فوراً! 💬'
    },
    en: {
      hero: 'Welcome to SERV5! I am your AI Guide 👋 Click me for quick navigation',
      about: '16+ Years of verified engineering & cloud architecture 🚀',
      services: 'Explore our modular digital solutions switchboard ⚡',
      products: 'Turnkey enterprise software suites ready to deploy 💼',
      portfolio: 'Monumental case studies engineered across 14 nations 🏆',
      whyUs: 'Uncompromising 100/100 performance & 24/7 support SLA 🛡️',
      blog: 'Latest engineering blueprints from SERV5 tech leads 💡',
      contact: "Ready to engineer your platform? Let's connect now! 💬"
    }
  };

  useEffect(() => {
    setBubbleText(messages[lang][currentSection] || messages[lang].hero);
  }, [lang, currentSection]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mascot = mascotRef.current;
    const robotImg = robotImgRef.current;
    if (!mascot || !robotImg) return;

    if (prefersReducedMotion) {
      gsap.set(mascot, { opacity: 1, visibility: 'visible', scale: 0.85 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Initial Hero Entrance Animation
      gsap.fromTo(
        mascot,
        { opacity: 0, scale: 0.7, y: 60 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      // 2. Continuous Organic Levitation
      gsap.to(robotImg, {
        y: -10,
        rotationZ: 1.5,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // 3. Scroll-Triggered Guide Journey
      const sections = [
        { id: '#hero', name: 'hero', y: 0, x: 0, scale: 1, rot: 0 },
        { id: '#about', name: 'about', y: 15, x: isRtl ? 20 : -20, scale: 0.94, rot: isRtl ? 3 : -3 },
        { id: '#services', name: 'services', y: -10, x: isRtl ? -15 : 15, scale: 0.96, rot: isRtl ? -2 : 2 },
        { id: '#products', name: 'products', y: 10, x: isRtl ? 20 : -20, scale: 0.92, rot: isRtl ? 2.5 : -2.5 },
        { id: '#portfolio', name: 'portfolio', y: -5, x: isRtl ? -10 : 10, scale: 0.95, rot: isRtl ? -2 : 2 },
        { id: '#why-serv5', name: 'whyUs', y: 15, x: isRtl ? 15 : -15, scale: 0.93, rot: 0 },
        { id: '#blog', name: 'blog', y: 0, x: isRtl ? -12 : 12, scale: 0.92, rot: isRtl ? -1.5 : 1.5 },
        { id: '#contact', name: 'contact', y: 20, x: 0, scale: 1, rot: 0 }
      ];

      sections.forEach((sec) => {
        const el = document.querySelector(sec.id);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: 'top 65%',
          end: 'bottom 65%',
          onEnter: () => {
            setCurrentSection(sec.name);
            setBubbleVisible(true);
            gsap.to(mascot, {
              y: sec.y,
              x: sec.x,
              scale: sec.scale,
              rotation: sec.rot,
              duration: 0.9,
              ease: 'power2.out',
              overwrite: 'auto'
            });
          },
          onEnterBack: () => {
            setCurrentSection(sec.name);
            setBubbleVisible(true);
            gsap.to(mascot, {
              y: sec.y,
              x: sec.x,
              scale: sec.scale,
              rotation: sec.rot,
              duration: 0.9,
              ease: 'power2.out',
              overwrite: 'auto'
            });
          }
        });
      });
    }, mascot);

    return () => ctx.revert();
  }, [isRtl, lang]);

  const handleActionClick = (targetId, subject) => {
    setShowQuickActions(false);
    if (targetId) {
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (onOpenConsultation && subject) {
      onOpenConsultation(subject);
    }
  };

  return (
    <div
      ref={mascotRef}
      className={`serv5-mascot-guide-wrapper ${isRtl ? 'pos-rtl' : 'pos-ltr'}`}
      aria-label="SERV5 3D Mascot Guide"
    >
      <div className="mascot-inner-container">
        {/* Interactive Concierge Quick Action Menu */}
        {showQuickActions && (
          <div className={`mascot-quick-menu ${isRtl ? 'menu-rtl' : 'menu-ltr'}`}>
            <div className="quick-menu-header">
              <span className="quick-menu-title">
                {isRtl ? 'دليل SERV5 الذكي' : 'SERV5 Quick Concierge'}
              </span>
              <button
                onClick={() => setShowQuickActions(false)}
                className="quick-menu-close"
              >
                <X size={13} />
              </button>
            </div>
            <div className="quick-menu-body">
              <button
                className="quick-menu-item"
                onClick={() => handleActionClick('#services', 'Services')}
              >
                <Cpu size={14} className="text-blue-600" />
                <span>{isRtl ? 'استعراض الخدمات الرقمية' : 'Explore Services'}</span>
              </button>
              <button
                className="quick-menu-item"
                onClick={() => handleActionClick('#products', 'Products')}
              >
                <Layers size={14} className="text-orange-600" />
                <span>{isRtl ? 'منتجاتنا السحابية الجاهزة' : 'Enterprise Products'}</span>
              </button>
              <button
                className="quick-menu-item highlight"
                onClick={() => handleActionClick(null, 'Mascot Direct Proposal')}
              >
                <Sparkles size={14} className="text-amber-500" />
                <span>{isRtl ? 'طلب دراسة معمارية للمشروع' : 'Request Architecture Proposal'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Interactive Speech & Guidance Bubble */}
        {!showQuickActions && bubbleVisible && bubbleText && (
          <div
            ref={speechBubbleRef}
            className={`mascot-speech-bubble ${isRtl ? 'bubble-rtl' : 'bubble-ltr'}`}
            onClick={() => setShowQuickActions(true)}
            style={{ cursor: 'pointer' }}
          >
            <div className="bubble-content">
              <span className="bubble-icon">✨</span>
              <p className="bubble-text">{bubbleText}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBubbleVisible(false);
              }}
              className="bubble-close-btn"
              title="إخفاء مؤقت / Dismiss"
            >
              <X size={12} />
            </button>
            <div className="bubble-pointer" />
          </div>
        )}

        {/* Mascot Avatar Stage */}
        <div
          className="mascot-character-stage"
          onClick={() => setShowQuickActions((prev) => !prev)}
          title={isRtl ? 'انقر لفتح الدليل الذكي واختصارات التصفح' : 'Click to open AI Concierge'}
        >
          {/* Subtle Ambient Ice-Blue Glow Halo behind the robot */}
          <div className="mascot-ambient-halo" />

          {/* High-Resolution Transparent Robot PNG with Official SERV5 Chest Logo */}
          <img
            ref={robotImgRef}
            src="/serv5-robot-mascot.png"
            alt="SERV5 Futuristic 3D Robot Mascot"
            className="mascot-robot-image"
            draggable="false"
            loading="eager"
          />

          {/* Floating Status Indicator Tag */}
          <div className="mascot-badge-pill">
            <span className="mascot-status-pulse" />
            <span className="mascot-badge-text">SERV5 GUIDE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

