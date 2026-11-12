import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'ما هي الخدمات التي تقدمها شركة SERV5؟',
      a: 'نقدم منظومة متكاملة تشمل تصميم وبرمجة المواقع والمتاجر الإلكترونية، تطوير تطبيقات الجوال (iOS & Android)، حلول الحوسبة السحابية والاستضافة الآمنة، إدارة الحملات التسويقية المتطورة (Google, TikTok, Snapchat, Meta)، وتحسين محركات البحث (SEO).'
    },
    {
      q: 'كيف تضمنون سرعة واستقرار الأنظمة وتطبيقات الجوال؟',
      a: 'نعتمد على بنية تحتية سحابية فائقة السرعة مع خوادم NVMe SSD وشهادات أمان متقدمة، مع الالتزام بأفضل ممارسات هندسة البرمجيات (Clean Code & Microservices) لتحقيق درجة Core Web Vitals 100/100 واستقرار بنسبة 99.98%.'
    },
    {
      q: 'ما هي المدة الزمنية المتوقعة لتنفيذ وإطلاق مشروعي؟',
      a: 'تتفاوت المدة بحسب حجم ونطاق المشروع؛ تبدأ المواقع والمتاجر السريعة من 7 إلى 14 يوم عمل، بينما تتطلب الأنظمة السحابية والتطبيقات المخصصة من 3 إلى 6 أسابيع مع خطة تسليم مرحلية تتيح لك معاينة التقدم أولاً بأول.'
    },
    {
      q: 'هل تقدمون عقوداً رسمية موثقة ودعماً فنياً بعد الإطلاق؟',
      a: 'نعم بكل تأكيد، يتم توقيع عقود رسمية موثقة تضمن حقوق الملكية الفكرية والشروط الجزائية ومواعيد التسليم، ونوفر فترات ضمان مجانية مع دعم فني وصيانة استباقية 24/7 لضمان استمرارية أعمالك.'
    },
    {
      q: 'كيف يحقق لي التسويق الرقمي مع SERV5 أعلى عائد على الاستثمار؟',
      a: 'نتبع استراتيجية التسويق المبني على الأداء (Performance Marketing)، حيث نقوم بدراسة المنافسين، وتحديد الجمهور الأكثر رغبة بالشراء، وتصميم إعلانات جذابة وتجربة هبوط عالية التحويل تضمن لك مضاعفة المبيعات وأعلى عائد إنفاق إعلاني (ROAS).'
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-card">
          {/* FAQ BADGE & ICON */}
          <div className="faq-badge-header text-center">
            <div className="faq-envelope-box">
              <Mail size={24} className="faq-envelope-icon" />
            </div>
            <span className="faq-tag">FAQ</span>
            <h2 className="faq-title">الأسئلة الشائعة</h2>
            <p className="faq-subtitle">إجابات شفافة ومباشرة على أكثر الاستفسارات تكراراً</p>
          </div>

          {/* ACCORDION LIST */}
          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <div className="faq-question-row">
                    <span className="faq-question-text">{faq.q}</span>
                    <button className="faq-toggle-btn" aria-label="Toggle answer">
                      <ChevronDown
                        size={18}
                        className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                      />
                    </button>
                  </div>
                  {isOpen && (
                    <div className="faq-answer-row">
                      <p className="faq-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
