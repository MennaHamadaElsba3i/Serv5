import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Video, MessageSquare } from 'lucide-react';
import Serv5Logo from '../Serv5Logo';
import { serv5Data } from '../../data/serv5Data';

export default function ProjectConsultationModal({ isOpen, onClose, initialSubject = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [preferredChannel, setPreferredChannel] = useState('whatsapp');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialSubject || 'Strategic Consultation'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div className="modal-glass-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <CheckCircle2 size={54} className="text-emerald mx-auto mb-3" />
            <h3 className="modal-title">Consultation Requested!</h3>
            <p className="modal-subtitle mt-2">
              We received your request regarding <strong>{formData.subject}</strong>. A dedicated solutions director will contact you via <strong>{preferredChannel.toUpperCase()}</strong> shortly.
            </p>
            <button onClick={onClose} className="btn-hero-primary mt-4">
              Return to Creative World
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-brand-header text-center mb-4">
              <Serv5Logo size={36} />
              <h3 className="modal-title mt-3">Commence Project Consultation</h3>
              <p className="modal-subtitle">
                Discuss your architectural scope directly with our technical leadership.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="mb-3">
                <label className="modal-label">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Eng. Tareq"
                  className="modal-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="modal-label">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="modal-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="modal-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+966 5X XXX XXXX / +20 1X XXX XXXX"
                    className="modal-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="modal-label">Project Scope / Topic</label>
                <input
                  type="text"
                  className="modal-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="modal-label">Preferred Consultation Channel</label>
                <div className="channel-picker-row">
                  {[
                    { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
                    { id: 'phone', label: 'Phone Call', icon: Phone },
                    { id: 'video', label: 'Zoom Video', icon: Video }
                  ].map((ch) => {
                    const Icon = ch.icon;
                    return (
                      <button
                        type="button"
                        key={ch.id}
                        className={`channel-btn ${preferredChannel === ch.id ? 'active' : ''}`}
                        onClick={() => setPreferredChannel(ch.id)}
                      >
                        <Icon size={16} />
                        <span>{ch.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button type="submit" className="btn-hero-primary w-100 justify-content-center py-3">
                <Send size={16} />
                <span>Confirm Consultation Request</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
