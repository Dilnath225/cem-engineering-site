'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import WordReveal from './animations/WordReveal';
import OnionLines from './animations/OnionLines';

const HeroCanvas = dynamic(() => import('./three/HeroScene'), {
  ssr: false,
  loading: () => <div className="hero-canvas" />,
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="home" className="hero" ref={ref}>
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="CEM Engineering Construction Site"
        fill
        className="hero-bg-image"
        priority
        quality={85}
      />

      {/* Three.js Canvas */}
      <div className="hero-canvas">
        <HeroCanvas />
      </div>

      {/* Overlay for blur on left side */}
      <div className="hero-overlay" />
      {/* Secondary overlay for general text readability on right side */}
      <div className="hero-dark-overlay" />

      {/* Left Side - Animation (Absolute to screen edge) */}
      <div className="hero-animation-wrapper">
        <OnionLines />
      </div>

      {/* Content Container */}
      <div className="container hero-container">
        
        {/* Right Side - Content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Engineering Excellence | CEM Engineering (Pvt) Ltd
              </div>
            </motion.div>

            <h1 className="hero-title">
              <WordReveal text="Delivering Innovative" delay={0.2} />{' '}
              <WordReveal text="Civil, Electrical & Mechanical" delay={0.4} wordClassName="hero-title-gradient" />{' '}
              <WordReveal text="Solutions since 2019." delay={0.6} />
            </h1>

            <WordReveal
              className="hero-description"
              text="From modern infrastructure projects to innovative engineering solutions, CEM Engineering delivers sleek, user-friendly, and professional services optimized for the construction industry."
              delay={0.8}
            />

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <a href="#services" className="btn-primary">
                Explore Our Services <FiArrowRight />
              </a>
              <a href="#contact" className="btn-secondary">
                <FiPhone /> Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
