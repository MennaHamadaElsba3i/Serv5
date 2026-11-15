import React, { useState } from 'react';
import { Phone, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Zap, Smartphone, Layers, ShoppingBag, Globe } from 'lucide-react';

export default function Serv5ReadyForLiftoff({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const scopes = [
    { id: 'mobile', icon: Smartphone, ar: 'تطبيق جوال', en: 'Mobile App' },
    { id: 'erp', icon: Layers, ar: 'سحابي & ERP', en: 'Cloud ERP' },
    { id: 'ecom', icon: ShoppingBag, ar: 'متجر إلكتروني', en: 'E-Commerce' },
    { id: 'web', icon: Globe, ar: 'منصة ويب مخصصة', en: 'Custom Web' }
  ];

  const [selectedScope, setSelectedScope] = useState('mobile');

  return (
    <section className="serv5-liftoff-section" id="ready-for-liftoff">
      <div className="serv5-liftoff-banner">
        {/* Extended Smooth Ambient Gradient Orbs */}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
                {isRtl ? (
                  <>
                    مستعد للانطلاق نحو{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                      المستقبل الرقمي؟
                    </span>
                  </>
                ) : (
                  <>
                    Ready for Digital{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                      Liftoff?
                    </span>
                  </>
                )}
              </h2>

              <p className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                {isRtl
                  ? 'أطلق العنان لقوة الابتكار، وابدأ اليوم مع سيرف فايف!'
                  : 'Unlock the power of innovation, get started today!'}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
                {isRtl
                  ? 'ارتقِ بعملك مع أحدث الحلول البرمجية من سيرف فايف. حان الوقت لإطلاق قوة حلولنا البرمجية المتقدمة المصممة خصيصاً مع وضع أهداف عملك الفريدة في الاعتبار وبأعلى درجات الاستقرار السحابي.'
                  : 'Level up your business with cutting-edge software solutions from SERV5. Unlock your full potential today with custom architectures designed for scalable revenue.'}
              </p>

              {/* Fast Scope Selector Pills */}
              <div className="mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  {isRtl ? 'اختر مجال مشروعك للانطلاق الفوري:' : 'Select your project scope:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {scopes.map((s) => {
                    const Icon = s.icon;
                    const isSelected = selectedScope === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedScope(s.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                            : 'bg-white/80 text-slate-700 border border-slate-300 hover:border-blue-400'
                        }`}
                      >
                        <Icon size={13} className={isSelected ? 'text-white' : 'text-blue-600'} />
                        <span>{isRtl ? s.ar : s.en}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fast Perks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-bold text-slate-800 mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                  <span>{isRtl ? 'استشارة ودراسة مجانية' : 'Free Initial Scope'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-600 flex-shrink-0" />
                  <span>{isRtl ? 'ضمان استقرار 99.98%' : '99.98% Uptime SLA'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-orange-500 flex-shrink-0" />
                  <span>{isRtl ? 'دعم فني استباقي 24/7' : '24/7 Dedicated NOC'}</span>
                </div>
              </div>
            </div>

            {/* Right Action Stack */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto flex-shrink-0">
              <button
                type="button"
                onClick={() => {
                  const scopeObj = scopes.find((s) => s.id === selectedScope);
                  const label = isRtl ? (scopeObj ? scopeObj.ar : 'مشروع جديد') : (scopeObj ? scopeObj.en : 'New Project');
                  onOpenConsultation(isRtl ? `طلب دراسة مشروع (${label})` : `Discovery Session (${label})`);
                }}
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
