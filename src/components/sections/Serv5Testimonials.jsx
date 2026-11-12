import React, { useState } from 'react';
import { Star, Quote, ShieldCheck, Play, CheckCircle2, Sparkles, X } from 'lucide-react';

export default function Serv5Testimonials({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      author: isRtl ? 'عبدالفتاح الخلقي' : 'Abdelfattah Al-Khalqi',
      role: isRtl ? 'مؤسس ورئيس تنفيذي' : 'Founder & CEO',
      company: isRtl ? 'مجموعة الخلقي التجارية' : 'Al-Khalqi Commercial Group',
      avatar: 'ع',
      rating: 5,
      date: isRtl ? 'مشروع متجر وتطبيق' : 'E-Commerce Platform',
      quote: isRtl
        ? 'ناس محترمه وشغلهم ممتاز ومستوى التصاميم عندهم متقدمه بالتوفيق انشاء الله.'
        : 'Respectable people, excellent work, and advanced design standards. May God grant them success.',
      badge: isRtl ? 'عميل معتمد لدى سيرف فايف' : 'Verified Enterprise Client',
      color: '#2563eb'
    },
    {
      id: 2,
      author: isRtl ? 'إيمان نصر' : 'Eman Nasr',
      role: isRtl ? 'مدير العمليات والتسويق' : 'COO & Marketing Director',
      company: isRtl ? 'لوكس ستور العربية' : 'LuxeStore Arabia Co.',
      avatar: 'إ',
      rating: 5,
      date: isRtl ? 'متجر إلكتروني فاخر' : 'Luxury Headless Store',
      quote: isRtl
        ? 'بصراحة شهادة حق في حق سيرف بعد التجربة، قمة في الذوق والاحترام وكل طلب بطلبه بيتم تنفيذه على أكمل وجه وأكتر مما أتمنى، الدعم الفني والمتابعة بعد البيع ممتازة ومبيسيبوش العميل بعد انتهاء الشغل. شكراً لكل التيم وبتمنالكم مزيد من التقدم والنجاح.'
        : 'Honestly, I can attest to the quality of Serve after my experience with them. They are incredibly polite and professional, and they fulfilled every request I made, often exceeding expectations. Their technical support and follow-up are excellent; they don\'t abandon you after the work is completed. Thank you to the entire team, and I wish them continued success and growth.',
      badge: isRtl ? 'شراكة مستمرة 3+ سنوات' : 'Continuous 3+ Year Partner',
      color: '#d97706'
    },
    {
      id: 3,
      author: isRtl ? 'عماد الدين شملولي' : 'Imad al-Din Shamluli',
      role: isRtl ? 'مدير المشروعات الرقمية' : 'Head of Digital Solutions',
      company: isRtl ? 'مجموعة شملولي السحابية' : 'Shamluli Cloud Enterprise',
      avatar: 'ع',
      rating: 5,
      date: isRtl ? 'منظومة سحابية متكاملة' : 'Cloud Architecture',
      quote: isRtl
        ? 'دقة ونزاهة وخدمة ممتازة واحترافية عالية في التعامل والعمل. أتمنى لهم دوام التوفيق والازدهار.'
        : 'High accuracy and integrity. Excellent service and high-quality professionalism in dealings and work. I wish them continued success and prosperity.',
      badge: isRtl ? 'مشروع مؤسسي معتمد' : 'Delivered Flagship System',
      color: '#0284c7'
    },
    {
      id: 4,
      author: isRtl ? 'م. طارق الزهراني' : 'Eng. Tariq Al-Zahrani',
      role: isRtl ? 'مدير تقنية المعلومات (CIO)' : 'Chief Information Officer',
      company: isRtl ? 'حلول التوزيع اللوجستي' : 'Logistics Flow Saudi',
      avatar: 'ط',
      rating: 5,
      date: isRtl ? 'نظام تتبع وERP' : 'Fleet Dispatch & ERP',
      quote: isRtl
        ? 'السرعة الفائقة في تنفيذ نظام الربط مع الفوترة الإلكترونية ZATCA واستقرار السيرفرات بدون أي توقف مفاجئ جعل سيرف فايف شريكنا الدائم.'
        : 'The lightning speed in executing our ZATCA e-invoicing bridge and 99.99% server stability made SERV5 our permanent technological partner.',
      badge: isRtl ? 'امتثال حكومي ZATCA' : 'ZATCA Certified Partner',
      color: '#059669'
    },
    {
      id: 5,
      author: isRtl ? 'د. سارة المنشاوي' : 'Dr. Sara El-Menshawy',
      role: isRtl ? 'المدير الطبي العام' : 'Medical Director',
      company: isRtl ? 'شبكة مراكز مدبولس' : 'MedPulse Health Group',
      avatar: 'س',
      rating: 5,
      date: isRtl ? 'تطبيق طبي سحابي' : 'Health Portal & App',
      quote: isRtl
        ? 'تطبيق العيادات وحجز المواعيد فاق توقعاتنا في سهولة الاستخدام للمرضى، وفريق الدعم الفني متواجد معنا لحظة بلحظة.'
        : 'The patient booking mobile portal exceeded all benchmarks in speed and usability, backed by 24/7 proactive technical response.',
      badge: isRtl ? 'تطبيق طبي 100K+ مستخدم' : 'Healthcare 100K+ Active Users',
      color: '#7c3aed'
    }
  ];

  // Tripled for totally seamless infinite marquee loop
  const infiniteCards = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="serv5-revamped-section serv5-testimonials-section" id="testimonials">
      <div className="serv5-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="serv5-heading-2">
            {isRtl ? 'ماذا يقول عملاؤنا عن تجربتهم مع سيرف فايف؟' : 'What Our Partners Say About Serv5'}
          </h2>

          <p className="serv5-subheading mx-auto" style={{ marginBottom: 0 }}>
            {isRtl
              ? 'أكثر من 20,000 عميل وشركة رائدة في مصر والخليج العربي وثقوا في معمارية وتطوير فريق سيرف فايف لتشغيل أعمالهم الحيوية.'
              : 'Over 20,000 clients and enterprises across the Middle East trust SERV5’s architectures to power mission-critical workloads.'}
          </p>
        </div>
      </div>

      {/* CONTINUOUS INFINITE TICKER MARQUEE */}
      <div className="serv5-marquee-viewport" dir="ltr">
        <div className="serv5-marquee-track">
          {infiniteCards.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="serv5-testimonial-card"
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {/* Top Row: Author & Rating */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full text-white font-black text-base flex items-center justify-center shadow-md flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm leading-tight">
                        {item.author}
                      </h4>
                      <p className="text-xs text-blue-600 font-semibold mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Badge Tag */}
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[11px] mb-2">
                  {item.badge}
                </span>

                {/* Quote Text */}
                <p className="serv5-quote-text">
                  "{item.quote}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{item.date}</span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <CheckCircle2 size={12} />
                  <span>{isRtl ? 'معتمد' : 'Verified'}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-slate-900 text-lg">
                {isRtl ? 'آراء العملاء وتجارب النجاح' : 'Client Success Stories & Video Reviews'}
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 flex items-center justify-center text-white text-center p-6">
              <div>
                <Play size={48} className="mx-auto mb-3 text-blue-400" />
                <p className="font-bold text-base mb-1">
                  {isRtl ? 'فيديو تجارب عملاء سيرف فايف' : 'Serv5 Client Experience Reel'}
                </p>
                <p className="text-xs text-slate-400">
                  {isRtl ? 'يمكنك مشاهدة مئات المراجعات الحية على قناة يوتيوب الرسمية' : 'Visit our official channel for 100+ recorded partner interviews'}
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => onOpenConsultation('استفسار بعد مشاهدة آراء العملاء')}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer shadow-md"
              >
                {isRtl ? 'ابدأ مشروعك معنا' : 'Start Your Project'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
