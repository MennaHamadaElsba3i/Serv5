import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, Quote, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

/* ───────────────────────────────────────────────────────────────────
   SERV5 TESTIMONIALS — IMMERSIVE 3D STACKED CARD EXPERIENCE
   Creative design: rotating 3D card stack with parallax depth,
   luminous gradient accents, staggered entrance animations,
   and interactive drag/swipe navigation.
   ─────────────────────────────────────────────────────────────────── */

export default function Serv5Testimonials({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  const testimonials = [
    {
      id: 1,
      author: isRtl ? 'عبدالفتاح الخلقي' : 'Abdelfattah Al-Khalqi',
      role: isRtl ? 'مؤسس ورئيس تنفيذي' : 'Founder & CEO',
      company: isRtl ? 'مجموعة الخلقي التجارية' : 'Al-Khalqi Commercial Group',
      avatar: 'ع',
      rating: 5,
      category: isRtl ? 'متجر وتطبيق' : 'E-Commerce',
      quote: isRtl
        ? 'ناس محترمه وشغلهم ممتاز ومستوى التصاميم عندهم متقدمه بالتوفيق انشاء الله.'
        : 'Respectable people, excellent work, and advanced design standards. May God grant them success.',
      badge: isRtl ? 'عميل معتمد' : 'Verified Client',
      accentGradient: 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)',
      accentColor: '#2563eb',
      bgTint: 'rgba(37, 99, 235, 0.04)',
    },
    {
      id: 2,
      author: isRtl ? 'إيمان نصر' : 'Eman Nasr',
      role: isRtl ? 'مدير العمليات والتسويق' : 'COO & Marketing Director',
      company: isRtl ? 'لوكس ستور العربية' : 'LuxeStore Arabia Co.',
      avatar: 'إ',
      rating: 5,
      category: isRtl ? 'متجر إلكتروني فاخر' : 'Luxury Store',
      quote: isRtl
        ? 'بصراحة شهادة حق في حق سيرف بعد التجربة، قمة في الذوق والاحترام وكل طلب بطلبه بيتم تنفيذه على أكمل وجه وأكتر مما أتمنى، الدعم الفني والمتابعة بعد البيع ممتازة ومبيسيبوش العميل بعد انتهاء الشغل.'
        : 'Honestly, I can attest to the quality of Serve after my experience with them. They are incredibly polite and professional, and they fulfilled every request, exceeding expectations. Their technical support is excellent.',
      badge: isRtl ? 'شراكة 3+ سنوات' : '3+ Year Partner',
      accentGradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fbbf24 100%)',
      accentColor: '#ea580c',
      bgTint: 'rgba(234, 88, 12, 0.04)',
    },
    {
      id: 3,
      author: isRtl ? 'عماد الدين شملولي' : 'Imad al-Din Shamluli',
      role: isRtl ? 'مدير المشروعات الرقمية' : 'Head of Digital Solutions',
      company: isRtl ? 'مجموعة شملولي السحابية' : 'Shamluli Cloud Enterprise',
      avatar: 'ع',
      rating: 5,
      category: isRtl ? 'منظومة سحابية' : 'Cloud Architecture',
      quote: isRtl
        ? 'دقة ونزاهة وخدمة ممتازة واحترافية عالية في التعامل والعمل. أتمنى لهم دوام التوفيق والازدهار.'
        : 'High accuracy and integrity. Excellent service and high-quality professionalism. I wish them continued success and prosperity.',
      badge: isRtl ? 'مشروع مؤسسي' : 'Flagship System',
      accentGradient: 'linear-gradient(135deg, #0284c7 0%, #22d3ee 100%)',
      accentColor: '#0284c7',
      bgTint: 'rgba(2, 132, 199, 0.04)',
    },
    {
      id: 4,
      author: isRtl ? 'م. طارق الزهراني' : 'Eng. Tariq Al-Zahrani',
      role: isRtl ? 'مدير تقنية المعلومات' : 'Chief Information Officer',
      company: isRtl ? 'حلول التوزيع اللوجستي' : 'Logistics Flow Saudi',
      avatar: 'ط',
      rating: 5,
      category: isRtl ? 'نظام تتبع وERP' : 'Fleet & ERP',
      quote: isRtl
        ? 'السرعة الفائقة في تنفيذ نظام الربط مع الفوترة الإلكترونية ZATCA واستقرار السيرفرات بدون أي توقف مفاجئ جعل سيرف فايف شريكنا الدائم.'
        : 'The lightning speed in executing our ZATCA e-invoicing bridge and 99.99% server stability made SERV5 our permanent technological partner.',
      badge: isRtl ? 'امتثال ZATCA' : 'ZATCA Certified',
      accentGradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
      accentColor: '#059669',
      bgTint: 'rgba(5, 150, 105, 0.04)',
    },
    {
      id: 5,
      author: isRtl ? 'د. سارة المنشاوي' : 'Dr. Sara El-Menshawy',
      role: isRtl ? 'المدير الطبي العام' : 'Medical Director',
      company: isRtl ? 'شبكة مراكز مدبولس' : 'MedPulse Health Group',
      avatar: 'س',
      rating: 5,
      category: isRtl ? 'تطبيق طبي سحابي' : 'Health Portal',
      quote: isRtl
        ? 'تطبيق العيادات وحجز المواعيد فاق توقعاتنا في سهولة الاستخدام للمرضى، وفريق الدعم الفني متواجد معنا لحظة بلحظة.'
        : 'The patient booking portal exceeded all benchmarks in speed and usability, backed by 24/7 proactive technical response.',
      badge: isRtl ? '100K+ مستخدم' : '100K+ Users',
      accentGradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
      accentColor: '#7c3aed',
      bgTint: 'rgba(124, 58, 237, 0.04)',
    },
  ];

  // Auto-cycle
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isInView, testimonials.length]);

  const navigate = (dir) => {
    setIsAutoPlaying(false);
    setDirection(dir);
    setActiveIndex((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length;
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
    // Resume autoplay after user inactivity
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

  // Floating decorative shapes
  const floatingOrbs = [
    { size: 320, x: '10%', y: '15%', color: 'rgba(37, 99, 235, 0.06)', delay: 0 },
    { size: 250, x: '80%', y: '60%', color: 'rgba(234, 88, 12, 0.05)', delay: 2 },
    { size: 180, x: '60%', y: '10%', color: 'rgba(56, 189, 248, 0.05)', delay: 4 },
  ];

  return (
    <section
      ref={sectionRef}
      className="serv5-testimonials-v2"
      id="testimonials"
      style={{ perspective: '1200px' }}
    >
      {/* Ambient floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="testimonials-ambient-orb"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
        />
      ))}

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
              ? 'شهادات حقيقية من قادة أعمال ومؤسسات رائدة في مصر والخليج العربي وثقوا في فريق سيرف فايف لتحويل رؤيتهم الرقمية إلى واقع.'
              : 'Real testimonials from business leaders and enterprises across the Middle East who trusted SERV5 to architect their digital vision into reality.'}
          </p>
        </motion.div>

        {/* ── Main Interactive Card Stage ── */}
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

          {/* Active Card with AnimatePresence */}
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
                  borderColor: `${current.accentColor}20`,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 80) navigate(-1);
                  else if (info.offset.x < -80) navigate(1);
                }}
              >
                {/* Accent gradient bar */}
                <div
                  className="card-accent-bar"
                  style={{ background: current.accentGradient }}
                />

                {/* Quote icon */}
                <div className="card-quote-icon-wrap">
                  <motion.div
                    initial={{ rotate: -10, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
                  >
                    <Quote size={36} style={{ color: current.accentColor, opacity: 0.2 }} />
                  </motion.div>
                </div>

                {/* Quote text */}
                <motion.p
                  className="active-card-quote"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  "{current.quote}"
                </motion.p>

                {/* Author info row */}
                <motion.div
                  className="active-card-author-row"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
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
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.06, type: 'spring', stiffness: 500 }}
                        >
                          <Star size={14} fill="#fbbf24" color="#fbbf24" />
                        </motion.span>
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
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="testimonials-v2-nav">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate(-1)}
              className="testimonials-nav-btn"
              aria-label="Previous"
            >
              {isRtl ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </motion.button>

            {/* Progress dots */}
            <div className="testimonials-v2-dots">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  className={`testimonials-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                    setIsAutoPlaying(false);
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
              className="testimonials-nav-btn"
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
            className="testimonials-cta-btn"
          >
            <span>{isRtl ? 'ابدأ مشروعك مع فريق سيرف فايف' : 'Start Your Project With SERV5'}</span>
            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
