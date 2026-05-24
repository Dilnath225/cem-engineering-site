'use client';

import { FiEye, FiTarget, FiShield } from 'react-icons/fi';
import ScrollReveal from './animations/ScrollReveal';
import CounterAnimation from './animations/CounterAnimation';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          {/* Left - Text Content */}
          <div className="about-text">
            <ScrollReveal direction="left">
              <h2>
                About <span>CEM</span> Engineering
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <p>
                Established in 2019, CEM Engineering (Pvt) Ltd has rapidly grown into
                a reputable provider of diversified construction products and services.
                Specializing in buildings, water supply, sewerage systems, and all civil,
                electrical, and mechanical engineering applications, we cater to both
                public and private sectors.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p>
                Our proactive management and professional approach have enabled us to
                foster strong relationships with key industry players locally and globally.
                Despite being a young company, we have embraced market dynamics and
                identified potential opportunities, positioning ourselves as a competitive
                force in the construction industry.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-number">
                    <CounterAnimation target={6} suffix="+" />
                  </span>
                  <span className="about-stat-label">Years Experience</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">
                    <CounterAnimation target={30} suffix="+" />
                  </span>
                  <span className="about-stat-label">Projects Completed</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">
                    <CounterAnimation target={15} suffix="+" />
                  </span>
                  <span className="about-stat-label">Valued Clients</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Cards */}
          <div className="about-cards">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="about-card">
                <div className="about-card-icon">
                  <FiEye />
                </div>
                <div>
                  <h3>Vision</h3>
                  <p>
                    To be the leading provider of top-quality products and services
                    in the construction industry.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="about-card">
                <div className="about-card-icon">
                  <FiTarget />
                </div>
                <div>
                  <h3>Mission</h3>
                  <p>
                    We are committed to delivering high-quality construction products
                    and professional services to our valued customers in a timely, safe,
                    and innovative manner. By offering creative, customized, and
                    cost-effective solutions, we aim to create sustainable growth.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="about-card">
                <div className="about-card-icon">
                  <FiShield />
                </div>
                <div>
                  <h3>Core Values</h3>
                  <p>
                    Integrity, Commitment, Environmental Responsibility, and
                    Experienced &amp; Proactive Management. We uphold the highest
                    ethical standards and maintain a proactive, resilient culture.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
