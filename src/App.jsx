import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggleTheme } from './store/uiSlice';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';

import ServicesShowcase from './components/sections/ServicesShowcase';
import Serv5ProductsShowcase from './components/sections/Serv5ProductsShowcase';
import NewestPostsSection from './components/sections/NewestPostsSection';
import Serv5NewestPosts from './components/sections/Serv5NewestPosts';
import Serv5Testimonials from './components/sections/Serv5Testimonials';
import Serv5GetInTouch from './components/sections/Serv5GetInTouch';
import Serv5ReadyForLiftoff from './components/sections/Serv5ReadyForLiftoff';
import Serv5Footer from './components/sections/Serv5Footer';
import ContentPage from './pages/ContentPage';
import ProjectConsultationModal from './components/modals/ProjectConsultationModal';
import RobotMascotGuide from './components/mascot/RobotMascotGuide';
import Serv5KineticIntro from './components/intro/Serv5KineticIntro';
import Serv5ContextualCursor from './components/ui/Serv5ContextualCursor';
import { Play } from 'lucide-react';

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isHomePage = location.pathname === '/' || location.pathname === '';
  const [lang, setLang] = useState('ar');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('General Consultation');
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(1);

  const reduxTheme = useSelector((state) => state.ui?.theme) || 'light';
  const [theme, setThemeState] = useState(reduxTheme);

  const handleReplayIntro = () => {
    setIntroKey(prev => prev + 1);
    setShowIntro(true);
  };

  useEffect(() => {
    window.__replayIntro = handleReplayIntro;
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Synchronize theme with DOM attributes and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    try {
      localStorage.setItem('serv5_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  // Listen to OS system color scheme changes when user has no stored preference
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const hasStored = localStorage.getItem('serv5_theme');
      if (!hasStored) {
        const nextTheme = e.matches ? 'dark' : 'light';
        setThemeState(nextTheme);
        dispatch(setTheme(nextTheme));
      }
    };
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [dispatch]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    // Temporarily add a class for smooth transition
    document.documentElement.classList.add('theme-transitioning');
    setThemeState(nextTheme);
    dispatch(toggleTheme());
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 400);
  };

  useEffect(() => {
    if (!isHomePage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.querySelector('.home-scroll-motion');
    const sections = root?.querySelectorAll('[data-home-scroll-section]');
    if (!root || !sections?.length || !('IntersectionObserver' in window)) return;

    root.classList.add('home-scroll-motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-home-scroll-visible', entry.isIntersecting);
      });
    }, { threshold: 0.12 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenConsultation = (subject = 'General Consultation') => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
  };

  if (!isHomePage) {
    return (
      <div className={`serv5-world-root theme-${theme} ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`}>
        <Serv5ContextualCursor lang={lang} />
        <Navbar
          onOpenConsultation={handleOpenConsultation}
          lang={lang}
          onToggleLang={toggleLanguage}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
        <main className="world-main-content content-page-main">
          <ContentPage
            pathname={location.pathname}
            lang={lang}
            onOpenConsultation={handleOpenConsultation}
          />
        </main>
        <Serv5Footer onOpenConsultation={handleOpenConsultation} lang={lang} />
        <ProjectConsultationModal
          isOpen={modalOpen}
          onClose={handleCloseConsultation}
          initialSubject={modalSubject}
        />
      </div>
    );
  }

  return (
    <div className={`serv5-world-root home-scroll-motion theme-${theme} ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`}>
      {/* CONTEXTUAL MAGNETIC & DYNAMIC ACTION CURSOR */}
      <Serv5ContextualCursor lang={lang} />

      {/* TYSHA-INSPIRED BRUTALIST & ARCHITECTURAL KINETIC INTRO PRELOADER */}
      {showIntro && (
        <Serv5KineticIntro
          key={`kinetic-intro-${introKey}`}
          onComplete={() => setShowIntro(false)}
          lang={lang}
        />
      )}

      {/* FLOATING REPLAY PILL TO TRIGGER KINETIC INTRO AT ANY TIME */}
      {!showIntro && (
        <button
          onClick={handleReplayIntro}
          className="serv5-replay-intro-pill"
          title={lang === 'ar' ? 'إعادة مشاهدة العرض السينمائي (TYSHA Style)' : 'Replay Cinematic Intro (TYSHA Style)'}
        >
          <div className="pill-play-icon">
            <Play size={10} fill="currentColor" />
          </div>
          <span>{lang === 'ar' ? 'العرض السينمائي SERV5' : 'SERV5 Kinetic Intro'}</span>
        </button>
      )}

      {/* AMBIENT LIGHTING MESH (DEEP OBSIDIAN NAVY, ELECTRIC SAPPHIRE, SOFT ICE BLUE & SIGNATURE ORANGE) */}
      <div className="world-ambient-lighting" aria-hidden="true">
        <div className="ambient-orb-navy" />
        <div className="ambient-orb-ice" />
        <div className="ambient-orb-deep" />
        <div className="ambient-orb-brand-gradient-top" />
        <div className="ambient-orb-brand-gradient-mid" />
      </div>

      {/* STICKY GLASS NAVIGATION */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        lang={lang}
        onToggleLang={toggleLanguage}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* INTERACTIVE 3D ROBOT MASCOT & TOUR GUIDE */}
      <RobotMascotGuide
        lang={lang}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* MAIN 11-STAGE EXPEDITION */}
      <main className="world-main-content">
        {/* 1. HERO SCENE */}
        <HeroSection onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 2. PARTNERS & CERTIFICATIONS MARQUEE */}
        {/* 4. DIGITAL DOMAINS & SERVICES SHOWCASE */}
        <ServicesShowcase onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 5. ENTERPRISE PRODUCTS SHOWCASE */}
        <Serv5ProductsShowcase onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 6. DESIGN ZEITGEIST 3D WEBSITES SHOWCASE */}
        <NewestPostsSection onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 6. NEWEST POSTS / ARTICLES (Directly from Serv5.eg) */}
        <Serv5NewestPosts onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 9. CLIENT TESTIMONIALS (20,000+ Clients from Serv5.eg) */}
        <Serv5Testimonials onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 10. GET IN TOUCH / DIRECT CONTACT (Mansoura Coordinates from Serv5.eg) */}
        <Serv5GetInTouch onOpenConsultation={handleOpenConsultation} lang={lang} />

      </main>

      {/* 11 + 12. TAIL STACK — THE CTA IS PINNED ON TOP WHILE THE FOOTER SLIDES OUT FROM UNDERNEATH IT */}
      <div className="home-tail-stack">
        {/* 11. READY FOR LIFTOFF? (High-Energy CTA from Serv5.eg) */}
        <Serv5ReadyForLiftoff onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 12. COMPREHENSIVE SERV5 FOOTER */}
        <Serv5Footer onOpenConsultation={handleOpenConsultation} lang={lang} />
      </div>

      {/* STRATEGIC CONSULTATION MODAL */}
      <ProjectConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialSubject={modalSubject}
      />
    </div>
  );
}
