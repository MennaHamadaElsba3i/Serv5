import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { serv5Data } from '../../data/serv5Data';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = serv5Data.testimonials;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="world-section testimonials-world-section" id="testimonials">
      <div className="container">
        {/* Header */}
        <div className="section-header-box text-center">
          <span className="section-eyebrow">VERIFIED REPUTATION</span>
          <h2 className="section-title">
            What Leaders Say About <span className="text-gradient-bronze">SERV5</span>
          </h2>
          <p className="section-subtitle">
            Direct feedback from C-level executives and product owners who trusted SERV5 with mission-critical digital operations.
          </p>
        </div>

        {/* Google Reviews Trust Pill */}
        <div className="google-reviews-trust-pill text-center my-4">
          <div className="d-inline-flex align-items-center gap-2 google-badge">
            <span className="google-icon-g">G</span>
            <span className="google-rating-val">{serv5Data.company.googleRating} ★</span>
            <span className="google-stars">★★★★★</span>
            <span className="google-count">({serv5Data.company.googleReviewCount} Verified Google Reviews)</span>
            <ShieldCheck size={16} className="text-emerald" />
          </div>
        </div>

        {/* Interactive Testimonial Carousel Card */}
        <div className="testimonial-card-wrapper mt-4">
          <div className="testimonial-quote-icon">
            <Quote size={48} />
          </div>

          <div className="testimonial-body text-center">
            <p className="testimonial-quote-text">"{current.quote}"</p>

            <div className="testimonial-author-box mt-4">
              <h4 className="author-name">{current.author}</h4>
              <p className="author-role-company">
                {current.role} • <span className="company-highlight">{current.company}</span>
              </p>
              <div className="author-stars">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={15} className="star-filled" fill="#F59E0B" />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="testimonial-nav-controls">
            <button
              onClick={prevTestimonial}
              className="carousel-control-btn"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="carousel-dots-indicator">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="carousel-control-btn"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
