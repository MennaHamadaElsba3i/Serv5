import React from 'react';
import { ShieldCheck, Zap, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { serv5Data } from '../../data/serv5Data';

const iconMap = {
  ShieldCheck,
  Zap,
  CheckCircle,
  Clock
};

export default function WhyServ5Section({ onOpenConsultation }) {
  return (
    <section className="world-section why-serv5-section" id="why-serv5">
      <div className="container">
        {/* Header */}
        <div className="section-header-box text-center">
          <span className="section-eyebrow">THE SERV5 ADVANTAGE</span>
          <h2 className="section-title">
            Engineered Beyond the <span className="text-gradient-bronze">Ordinary</span>
          </h2>
          <p className="section-subtitle">
            Why leading brands choose SERV5 over standard software agencies: an engineering culture rooted in velocity, compliance, and zero compromise.
          </p>
        </div>

        {/* Dynamic Architectural Advantage Matrix */}
        <div className="why-matrix-grid mt-5">
          {serv5Data.whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div key={idx} className="why-matrix-node">
                <div className="node-glow-ring" />
                <div className="node-header">
                  <div className="node-icon-box">
                    <Icon size={26} />
                  </div>
                  <span className="node-metric-tag">{item.metric}</span>
                </div>

                <h3 className="node-title">{item.title}</h3>
                <p className="node-desc">{item.desc}</p>

                <div className="node-energy-line" />
              </div>
            );
          })}
        </div>

        {/* Central Credibility Callout */}
        <div className="why-credibility-banner mt-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="credibility-title">Ready to elevate your digital architecture?</h3>
              <p className="credibility-desc">
                Join over 20,000 satisfied clients who rely on SERV5 for enterprise-grade stability and measurable business expansion.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <button
                onClick={() => onOpenConsultation('Why SERV5 Direct Consultation')}
                className="btn-hero-primary"
              >
                <span>Initiate Strategic Assessment</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
