import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, MessageSquare, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Serv5GetInTouch({ onOpenConsultation, lang = 'ar' }) {
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'web-development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onOpenConsultation(`طلب تواصل مباشر من ${formData.name} (${formData.phone})`);
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: 'web-development', message: '' });
    }, 1200);
  };

  return (
    <section className="serv5-revamped-section serv5-contact-section" id="contact">
      <div className="serv5-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="serv5-heading-2">
            {isRtl ? 'للتواصل معنا | ابدأ مشروعك التقني مع سيرف فايف' : 'Contact Us | Start Your Project with SERV5'}
          </h2>

          <p className="serv5-subheading mx-auto" style={{ marginBottom: 0 }}>
            {isRtl
              ? 'تواصل معنا لمناقشة أفكارك وتطلعاتك. فريقنا الهندسي متاح دائماً لدراسة المتطلبات وتقديم الاستشارة الفنية وعروض الأسعار المناسبة.'
              : 'Connect with our engineering leadership to architect, scope, and deploy your next digital flagship.'}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (5 cols): Official Headquarters & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="serv5-contact-info-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {isRtl ? 'المقر الرئيسي المعتمد' : 'Official Coordinates'}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>{isRtl ? 'متاح الآن' : 'Active Response'}</span>
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {isRtl
                    ? 'سيرف فايف لتقنية المعلومات والحلول الرقمية المتكاملة، مسجلة رسمياً بسجل تجاري وبطاقة ضريبية معتمدة.'
                    : 'SERV5 Information Technology — Certified Enterprise Cloud Solutions & Software Engineering.'}
                </p>

                {/* Coordinates Stack */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="serv5-contact-item">
                    <div className="serv5-contact-icon-box">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {isRtl ? 'العنوان والمقر الرئيسي' : 'Egypt Corporate HQ'}
                      </h4>
                      <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                        {isRtl
                          ? 'جمهورية مصر العربية - المنصورة - شارع قناة السويس - برج المهندسين'
                          : 'Engineers Tower, Suez Canal St., Mansoura, Egypt'}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="serv5-contact-item">
                    <div className="serv5-contact-icon-box">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {isRtl ? 'الهاتف والخط الساخن الموحد' : 'Direct Phone & Hotline'}
                      </h4>
                      <a
                        href="tel:00201288863831"
                        dir="ltr"
                        className="inline-block text-blue-600 hover:text-blue-800 font-bold text-sm mt-0.5 transition-colors"
                      >
                        00201288863831
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="serv5-contact-item">
                    <div className="serv5-contact-icon-box">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {isRtl ? 'البريد الإلكتروني للمبيعات' : 'Sales & Enterprise Inquiries'}
                      </h4>
                      <a
                        href="mailto:sales@serv5.com"
                        className="text-blue-600 hover:text-blue-800 font-bold text-xs mt-0.5 transition-colors"
                      >
                        sales@serv5.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="serv5-contact-item">
                    <div className="serv5-contact-icon-box">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {isRtl ? 'ساعات العمل الرسمية' : 'Operating Hours'}
                      </h4>
                      <p className="text-slate-600 text-xs mt-0.5">
                        {isRtl
                          ? 'السبت - الخميس: 9:00 ص - 6:00 م (الدعم الفني السحابي 24/7)'
                          : 'Sat - Thu: 9:00 AM - 6:00 PM (Cloud NOC: 24/7/365)'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href="https://wa.me/201288863831?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B3%D9%8A%D8%B1%D9%81%20%D9%81%D8%A7%D9%8A%D9%81%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%AD%D9%88%D9%84%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>{isRtl ? 'محادثة فورية عبر واتساب (WhatsApp)' : 'Instant WhatsApp Engineering Chat'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Clean Form */}
          <div className="lg:col-span-7">
            <div className="serv5-contact-form-card">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {isRtl ? 'أرسل لنا تفاصيل مشروعك' : 'Request Architecture Consultation'}
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  {isRtl
                    ? 'املأ النموذج وسيقوم مهندس استشاري متخصص بالتواصل معك خلال ساعتين عمل.'
                    : 'Fill out the form and a senior technical lead will contact you within 2 business hours.'}
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">
                    {isRtl ? 'تم استلام طلبك بنجاح!' : 'Inquiry Received Successfully!'}
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    {isRtl
                      ? 'شكراً لتواصلك مع سيرف فايف. فريق المبيعات والهندسة يقوم بمراجعة طلبك للتواصل معك بأسرع وقت.'
                      : 'Thank you for reaching out. Our engineering team is currently reviewing your scope.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="serv5-form-label">
                        {isRtl ? 'الاسم بالكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isRtl ? 'مثال: محمد أحمد' : 'e.g. Alexander Vance'}
                        className="serv5-form-input"
                      />
                    </div>

                    <div>
                      <label className="serv5-form-label">
                        {isRtl ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={isRtl ? '01xxxxxxxxx' : '+20 128 886 3831'}
                        className="serv5-form-input"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="serv5-form-label">
                        {isRtl ? 'البريد الإلكتروني' : 'Work Email'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="serv5-form-input"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="serv5-form-label">
                        {isRtl ? 'نوع الخدمة المطلوبة' : 'Service Domain'}
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="serv5-form-select"
                      >
                        <option value="web-development">{isRtl ? 'تصميم وبرمجة مواقع مخصصة' : 'Custom Web Architecture'}</option>
                        <option value="ecommerce">{isRtl ? 'إنشاء متجر إلكتروني متكامل' : 'E-Commerce Platform'}</option>
                        <option value="mobile-apps">{isRtl ? 'تطبيقات الجوال (iOS / Android)' : 'Mobile Applications'}</option>
                        <option value="cloud-hosting">{isRtl ? 'استضافة سحابية وسيرفرات NVMe' : 'Cloud Hosting & DevOps'}</option>
                        <option value="ai-crm">{isRtl ? 'حلول الذكاء الاصطناعي و سيلزاوي' : 'AI Systems & CRM Automation'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="serv5-form-label">
                      {isRtl ? 'نبذة عن المشروع أو المتطلبات *' : 'Project Scope & Requirements *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isRtl ? 'اشرح لنا بإيجاز أهداف مشروعك، الميزانية التقديرية، أو الموعد النهائي المقترح...' : 'Briefly describe your objectives, timelines, and technical requirements...'}
                      className="serv5-form-textarea"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck size={16} className="text-blue-600 flex-shrink-0" />
                      <span>{isRtl ? 'بياناتك مشفرة ومحمية وفق سياسة الخصوصية' : 'Confidential NDA Protected'}</span>
                    </div>

                    <button
                      type="submit"
                      className="serv5-btn-primary w-full sm:w-auto"
                    >
                      <span>{isRtl ? 'إرسال طلب الاستشارة' : 'Submit Consultation Request'}</span>
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
