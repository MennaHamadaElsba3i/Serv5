import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Star,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  Mic,
  MessageSquare,
  Sparkles,
  Smartphone,
  CheckCheck,
  Award
} from 'lucide-react';

/* ───────────────────────────────────────────────────────────────────
   SERV5 TESTIMONIALS — COMPACT 3D CAROUSEL (DIVERSE FORMAT CARDS)
   Exact original compact card dimensions (no tabs):
   - Card 1: Voice Note Testimonial (فويس مع ويف فورم تفاعلي)
   - Card 2: Written Quote Testimonial (كلام / نص)
   - Card 3: Screenshot Proof Testimonial (سكرين شوت واتساب)
   - Card 4: Client Photo & Project (صورة العميل والمشروع)
   - Card 5: Second Voice Note Testimonial (فويس آخر)
   ─────────────────────────────────────────────────────────────────── */

export default function Serv5Testimonials({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSeconds, setAudioSeconds] = useState(0);

  const sectionRef = useRef(null);
  const audioIntervalRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  const testimonials = [
    {
      id: 1,
      format: 'voice', // 🎙️ كارد فويس
      author: isRtl ? 'عبدالفتاح الخلقي' : 'Abdelfattah Al-Khalqi',
      role: isRtl ? 'مؤسس ورئيس تنفيذي' : 'Founder & CEO',
      company: isRtl ? 'مجموعة الخلقي التجارية' : 'Al-Khalqi Commercial Group',
      avatar: 'ع',
      rating: 5,
      category: isRtl ? 'متجر وتطبيق' : 'E-Commerce',
      quote: isRtl
        ? 'ناس محترمه وشغلهم ممتاز ومستوى التصاميم عندهم متقدمه بالتوفيق انشاء الله.'
        : 'Respectable team, excellent work, and cutting-edge design standards.',
      badge: isRtl ? 'تسجيل صوتي موثق' : 'Verified Voice Note',
      audioDuration: '0:34',
      totalSeconds: 34,
      accentGradient: 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)',
      accentColor: '#2563eb',
      bgTint: 'rgba(37, 99, 235, 0.04)',
    },
    {
      id: 2,
      format: 'text', // 📝 كارد كلام
      author: isRtl ? 'إيمان نصر' : 'Eman Nasr',
      role: isRtl ? 'مدير العمليات والتسويق' : 'COO & Marketing Director',
      company: isRtl ? 'لوكس ستور العربية' : 'LuxeStore Arabia Co.',
      avatar: 'إ',
      rating: 5,
      category: isRtl ? 'متجر إلكتروني فاخر' : 'Luxury Store',
      quote: isRtl
        ? 'بصراحة شهادة حق في حق سيرف بعد التجربة، قمة في الذوق والاحترام وكل طلب بطلبه بيتم تنفيذه على أكمل وجه وأكتر مما أتمنى، الدعم الفني والمتابعة بعد البيع ممتازة ومبيسيبوش العميل بعد انتهاء الشغل.'
        : 'Honestly, I can attest to the quality of SERV5. Incredibly polite and professional, and they fulfilled every request beyond expectations with 24/7 proactive technical support.',
      badge: isRtl ? 'شراكة 3+ سنوات' : '3+ Year Partner',
      accentGradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fbbf24 100%)',
      accentColor: '#ea580c',
      bgTint: 'rgba(234, 88, 12, 0.04)',
    },
    {
      id: 3,
      format: 'screenshot', // 📱 كارد سكرين شوت
      author: isRtl ? 'عماد الدين شملولي' : 'Imad al-Din Shamluli',
      role: isRtl ? 'مدير المشروعات الرقمية' : 'Head of Digital Solutions',
      company: isRtl ? 'مجموعة شملولي السحابية' : 'Shamluli Cloud Enterprise',
      avatar: 'ع',
      rating: 5,
      category: isRtl ? 'منظومة سحابية' : 'Cloud Architecture',
      quote: isRtl
        ? 'دقة ونزاهة وخدمة ممتازة واحترافية عالية في التعامل والعمل. أتمنى لهم دوام التوفيق والازدهار.'
        : 'High accuracy and integrity. Excellent service and high-quality professionalism.',
      badge: isRtl ? 'سكرين شوت تقييم' : 'Verified Chat Proof',
      whatsappMsg: isRtl
        ? 'السلام عليكم.. حابب أشكركم جداً على دقة المواعيد واحترافية تسليم النظام السحابي، فريق محترم ويستاهل كل خير 👏'
        : 'Peace be upon you! Thank you for the punctuality and professionalism in delivering our cloud system.',
      whatsappTime: '01:20 PM',
      accentGradient: 'linear-gradient(135deg, #0284c7 0%, #22d3ee 100%)',
      accentColor: '#0284c7',
      bgTint: 'rgba(2, 132, 199, 0.04)',
    },
    {
      id: 4,
      format: 'photo', // 👤 كارد صورة
      author: isRtl ? 'م. طارق الزهراني' : 'Eng. Tariq Al-Zahrani',
      role: isRtl ? 'مدير تقنية المعلومات' : 'Chief Information Officer',
      company: isRtl ? 'حلول التوزيع اللوجستي' : 'Logistics Flow Saudi',
      avatar: 'ط',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      rating: 5,
      category: isRtl ? 'نظام تتبع وERP' : 'Fleet & ERP',
      quote: isRtl
        ? 'السرعة الفائقة في تنفيذ نظام الربط مع الفوترة الإلكترونية ZATCA واستقرار السيرفرات بدون أي توقف مفاجئ جعل سيرف فايف شريكنا الدائم.'
        : 'The lightning speed in executing our ZATCA e-invoicing bridge and 99.99% server stability made SERV5 our permanent technological partner.',
      badge: isRtl ? 'صورة العميل والمشروع' : 'Client & Delivered Project',
      projectScope: isRtl ? 'بوابة لوجستية وربط مع ZATCA' : 'ZATCA Phase-2 Integration',
      metric: isRtl ? '100% امتثال رسمي' : '100% Tax Compliance',
      accentGradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
      accentColor: '#059669',
      bgTint: 'rgba(5, 150, 105, 0.04)',
    },
    {
      id: 5,
      format: 'voice', // 🎙️ كارد فويس ثانٍ
      author: isRtl ? 'د. سارة المنشاوي' : 'Dr. Sara El-Menshawy',
      role: isRtl ? 'المدير الطبي العام' : 'Medical Director',
      company: isRtl ? 'شبكة مراكز مدبولس' : 'MedPulse Health Group',
      avatar: 'س',
      rating: 5,
      category: isRtl ? 'تطبيق طبي سحابي' : 'Health Portal',
      quote: isRtl
        ? 'تطبيق العيادات وحجز المواعيد فاق توقعاتنا في سهولة الاستخدام للمرضى، وفريق الدعم الفني متواجد معنا لحظة بلحظة.'
        : 'The patient booking portal exceeded all benchmarks in speed and usability, backed by 24/7 proactive technical response.',
      badge: isRtl ? 'تسجيل صوتي موثق' : 'Verified Voice Note',
      audioDuration: '0:28',
      totalSeconds: 28,
      accentGradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
      accentColor: '#7c3aed',
      bgTint: 'rgba(124, 58, 237, 0.04)',
    },
  ];

  // Auto-cycle through cards if audio is not playing
  useEffect(() => {
    if (!isAutoPlaying || !isInView || isPlayingAudio) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isInView, isPlayingAudio, testimonials.length]);

  // Audio Playback handler
  useEffect(() => {
    if (isPlayingAudio) {
      const currentItem = testimonials[activeIndex];
      const maxSeconds = currentItem.totalSeconds || 30;

      if ('speechSynthesis' in window && !window.speechSynthesis.speaking) {
        try {
          const utterance = new SpeechSynthesisUtterance(currentItem.quote);
          utterance.lang = isRtl ? 'ar-SA' : 'en-US';
          utterance.rate = 1.0;
          utterance.onend = () => {
            setIsPlayingAudio(false);
          };
          window.speechSynthesis.speak(utterance);
        } catch (e) {
          // Fallback timer
        }
      }

      audioIntervalRef.current = setInterval(() => {
        setAudioSeconds((sec) => {
          if (sec + 1 >= maxSeconds) {
            setIsPlayingAudio(false);
            clearInterval(audioIntervalRef.current);
            return maxSeconds;
          }
          return sec + 1;
        });
      }, 1000);
    } else {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }

    return () => {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlayingAudio, activeIndex]);

  const toggleAudio = () => {
    setIsAutoPlaying(false);
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
    } else {
      setAudioSeconds(0);
      setIsPlayingAudio(true);
    }
  };

  const navigate = (dir) => {
    setIsAutoPlaying(false);
    setIsPlayingAudio(false);
    setAudioSeconds(0);
    setDirection(dir);
    setActiveIndex((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length;
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const current = testimonials[activeIndex];

  // Slide animation variants
  const slideVariants = {
    enter: (d) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: d > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { type: 'spring', stiffness: 260, damping: 30 },
        rotateY: { type: 'spring', stiffness: 260, damping: 30 },
      },
    },
    exit: (d) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.85,
      rotateY: d > 0 ? -15 : 15,
      transition: { duration: 0.35 },
    }),
  };

  // 24 waveform bars for voice cards
  const waveformBars = [35, 55, 80, 100, 65, 45, 75, 90, 60, 40, 85, 95, 70, 50, 80, 65, 45, 90, 75, 55, 85, 60, 40, 30];

  const formatSeconds = (sec) => {
    const mins = Math.floor(sec / 60);
    const remaining = sec % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  return (
    <section
      ref={sectionRef}
      className="serv5-testimonials-v2"
      id="testimonials"
      style={{ perspective: '1200px' }}
    >
      <div className="serv5-container">
        {/* ── Section Header ── */}
        <motion.div
          className="testimonials-v2-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="testimonials-v2-title">
            {isRtl ? (
              <>
                عملاء نعتز بثقتهم |{' '}
                <span className="text-gradient-ice">20,000+ عميل</span> يثقون في{' '}
                <span className="text-gradient-orange-luminous">سيرف فايف</span>
              </>
            ) : (
              <>
                Valued Clients | Over{' '}
                <span className="text-gradient-ice">20,000+ Enterprises</span> Trust{' '}
                <span className="text-gradient-orange-luminous">SERV5</span>
              </>
            )}
          </h2>

          <p className="testimonials-v2-subtitle" style={{ marginBottom: 0 }}>
            {isRtl
              ? 'شهادات حقيقية متنوعة تشمل تسجيلات صوتية موثقة 🎙️، ومراجعات نصية 📝، وإثباتات رسائل حقيقية 📱 لشركاء نجاح سيرف فايف.'
              : 'Real testimonials featuring verified voice notes 🎙️, written reviews 📝, and authentic proof snapshots 📱.'}
          </p>
        </motion.div>

        {/* ── Main Interactive Card Stage (Original 3D Compact Size) ── */}
        <div className="testimonials-v2-stage">
          {/* Background preview cards (depth effect) */}
          <div className="testimonials-depth-cards">
            {[-1, 1].map((offset) => {
              const idx = (activeIndex + offset + testimonials.length) % testimonials.length;
              const item = testimonials[idx];
              return (
                <motion.div
                  key={`bg-${offset}`}
                  className={`testimonials-depth-card ${offset === -1 ? 'depth-left' : 'depth-right'}`}
                  animate={{
                    opacity: 0.4,
                    scale: 0.82,
                    x: offset * (isRtl ? -120 : 120),
                    rotateY: offset * (isRtl ? 8 : -8),
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 28 }}
                  style={{ background: item.bgTint, borderColor: `${item.accentColor}15` }}
                >
                  <div className="depth-card-inner">
                    <Quote size={24} style={{ color: item.accentColor, opacity: 0.3 }} />
                    <p className="depth-card-quote">{item.quote.substring(0, 60)}...</p>
                    <span className="depth-card-author">{item.author}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Card (Original Size, Format-Specific) */}
          <div className="testimonials-active-card-wrapper">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonials-active-card"
                style={{
                  background: current.bgTint,
                  borderColor: `${current.accentColor}25`,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 80) navigate(-1);
                  else if (info.offset.x < -80) navigate(1);
                }}
              >
                {/* Accent Top Bar */}
                <div
                  className="card-accent-bar"
                  style={{ background: current.accentGradient }}
                />

                {/* ── CARD CONTENT BASED ON FORMAT (No Tabs!) ── */}

                {/* 1. VOICE CARD (كارد فويس) */}
                {current.format === 'voice' && (
                  <div className="py-1">
                    {/* Voice Badge Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                        <Mic size={13} className={isPlayingAudio ? 'animate-bounce text-blue-600' : ''} />
                        <span>{isRtl ? 'تسجيل صوتي من العميل' : 'Client Voice Recording'}</span>
                      </span>

                      <span className="font-mono text-xs font-bold text-slate-500">
                        {isPlayingAudio ? formatSeconds(audioSeconds) : current.audioDuration}
                      </span>
                    </div>

                    {/* Compact Interactive Voice Player */}
                    <div className="p-3.5 rounded-2xl bg-slate-900 text-white flex items-center gap-3.5 shadow-md mb-4">
                      <button
                        type="button"
                        onClick={toggleAudio}
                        className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                        aria-label="Play/Pause Voice Note"
                      >
                        {isPlayingAudio ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ms-0.5" />}
                      </button>

                      {/* Equalizer Waveform Bars */}
                      <div className="flex-1 flex items-center gap-1 h-9 overflow-hidden">
                        {waveformBars.map((height, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-full transition-all duration-150 ${
                              isPlayingAudio ? 'bg-blue-400' : 'bg-slate-700'
                            }`}
                            style={{
                              height: isPlayingAudio ? `${Math.max(20, height * (0.3 + Math.random() * 0.7))}%` : `${height * 0.6}%`,
                              minWidth: '2px',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Spoken Quote text */}
                    <p className="active-card-quote text-slate-700 text-sm leading-relaxed mb-3">
                      "{current.quote}"
                    </p>
                  </div>
                )}

                {/* 2. TEXT CARD (كارد كلام) */}
                {current.format === 'text' && (
                  <div className="py-1">
                    <div className="card-quote-icon-wrap">
                      <Quote size={32} style={{ color: current.accentColor, opacity: 0.25 }} />
                    </div>

                    <p className="active-card-quote">
                      "{current.quote}"
                    </p>
                  </div>
                )}

                {/* 3. SCREENSHOT PROOF CARD (كارد سكرين شوت) */}
                {current.format === 'screenshot' && (
                  <div className="py-1 mb-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                        <Smartphone size={13} />
                        <span>{isRtl ? 'سكرين شوت تقييم موثق' : 'Verified Chat Screenshot'}</span>
                      </span>

                      <span className="text-[11px] font-bold text-slate-400">
                        WhatsApp · {current.whatsappTime}
                      </span>
                    </div>

                    {/* Compact WhatsApp Bubble */}
                    <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-[#efeae2] p-3.5">
                      <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm text-slate-800 text-xs sm:text-sm leading-relaxed">
                        <p>{current.whatsappMsg}</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400">
                          <span>{current.whatsappTime}</span>
                          <CheckCheck size={13} className="text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. PHOTO CARD (كارد صورة) */}
                {current.format === 'photo' && (
                  <div className="py-1 mb-3">
                    <div className="flex items-center gap-3.5 mb-3 p-3 rounded-2xl bg-white border border-slate-200">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shadow border border-slate-200 flex-shrink-0">
                        <img src={current.photoUrl} alt={current.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                          {isRtl ? 'المشروع المنفذ والأثر المحقق' : 'Delivered Scope'}
                        </span>
                        <h5 className="font-bold text-slate-900 text-xs mt-0.5">{current.projectScope}</h5>
                        <span className="text-[11px] text-emerald-700 font-bold block mt-0.5">{current.metric}</span>
                      </div>
                    </div>

                    <p className="active-card-quote text-xs leading-relaxed text-slate-700">
                      "{current.quote}"
                    </p>
                  </div>
                )}

                {/* ── Author info row (Consistent across all cards) ── */}
                <div className="active-card-author-row mt-3">
                  {/* Avatar */}
                  <div
                    className="active-card-avatar"
                    style={{ background: current.accentGradient }}
                  >
                    <span>{current.avatar}</span>
                  </div>

                  <div className="active-card-author-info">
                    <h4 className="active-card-name">{current.author}</h4>
                    <p className="active-card-role">
                      {current.role} <span className="active-card-dot">·</span>{' '}
                      <span style={{ color: current.accentColor }}>{current.company}</span>
                    </p>
                    <div className="active-card-stars">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                  </div>

                  {/* Category & Badge */}
                  <div className="active-card-meta">
                    <span
                      className="active-card-badge"
                      style={{
                        background: `${current.accentColor}12`,
                        color: current.accentColor,
                        borderColor: `${current.accentColor}25`,
                      }}
                    >
                      <CheckCircle2 size={11} />
                      {current.badge}
                    </span>
                    <span className="active-card-category">{current.category}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="testimonials-v2-nav">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate(-1)}
              className="testimonials-nav-btn cursor-pointer"
              aria-label="Previous"
            >
              {isRtl ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </motion.button>

            {/* Progress dots */}
            <div className="testimonials-v2-dots">
              {testimonials.map((item, idx) => (
                <motion.button
                  key={idx}
                  className={`testimonials-dot cursor-pointer ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                    setIsAutoPlaying(false);
                    setIsPlayingAudio(false);
                    setTimeout(() => setIsAutoPlaying(true), 12000);
                  }}
                  animate={
                    idx === activeIndex
                      ? { width: 32, background: current.accentColor }
                      : { width: 8, background: '#cbd5e1' }
                  }
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate(1)}
              className="testimonials-nav-btn cursor-pointer"
              aria-label="Next"
            >
              {isRtl ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </motion.button>
          </div>
        </div>

        {/* ── Bottom CTA Strip ── */}
        <motion.div
          className="testimonials-v2-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenConsultation(isRtl ? 'استفسار بعد آراء العملاء' : 'Post-Testimonials Inquiry')}
            className="testimonials-cta-btn cursor-pointer"
          >
            <span>{isRtl ? 'ابدأ مشروعك مع فريق سيرف فايف' : 'Start Your Project With SERV5'}</span>
            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
