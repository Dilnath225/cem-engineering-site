'use client';

import {
  FiArrowUp,
  FiMapPin,
  FiPhone,
  FiMail,
  FiChevronRight,
} from 'react-icons/fi';
import Image from 'next/image';

const QUICK_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Experience', href: 'experience' },
  { label: 'Contact', href: 'contact' },
] as const;

const SERVICES = [
  'Civil',
  'Electrical',
  'Mechanical',
  'Plumbing',
  'Consultancy',
] as const;

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* ── Grid ──────────────────────────────── */}
        <div className="footer-grid">
          {/* Column 1 — Brand */}
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
            >
              <Image 
                src="/images/logo.jpg" 
                alt="CEM Engineering Logo" 
                width={300} 
                height={100} 
                className="footer-logo-image" 
              />
            </a>
            <p>
              Delivering excellence in civil, electrical, and mechanical
              engineering solutions. Trusted by leading organisations across
              Sri Lanka for over a decade.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                  >
                    <FiChevronRight size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('services');
                    }}
                  >
                    <FiChevronRight size={14} />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                  <FiMapPin size={14} />
                  Colombo, Sri Lanka
                </a>
              </li>
              <li>
                <a href="tel:+94112345678">
                  <FiPhone size={14} />
                  +94 11 234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@cemengineering.lk">
                  <FiMail size={14} />
                  info@cemengineering.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────── */}
        <div className="footer-bottom">
          <p>
            © 2024 CEM Engineering (Pvt) Ltd. All rights reserved. <br />
            <span style={{ fontSize: '0.9em', color: 'var(--color-text-muted)' }}>Created and maintaining by Dilnath Rathnayaka.</span>
          </p>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
