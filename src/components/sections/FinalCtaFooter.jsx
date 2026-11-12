import React from 'react';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Heart } from 'lucide-react';
import Serv5Logo from '../Serv5Logo';
import { serv5Data } from '../../data/serv5Data';

export default function FinalCtaFooter({ onOpenConsultation }) {
  return (
    <footer className="world-footer-section">
      {/* FINAL SCULPTURAL PORTAL SCENE */}
      <div className="final-portal-banner">
        <div className="container text-center">
          <div className="portal-badge-pill">
            <span className="portal-status-dot" />
            <span>ARCHITECTURAL INVITATION</span>
          </div>

          <h2 className="portal-title mt-3">
            Commission Your Next <span className="text-gradient-bronze">Digital Milestone</span>
          </h2>

          <p className="portal-desc mt-3">
            Whether deploying a mission-critical mobile platform, scaling an enterprise ERP with full ZATCA compliance, or commanding market share through high-ROAS marketing, SERV5 is your permanent engineering partner.
          </p>

          <div className="portal-actions-group mt-4">
            <button
              onClick={() => onOpenConsultation('Final World Gateway CTA')}
              className="btn-hero-primary btn-portal-glow"
            >
              <span>Initiate Strategic Consultation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* SITEMAP & CORPORATE FOOTER */}
      <div className="footer-links-wrapper">
        <div className="container">
          <div className="row g-5">
            {/* Col 1: Brand Info */}
            <div className="col-lg-4">
              <Serv5Logo size={40} />
              <p className="footer-bio mt-3">
                {serv5Data.company.subtitle}
              </p>
              <div className="footer-status-pill mt-3">
                <span className="live-status-dot" />
                <span>All Global Systems Operational • 99.98% SLA</span>
              </div>
            </div>

            {/* Col 2: Digital Services */}
            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="footer-col-header">Services</h5>
              <ul className="footer-links-list">
                <li><a href="#services">Web Architecture</a></li>
                <li><a href="#services">Mobile Applications</a></li>
                <li><a href="#services">Cloud E-Commerce</a></li>
                <li><a href="#services">NVMe Cloud Hosting</a></li>
                <li><a href="#services">Performance Growth</a></li>
                <li><a href="#services">Custom ERP Systems</a></li>
              </ul>
            </div>

            {/* Col 3: Proprietary Products */}
            <div className="col-6 col-md-3 col-lg-3">
              <h5 className="footer-col-header">Product Suite</h5>
              <ul className="footer-links-list">
                <li><a href="#products">Serv5 Cloud ERP</a></li>
                <li><a href="#products">FoodSuite Delivery OS</a></li>
                <li><a href="#products">MedPulse Clinic Cloud</a></li>
                <li><a href="#products">LuxeStore Headless</a></li>
                <li><a href="#products">ZATCA Phase 2 Connector</a></li>
              </ul>
            </div>

            {/* Col 4: Corporate & Hubs */}
            <div className="col-md-6 col-lg-3">
              <h5 className="footer-col-header">Corporate Hubs</h5>
              <div className="footer-hub-item">
                <span className="hub-city">Riyadh, Saudi Arabia</span>
                <p className="hub-address">{serv5Data.company.contact.addressKsa}</p>
              </div>
              <div className="footer-hub-item mt-3">
                <span className="hub-city">Cairo / Mansoura, Egypt</span>
                <p className="hub-address">{serv5Data.company.contact.addressEgypt}</p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Badges */}
          <div className="footer-bottom-bar mt-5 pt-4">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <p className="copyright-text mb-0">
                  © {new Date().getFullYear()} {serv5Data.company.legalName}. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                <div className="footer-legal-tags">
                  <span>Privacy Policy</span>
                  <span>•</span>
                  <span>Terms of Service</span>
                  <span>•</span>
                  <span>Security & Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
