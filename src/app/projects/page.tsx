'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ProjectGalleryCard from '@/components/ProjectGalleryCard';

export const allProjects = [
  {
    title: 'Capacitor Bank Installation',
    client: 'Hambantota International Port Group',
    location: 'Hambantota',
    category: 'Electrical',
    description: 'Capacitor bank installation for power factor correction and electrical system efficiency.',
    images: [
      '/images/Capacitor Bank Installation -Hambantota International Port Group/WhatsApp Image 2026-05-23 at 23.22.20.jpeg',
      '/images/Capacitor Bank Installation -Hambantota International Port Group/WhatsApp Image 2026-05-23 at 23.22.21 (1).jpeg',
      '/images/Capacitor Bank Installation -Hambantota International Port Group/WhatsApp Image 2026-05-23 at 23.22.21 (2).jpeg',
      '/images/Capacitor Bank Installation -Hambantota International Port Group/WhatsApp Image 2026-05-23 at 23.22.21.jpeg',
    ]
  },
  {
    title: 'CCTV System Installation',
    client: 'Sea Care Forwarders (Pvt) Ltd',
    location: 'Maradana',
    category: 'Electrical',
    description: 'Comprehensive CCTV security system installation and networking for Sea Care Forwarders.',
    images: [
      '/images/CCTV System installation-sea care forwarders (pvt) ltd/WhatsApp Image 2026-05-23 at 23.31.06 (1).jpeg',
      '/images/CCTV System installation-sea care forwarders (pvt) ltd/WhatsApp Image 2026-05-23 at 23.31.06.jpeg',
      '/images/CCTV System installation-sea care forwarders (pvt) ltd/WhatsApp Image 2026-05-23 at 23.31.07.jpeg',
    ]
  },
  {
    title: 'Residential Construction (Dr. Rawindra)',
    client: 'Dr. Rawindra',
    location: 'Ranna',
    category: 'Civil',
    description: 'High-quality residential civil construction and finishing work for Dr. Rawindra.',
    images: [
      '/images/Dr Rawindra House-Ranna/WhatsApp Image 2026-05-23 at 22.32.23.jpeg',
      '/images/Dr Rawindra House-Ranna/WhatsApp Image 2026-05-23 at 22.32.24 (1).jpeg',
      '/images/Dr Rawindra House-Ranna/WhatsApp Image 2026-05-23 at 22.32.24.jpeg',
    ]
  },
  {
    title: 'Fire Pump Installation',
    client: 'Commercial Building',
    location: 'Colombo',
    category: 'Mechanical',
    description: 'Heavy-duty fire pump installation and commissioning for commercial building safety.',
    images: [
      '/images/Fire Pump installation-Colombo/WhatsApp Image 2026-05-23 at 23.27.52 (1).jpeg',
      '/images/Fire Pump installation-Colombo/WhatsApp Image 2026-05-23 at 23.27.52 (2).jpeg',
      '/images/Fire Pump installation-Colombo/WhatsApp Image 2026-05-23 at 23.27.52.jpeg',
      '/images/Fire Pump installation-Colombo/WhatsApp Image 2026-05-23 at 23.27.53 (1).jpeg',
      '/images/Fire Pump installation-Colombo/WhatsApp Image 2026-05-23 at 23.27.53.jpeg',
      '/images/Fire Pump installation-Colombo/WhatsApp Image 2026-05-23 at 23.27.54.jpeg',
    ]
  },
  {
    title: 'Fire System Service',
    client: 'Nilamedura Building (IMSL Pvt Ltd)',
    location: 'Colombo',
    category: 'Mechanical',
    description: 'Comprehensive fire system servicing, maintenance, and compliance checking for Nilamedura Building.',
    images: [
      '/images/Fire System Service -Nilamedura Building(Under IMSL Pvt Ltd)/WhatsApp Image 2026-05-23 at 23.24.19.jpeg',
      '/images/Fire System Service -Nilamedura Building(Under IMSL Pvt Ltd)/WhatsApp Image 2026-05-23 at 23.24.20.jpeg',
      '/images/Fire System Service -Nilamedura Building(Under IMSL Pvt Ltd)/WhatsApp Image 2026-05-23 at 23.24.21 (1).jpeg',
      '/images/Fire System Service -Nilamedura Building(Under IMSL Pvt Ltd)/WhatsApp Image 2026-05-23 at 23.24.21.jpeg',
    ]
  },
  {
    title: 'Fire System Service',
    client: 'Asiri Hospital',
    location: 'Kandy',
    category: 'Mechanical',
    description: 'Critical fire system service and maintenance ensuring patient and staff safety at Asiri Hospital.',
    images: [
      '/images/Fire System Service-Asiri Hospital Kandy/WhatsApp Image 2026-05-23 at 23.20.45.jpeg',
      '/images/Fire System Service-Asiri Hospital Kandy/WhatsApp Image 2026-05-23 at 23.20.46.jpeg',
      '/images/Fire System Service-Asiri Hospital Kandy/WhatsApp Image 2026-05-23 at 23.20.47 (1).jpeg',
      '/images/Fire System Service-Asiri Hospital Kandy/WhatsApp Image 2026-05-23 at 23.20.47.jpeg',
    ]
  },
  {
    title: 'HDPE Pipe Laying Project',
    client: 'Panama Project',
    location: 'Panama',
    category: 'Plumbing',
    description: 'Large-scale High-Density Polyethylene (HDPE) pipe laying and fusing for robust water distribution.',
    images: [
      '/images/HDPE Pipe laying project-Panama/WhatsApp Image 2026-05-23 at 23.25.57 (1).jpeg',
      '/images/HDPE Pipe laying project-Panama/WhatsApp Image 2026-05-23 at 23.25.57 (2).jpeg',
      '/images/HDPE Pipe laying project-Panama/WhatsApp Image 2026-05-23 at 23.25.57.jpeg',
      '/images/HDPE Pipe laying project-Panama/WhatsApp Image 2026-05-23 at 23.25.58 (1).jpeg',
      '/images/HDPE Pipe laying project-Panama/WhatsApp Image 2026-05-23 at 23.25.58.jpeg',
    ]
  },
  {
    title: 'Lightning Protection System',
    client: 'Commercial Building',
    location: 'Kollupitiya',
    category: 'Electrical',
    description: 'Advanced lightning protection and earthing system installation for a commercial building.',
    images: [
      '/images/Lightning  protection system-Kollupitiya/WhatsApp Image 2026-05-23 at 22.35.02 (1).jpeg',
      '/images/Lightning  protection system-Kollupitiya/WhatsApp Image 2026-05-23 at 22.35.02.jpeg',
      '/images/Lightning  protection system-Kollupitiya/WhatsApp Image 2026-05-23 at 22.35.03 (1).jpeg',
      '/images/Lightning  protection system-Kollupitiya/WhatsApp Image 2026-05-23 at 22.35.03 (2).jpeg',
      '/images/Lightning  protection system-Kollupitiya/WhatsApp Image 2026-05-23 at 22.35.03.jpeg',
      '/images/Lightning  protection system-Kollupitiya/WhatsApp Image 2026-05-23 at 22.35.04.jpeg',
    ]
  },
  {
    title: 'Lightning Protection System',
    client: 'Asphalt Plant',
    location: 'Mirigama',
    category: 'Electrical',
    description: 'Industrial lightning protection installation securing the asphalt plant operations against strikes.',
    images: [
      '/images/Lightning protection system-asphalt plant Mirigama/WhatsApp Image 2026-05-23 at 22.45.04 (1).jpeg',
      '/images/Lightning protection system-asphalt plant Mirigama/WhatsApp Image 2026-05-23 at 22.45.04.jpeg',
      '/images/Lightning protection system-asphalt plant Mirigama/WhatsApp Image 2026-05-23 at 22.45.05 (1).jpeg',
      '/images/Lightning protection system-asphalt plant Mirigama/WhatsApp Image 2026-05-23 at 22.45.05 (2).jpeg',
      '/images/Lightning protection system-asphalt plant Mirigama/WhatsApp Image 2026-05-23 at 22.45.05.jpeg',
    ]
  },
  {
    title: 'Residential Construction (Mr. Chamara)',
    client: 'Mr. Chamara',
    location: 'Madampe',
    category: 'Civil',
    description: 'Complete civil construction work for a residential building including structural and aesthetic works.',
    images: [
      '/images/Mr Chamara House-Madampe/WhatsApp Image 2026-05-23 at 22.42.11.jpeg',
      '/images/Mr Chamara House-Madampe/WhatsApp Image 2026-05-23 at 22.42.12 (1).jpeg',
      '/images/Mr Chamara House-Madampe/WhatsApp Image 2026-05-23 at 22.42.12 (2).jpeg',
      '/images/Mr Chamara House-Madampe/WhatsApp Image 2026-05-23 at 22.42.12.jpeg',
      '/images/Mr Chamara House-Madampe/WhatsApp Image 2026-05-23 at 22.42.13 (1).jpeg',
      '/images/Mr Chamara House-Madampe/WhatsApp Image 2026-05-23 at 22.42.13 (2).jpeg',
      '/images/Mr Chamara House-Madampe/WhatsApp Image 2026-05-23 at 22.42.13.jpeg',
    ]
  },
  {
    title: 'Swimming Pool Filter Service',
    client: 'Hotel Koddu',
    location: 'Kalpitiya',
    category: 'Mechanical',
    description: 'Expert servicing and maintenance of commercial swimming pool filtration systems for Hotel Koddu.',
    images: [
      '/images/Swimming pool filter service -Hotel Koddu kalpitiya/WhatsApp Image 2026-05-23 at 22.30.04 (1).jpeg',
      '/images/Swimming pool filter service -Hotel Koddu kalpitiya/WhatsApp Image 2026-05-23 at 22.30.04.jpeg',
      '/images/Swimming pool filter service -Hotel Koddu kalpitiya/WhatsApp Image 2026-05-23 at 22.30.05.jpeg',
    ]
  },
  {
    title: 'Swimming Pool Construction',
    client: 'Residential Project',
    location: 'Galigamuwa',
    category: 'Civil',
    description: 'Ongoing swimming pool construction incorporating advanced civil structural techniques.',
    images: [
      '/images/Swimming pool on going project-Galigamuwa/WhatsApp Image 2026-05-23 at 23.15.58.jpeg',
      '/images/Swimming pool on going project-Galigamuwa/WhatsApp Image 2026-05-23 at 23.15.59 (1).jpeg',
      '/images/Swimming pool on going project-Galigamuwa/WhatsApp Image 2026-05-23 at 23.15.59 (2).jpeg',
      '/images/Swimming pool on going project-Galigamuwa/WhatsApp Image 2026-05-23 at 23.15.59.jpeg',
    ]
  },
  {
    title: 'Swimming Pool Plant Room Piping',
    client: 'Commercial Pool',
    location: 'Colombo',
    category: 'Plumbing',
    description: 'Complex plumbing and pipe laying for a commercial swimming pool plant room.',
    images: [
      '/images/Swimming pool plant room piping project-Colombo/WhatsApp Image 2026-05-23 at 23.32.55.jpeg',
      '/images/Swimming pool plant room piping project-Colombo/WhatsApp Image 2026-05-23 at 23.32.58 (1).jpeg',
      '/images/Swimming pool plant room piping project-Colombo/WhatsApp Image 2026-05-23 at 23.32.58 (2).jpeg',
      '/images/Swimming pool plant room piping project-Colombo/WhatsApp Image 2026-05-23 at 23.32.58.jpeg',
      '/images/Swimming pool plant room piping project-Colombo/WhatsApp Image 2026-05-23 at 23.32.59.jpeg',
    ]
  },
  {
    title: 'Swimming Pool Construction',
    client: 'Luxury Project',
    location: 'Kalpitiya',
    category: 'Civil',
    description: 'High-end swimming pool construction and tiling work in Kalpitiya.',
    images: [
      '/images/swimming pool project kalpitiya/WhatsApp Image 2026-05-23 at 22.27.05.jpeg',
    ]
  },
  {
    title: 'Swimming Pool Renovation',
    client: 'Blue Kits Resort',
    location: 'Kalpitiya',
    category: 'Civil',
    description: 'Extensive renovation and modernization of a resort swimming pool facility.',
    images: [
      '/images/Swimming pool renovation-Blue kits kalpitiya/WhatsApp Image 2026-05-23 at 22.42.06 (1).jpeg',
      '/images/Swimming pool renovation-Blue kits kalpitiya/WhatsApp Image 2026-05-23 at 22.42.06 (2).jpeg',
      '/images/Swimming pool renovation-Blue kits kalpitiya/WhatsApp Image 2026-05-23 at 22.42.06.jpeg',
    ]
  },
  {
    title: 'Three Story Building Construction',
    client: 'Commercial Developer',
    location: 'Kegalle',
    category: 'Civil',
    description: 'Ongoing major civil engineering project involving the construction of a robust three-story building.',
    images: [
      '/images/Three story Building ongoing project-Kegalle/WhatsApp Image 2026-05-23 at 23.19.17.jpeg',
      '/images/Three story Building ongoing project-Kegalle/WhatsApp Image 2026-05-23 at 23.19.18.jpeg',
      '/images/Three story Building ongoing project-Kegalle/WhatsApp Image 2026-05-23 at 23.19.19.jpeg',
    ]
  }
];

