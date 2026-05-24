'use client';

import {
  FiTool,
  FiZap,
  FiSettings,
  FiDroplet,
  FiClipboard,
} from 'react-icons/fi';
import ScrollReveal from './animations/ScrollReveal';

const services = [
  {
    icon: <FiTool />,
    title: 'Civil Engineering',
    description:
      'Comprehensive civil construction services from structural work to finishing, delivering excellence at every stage.',
    items: [
      'All types of building construction',
      'Concrete & steel structure construction',
      'Plastering & tiling work',
      'All types of waterproofing work',
      'Swimming pool construction',
      'Aluminium, moulding & carpentry work',
    ],
  },
  {
    icon: <FiZap />,
    title: 'Electrical Engineering',
    description:
      'Complete electrical solutions from cable fault tracing to panel installation and control systems.',
    items: [
      'Underground cable fault finding & rectification',
      'Distribution & control panels',
      'PID and VFD control panels',
      'Automatic transfer switches for generators',
      'Electronic fences installation',
      'Generator and UPS load testing',
    ],
  },
  {
    icon: <FiSettings />,
    title: 'Mechanical Engineering',
    description:
      'Expert mechanical services including fire systems, HVAC, pumps, and specialized equipment maintenance.',
    items: [
      'Fire system installation & servicing',
      'Air conditioning & VRV systems',
      'Pump installation & maintenance',
      'Generator servicing & repairs',
      'Gas pipeline installation',
      'Water meters (BMS-supported)',
    ],
  },
  {
    icon: <FiDroplet />,
    title: 'Plumbing',
    description:
      'Professional plumbing solutions with expertise across all piping systems and sanitary installations.',
    items: [
      'PVC, CPVC, HDPE, PE, PPR piping',
      'DI & BI piping systems',
      'Sanitary fittings installation',
      'PRV station installation',
      'Swimming pool plumbing',
      'Water supply systems',
    ],
  },
  {
    icon: <FiClipboard />,
    title: 'Consultancy',
    description:
      'End-to-end consultancy services from feasibility studies to project management and completion.',
    items: [
      'Investigation & survey',
      'Feasibility studies',
      'Design & construction planning',
      'Project management & administration',
      'Infrastructure planning',
      'Interior & 2D/3D designs',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider" />
            <p className="section-description">
              We provide a comprehensive range of civil, electrical, and mechanical
              engineering services tailored to meet the needs of modern construction projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>
                      <span className="service-list-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
