import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  BookOpen,
  Eye,
  Play,
  ArrowUpRight,
  Compass,
  Sparkles,
  Phone,
  Move,
  MessageSquare,
  MousePointerClick
} from 'lucide-react';
import '../../styles/serv5-contextual-cursor.css';

/**
 * Serv5ContextualCursor
 * Dynamic contextual cursor that writes the action label beside the pointer
 * as you navigate across sections and interactive elements (e.g., حرّك, ابحث, تصفّح, قراءة, استكشف, انقر).
 */
export default function Serv5ContextualCursor({ lang = 'ar' }) {
  const isRtl = lang === 'ar';

  const [cursorState, setCursorState] = useState({
    active: true,
    text: isRtl ? 'تصفّح' : 'Browse',
    type: 'browse',
    isClicking: false,
    visible: false,
    flipX: false,
    flipY: false
  });

  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetPosRef = useRef({ x: -100, y: -100 });
  const rafIdRef = useRef(null);
  const isTouchRef = useRef(false);
  const lastCheckTimeRef = useRef(0);

  useEffect(() => {
    // Disable on touch screens
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      isTouchRef.current = true;
      return;
    }

    const setCursorBadge = (type, text, isInteractive = false, flipX = false, flipY = false) => {
      setCursorState((prev) => {
        if (
          prev.type === type &&
          prev.text === text &&
          prev.active === true &&
          prev.flipX === flipX &&
          prev.flipY === flipY
        ) {
          return prev;
        }
        return {
          ...prev,
          active: true,
          type,
          text,
          flipX,
          flipY,
          visible: true
        };
      });
    };

    const evaluateTarget = (target, clientX, clientY) => {
      if (!target || !(target instanceof Element)) return;

      const flipX = clientX > window.innerWidth - 130;
      const flipY = clientY > window.innerHeight - 80;

      // 1. Explicit data attributes
      const explicitText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      const explicitType = target.closest('[data-cursor]')?.getAttribute('data-cursor');

      if (explicitText) {
        setCursorBadge('custom', explicitText, true, flipX, flipY);
        return;
      }

      if (explicitType) {
        let label = '';
        if (explicitType === 'read') label = isRtl ? 'قراءة' : 'Read';
        else if (explicitType === 'search') label = isRtl ? 'ابحث' : 'Search';
        else if (explicitType === 'move') label = isRtl ? 'حرّك' : 'Move';
        else if (explicitType === 'browse') label = isRtl ? 'تصفّح' : 'Browse';
        else if (explicitType === 'view') label = isRtl ? 'استعراض' : 'View';
        else if (explicitType === 'play') label = isRtl ? 'تشغيل' : 'Play';
        else if (explicitType === 'explore') label = isRtl ? 'استكشف' : 'Explore';
        else if (explicitType === 'click') label = isRtl ? 'انقر' : 'Click';

        setCursorBadge(explicitType, label, true, flipX, flipY);
        return;
      }

      // 2. Search Inputs & Search Buttons -> "ابحث"
      if (
        target.closest(
          'input[type="search"], [role="search"], .search-box, .search-btn, [class*="search"], [placeholder*="بحث"], [placeholder*="search"]'
        )
      ) {
        setCursorBadge('search', isRtl ? 'ابحث' : 'Search', true, flipX, flipY);
        return;
      }

      // 3. 3D Model Canvas, Robot, Carousels, Sliders, Swipers -> "حرّك" / "اسحب"
      if (
        target.closest(
          'canvas, .partners-world-section, #partners, [class*="carousel"], [class*="Carousel"], [class*="slider"], [class*="swiper"], [class*="mascot"], .robot-mascot-guide, .puzzle-mesh-viewport'
        )
      ) {
        setCursorBadge('move', isRtl ? 'حرّك' : 'Move', true, flipX, flipY);
        return;
      }

      // 4. Video / Play buttons / Intro Replay -> "تشغيل"
      if (
        target.closest(
          'button[class*="play"], [class*="video-play"], [class*="replay-intro"], .serv5-replay-intro-pill, [class*="video"]'
        )
      ) {
        setCursorBadge('play', isRtl ? 'تشغيل' : 'Play', true, flipX, flipY);
        return;
      }

      // 5. Phone / Direct Call -> "اتصال"
      if (target.closest('a[href^="tel:"], .nav-phone-link, [class*="phone-link"]')) {
        setCursorBadge('call', isRtl ? 'اتصال' : 'Call', true, flipX, flipY);
        return;
      }

      // 6. Blog / Journal / Articles / Puzzle Cards -> "قراءة"
      if (
        target.closest(
          'article, #blog, .serv5-journal-section, .blog-world-section, .blog-card, .post-card, [class*="article"], [class*="Article"], [class*="post-card"], [class*="newest-post"], [class*="NewestPosts"], [class*="journal"], [class*="puzzle-piece"], [class*="post-item"]'
        )
      ) {
        setCursorBadge('read', isRtl ? 'قراءة' : 'Read', true, flipX, flipY);
        return;
      }

      // 7. Interactive Buttons / Links / CTAs -> "انقر"
      if (
        target.closest(
          'button, a, [role="button"], .btn, .btn-launch-nav, input[type="submit"], [class*="cta-button"]'
        )
      ) {
        setCursorBadge('click', isRtl ? 'انقر' : 'Click', true, flipX, flipY);
        return;
      }

      // 8. Services / Products / Portfolio / Works -> "تصفّح"
      if (
        target.closest(
          '#services, .services-vision-section, #products, .products-world-section, #portfolio, .portfolio-world-section, #newest-works, .newest-works-section, .showcase-card, .portfolio-card, [class*="mockup"], [class*="Mockup"], figure, [class*="gallery"], [class*="ProjectCard"], [class*="service-card"], [class*="ServicesShowcase"]'
        )
      ) {
        setCursorBadge('browse', isRtl ? 'تصفّح' : 'Browse', false, flipX, flipY);
        return;
      }

      // 9. Testimonials / Reviews -> "تصفّح"
      if (target.closest('#testimonials, .testimonials-world-section, [class*="testimonial"]')) {
        setCursorBadge('testimonials', isRtl ? 'تصفّح' : 'Reviews', false, flipX, flipY);
        return;
      }

      // 10. About / Why Serv5 -> "تصفّح"
      if (target.closest('#about, .about-monument-section, #why-serv5, .why-serv5-section')) {
        setCursorBadge('browse', isRtl ? 'تصفّح' : 'Browse', false, flipX, flipY);
        return;
      }

      // 11. Contact / Get In Touch / Liftoff / Footer -> "تواصل"
      if (
        target.closest(
          '#contact, .serv5-contact-section, .contact-world-section, #ready-for-liftoff, .serv5-liftoff-section, footer, .serv5-footer'
        )
      ) {
        setCursorBadge('contact', isRtl ? 'تواصل' : 'Connect', false, flipX, flipY);
        return;
      }

      // 12. Hero Section -> "استكشف"
      if (target.closest('#hero, .world-hero-section')) {
        setCursorBadge('explore', isRtl ? 'استكشف' : 'Explore', false, flipX, flipY);
        return;
      }

      // 13. Default Section & Page Fallback -> "تصفّح"
      setCursorBadge('browse', isRtl ? 'تصفّح' : 'Browse', false, flipX, flipY);
    };

    const handleMouseMove = (e) => {
      targetPosRef.current.x = e.clientX;
      targetPosRef.current.y = e.clientY;

      if (!cursorState.visible) {
        setCursorState((prev) => ({ ...prev, visible: true }));
      }

      // Throttle DOM tree resolution to every ~40ms for top performance
      const now = performance.now();
      if (now - lastCheckTimeRef.current > 40) {
        lastCheckTimeRef.current = now;
        evaluateTarget(e.target, e.clientX, e.clientY);
      }
    };

    const handleMouseDown = () => {
      setCursorState((prev) => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState((prev) => ({ ...prev, isClicking: false }));
    };

    const handleMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    const handleMouseEnter = () => {
      setCursorState((prev) => ({ ...prev, visible: true }));
    };

    const handleMouseOver = (e) => {
      evaluateTarget(e.target, e.clientX, e.clientY);
    };

    // Smooth fluid physics loop (60-120fps)
    const animate = () => {
      const lerp = 0.24;
      posRef.current.x += (targetPosRef.current.x - posRef.current.x) * lerp;
      posRef.current.y += (targetPosRef.current.y - posRef.current.y) * lerp;

      // Update dot (immediate)
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${targetPosRef.current.x}px, ${targetPosRef.current.y}px, 0)`;
      }

      // Update follower & badge (smooth trailing)
      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isRtl]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && isTouchRef.current) {
    return null;
  }

  // Helper icon selector based on type
  const renderIcon = () => {
    switch (cursorState.type) {
      case 'move':
        return <Move size={12} className="cursor-badge-icon" />;
      case 'search':
        return <Search size={12} className="cursor-badge-icon" />;
      case 'read':
        return <BookOpen size={12} className="cursor-badge-icon" />;
      case 'browse':
        return <Compass size={12} className="cursor-badge-icon" />;
      case 'explore':
        return <Sparkles size={12} className="cursor-badge-icon" />;
      case 'click':
        return <MousePointerClick size={12} className="cursor-badge-icon" />;
      case 'view':
        return <Eye size={12} className="cursor-badge-icon" />;
      case 'play':
        return <Play size={12} className="cursor-badge-icon fill-current" />;
      case 'call':
        return <Phone size={12} className="cursor-badge-icon" />;
      case 'contact':
        return <MessageSquare size={12} className="cursor-badge-icon" />;
      default:
        return <ArrowUpRight size={12} className="cursor-badge-icon" />;
    }
  };

  const badgePositionClass = `${cursorState.flipX ? 'flip-x' : ''} ${cursorState.flipY ? 'flip-y' : ''
    }`.trim();

  return (
    <div
      className={`serv5-contextual-cursor-system ${cursorState.visible ? 'is-visible' : ''
        } ${cursorState.isClicking ? 'is-clicking' : ''}`}
      aria-hidden="true"
    >
      {/* Precision Inner Dot */}
      <div ref={cursorDotRef} className="serv5-cursor-dot" />

      {/* Trailing Follower & Contextual Badge */}
      <div
        ref={cursorFollowerRef}
        className={`serv5-cursor-follower type-${cursorState.type || 'browse'}`}
      >
        {/* Dynamic Action Badge Pill */}
        {cursorState.active && cursorState.text && (
          <div className={`serv5-cursor-badge ${badgePositionClass}`}>
            <span className="cursor-badge-icon-wrap">{renderIcon()}</span>
            <span className="cursor-badge-label">{cursorState.text}</span>
          </div>
        )}
      </div>
    </div>
  );
}