const categories = ['All', 'Civil', 'Electrical', 'Mechanical', 'Plumbing'];

export default function ProjectsDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(searchLower) ||
      project.location.toLowerCase().includes(searchLower) ||
      project.client.toLowerCase().includes(searchLower) ||
      project.category.toLowerCase().includes(searchLower);
      
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>
        
        {/* Header & Search */}
        <section className="projects-header">
          <div className="container">
            <ScrollReveal direction="up">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <Link href="/" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>
                  <FiArrowLeft /> Back to Main Website
                </Link>
              </div>
              <span className="section-subtitle">Our Portfolio</span>
              <h1 className="section-title">Projects Dashboard</h1>
              <p className="section-description" style={{ margin: '0 auto' }}>
                Explore our extensive track record of civil, electrical, and mechanical engineering excellence.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="projects-search-container">
                <FiSearch className="projects-search-icon" />
                <input
                  type="text"
                  placeholder="Search by location (e.g., Hambantota), client, or project..."
                  className="projects-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </ScrollReveal>

            {/* Category Filters */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="projects-filter-tabs">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container">
          {filteredProjects.length === 0 ? (
            <div className="no-projects-found">
              <p>No projects found matching your search criteria.</p>
              <button 
                className="btn-secondary" 
                style={{ marginTop: '1rem' }}
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="projects-grid-page">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={`${project.title}-${index}`} direction="up" delay={(index % 4) * 0.1}>
                  <ProjectGalleryCard {...project} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}
