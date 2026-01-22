'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login?redirectTo=/admin');
      return;
    }

    // For now, allow all authenticated users to access admin
    // In production, check user role from auth metadata
    setIsAdmin(true);
    setLoading(false);
  }, [user, router]);

  if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>;
  if (!isAdmin) return null;

  const navItems = [
    { href: '/admin', label: '📊 Moderation Dashboard', icon: '📊' },
    { href: '/admin/legacy', label: '🔧 Legacy Admin', icon: '🔧' },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh', background: '#f9fafb' }}>
      {/* Sidebar */}
      <aside style={{ background: 'white', borderRight: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
        <div style={{ padding: 20, borderBottom: '1px solid #e5e7eb' }}>
          <Link href="/admin" style={{ textDecoration: 'none' }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0066b3', margin: 0 }}>Admin Panel</h2>
          </Link>
          <p style={{ fontSize: 12, color: '#6b7280', margin: '4px 0 0 0' }}>Bay Islands v0.0.5</p>
        </div>

        <nav style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 12px',
                borderRadius: 6,
                textDecoration: 'none',
                color: isActive(item.href) ? '#0066b3' : '#6b7280',
                background: isActive(item.href) ? '#f0f4f8' : 'transparent',
                fontWeight: isActive(item.href) ? 600 : 500,
                fontSize: 13,
                transition: 'all 0.2s',
                borderLeft: isActive(item.href) ? '3px solid #0066b3' : '3px solid transparent',
              }}
              onMouseEnter={e => {
                if (!isActive(item.href)) {
                  e.currentTarget.style.background = '#f9fafb';
                  e.currentTarget.style.color = '#374151';
                }
              }}
              onMouseLeave={e => {
                if (!isActive(item.href)) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#6b7280';
                }
              }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div style={{ padding: 12, borderTop: '1px solid #e5e7eb', color: '#6b7280', fontSize: 12 }}>
          <p style={{ margin: 0, marginBottom: 8 }}>
            <strong>Logged in as:</strong>
          </p>
          <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {user?.email}
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ overflowY: 'auto', background: '#f9fafb' }}>
        {children}
      </main>
    </div>
  );
}
