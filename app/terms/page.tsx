'use client'

import { useState } from 'react'

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'accounts', label: 'Accounts & Listings' },
    { id: 'billing', label: 'Billing & Renewals' },
    { id: 'usage', label: 'Acceptable Use' },
    { id: 'liability', label: 'Liability & Governing Law' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <main style={{maxWidth: 1200, margin: '0 auto', padding: '32px 20px', lineHeight: 1.6}}>
      <h1 style={{fontSize: 32, fontWeight: 700, marginBottom: 32}}>Terms of Service</h1>
      <p style={{color: '#475569', marginBottom: 32}}>Last updated: January 2026</p>
      
      <div style={{display: 'grid', gridTemplateColumns: '250px 1fr', gap: 32}}>
        {/* Sidebar Menu */}
        <nav style={{backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', height: 'fit-content'}}>
          <div style={{fontWeight: 600, marginBottom: 12, fontSize: 14, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Sections</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8}}>
            {sections.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: 'none',
                    background: activeSection === section.id ? '#0066b3' : 'transparent',
                    color: activeSection === section.id ? 'white' : '#333',
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: activeSection === section.id ? 600 : 400,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.background = '#e0e7ff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Area */}
        <div>
          {activeSection === 'overview' && (
            <section>
              <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Overview</h2>
              <p style={{color: '#475569'}}>These terms govern your use of thebayislands.au, including the directory, classifieds, jobs, events, and upgrade plans.</p>
            </section>
          )}

          {activeSection === 'accounts' && (
            <section>
              <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Accounts & Listings</h2>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 12}}>
                <li>Provide accurate information and keep credentials secure.</li>
                <li>Only publish listings you own or are authorized to manage; we may moderate or remove content.</li>
                <li>Minimum age 16. Respect intellectual property and privacy rights.</li>
              </ul>
            </section>
          )}

          {activeSection === 'billing' && (
            <section>
              <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Billing & Renewals</h2>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 12}}>
                <li>Subscriptions are available monthly, 6-monthly, or annually with applicable discounts for longer terms.</li>
                <li>Plans auto-renew on the cadence you choose; you can cancel anytime to stop future renewals.</li>
                <li>Proration follows Stripe defaults where applicable; see Refund & Cancellation Policy for details.</li>
              </ul>
            </section>
          )}

          {activeSection === 'usage' && (
            <section>
              <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Acceptable Use</h2>
              <p style={{color: '#475569'}}>No spam, scraping, harassment, or illegal activity. We may suspend accounts that violate these rules.</p>
            </section>
          )}

          {activeSection === 'liability' && (
            <section>
              <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Liability & Governing Law</h2>
              <p style={{color: '#475569'}}>Service is provided "as is". To the maximum extent permitted by law, liability is limited to fees paid in the prior 12 months. Governing law: Queensland, Australia.</p>
            </section>
          )}

          {activeSection === 'contact' && (
            <section>
              <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Contact</h2>
              <p style={{color: '#475569'}}>support@thebayislands.au</p>
            </section>
          )}
        </div>
      </div>
    </main>
  )
}
