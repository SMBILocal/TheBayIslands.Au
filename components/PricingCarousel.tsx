'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PRICING_TIERS, CAROUSEL_CONFIG } from '@/lib/pricing.constants';

interface PricingCarouselProps {
  onTierSelect?: (tierId: string) => void;
  defaultTier?: string;
  layout?: 'desktop' | 'tablet' | 'mobile' | 'auto';
}

export default function PricingCarousel({
  onTierSelect,
  defaultTier = 'popular',
  layout = 'auto',
}: PricingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at "Popular"
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Detect screen size for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine cards to show
  const getVisibleCards = () => {
    if (isMobile) {
      return [currentIndex]; // Show 1 card on mobile
    }
    if (isTablet) {
      // Show 3 cards on tablet (center card + 1 on each side)
      return [
        (currentIndex - 1 + PRICING_TIERS.length) % PRICING_TIERS.length,
        currentIndex,
        (currentIndex + 1) % PRICING_TIERS.length,
      ];
    }
    // Desktop: show all 5 cards
    return [0, 1, 2, 3, 4];
  };

  const visibleCards = getVisibleCards();
  const showArrows = isMobile || isTablet;
  const showHints = isMobile; // Show hints on mobile

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + PRICING_TIERS.length) % PRICING_TIERS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PRICING_TIERS.length);
  };

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches?.[0]?.clientX || 0;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches?.[0]?.clientX || 0;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > CAROUSEL_CONFIG.swipeThreshold) {
      if (diff > 0) {
        handleNext(); // Swiped left, show next
      } else {
        handlePrevious(); // Swiped right, show previous
      }
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="pricing-carousel-wrapper">
      {/* Desktop/Tablet: Full grid or carousel */}
      <div
        ref={carouselRef}
        className="pricing-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)',
          gap: '20px',
          position: 'relative',
          transition: `transform ${CAROUSEL_CONFIG.transitionDuration}ms ease-out`,
        }}
      >
        {visibleCards.map((index) => {
          const tier = PRICING_TIERS[index];
          const isCenter = index === 2; // Popular tier is center
          const isVisible = visibleCards.includes(index);

          return (
            <PricingCard
              key={tier.id}
              tier={tier}
              isPopular={tier.isPopular}
              isCenter={isCenter && !isMobile}
              isVisible={isVisible}
              onSelect={() => {
                onTierSelect?.(tier.id);
                if (isMobile || isTablet) {
                  setCurrentIndex(index);
                }
              }}
              showHint={showHints && (index === (currentIndex - 1 + PRICING_TIERS.length) % PRICING_TIERS.length || index === (currentIndex + 1) % PRICING_TIERS.length)}
            />
          );
        })}
      </div>

      {/* Navigation arrows for mobile/tablet */}
      {showArrows && (
        <>
          <button
            onClick={handlePrevious}
            className="carousel-arrow carousel-arrow-left"
            aria-label="Previous pricing tier"
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(0, 102, 179, 0.8)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
              fontSize: '18px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 102, 179, 1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 102, 179, 0.8)')}
          >
            ←
          </button>

          <button
            onClick={handleNext}
            className="carousel-arrow carousel-arrow-right"
            aria-label="Next pricing tier"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'rgba(0, 102, 179, 0.8)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
              fontSize: '18px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 102, 179, 1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 102, 179, 0.8)')}
          >
            →
          </button>
        </>
      )}

      {/* Indicators for mobile */}
      {isMobile && (
        <div
          className="carousel-indicators"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '20px',
          }}
        >
          {PRICING_TIERS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentIndex ? '#0066b3' : '#ddd',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              aria-label={`Go to pricing tier ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Individual pricing card component
interface PricingCardProps {
  tier: (typeof PRICING_TIERS)[0];
  isPopular?: boolean;
  isCenter?: boolean;
  isVisible?: boolean;
  showHint?: boolean;
  onSelect?: () => void;
}

function PricingCard({
  tier,
  isPopular = false,
  isCenter = false,
  isVisible = true,
  showHint = false,
  onSelect,
}: PricingCardProps) {
  return (
    <div
      className={`pricing-card ${isPopular ? 'pricing-card-popular' : ''} ${isCenter ? 'pricing-card-center' : ''} ${showHint ? 'pricing-card-hint' : ''}`}
      style={{
        background: tier.color || '#ffffff',
        border: `2px solid ${tier.borderColor || '#ddd'}`,
        borderRadius: '8px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transform: isCenter ? 'scale(1.05)' : 'scale(1)',
        transition: `transform ${CAROUSEL_CONFIG.transitionDuration}ms ease-out`,
        opacity: showHint ? 0.5 : 1,
        boxShadow: isPopular ? '0 10px 30px rgba(0, 102, 179, 0.2)' : 'none',
      }}
    >
      {/* Badge */}
      {tier.badge && (
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#ff6b35',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
          }}
        >
          {tier.badge}
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          margin: '12px 0 8px',
          fontSize: '22px',
          fontWeight: 'bold',
          color: tier.textColor || '#333',
        }}
      >
        {tier.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '14px',
          color: isPopular ? 'rgba(255,255,255,0.9)' : '#666',
          marginBottom: '16px',
        }}
      >
        {tier.description}
      </p>

      {/* Price */}
      <div style={{ marginBottom: '20px' }}>
        {tier.price !== null ? (
          <>
            <div
              style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: tier.textColor || '#0066b3',
              }}
            >
              ${tier.price.toFixed(2)}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: isPopular ? 'rgba(255,255,255,0.8)' : '#999',
              }}
            >
              {tier.period}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: tier.textColor || '#0066b3',
              }}
            >
              {tier.priceDisplay || 'Custom Pricing'}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: isPopular ? 'rgba(255,255,255,0.8)' : '#999',
              }}
            >
              {tier.period}
            </div>
          </>
        )}
      </div>

      {/* Savings badge */}
      {tier.savings && (
        <div
          style={{
            background: 'rgba(0, 102, 179, 0.1)',
            color: '#0066b3',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          {tier.savings}
        </div>
      )}

      {/* CTA Button */}
      <button
        onClick={onSelect}
        style={{
          background: tier.ctaVariant === 'primary' ? '#ff6b35' : tier.ctaVariant === 'secondary' ? '#f0f0f0' : 'transparent',
          color: tier.ctaVariant === 'primary' ? 'white' : tier.ctaVariant === 'secondary' ? '#333' : (tier.textColor || '#0066b3'),
          border: tier.ctaVariant === 'outline' ? `2px solid ${tier.textColor || '#0066b3'}` : 'none',
          padding: '12px 24px',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '20px',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          if (tier.ctaVariant === 'primary') {
            e.currentTarget.style.background = '#ff5722';
          } else {
            e.currentTarget.style.opacity = '0.8';
          }
        }}
        onMouseLeave={(e) => {
          if (tier.ctaVariant === 'primary') {
            e.currentTarget.style.background = '#ff6b35';
          } else {
            e.currentTarget.style.opacity = '1';
          }
        }}
      >
        {tier.cta}
      </button>

      {/* Features List */}
      <div style={{ flex: 1 }}>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '14px',
            color: tier.textColor || '#333',
          }}
        >
          {tier.features.map((feature) => (
            <li
              key={feature.name}
              title={feature.tooltip}
              style={{
                padding: '8px 0',
                display: 'flex',
                alignItems: 'center',
                opacity: feature.included ? 1 : 0.5,
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                cursor: feature.tooltip ? 'help' : 'default',
              }}
            >
              <span style={{ marginRight: '8px', fontSize: '16px' }}>
                {feature.included ? '✓' : '✗'}
              </span>
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Limitations */}
      {tier.limitations && (
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            background: 'rgba(0,0,0,0.05)',
            borderRadius: '4px',
            fontSize: '12px',
            color: isPopular ? 'rgba(255,255,255,0.7)' : '#666',
          }}
        >
          {tier.limitations}
        </div>
      )}

      {/* Benefits for Pro/Custom */}
      {tier.benefits && tier.benefits.length > 0 && (
        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: tier.textColor || '#0066b3',
              marginBottom: '8px',
            }}
          >
            Also includes:
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '12px',
            }}
          >
            {tier.benefits.map((benefit) => (
              <li key={benefit} style={{ padding: '4px 0' }}>
                • {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
