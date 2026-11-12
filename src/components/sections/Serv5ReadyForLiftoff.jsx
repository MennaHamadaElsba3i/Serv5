import React from 'react';
import { Phone, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Serv5ReadyForLiftoff({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="serv5-liftoff-section" id="ready-for-liftoff">
      <div className="serv5-liftoff-banner">
        {/* Extended Smooth Ambient Gradient Orbs (Non-harsh / Diffuse) */}
        <div
          className="absolute -top-32 -right-32 w-[620px] h-[620px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.28) 0%, rgba(249, 115, 22, 0.12) 40%, transparent 70%)',
            filter: 'blur(100px)'
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-36 -left-36 w-[620px] h-[620px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(37, 99, 235, 0.14) 40%, transparent 70%)',
            filter: 'blur(100px)'
          }}
          aria-hidden="true"
        />

        {/* Inner Content Grid Aligned with Global Container */}
        <div className="serv5-liftoff-container">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h2 className="serv5-liftoff-title">
                {isRtl ? 'مستعد للانطلاق نحو المستقبل الرقمي؟' : 'READY FOR DIGITAL LIFTOFF?'}
              </h2>

              <p className="text-lg sm:text-xl font-bold text-sky-100 mb-3">
                {isRtl
                  ? 'أطلق العنان لقوة الابتكار, وابدأ اليوم مع سيرف فايف!'
                  : 'Unlock the power of innovation, get started today!'}
              </p>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                {isRtl
                  ? 'ارتقِ بعملك مع أحدث الحلول البرمجية من سيرف فايف. حان الوقت لإطلاق قوة حلولنا البرمجية المتقدمة المصممة خصيصاً مع وضع أهداف عملك الفريدة في الاعتبار وبأعلى درجات الاستقرار السحابي.'
                  : 'Level up your business with cutting-edge software solutions from SERV5. Unlock your full potential today with custom architectures designed for scalable revenue.'}
              </p>

              {/* Fast Perks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-bold text-white mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-300 flex-shrink-0" />
                  <span>{isRtl ? 'استشارة ودراسة مجانية' : 'Free Initial Scope'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-300 flex-shrink-0" />
                  <span>{isRtl ? 'ضمان استقرار 99.98%' : '99.98% Uptime SLA'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-emerald-300 flex-shrink-0" />
                  <span>{isRtl ? 'دعم فني استباقي 24/7' : '24/7 Dedicated NOC'}</span>
                </div>
              </div>
            </div>

            {/* Right Action Stack */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto flex-shrink-0">
              <button
                type="button"
                onClick={() => onOpenConsultation(isRtl ? 'حجز جلسة استكشافية فنية' : 'Schedule Discovery Session')}
                className="serv5-btn-liftoff-primary"
              >
                <span>{isRtl ? 'احجز جلستك الفنية الآن' : 'Schedule Discovery Session'}</span>
                <ArrowIcon size={17} className="btn-arrow-icon" />
              </button>

              <a
                href="tel:00201288863831"
                dir="ltr"
                className="serv5-btn-liftoff-secondary"
              >
                <Phone size={16} />
                <span>00201288863831</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
