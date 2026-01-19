import React from 'react';
import Link from 'next/link';

interface ListingCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  meta?: string;
  description?: string;
  price?: string;
  href?: string;
}

export default function ListingCard({
  title,
  subtitle,
  meta,
  description,
  price,
  href
}: ListingCardProps) {
  const content = (
    <div className="list-item card">
      <div style={{ flex: 1 }}>
        <h3>{title}</h3>
        {subtitle && <div className="muted">{subtitle}</div>}
        {(meta || description) && (
          <div className="meta" style={{ marginTop: 8 }}>
            {meta || description}
          </div>
        )}
      </div>
      {price && (
        <div style={{ alignSelf: 'center' }}>
          <span className="pill">{price}</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
