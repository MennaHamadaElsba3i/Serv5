import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { serv5Data } from '../../data/serv5Data';
import Serv5Logo from '../Serv5Logo';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Web & Mobile Apps',
    budget: '$5,000 - $15,000',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="world-section contact-world-section" id="contact">
      <div className="container">
        {/* Header */}
        <div className="section-header-box text-center">
          <span className="section-eyebrow">COMMENCE COLLABORATION</span>
          <h2 className="section-title">
            Let's Build Your <span className="text-gradient-amber">Digital Masterpiece</span>
          </h2>
          <p className="section-subtitle">
            Speak directly with our senior technical architects. Receive a comprehensive scope analysis and architectural proposal within 24 hours.
          </p>
        </div>

        <div className="row g-5 mt-4">
          {/* Left Column: Dual Office Locations & Direct Contacts */}
          <div className="col-lg-5">
            <div className="contact-info-panel">
              <div className="mb-4">
                <Serv5Logo size={42} />
              </div>

              <div className="contact-detail-block">
                <div className="contact-icon-box">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact-label">Direct Lines & WhatsApp:</span>
                  <a href={`tel:${serv5Data.company.contact.phone}`} className="contact-value-link">
                    {serv5Data.company.contact.phone}
                  </a>
                </div>
              </div>

              <div className="contact-detail-block">
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact-label">Official Inquiries:</span>
                  <a href={`mailto:${serv5Data.company.contact.email}`} className="contact-value-link">
                    {serv5Data.company.contact.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-block">
                <div className="contact-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-label">Regional Office — Saudi Arabia:</span>
                  <p className="contact-address-text">{serv5Data.company.contact.addressKsa}</p>
                </div>
              </div>

              <div className="contact-detail-block">
                <div className="contact-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-label">Headquarters — Egypt:</span>
                  <p className="contact-address-text">{serv5Data.company.contact.addressEgypt}</p>
                </div>
              </div>

              <div className="contact-detail-block">
                <div className="contact-icon-box">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="contact-label">Operational Hours:</span>
                  <p className="contact-address-text text-emerald">{serv5Data.company.contact.workingHours}</p>
                </div>
              </div>

              <div className="nda-guarantee-box mt-4">
                <ShieldCheck size={20} className="text-amber me-2" />
                <span>Strict Non-Disclosure Agreement (NDA) protected by default.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="col-lg-7">
            <div className="contact-form-panel">
              {submitted ? (
                <div className="form-success-state text-center py-5">
                  <div className="success-icon-box">
                    <CheckCircle size={48} className="text-emerald" />
                  </div>
                  <h3 className="success-title mt-3">Inquiry Successfully Transmitted!</h3>
                  <p className="success-desc mt-2">
                    Thank you, <strong>{formData.name}</strong>. A senior solutions architect from our team will contact you at <strong>{formData.email}</strong> within 24 business hours with an initial scope and roadmap.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-hero-secondary mt-3"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="project-inquiry-form">
                  <h3 className="form-headline mb-4">Request Project Architecture Proposal</h3>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-field-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / Eng. Tareq"
                        className="form-input-field"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-field-label">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="form-input-field"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-field-label">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+966 5X XXX XXXX / +20 1X XXX XXXX"
                        className="form-input-field"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-field-label">Digital Domain Focus</label>
                      <select
                        className="form-input-field"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option>Custom Web & Mobile Apps</option>
                        <option>Enterprise Cloud ERP & ZATCA</option>
                        <option>High-Converting E-Commerce</option>
                        <option>Cloud Infrastructure & NVMe Hosting</option>
                        <option>Performance Marketing & ROAS</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-field-label">Estimated Investment Bracket</label>
                      <div className="budget-radios-row">
                        {['$3k - $8k', '$8k - $20k', '$20k - $50k', '$50k+ Enterprise'].map((bracket, bIdx) => (
                          <label key={bIdx} className={`budget-pill-label ${formData.budget === bracket ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="budget"
                              value={bracket}
                              checked={formData.budget === bracket}
                              onChange={() => setFormData({ ...formData, budget: bracket })}
                              className="d-none"
                            />
                            <span>{bracket}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-field-label">Project Brief & Objectives *</label>
                      <textarea
                        rows="4"
                        required
                        placeholder="Tell us about your target launch date, existing systems, and primary growth milestones..."
                        className="form-input-field"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="col-12 mt-4">
                      <button type="submit" className="btn-hero-primary w-100 justify-content-center">
                        <Send size={16} />
                        <span>Transmit Project Specifications</span>
                      </button>
                    </div>
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
