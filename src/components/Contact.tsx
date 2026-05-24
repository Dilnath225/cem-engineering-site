'use client';

import { useState, FormEvent } from 'react';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiClock,
} from 'react-icons/fi';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import ScrollReveal from './animations/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Demo form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Contact Us</h2>
            <div className="section-divider" />
            <p className="section-description">
              For inquiries and further information, please reach out via the
              provided contact details. We look forward to partnering with you.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          {/* Left - Contact Info */}
          <ScrollReveal direction="left">
            <div className="contact-info">
              <h3>Let&apos;s Build Something Great Together</h3>
              <p>
                Whether you need civil, electrical, or mechanical engineering services,
                our expert team is ready to bring your project to life with quality and
                professionalism.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4>Office Address</h4>
                    <p>C58, Ihala Lenagala, Thuntota, Kegalle, Sri Lanka</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <FiPhone />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:+94357287500" className="contact-link">+94 35 728 7500</a></p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <p style={{ margin: 0 }}>Hotline: <a href="tel:+94764387680" className="contact-link">+94 76 438 7680</a></p>
                      <a href="https://wa.me/94764387680" target="_blank" rel="noopener noreferrer" className="whatsapp-icon-link" title="Chat on WhatsApp">
                        <FaWhatsapp size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <FiMail />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@cemengineering.lk" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link"
                      >
                        info@cemengineering.lk
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <FaFacebook />
                  </div>
                  <div>
                    <h4>Facebook</h4>
                    <p>
                      <a href="https://www.facebook.com/share/1CzGnXVpqr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="contact-link">
                        Visit our Facebook Page
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <FiClock />
                  </div>
                  <div>
                    <h4>Business Registration</h4>
                    <p>PV 00215875</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Contact Form */}
          <ScrollReveal direction="right">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3rem',
                  textAlign: 'center',
                  gap: '1rem',
                }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    fontSize: '1.5rem',
                  }}>
                    ✓
                  </div>
                  <h3 style={{ color: '#10b981' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    Thank you for your inquiry. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="form-input"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <button type="submit" className="form-submit">
                    Send Message <FiSend />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
