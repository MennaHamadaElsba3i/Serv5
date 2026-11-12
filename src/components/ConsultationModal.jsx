import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X, CheckCircle, Send, Phone, MessageSquare, Calendar } from 'lucide-react';
import { closeConsultationModal } from '../store/uiSlice';
import MagneticButton from './MagneticButton';

export default function ConsultationModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.consultationModalOpen);
  const selectedPackage = useSelector((state) => state.ui.selectedPackageForModal);
  const lang = useSelector((state) => state.ui.lang);

  const [submitted, setSubmitted] = useState(false);
  const [preferredMethod, setPreferredMethod] = useState('whatsapp');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      dispatch(closeConsultationModal());
    }, 4000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(3, 5, 8, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={() => dispatch(closeConsultationModal())}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          background: 'linear-gradient(135deg, #0F172A 0%, #070B14 100%)',
          border: '1px solid rgba(96, 165, 250, 0.3)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(59, 130, 246, 0.2)',
          padding: '2.5rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => dispatch(closeConsultationModal())}
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: lang === 'ar' ? '1.5rem' : 'auto',
            right: lang === 'ar' ? 'auto' : '1.5rem',
            background: 'rgba(255, 255, 255, 0.06)',
            border: 'none',
            color: '#94A3B8',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid #10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#34D399'
              }}
            >
              <CheckCircle size={32} />
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              {lang === 'ar' ? 'تم تأكيد حجز جلستك بنجاح!' : 'Consultation Confirmed!'}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              {lang === 'ar'
                ? 'سيتواصل معك خبير استراتيجي من فريق سيرف فايف خلال أقل من 3 ساعات لمناقشة أهدافك وخطة التنفيذ.'
                : 'A dedicated technical director will contact you via your selected channel within 3 hours.'}
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#60A5FA',
                  background: 'rgba(59, 130, 246, 0.12)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '9999px',
                  display: 'inline-block',
                  marginBottom: '0.5rem'
                }}
              >
                {selectedPackage ? `باقة: ${selectedPackage}` : 'جلسة استراتيجية مجانية'}
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>
                {lang === 'ar' ? 'احجز استشارتك التقنية والتسويقية' : 'Schedule Strategy Session'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {lang === 'ar'
                  ? 'احصل على تحليل شامل لمتجرك أو نظامك وخطة تسويق تنفيذية مجاناً'
                  : 'Receive an architectural audit and actionable performance roadmap.'}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#E2E8F0', marginBottom: '0.4rem', fontWeight: 600 }}>
                  {lang === 'ar' ? 'الاسم الكريم' : 'Full Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'ar' ? 'مثال: عبد الله السبيعي' : 'e.g. John Doe'}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#E2E8F0', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {lang === 'ar' ? 'الهاتف / الواتساب' : 'Phone / WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XXXXXXXX / 010XXXXXXX"
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#E2E8F0', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Preferred Channel */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#E2E8F0', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {lang === 'ar' ? 'وسيلة التواصل المفضلة:' : 'Preferred Channel:'}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {[
                    { id: 'whatsapp', label: 'واتساب فوري', icon: MessageSquare },
                    { id: 'call', label: 'مكالمة هاتفية', icon: Phone },
                    { id: 'meeting', label: 'اجتماع Zoom/مكتبي', icon: Calendar }
                  ].map((m) => {
                    const Icon = m.icon;
                    return (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setPreferredMethod(m.id)}
                        style={{
                          padding: '0.55rem 0.5rem',
                          borderRadius: '10px',
                          border: preferredMethod === m.id ? '1px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.08)',
                          background: preferredMethod === m.id ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                          color: preferredMethod === m.id ? '#FFFFFF' : '#94A3B8',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <Icon size={13} />
                        <span>{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <MagneticButton
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.85rem 1.5rem',
                  fontSize: '0.95rem'
                }}
              >
                <Send size={16} />
                <span>{lang === 'ar' ? 'تأكيد طلب الجلسة مجاناً' : 'Confirm Strategy Booking'}</span>
              </MagneticButton>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

