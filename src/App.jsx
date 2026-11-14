import React, { useState, useEffect } from 'react';
import SculpturalWorld3D from './components/3d/SculpturalWorld3D';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PartnersCarousel from './components/sections/PartnersCarousel';
import ServicesShowcase from './components/sections/ServicesShowcase';
import NewestPostsSection from './components/sections/NewestPostsSection';
import Serv5NewestPosts from './components/sections/Serv5NewestPosts';
import Serv5Testimonials from './components/sections/Serv5Testimonials';
import Serv5GetInTouch from './components/sections/Serv5GetInTouch';
import Serv5ReadyForLiftoff from './components/sections/Serv5ReadyForLiftoff';
import Serv5Footer from './components/sections/Serv5Footer';
import ProjectConsultationModal from './components/modals/ProjectConsultationModal';
import RobotMascotGuide from './components/mascot/RobotMascotGuide';
import Serv5KineticIntro from './components/intro/Serv5KineticIntro';
import Serv5ContextualCursor from './components/ui/Serv5ContextualCursor';
import { Play } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('General Consultation');
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(1);

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

  return (
    <div className={`serv5-world-root ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`}>
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

      {/* 3D SURREAL & SCULPTURAL ART INSTALLATION CANVAS */}
      <SculpturalWorld3D />

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

        {/* 2. ABOUT SERV5 & 16+ YEARS EXPERTISE */}
        <AboutSection onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 3. PARTNERS & CERTIFICATIONS MARQUEE */}
        <PartnersCarousel lang={lang} />

        {/* 4. DIGITAL DOMAINS & SERVICES SHOWCASE */}
        <ServicesShowcase onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 5. DESIGN ZEITGEIST 3D WEBSITES SHOWCASE */}
        <NewestPostsSection onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 6. NEWEST POSTS / ARTICLES (Directly from Serv5.eg) */}
        <Serv5NewestPosts onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 9. CLIENT TESTIMONIALS (20,000+ Clients from Serv5.eg) */}
        <Serv5Testimonials onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 10. GET IN TOUCH / DIRECT CONTACT (Mansoura Coordinates from Serv5.eg) */}
        <Serv5GetInTouch onOpenConsultation={handleOpenConsultation} lang={lang} />

        {/* 11. READY FOR LIFTOFF? (High-Energy CTA from Serv5.eg) */}
        <Serv5ReadyForLiftoff onOpenConsultation={handleOpenConsultation} lang={lang} />
      </main>

      {/* 12. COMPREHENSIVE SERV5 FOOTER */}
      <Serv5Footer onOpenConsultation={handleOpenConsultation} lang={lang} />

      {/* STRATEGIC CONSULTATION MODAL */}
      <ProjectConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialSubject={modalSubject}
      />
    </div>
  );
}
