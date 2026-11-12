import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { serv5Data } from '../../data/serv5Data';

export default function HeroSection({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';

  return (
    <section className="world-hero-section world-hero-centered relative overflow-hidden" id="hero">
      {/* Subtle Atmospheric Blue-to-Orange Gradient Halo behind Hero */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[480px] rounded-full opacity-35 blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.28) 0%, rgba(234, 88, 12, 0.18) 55%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="row justify-content-center">
          {/* Centered Main Hero Narrative */}
          <div className="col-lg-10 col-xl-9 text-center hero-content-centered">
            {/* Top Pill / Eyebrow with Blue-to-Orange touch */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold"
              style={{
                background: 'linear-gradient(135deg, rgba(36, 90, 167, 0.08) 0%, rgba(234, 88, 12, 0.08) 100%)',
                border: '1px solid rgba(36, 90, 167, 0.2)',
                boxShadow: '0 2px 10px rgba(36, 90, 167, 0.06)'
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #ea580c)'
                }}
              />
              <span className="text-slate-700 tracking-wide">
                {isRtl ? 'محرك التحول الرقمي والأنظمة السحابية الكبرى' : 'ENTERPRISE DIGITAL ENGINE · RIYADH & CAIRO'}
              </span>
            </motion.div>

            {/* Main Headline with Framer Motion */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="hero-main-title hero-title-centered"
            >
              {isRtl ? (
                <>
                  بناء <span className="text-gradient-ice">الأنظمة الرقمية المتقدمة</span>،{' '}
                  <span className="text-gradient-navy">تطبيقات الجوال</span> وحلول{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #ea580c 0%, #f97316 60%, #245aa7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}
                  >
                    النمو المتسارع
                  </span>
                </>
              ) : (
                <>
                  Architecting <span className="text-gradient-ice">Enterprise Systems</span>,{' '}
                  <span className="text-gradient-navy">Mobile Platforms</span> &amp;{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #ea580c 0%, #f97316 60%, #245aa7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}
                  >
                    High-Velocity Growth
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subtitle with Framer Motion */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="hero-main-desc hero-desc-centered"
            >
              {isRtl
                ? `على مدار أكثر من ${serv5Data.company.yearsOfExperience} عاماً، صممت سيرف فايف حلولاً برمجية رائدة لأكثر من ${serv5Data.company.activeClients} جهة ومؤسسة وهيئة حكومية وشركات كبرى في مصر، المملكة العربية السعودية، والخليج العربي.`
                : `For over ${serv5Data.company.yearsOfExperience} years, SERV5 has designed monumental digital solutions for over ${serv5Data.company.activeClients} forward-thinking enterprises, government entities, and market leaders across Saudi Arabia, Egypt, and global markets.`}
            </motion.p>

            {/* CTA Buttons - Centered with Framer Motion Micro-Interactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="hero-action-group hero-actions-centered"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenConsultation(isRtl ? 'طلب دراسة معمارية للمشروع' : 'Hero Main Architectural Consultation')}
                className="btn-hero-primary"
              >
                <span>{isRtl ? 'طلب دراسة معمارية للمشروع' : 'Initiate Architecture Proposal'}</span>
                <ArrowRight size={17} style={{ transform: isRtl ? 'rotate(180deg)' : 'none' }} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="btn-hero-secondary"
              >
                <span>{isRtl ? 'استكشف الخدمات الهندسية' : 'Explore Engineering Domains'}</span>
                <ArrowUpRight size={15} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
