'use client';

import React from 'react';

interface RatingStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

export default function RatingStars({ rating, size = 'md', showNumber = false }: RatingStarsProps) {
  const starSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
  const fontSize = size === 'sm' ? '14px' : size === 'lg' ? '18px' : '16px';
  
  const stars = Array.from({ length: 5 }, (_, i) => {
    const starValue = i + 1;
    const filled = rating >= starValue;
    const partial = rating > i && rating < starValue;
    
    return (
      <span
        key={i}
        style={{
          color: filled || partial ? '#fbbf24' : '#e5e7eb',
          fontSize: `${starSize}px`,
          lineHeight: 1,
        }}
      >
        ★
      </span>
    );
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <div style={{ display: 'flex', gap: '2px' }}>{stars}</div>
      {showNumber && (
        <span style={{ fontSize, color: '#64748b', fontWeight: 600 }}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
