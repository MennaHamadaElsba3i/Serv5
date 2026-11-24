import React, { useState, useRef, useEffect } from 'react';
import {
  CreditCard,
  Copy,
  Building2,
  Phone,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function ConnectedRoadmap({ lang = 'ar', whatsappUrl }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const ChevronNext = isRtl ? ChevronLeft : ChevronRight;

  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      num: '01',
      title: isRtl ? 'اختر وسيلة الدفع' : 'Choose Account',
      subtitle: isRtl ? 'المحطة 01 • تحديد الحساب' : 'Station 01 • Method Selection',
      desc: isRtl
        ? 'اختر البنك أو المحفظة المناسبة لك في مصر أو المملكة العربية السعودية.'
        : 'Select the convenient bank account or instant payment bridge in Egypt or Saudi Arabia.',
      actionText: isRtl ? 'استعراض الحسابات' : 'Browse Accounts',
      actionType: 'scroll',
      target: '#bank-cards-section',
      icon: CreditCard,
      accent: '#3b82f6',
      accentGlow: 'rgba(59, 130, 246, 0.4)'
    },
    {
      num: '02',
      title: isRtl ? 'انسخ البيانات بدقة' : 'Copy Coordinates',
      subtitle: isRtl ? 'المحطة 02 • تفادي الأخطاء' : 'Station 02 • Zero Input Errors',
      desc: isRtl
        ? 'استخدم زر النسخ السريع لنسخ رقم الحساب أو الآيبان بدقة لتفادي أي أخطاء في الإدخال.'
        : 'Use one-click copy buttons for precision and error-free transfer coordinates.',
      actionText: isRtl ? 'الانتقال للنسخ' : 'Quick Copy',
      actionType: 'scroll',
      target: '#bank-cards-section',
      icon: Copy,
      accent: '#06b6d4',
      accentGlow: 'rgba(6, 182, 212, 0.4)'
    },
    {
      num: '03',
      title: isRtl ? 'نفّذ التحويل البنكي' : 'Execute Transfer',
      subtitle: isRtl ? 'المحطة 03 • إتمام الحوالة' : 'Station 03 • Swift Execution',
      desc: isRtl
        ? 'أدخل اسم مشروعك أو رقم عرض السعر في خانة وصف الحوالة لتسهيل مطابقتها فوراً.'
        : 'Include your project title or quote reference in the payment note for instant matching.',
      actionText: isRtl ? 'إرشادات التحويل' : 'Transfer Guide',
      actionType: 'scroll',
      target: '#bank-faq-section',
      icon: Building2,
      accent: '#8b5cf6',
      accentGlow: 'rgba(139, 92, 246, 0.4)'
    },
    {
      num: '04',
      title: isRtl ? 'أرسل الإشعار عبر واتساب' : 'Send WhatsApp Slip',
      subtitle: isRtl ? 'المحطة 04 • بدء التنفيذ' : 'Station 04 • Immediate Kickoff',
      desc: isRtl
        ? 'شارك صورة الإيصال مع فريق المبيعات لاستلام التأكيد الرسمي وبدء التنفيذ مباشرة.'
        : 'Forward the receipt slip to sales WhatsApp for instant project activation & kickoff.',
      actionText: isRtl ? 'إرسال الإشعار واتساب' : 'Send WhatsApp Slip',
      actionType: 'link',
      target: whatsappUrl,
      icon: Phone,
      accent: '#10b981',
      accentGlow: 'rgba(16, 185, 129, 0.4)'
    }
  ];

  // Auto-progression cycle through the road steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  const handleStepClick = (idx, step, e) => {
    setIsAutoPlaying(false);
    setActiveStep(idx);

    if (step.actionType === 'scroll') {
      e?.preventDefault();
      const el = document.querySelector(step.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (step.actionType === 'link') {
      window.open(step.target, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="connected-roadmap-container"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* 1. INTERACTIVE HIGHWAY CONTROL DASHBOARD */}
      <div className="roadmap-control-dashboard">
        <div className="dashboard-top-row">
          <div className="dashboard-status-tag">
            <span className="pulsing-beacon-dot"></span>
            <span className="status-label font-mono">
              {isRtl ? 'مسار السداد الرقمي السريع' : 'High-Speed Payment Pipeline'}
            </span>
          </div>

          <div className="dashboard-stepper-pills">
            {steps.map((st, i) => (
              <button
                key={st.num}
                type="button"
                className={`stepper-pill-btn ${activeStep === i ? 'active' : ''} ${i < activeStep ? 'completed' : ''}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveStep(i);
                }}
                title={st.title}
              >
                <span className="pill-dot"></span>
                <span className="pill-text font-mono">{st.num}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Global Highway Laser Track Line */}
        <div className="dashboard-highway-track" aria-hidden="true">
          <div className="highway-base-rail"></div>
          <div
            className="highway-active-laser"
            style={{
              width: `${((activeStep + 1) / steps.length) * 100}%`,
              transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="highway-laser-head"></div>
          </div>
        </div>
      </div>

      {/* 2. THE 4 CONNECTED ROAD STEP CARDS */}
      <div className="roadmap-cards-grid">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <React.Fragment key={step.num}>
              {/* Individual Spotlight Tilt Card */}
              <RoadmapStepCard
                step={step}
                idx={idx}
                isActive={isActive}
                isPassed={isPassed}
                isRtl={isRtl}
                ArrowIcon={ArrowIcon}
                onCardClick={(e) => handleStepClick(idx, step, e)}
              />

              {/* Connecting Road Segment (Desktop: between Card i and Card i+1) */}
              {idx < steps.length - 1 && (
                <RoadConnectorSegment
                  idx={idx}
                  activeStep={activeStep}
                  isRtl={isRtl}
                  ChevronNext={ChevronNext}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Interactive Step Card with 3D Mouse Tilt & Dynamic Spotlight (React Bits style)
 */
function RoadmapStepCard({ step, idx, isActive, isPassed, isRtl, ArrowIcon, onCardClick }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({
    x: 0,
    y: 0,
    opacity: 0,
    rotateX: 0,
    rotateY: 0
  });

  const StepIcon = step.icon;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // 3D tilt X
    const rotateY = ((x - centerX) / centerX) * 6; // 3D tilt Y

    setSpotlight({ x, y, opacity: 1, rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({
      ...prev,
      opacity: 0,
      rotateX: 0,
      rotateY: 0
    }));
  };

  return (
    <div
      ref={cardRef}
      className={`roadmap-tilt-card ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onCardClick}
      style={{
        transform: `perspective(1000px) rotateX(${spotlight.rotateX}deg) rotateY(${spotlight.rotateY}deg) ${
          isActive ? 'translateY(-6px)' : ''
        }`
      }}
      tabIndex={0}
      role="button"
      aria-label={`${step.title} - ${step.actionText}`}
    >
      {/* Animated Border Beam on Active / Hover */}
      <div className="border-beam-tracer" aria-hidden="true"></div>

      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="card-spotlight-overlay"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, ${step.accentGlow}, transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="card-inner-layer">
        {/* Milestone Node */}
        <div className="milestone-badge-wrap">
          <div className="milestone-node-circle" style={{ borderColor: `${step.accent}80` }}>
            {/* Concentric Radar Rings */}
            <span className="sonar-ring-wave" style={{ borderColor: step.accent }}></span>
            <span className="sonar-ring-wave delay" style={{ borderColor: step.accent }}></span>

            <span className="milestone-num font-mono">{step.num}</span>

            <div
              className="milestone-icon-float"
              style={{ background: step.accent, boxShadow: `0 0 14px ${step.accent}` }}
            >
              <StepIcon size={13} />
            </div>
          </div>

          <span className="milestone-subtitle font-mono">{step.subtitle}</span>
        </div>

        {/* Title & Desc */}
        <h4 className="card-step-title">{step.title}</h4>
        <p className="card-step-desc">{step.desc}</p>

        {/* Action Link Button ("Link Road") */}
        <div className="card-action-footer">
          <span className="card-road-action-pill" style={{ borderColor: `${step.accent}50` }}>
            <span className="action-label">{step.actionText}</span>
            <ArrowIcon size={14} className="action-arrow-icon" />
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Animated Road Connector Bridge between 2 Steps (SVG Highway & Laser Beam)
 */
function RoadConnectorSegment({ idx, activeStep, isRtl, ChevronNext }) {
  const isSegmentActive = activeStep > idx;
  const isCurrentSegment = activeStep === idx;

  return (
    <div
      className={`road-connector-bridge ${isSegmentActive ? 'is-active' : ''} ${
        isCurrentSegment ? 'is-current' : ''
      }`}
      aria-hidden="true"
    >
      {/* SVG Road Track with Laser Animation */}
      <svg
        className="road-bridge-svg"
        viewBox="0 0 120 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`roadLaserGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>

          <filter id={`laserGlow-${idx}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Road Asphalt Track */}
        <line
          x1="0"
          y1="14"
          x2="120"
          y2="14"
          className="road-track-asphalt"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Center Dashed Lane Divider */}
        <line
          x1="0"
          y1="14"
          x2="120"
          y2="14"
          className="road-track-dashes"
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        {/* Continuous Flowing Laser Energy Pulse */}
        <line
          x1="0"
          y1="14"
          x2="120"
          y2="14"
          className={`road-laser-beam ${isRtl ? 'flow-rtl' : 'flow-ltr'}`}
          stroke={`url(#roadLaserGrad-${idx})`}
          strokeWidth="4"
          filter={`url(#laserGlow-${idx})`}
        />
      </svg>

      {/* Floating Highway Chevron Capsule */}
      <div className="road-chevron-capsule">
        <ChevronNext size={14} className="road-chevron-icon" />
      </div>

      {/* Traveling Energy Packet Dot */}
      <div className={`road-energy-comet ${isRtl ? 'comet-rtl' : 'comet-ltr'}`}></div>
    </div>
  );
}
