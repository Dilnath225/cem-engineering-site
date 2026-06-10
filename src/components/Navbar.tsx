'use client';

import { useState, useEffect, useCallback } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'About Us', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Experience', href: 'experience' },
  { label: 'Clients', href: 'clients' },
  { label: 'Contact Us', href: 'contact' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // ── Glassmorphism on scroll ──────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // set initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Active section via IntersectionObserver ──────────────
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // ── Smooth scroll handler ────────────────────────────────
  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      if (mobileOpen) setMobileOpen(false);
    },
    [mobileOpen],
  );

  // ── Lock body scroll when mobile menu is open ───────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
          {/* ── Logo ──────────────────────────────── */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            style={{ textDecoration: 'none' }}
          >
            <Image 
              src="/images/logo.jpg" 
              alt="CEM Engineering Logo" 
              width={70} 
              height={70} 
              className="navbar-logo-image" 
              priority
            />
            <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '1px', color: '#f1f5f9', whiteSpace: 'nowrap' }}>
              CEM ENGINEERING
            </span>
          </a>

          {/* ── Desktop links ────────────────────── */}
          <ul className="navbar-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  className={`navbar-link${activeSection === link.href ? ' active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── CTA button ───────────────────────── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThemeToggle />
            <button
              className="navbar-cta"
              onClick={() => scrollTo('contact')}
            >
              Get a Quote
            </button>
          </div>

          {/* ── Mobile toggle ────────────────────── */}
          <button
            className={`navbar-mobile-toggle${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      </nav>

      {/* ── Mobile overlay menu ────────────────── */}
      <div className={`navbar-mobile-menu${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={`#${link.href}`}
            className={`navbar-link${activeSection === link.href ? ' active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        <button
          className="navbar-cta"
          onClick={() => scrollTo('contact')}
        >
          Get a Quote
        </button>
      </div>
    </>
  );
}
