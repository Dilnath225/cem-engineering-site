'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from 'react-icons/fi';

export interface ProjectGalleryCardProps {
  title: string;
  category: string;
  client?: string;
  location?: string;
  description: string;
  images: string[];
}

export default function ProjectGalleryCard({ title, category, client, location, description, images }: ProjectGalleryCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);
  
  // Touch handlers for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const hasMultipleImages = images.length > 1;
  // Fallback to placeholder if no images
  const currentImage = images[currentIndex] || '/images/hero-bg.png';

  return (
    <>
      <div className="project-card">
        <div 
          className="project-card-image-wrapper" 
          style={{ position: 'relative', cursor: 'pointer' }}
          onClick={() => setLightboxOpen(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {location && (
            <span className="project-card-badge" style={{ zIndex: 10 }}>
              <FiMapPin /> {location}
            </span>
          )}

          {/* Fullscreen indicator */}
          <div className="project-card-expand">
            <FiMaximize2 />
          </div>

          <Image
            src={currentImage}
            alt={`${title} - image ${currentIndex + 1}`}
            fill
            className="project-card-image"
            style={{ objectFit: 'cover' }}
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {hasMultipleImages && (
            <>
              {/* Carousel Controls */}
              <button className="carousel-btn left" onClick={prevImage}>
                <FiChevronLeft size={24} />
              </button>
              <button className="carousel-btn right" onClick={nextImage}>
                <FiChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="carousel-dots">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="project-card-content">
          <h3>{title}</h3>
          <span className="project-card-category-text">
            {category} {client && `/ ${client}`}
          </span>
          <p>{description}</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>
              <span style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Close</span>
              <FiX size={32} />
            </button>
            
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={currentImage}
                alt={`${title} fullscreen`}
                fill
                style={{ objectFit: 'contain' }}
                quality={100}
                sizes="100vw"
                priority
              />

              {hasMultipleImages && (
                <>
                  <button className="lightbox-btn left" onClick={prevImage}>
                    <FiChevronLeft size={36} />
                  </button>
                  <button className="lightbox-btn right" onClick={nextImage}>
                    <FiChevronRight size={36} />
                  </button>
                  <div className="lightbox-counter">
                    {currentIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
