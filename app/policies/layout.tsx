'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  const policies = [
    { id: 'privacy', label: 'Privacy Policy', href: '/policies/privacy' },
    { id: 'data-protection', label: 'Data Protection', href: '/policies/data-protection' },
    { id: 'cookies', label: 'Cookies', href: '/policies/cookies' },
    { id: 'content', label: 'Community Guidelines', href: '/policies/content' },
    { id: 'listings', label: 'Business Listings', href: '/policies/listings' },
    { id: 'classifieds', label: 'Classifieds', href: '/policies/classifieds' },
    { id: 'jobs', label: 'Jobs Board', href: '/policies/jobs' },
    { id: 'intellectual', label: 'IP Rights', href: '/policies/intellectual' },
    { id: 'refunds', label: 'Refunds', href: '/policies/refunds' },
    { id: 'acceptable-use', label: 'Acceptable Use', href: '/policies/acceptable-use' },
    { id: 'dmca', label: 'DMCA/Copyright', href: '/policies/dmca' },
    { id: 'security', label: 'Security', href: '/policies/security' },
    { id: 'children', label: 'Children\'s Privacy', href: '/policies/children' },
    { id: 'environmental', label: 'Environmental', href: '/policies/environmental' },
  ]

  const currentPath = pathname.split('/').pop()
  const activePolicy = policies.find(p => p.id === currentPath)

  return (
    <main style={{minHeight: '100vh', background: '#f8fafc'}}>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '40px 20px'}}>
        <h1 style={{fontSize: 42, fontWeight: 700, marginBottom: 12, color: '#0f172a'}}>Policies & Legal</h1>
        <p style={{fontSize: 16, color: '#64748b', marginBottom: 40}}>Comprehensive policies governing use of thebayislands.au • Last Updated: January 31, 2026</p>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: 8,
          marginBottom: 32,
          overflowX: 'auto',
          paddingBottom: 12,
          borderBottom: '2px solid #e2e8f0',
          WebkitOverflowScrolling: 'touch',
        }}>
          {policies.map(policy => (
            <button
              key={policy.id}
              onClick={() => router.push(policy.href)}
              style={{
                padding: '12px 16px',
                background: activePolicy?.id === policy.id ? '#0066b3' : 'transparent',
                color: activePolicy?.id === policy.id ? 'white' : '#0f172a',
                border: activePolicy?.id === policy.id ? 'none' : '1px solid #e2e8f0',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: activePolicy?.id === policy.id ? 600 : 500,
                fontSize: 14,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (activePolicy?.id !== policy.id) {
                  e.currentTarget.style.background = '#f0f4f8'
                }
              }}
              onMouseLeave={(e) => {
                if (activePolicy?.id !== policy.id) {
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {policy.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{background: 'white', borderRadius: 12, padding: 40, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', lineHeight: 1.7}}>
          {children}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          main {
            padding: 20px;
          }
          h1 {
            font-size: 28px;
          }
          div[style*="padding: 40px"] {
            padding: 24px !important;
          }
        }
      `}</style>
    </main>
  )
}
