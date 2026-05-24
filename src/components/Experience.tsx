'use client';

import ScrollReveal from './animations/ScrollReveal';
import ProjectGalleryCard from './ProjectGalleryCard';
import { allProjects } from '@/app/projects/page';

export default function Experience() {
  // Select a few diverse projects for the homepage featured section
  const featuredProjects = [
    allProjects[0], // Capacitor Bank (Electrical)
    allProjects[3], // Fire Pump (Mechanical)
    allProjects[11], // Swimming Pool Construction (Civil)
    allProjects[7], // Lightning Protection (Electrical)
    allProjects[12], // Swimming Pool Piping (Plumbing)
    allProjects[2], // Residential Construction (Civil)
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-subtitle">Our Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider" />
            <p className="section-description">
              A showcase of our diverse engineering projects across civil, electrical,
              mechanical, and plumbing disciplines.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Projects Grid */}
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} direction="up" delay={index * 0.1}>
              <ProjectGalleryCard {...project} />
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <ScrollReveal direction="up" delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <a href="/projects" className="btn-primary">
              View All Projects
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
