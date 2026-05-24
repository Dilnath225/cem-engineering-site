'use client';

import ScrollReveal from './animations/ScrollReveal';

const clients = [
  { name: 'Hambantota International Port Group', short: 'HIPG', domain: 'hipg.lk' },
  { name: 'Brandix Garment Factory', short: 'Brandix', domain: 'brandix.com' },
  { name: 'Asiri Hospital', short: 'Asiri Hospital', domain: 'asirihealth.com' },
  { name: 'Orion City', short: 'Orion City', domain: 'orioncity.com' },
  { name: 'Amaya Lake Dambulla', short: 'Amaya Lake', domain: 'amayaresorts.com' },
  { name: 'Sierra Construction', short: 'Sierra', domain: 'sierracol.com' },
  { name: 'General Hospital Hambantota', short: 'General Hospital', domain: 'health.gov.lk', localImage: '/images/general_hospital_logo.jpg' },
  { name: 'Element Rajagiriya', short: 'Element', domain: 'fairwayholdings.com' },
  { name: 'Ridiyagama Safari Resort', short: 'Safari Resort', domain: 'nationalzoo.gov.lk' },
  { name: 'Wild Coast Tented Lodge', short: 'Wild Coast', domain: 'resplendentceylon.com' },
  { name: 'Ambassador Resort Mirissa', short: 'Ambassador', domain: 'ambassador-mirissa.com' },
  { name: 'Seacare Forwarders', short: 'Seacare', domain: 'seacare.lk' },
  { name: 'CIVIMECH Engineering', short: 'CIVIMECH', domain: 'civimech.lk', localImage: '/images/civimechlogo.png' },
  { name: 'Prime Residence Nawala', short: 'Prime Residence', domain: 'primegroup.lk', localImage: '/images/prime_logo.webp' },
  { name: 'Nuwara Eliya Hospital', short: 'Nuwara Eliya Hospital', domain: 'health.gov.lk', localImage: '/images/general_hospital_logo.jpg' },
];

export default function Clients() {
  // Duplicate for infinite scroll
  const allClients = [...clients, ...clients];

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-subtitle">Trusted Partners</span>
            <h2 className="section-title">Our Valued Clients</h2>
            <div className="section-divider" />
            <p className="section-description">
              We have served a diverse range of clients, including hospitals,
              residential developers, ports, and corporate offices, establishing
              a reputation for reliability and excellence.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" delay={0.2}>
        <div className="clients-marquee-wrapper">
          <div className="clients-marquee">
            {allClients.map((client, index) => (
              <div key={`${client.short}-${index}`} className="client-card">
                <img
                  src={client.localImage || `https://s2.googleusercontent.com/s2/favicons?domain=${client.domain}&sz=128`}
                  alt={client.name}
                  className="client-logo"
                  onError={(e) => {
                    if (!client.localImage) {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.short)}&background=random&color=fff&size=128`;
                    }
                  }}
                />
                <span className="client-card-name">{client.short}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
