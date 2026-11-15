import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Smartphone,
  TrendingUp,
  Server,
  Zap,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { serv5Data } from '../../data/serv5Data';

const iconMap = {
  Globe,
  Smartphone,
  TrendingUp,
  Server,
  Zap,
  Cpu
};

export default function Serv5ServicesSwitchboard({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [activeIdx, setActiveIdx] = useState(0);
  const services = serv5Data.services;
  const active = services[activeIdx];
  const ActiveIcon = iconMap[active.icon] || Globe;

  const arTitles = {
    'web-dev': 'تطبيقات الويب المتقدمة',
    'mobile-apps': 'تطوير تطبيقات الجوال',
    'ecommerce': 'حلول التجارة الإلكترونية',
    'cloud-hosting': 'البنية السحابية والاستضافة',
    'marketing': 'التسويق الرقمي وإدارة النمو',
    'erp-software': 'أنظمة ERP وتكامل البرمجيات'
  };

  const arShortDescs = {
    'web-dev': 'منصات ويب قابلة للتوسع بأداء فائق مبنية بـ React و Next.js.',
    'mobile-apps': 'تطبيقات جوال أصلية وعابرة للمنصات بتجارب تفاعلية سلسة.',
    'ecommerce': 'متاجر إلكترونية متكاملة مع بوابات الدفع السعودية والمصرية.',
    'cloud-hosting': 'استضافة سحابية على NVMe مع حماية DDoS وضمان 99.98% تشغيل.',
    'marketing': 'حملات تسويقية قائمة على البيانات لتعظيم العائد على الإنفاق الإعلاني.',
    'erp-software': 'أنظمة إدارة مؤسسية متكاملة مع الفوترة الإلكترونية ومنصة ناجز.'
  };

  return (
    <section className="switchboard-section" id="services" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="switchboard-badge">
            <Sparkles size={14} />
            <span>{isRtl ? 'خدماتنا الرقمية' : 'WHAT WE DO'}</span>
          </div>
          <h2 className="switchboard-heading">
            {isRtl ? 'حلول رقمية، مصممة حولك' : 'Digital Solutions, Built Around You'}
          </h2>
          <p className="switchboard-subheading">
            {isRtl
              ? 'نقدم مجموعة شاملة من الخدمات التقنية المتقدمة لتحويل أعمالك رقمياً'
              : 'A comprehensive suite of advanced technology services to digitally transform your business'}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="switchboard-grid">
          {/* Left Column: Service Selector List */}
          <div className="switchboard-nav">
            {services.map((svc, idx) => {
              const Icon = iconMap[svc.icon] || Globe;
              const isActive = idx === activeIdx;
              return (
                <button
                  key={svc.id}
                  className={`switchboard-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="switchboard-nav-icon">
                    <Icon size={20} />
                  </div>
                  <div className="switchboard-nav-text">
                    <span className="switchboard-nav-title">
                      {isRtl ? arTitles[svc.id] || svc.title : svc.title}
                    </span>
                    <span className="switchboard-nav-metric">{svc.metrics}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      className="switchboard-active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Service Detail Preview */}
          <div className="switchboard-preview">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="switchboard-preview-card"
              >
                {/* Preview Header */}
                <div className="switchboard-preview-header">
                  <div className="switchboard-preview-icon-wrap">
                    <ActiveIcon size={28} />
                  </div>
                  <div>
                    <h3 className="switchboard-preview-title">
                      {isRtl ? arTitles[active.id] || active.title : active.title}
                    </h3>
                    <span className="switchboard-preview-metric">{active.metrics}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="switchboard-preview-desc">
                  {isRtl ? arShortDescs[active.id] || active.shortDesc : active.fullDesc}
                </p>

                {/* Living Dynamic Service Simulation Canvas */}
                <div className="switchboard-live-sim-wrap mb-4">
                  {active.id === 'web-dev' && (
                    <div className="sim-box sim-web">
                      <div className="sim-score-badge">
                        <span className="sim-score-num">100</span>
                        <span className="sim-score-lbl">Core Web Vitals</span>
                      </div>
                      <div className="sim-code-preview" dir="ltr">
                        <span className="sim-code-line text-blue-600 font-mono text-xs font-bold">&lt;EnterpriseArchitecture&gt;</span>
                        <span className="sim-code-line text-slate-500 font-mono text-xs pl-3 block">Next.js 15 + EdgeSSR + Microservices</span>
                        <span className="sim-code-line text-emerald-600 font-mono text-xs pl-3 font-semibold block">⚡ Page Load: Sub-second (0.32s)</span>
                        <span className="sim-code-line text-blue-600 font-mono text-xs font-bold">&lt;/EnterpriseArchitecture&gt;</span>
                      </div>
                    </div>
                  )}

                  {active.id === 'mobile-apps' && (
                    <div className="sim-box sim-mobile">
                      <div className="sim-mobile-header">
                        <span className="sim-notch" />
                        <span className="text-xs font-semibold text-slate-500">iOS &amp; Android Fleet Engine</span>
                      </div>
                      <div className="sim-phone-notification">
                        <div className="sim-notif-icon">🚀</div>
                        <div className="sim-notif-text">
                          <strong className="block text-xs font-bold text-slate-800">
                            {isRtl ? 'تم تسليم الطلب بنجاح #8492' : 'Order #8492 Out for Delivery'}
                          </strong>
                          <span className="text-xs text-slate-500">
                            {isRtl ? 'تتبع لحظي عبر خرائط GPS مدمجة' : 'Real-time Driver GPS Sync • 0.2s Latency'}
                          </span>
                        </div>
                      </div>
                      <div className="sim-metrics-tag">
                        <span>2.4M+ App Installs</span>
                        <span className="text-orange-600 font-bold">4.9 ★ Rating</span>
                      </div>
                    </div>
                  )}

                  {active.id === 'ecommerce' && (
                    <div className="sim-box sim-ecom">
                      <div className="sim-ecom-top">
                        <span className="text-xs font-bold text-slate-700">
                          {isRtl ? 'بوابات الدفع المعتمدة (السعودية والخليج)' : 'Instant Checkout Rails (GCC & Egypt)'}
                        </span>
                        <span className="sim-badge-boost">+180% Conversion</span>
                      </div>
                      <div className="sim-ecom-gateways">
                        <span className="sim-gateway-pill mada">MADA</span>
                        <span className="sim-gateway-pill apple"> Apple Pay</span>
                        <span className="sim-gateway-pill tabby">Tabby / Tamara</span>
                        <span className="sim-gateway-pill visa">Visa / Mastercard</span>
                      </div>
                    </div>
                  )}

                  {active.id === 'cloud-hosting' && (
                    <div className="sim-box sim-cloud">
                      <div className="sim-server-cluster">
                        <div className="sim-server-node">
                          <span className="sim-pulse-dot" />
                          <span className="text-xs font-bold text-slate-800">Cloud Cluster Riyadh (NVMe)</span>
                          <strong className="text-emerald-600 text-xs font-extrabold mr-auto">99.98% SLA</strong>
                        </div>
                        <div className="sim-server-node">
                          <span className="sim-pulse-dot" />
                          <span className="text-xs font-bold text-slate-800">Edge Node Cairo (DDoS Tier-4)</span>
                          <strong className="text-blue-600 text-xs font-extrabold mr-auto">Protected</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {active.id === 'marketing' && (
                    <div className="sim-box sim-marketing">
                      <div className="sim-roas-hero">
                        <div className="sim-roas-metric">4.8x</div>
                        <div className="sim-roas-desc">
                          <strong className="block text-xs font-bold text-slate-800">
                            {isRtl ? 'متوسط العائد الإعلاني (ROAS)' : 'Average Verified Client ROAS'}
                          </strong>
                          <span className="text-xs text-slate-500">
                            {isRtl ? 'حملات موجهة على Google و TikTok و Snapchat' : 'Precision Retargeting & Full CRO Funnel'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {active.id === 'erp-software' && (
                    <div className="sim-box sim-erp">
                      <div className="sim-zatca-wrap">
                        <div className="sim-zatca-badge">
                          <CheckCircle2 size={16} className="text-emerald-600" />
                          <span className="text-xs font-extrabold text-emerald-800">ZATCA Phase 2 Fatoora</span>
                        </div>
                        <p className="text-xs text-slate-600 mb-0">
                          {isRtl
                            ? 'ربط آلي مع منصة ناجز العدلية وهيئة الزكاة والضريبة والجمارك مع تشفير كامل'
                            : 'Direct API handshake with ZATCA Phase 2 e-invoicing & Najiz judicial portal'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Stack Tags */}
                <div className="switchboard-tech-stack">
                  {active.techStack.map((tech) => (
                    <span key={tech} className="switchboard-tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="switchboard-deliverables">
                  {active.deliverables.map((d) => (
                    <div key={d} className="switchboard-deliverable-item">
                      <CheckCircle2 size={16} className="switchboard-check-icon" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="switchboard-cta"
                  onClick={() => onOpenConsultation && onOpenConsultation(active.title)}
                >
                  <span>{isRtl ? 'استشرنا عن هذه الخدمة' : 'Inquire About This Service'}</span>
                  <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA Link */}
        <div className="text-center mt-4">
          <button
            className="switchboard-explore-all"
            onClick={() => onOpenConsultation && onOpenConsultation('All Services')}
          >
            <span>{isRtl ? 'اكتشف كل خدماتنا' : 'Explore All Services'}</span>
            <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
          </button>
        </div>
      </div>
    </section>
  );
}

