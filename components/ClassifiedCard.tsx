import Link from 'next/link';

interface ClassifiedCardProps {
  title: string;
  price: number | string;
  location: string;
  description: string;
  imageSrc?: string;
  href: string;
  condition?: string;
}

export default function ClassifiedCard({
  title,
  price,
  location,
  description,
  imageSrc,
  href,
  condition
}: ClassifiedCardProps) {
  const priceStr = typeof price === 'number' ? `$${price.toLocaleString('en-AU')}` : price;

  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div
        style={{
          background: 'white',
          borderRadius: 8,
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
        {/* Image Section */}
        <div
        style={{
          width: '100%',
          height: 160,
          background: imageSrc
            ? `url(${imageSrc})`
            : 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af',
          fontSize: 40,
          position: 'relative',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            parent.style.transform = 'translateY(-2px)';
          }
        }}
        onMouseLeave={(e) => {
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            parent.style.transform = 'translateY(0)';
          }
        }}
      >
        {!imageSrc && '📷'}
        {/* Price Badge */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: '#f59e0b',
            color: 'white',
            padding: '8px 12px',
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 16
          }}
        >
          {priceStr}
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: 16 }}>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            margin: '0 0 8px 0',
            color: '#111827',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: 13,
            color: '#6b7280',
            margin: '0 0 10px 0',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {description}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 8,
            borderTop: '1px solid #e5e7eb',
            fontSize: 12,
            color: '#6b7280'
          }}
        >
          <span>📍 {location}</span>
          {condition && <span style={{ color: '#f59e0b', fontWeight: 500 }}>{condition}</span>}
        </div>
      </div>
      </div>
    </Link>
  );
}
