'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ClassifiedItem {
  id: string;
  title: string;
  slug: string;
  price: number;
  category: string;
  location: string;
  images?: string[];
  featured?: boolean;
}

interface ClassifiedsCarouselProps {
  classifieds: ClassifiedItem[];
  autoScroll?: boolean;
}

export default function ClassifiedsCarousel({ classifieds, autoScroll = true }: ClassifiedsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else if (window.innerWidth < 1280) setItemsPerView(3);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoScroll || classifieds.length <= itemsPerView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, classifieds.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [autoScroll, classifieds.length, itemsPerView]);

  if (classifieds.length === 0) return null;

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(2)}M`;
    if (price >= 1000) return `$${(price / 1000).toFixed(0)}k`;
    return `$${price}`;
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          gap: 'clamp(12px, 2vw, 20px)'
        }}>
          {classifieds.map((item) => (
            <Link
              key={item.id}
              href={`/classifieds/${item.slug}`}
              style={{
                flex: `0 0 calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 16 / itemsPerView}px)`,
                minWidth: 0,
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                background: 'white',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
                border: item.featured ? '2px solid #f59e0b' : '1px solid #e5e7eb',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
              >
                {/* Image */}
                <div style={{
                  width: '100%',
                  height: 180,
                  background: item.images?.[0] 
                    ? `url(${item.images[0]}) center/cover` 
                    : 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)',
                  position: 'relative'
                }}>
                  {item.featured && (
                    <div style={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      background: '#f59e0b',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: 6,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      Premium
                    </div>
                  )}
                  <div style={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    background: 'rgba(0,0,0,0.75)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 700
                  }}>
                    {formatPrice(item.price)}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: 16, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: 16,
                    fontWeight: 700,
                    margin: '0 0 8px 0',
                    lineHeight: 1.3,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {item.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: 8,
                    fontSize: 12,
                    color: '#6b7280',
                    marginTop: 'auto'
                  }}>
                    <span style={{
                      background: '#f3f4f6',
                      padding: '4px 8px',
                      borderRadius: 4,
                      fontWeight: 500
                    }}>
                      {item.category}
                    </span>
                    <span style={{
                      background: '#eff6ff',
                      color: '#1d4ed8',
                      padding: '4px 8px',
                      borderRadius: 4,
                      fontWeight: 500
                    }}>
                      📍 {item.location.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Dots */}
      {classifieds.length > itemsPerView && (
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 16 }}>
          {Array.from({ length: Math.max(1, classifieds.length - itemsPerView + 1) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: currentIndex === i ? 20 : 8,
                height: 8,
                borderRadius: 4,
                background: currentIndex === i ? '#0066b3' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
