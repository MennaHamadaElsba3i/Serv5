import React from 'react';
import { Phone, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Serv5ReadyForLiftoff({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const discussionPoints = isRtl
    ? [
        'تحديد نطاق المشروع ومتطلباته',
        'مراجعة الأنظمة والتكاملات المطلوبة',
        'ترتيب الأولويات والخطوات التالية'
      ]
    : [
        'Define the project scope and requirements',
        'Review required systems and integrations',
        'Set priorities and next steps'
      ];

  return (
    <section className="serv5-liftoff-section" id="ready-for-liftoff">
      <div className="serv5-liftoff-banner">
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

        <div className="serv5-liftoff-container">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
                {isRtl ? (
                  <>
                    هل لديك مشروع رقمي؟{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                      لنحدد خطوته التالية.
                    </span>
                  </>
                ) : (
                  <>
                    Planning a digital project?{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                      Let’s define the next step.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                {isRtl ? 'ناقش فكرتك مع فريق SERV5.' : 'Talk through your project with SERV5.'}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
                {isRtl
                  ? 'شاركنا هدف المشروع والتحديات التي تواجهك. نراجع النطاق والمتطلبات والتكاملات، ثم نتفق على الأولويات والخطوة العملية التالية.'
                  : 'Tell us what you are building and the challenges you need to solve. We will review the scope, requirements, and integrations, then outline practical priorities and next steps.'}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-slate-800 mb-2">
                {discussionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto flex-shrink-0">
              <button
                type="button"
                onClick={() => onOpenConsultation(isRtl ? 'مناقشة مشروع رقمي جديد' : 'Discuss a Digital Project')}
                className="serv5-btn-liftoff-primary"
              >
                <span>{isRtl ? 'ناقش مشروعك مع فريقنا' : 'Discuss Your Project'}</span>
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
