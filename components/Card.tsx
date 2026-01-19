interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  location?: string;
  price?: string | number;
  badge?: string;
  date?: string;
  href: string;
  imageSrc?: string;
  ctaText?: string;
}

import Link from 'next/link';

export default function Card({
  title,
  subtitle,
  description,
  location,
  price,
  badge,
  date,
  href,
  imageSrc,
  ctaText = "View Details"
}: CardProps) {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div
        style={{
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          transition: 'all 0.2s ease',
          border: '1px solid #e2e8f0',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
      <div style={{
        width: '100%',
        height: 200,
        background: imageSrc ? `url(${imageSrc})` : `linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#94a3b8',
        fontSize: 48
      }}>
        {!imageSrc && '📷'}
      </div>
      
      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
          <h3 style={{
            fontSize: 18,
            fontWeight: 600,
            margin: 0,
            color: '#0f172a',
            flex: 1
          }}>
            {title}
          </h3>
          {price && (
            <div style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0ea5e9',
              marginLeft: 12
            }}>
              {typeof price === 'number' ? `$${price.toLocaleString()}` : price}
            </div>
          )}
        </div>

        {subtitle && (
          <div style={{
            fontSize: 14,
            color: '#64748b',
            fontWeight: 500,
            marginBottom: 8
          }}>
            {subtitle}
          </div>
        )}

        {badge && (
          <span style={{
            display: 'inline-block',
            background: '#e0e7ff',
            color: '#6366f1',
            padding: '4px 12px',
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 600,
            marginBottom: 12
          }}>
            {badge}
          </span>
        )}

        <p style={{
          fontSize: 14,
          color: '#475569',
          lineHeight: 1.6,
          margin: '12px 0',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {description}
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 16,
          paddingTop: 12,
          borderTop: '1px solid #e2e8f0'
        }}>
          <div style={{ display: 'flex', gap: 16, fontSize: 13, color: '#64748b' }}>
            {location && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                📍 {location}
              </span>
            )}
            {date && (
              <span>
                {new Date(date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric' })}
              </span>
            )}
          </div>
          <span style={{
            color: '#6366f1',
            fontSize: 14,
            fontWeight: 600
          }}>
            {ctaText} →
          </span>
        </div>
      </div>
      </div>
    </Link>
  );
}
