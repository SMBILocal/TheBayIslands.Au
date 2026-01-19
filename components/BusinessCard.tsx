import Link from 'next/link';

interface BusinessCardProps {
  name: string;
  category: string;
  description: string;
  phone?: string;
  location?: string;
  imageSrc?: string;
  href: string;
}

export default function BusinessCard({
  name,
  category,
  description,
  phone,
  location,
  imageSrc,
  href
}: BusinessCardProps) {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div
        style={{
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          border: '1px solid #e2e8f0',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
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
      {/* Image/Logo Section */}
      <div
        style={{
          width: '100%',
          height: 140,
          background: imageSrc
            ? `url(${imageSrc})`
            : 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 48,
          position: 'relative'
        }}
      >
        {!imageSrc && '🏢'}
        {/* Category Badge */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#0ea5e9',
            padding: '6px 12px',
            borderRadius: 20,
            fontWeight: 600,
            fontSize: 12
          }}
        >
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: 16 }}>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            margin: '0 0 4px 0',
            color: '#111827'
          }}
        >
          {name}
        </h3>

        <p
          style={{
            fontSize: 13,
            color: '#0ea5e9',
            fontWeight: 500,
            margin: '0 0 8px 0'
          }}
        >
          {category}
        </p>

        <p
          style={{
            fontSize: 13,
            color: '#6b7280',
            margin: '8px 0',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.5
          }}
        >
          {description}
        </p>

        <div style={{ paddingTop: 8, borderTop: '1px solid #e5e7eb' }}>
          {phone && (
            <div
              style={{
                fontSize: 12,
                color: '#6b7280',
                marginTop: 6
              }}
            >
              📞 {phone}
            </div>
          )}
          {location && (
            <div
              style={{
                fontSize: 12,
                color: '#6b7280',
                marginTop: 4
              }}
            >
              📍 {location}
            </div>
          )}
        </div>
      </div>
      </div>
    </Link>
  );
}
