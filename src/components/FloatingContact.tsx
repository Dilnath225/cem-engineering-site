'use client';

import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function FloatingContact() {
  return (
    <div className="floating-contact-container">
      <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@cemengineering.lk" 
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn email-btn"
        aria-label="Send us an email via Gmail"
        title="Email Us"
      >
        <FaEnvelope size={24} />
      </a>
      <a 
        href="https://wa.me/94764387680" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp-btn"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}
