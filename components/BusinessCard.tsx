import Link from 'next/link';

type ClaimStatus = 'claimed' | 'unclaimed' | 'featured'

interface BusinessCardProps {
  name: string;
  category: string;
  description?: string;
  phone?: string;
  location?: string;
  imageSrc?: string;
  href?: string;
  claimHref?: string;
  status?: ClaimStatus;
}

export default function BusinessCard({
  name,
  category,
  description,
  phone,
  location,
  imageSrc,
  href,
  claimHref = '/upgrade',
  status = 'claimed'
}: BusinessCardProps) {
  const isUnclaimed = status === 'unclaimed'
  const isFeatured = status === 'featured'

  const cardContent = (
    <div
      style={{
        background: 'white',
        borderRadius: 12,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        border: isFeatured ? '1px solid #0ea5e9' : '1px solid #e2e8f0',
        cursor: isUnclaimed ? 'default' : 'pointer',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div
        style={{
          width: '100%',
          height: 140,
          background: isUnclaimed
            ? 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)'
            : imageSrc
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
        {!imageSrc && (isUnclaimed ? '🛈' : '🏢')}
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'rgba(255, 255, 255, 0.92)',
            color: isUnclaimed ? '#475569' : '#0ea5e9',
            padding: '6px 12px',
            borderRadius: 20,
            fontWeight: 700,
            fontSize: 12,
            border: isUnclaimed ? '1px solid #cbd5e1' : 'none'
          }}
        >
          {isUnclaimed ? 'Unclaimed' : category}
        </div>
        {!isUnclaimed && isFeatured && (
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              background: '#0ea5e9',
              color: 'white',
              padding: '6px 12px',
              borderRadius: 20,
              fontWeight: 700,
              fontSize: 12
            }}
          >
            Featured
          </div>
        )}
      </div>

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

        {isUnclaimed ? (
          <p
            style={{
              fontSize: 13,
              color: '#475569',
              margin: '8px 0',
              lineHeight: 1.4
            }}
          >
            This listing is available to claim. Add photos, hours, and contact details once verified.
          </p>
        ) : (
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
        )}

        <div style={{ paddingTop: 8, borderTop: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {!isUnclaimed && phone && (
            <div style={{ fontSize: 12, color: '#6b7280' }}>
              📞 {phone}
            </div>
          )}
          {!isUnclaimed && location && (
            <div style={{ fontSize: 12, color: '#6b7280' }}>
              📍 {location}
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginTop: 4 }}>
            <Link
              href={claimHref}
              style={{
                display: 'inline-block',
                padding: '10px 12px',
                background: isUnclaimed ? '#0ea5e9' : '#e2e8f0',
                color: isUnclaimed ? 'white' : '#0f172a',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 12,
                textAlign: 'center',
                flex: 1,
                textDecoration: 'none'
              }}
              onClick={(e) => {
                if (isUnclaimed) {
                  e.stopPropagation();
                }
              }}
            >
              {isUnclaimed ? 'Claim this listing' : 'Claim & manage'}
            </Link>
            {!isUnclaimed && href && (
              <Link
                href={href}
                style={{
                  display: 'inline-block',
                  padding: '10px 12px',
                  background: '#0ea5e9',
                  color: 'white',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 12,
                  textAlign: 'center',
                  minWidth: 100,
                  textDecoration: 'none'
                }}
              >
                View details
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  if (isUnclaimed || !href) {
    return cardContent
  }

  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      {cardContent}
    </Link>
  )
}
