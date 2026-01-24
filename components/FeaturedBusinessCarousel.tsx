'use client';

import { useState, useEffect } from 'react';
import BusinessCard from './BusinessCard';

interface Business {
  id: string;
  slug: string;
  name: string;
  category: string;
  description?: string;
  location?: string;
  phone?: string;
  status?: 'claimed' | 'unclaimed' | 'featured';
  image?: string;
}

interface FeaturedBusinessCarouselProps {
  businesses: Business[];
  autoScroll?: boolean;
  intervalMs?: number;
}

export default function FeaturedBusinessCarousel({
  businesses,
  autoScroll = true,
  intervalMs = 5000
}: FeaturedBusinessCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoScroll || businesses.length <= itemsPerView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, businesses.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [autoScroll, intervalMs, businesses.length, itemsPerView]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(businesses.length - itemsPerView, prev + 1));
  };

  if (businesses.length === 0) {
    return null;
  }

  const maxDots = Math.max(1, businesses.length - itemsPerView + 1);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Carousel Container */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            gap: 'clamp(16px, 3vw, 24px)'
          }}
        >
          {businesses.map((business) => (
            <div
              key={business.id}
              style={{
                flex: `0 0 calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 16 / itemsPerView}px)`,
                minWidth: 0
              }}
            >
              <BusinessCard
                name={business.name}
                category={business.category}
                description={business.description}
                location={business.location}
                phone={business.phone}
                status={business.status || 'featured'}
                href={`/directory/${business.slug || business.id}`}
                imageSrc={business.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {businesses.length > itemsPerView && (
        <>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: '2px solid #e2e8f0',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentIndex === 0 ? 0.5 : 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              fontSize: 20,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== 0) {
                e.currentTarget.style.background = '#0066b3';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#0f172a';
            }}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= businesses.length - itemsPerView}
            style={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: '2px solid #e2e8f0',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentIndex >= businesses.length - itemsPerView ? 'not-allowed' : 'pointer',
              opacity: currentIndex >= businesses.length - itemsPerView ? 0.5 : 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              fontSize: 20,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (currentIndex < businesses.length - itemsPerView) {
                e.currentTarget.style.background = '#0066b3';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#0f172a';
            }}
          >
            →
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {maxDots > 1 && (
        <div style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          marginTop: 24
        }}>
          {Array.from({ length: maxDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                width: currentIndex === index ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: currentIndex === index ? '#0066b3' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
