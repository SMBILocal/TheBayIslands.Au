import Image from 'next/image';

/**
 * Image optimization utilities for the Bay Islands
 * Handles responsive images, lazy loading, and WebP conversion
 */

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  objectPosition?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Responsive image component with Next.js Image optimization
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  sizes,
  quality = 85,
  objectFit = 'cover',
  objectPosition = 'center',
  className,
  style,
}: OptimizedImageProps) {
  // Use fallback image if src is missing
  const imageSrc = src || '/placeholder-image.svg';

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
      style={{
        objectFit,
        objectPosition,
        ...style,
      }}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}

/**
 * Image dimensions for common use cases
 */
export const ImageDimensions = {
  // Hero sections
  hero: { width: 1920, height: 600 },
  heroBanner: { width: 1920, height: 800 },

  // Cards and thumbnails
  listingCard: { width: 400, height: 300 },
  thumbnailSmall: { width: 150, height: 150 },
  thumbnailMedium: { width: 300, height: 300 },

  // Detail pages
  listing: { width: 800, height: 600 },
  gallery: { width: 600, height: 400 },

  // Social media
  ogImage: { width: 1200, height: 630 },
  twitterImage: { width: 1024, height: 512 },
};

/**
 * Get responsive image sizes string for srcset
 */
export function getResponsiveSizes(maxWidth: number = 1200): string {
  return `
    (max-width: 640px) 100vw,
    (max-width: 1024px) 80vw,
    ${Math.min(maxWidth, 1200)}px
  `;
}

/**
 * Image quality settings based on usage
 */
export const ImageQuality = {
  high: 95,    // For hero images and important visuals
  standard: 85, // Default quality for listings
  low: 75,     // For thumbnails
  social: 80,  // For social media sharing
};

/**
 * Picture component for WebP and fallback support
 */
export function ResponsivePicture({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  style,
}: OptimizedImageProps) {
  // In production, convert to WebP and provide fallbacks
  const webpSrc = src?.replace(/\.[^.]+$/, '.webp') || src;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src || '/placeholder-image.svg'}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{
          maxWidth: '100%',
          height: 'auto',
          ...style,
        }}
        loading="lazy"
      />
    </picture>
  );
}

/**
 * Lazy load images on demand
 */
export function useLazyImageLoader() {
  if (typeof window !== 'undefined') {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    return imageObserver;
  }
}

/**
 * Generate srcset for different screen sizes
 */
export function generateSrcSet(baseSrc: string, widths: number[] = [320, 640, 1024, 1280]): string {
  return widths
    .map(width => {
      // This would be handled by your image CDN in production
      return `${baseSrc}?w=${width} ${width}w`;
    })
    .join(', ');
}

/**
 * Placeholder image generator (using gradient or dominant color)
 */
export function generatePlaceholder(dominantColor: string = '#e2e8f0'): string {
  // Return a data URL for a solid color placeholder
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='${encodeURIComponent(dominantColor)}' width='800' height='600'/%3E%3C/svg%3E`;
}

/**
 * Image loading strategies
 */
export enum ImageLoadingStrategy {
  EAGER = 'eager',      // Critical images (hero, above-fold)
  LAZY = 'lazy',        // Below-fold images
  AUTO = 'auto',        // Browser decides
}
