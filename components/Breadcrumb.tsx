import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{
      fontSize: '0.9em',
      color: '#64748b',
      marginBottom: 32,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
      {items.map((item, index) => (
        <span key={index} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {index > 0 && <span style={{ color: '#cbd5e1' }}>/</span>}
          {item.href ? (
            <Link href={item.href} style={{ color: '#0066b3', textDecoration: 'none' }}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: '#475569' }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
