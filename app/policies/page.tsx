'use client';

import { useState } from 'react';
import Link from 'next/link';

type TabId = 'privacy' | 'refunds' | 'cookies' | 'environment' | 'terms';

const tabs: { id: TabId; label: string }[] = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'refunds', label: 'Refunds & Cancellation' },
  { id: 'cookies', label: 'Cookies Policy' },
  { id: 'environment', label: 'Environmental & Sustainability' },
  { id: 'terms', label: 'Terms of Service (Summary)' },
];

const sectionStyle = { display: 'grid', gap: 24 } as const;
const heading = { fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0066b3' } as const;
const subheading = { fontSize: 18, fontWeight: 600, marginBottom: 12 } as const;
const body = { color: '#475569' } as const;
const list = { paddingLeft: 20, color: '#475569', display: 'grid', gap: 8 } as const;

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState<TabId>('privacy');

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 20px', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12, color: '#0066b3' }}>Policies & Legal</h1>
      <p style={{ color: '#64748b', marginBottom: 40, fontSize: 16 }}>Last updated: January 2026 — Australian Consumer Law applies</p>

      <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap', borderBottom: '2px solid #e2e8f0', paddingBottom: 12 }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 18px',
              background: activeTab === tab.id ? '#0066b3' : 'transparent',
              color: activeTab === tab.id ? 'white' : '#333',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: activeTab === tab.id ? 700 : 500,
              fontSize: 14,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) e.currentTarget.style.background = '#f0f4f8';
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) e.currentTarget.style.background = 'transparent';
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'privacy' && (
        <div style={sectionStyle}>
          <section>
            <h2 style={heading}>Privacy Policy</h2>
            <p style={body}>thebayislands.au ("we," "us," "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.</p>
          </section>

          <section>
            <h3 style={subheading}>Data We Collect</h3>
            <ul style={list}>
              <li><strong>Account:</strong> name, email, phone (optional), location (optional for directory filtering)</li>
              <li><strong>Listings:</strong> business content, images, contact info</li>
              <li><strong>Payments:</strong> via Stripe; card details never stored on our servers</li>
              <li><strong>Usage:</strong> IP/device, pages viewed, time on page, referrers</li>
              <li><strong>Comms:</strong> support messages, feedback</li>
            </ul>
          </section>

          <section>
            <h3 style={subheading}>How We Use Your Data</h3>
            <ul style={list}>
              <li>Provide and improve directory, classifieds, jobs, and events services</li>
              <li>Process billing, subscriptions, and renewals</li>
              <li>Send transactional emails and support communications</li>
              <li>Send promotional emails (only with consent; you can opt out)</li>
              <li>Prevent fraud and maintain security</li>
              <li>Comply with legal obligations</li>
              <li>Analyse usage to improve experience</li>
            </ul>
          </section>

          <section>
            <h3 style={subheading}>Data Security & Retention</h3>
            <p style={{ ...body, marginBottom: 8 }}>We use encryption in transit, least-privilege access controls, and audit logs. Payment data is handled exclusively by Stripe.</p>
            <ul style={list}>
              <li><strong>Account Data:</strong> Retained while your account is active; delete anytime</li>
              <li><strong>Transactions:</strong> Retained 7 years (tax/legal compliance)</li>
              <li><strong>Cookies:</strong> Typically expire after 12 months</li>
            </ul>
          </section>

          <section>
            <h3 style={subheading}>Your Rights (Australian Privacy Act)</h3>
            <ul style={list}>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct your information anytime</li>
              <li><strong>Deletion:</strong> Request deletion where applicable</li>
              <li><strong>Portability:</strong> Export your data in standard format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p style={{ ...body, marginTop: 12 }}>Submit requests to: <strong>privacy@thebayislands.au</strong></p>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Third-Party Services</h3>
            <ul style={{ paddingLeft: 20, color: '#475569', display: 'grid', gap: 8 }}>
              <li><strong>Supabase:</strong> Database and authentication</li>
              <li><strong>Stripe:</strong> Secure payment processing</li>
              <li><strong>Vercel:</strong> Website hosting</li>
              <li><strong>Analytics:</strong> Usage tracking and optimisation</li>
            </ul>
          </section>
        </div>
      )}

      {/* Refunds & Cancellation Tab */}
      {activeTab === 'refunds' && (
        <div style={{ display: 'grid', gap: 24 }}>
          <section>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0066b3' }}>Refunds & Cancellation Policy</h2>
            <p style={{ color: '#475569' }}>Our policy ensures transparency and fairness for all users. Australian Consumer Law applies to all transactions.</p>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Billing Cadences</h3>
            <p style={{ color: '#475569' }}>We offer subscriptions on three schedules with discounts for longer commitments:</p>
            <ul style={{ paddingLeft: 20, color: '#475569', display: 'grid', gap: 8 }}>
              <li><strong>Monthly:</strong> Full price, billed monthly</li>
              <li><strong>6-Month:</strong> Discounted rate, billed every 6 months</li>
              <li><strong>Annual:</strong> Best discount, billed yearly</li>
            </ul>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Cancellation & Access</h3>
            <ul style={{ paddingLeft: 20, color: '#475569', display: 'grid', gap: 8 }}>
              <li>Cancel anytime without penalty</li>
              <li>Access continues until the end of your current billing period</li>
              <li>No automatic refunds for unused time (except as required by Australian Consumer Law)</li>
              <li>Cancellation takes effect at next renewal date</li>
            </ul>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Cooling-Off Period</h3>
            <p style={{ color: '#475569' }}>For Annual and 6-Month plans, we offer goodwill refunds within 7 days if you have made no meaningful use of the service. Admin review required; contact <strong>billing@thebayislands.au</strong>.</p>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Downgrades & Failed Payments</h3>
            <ul style={{ paddingLeft: 20, color: '#475569', display: 'grid', gap: 8 }}>
              <li><strong>Downgrades:</strong> Take effect at the next billing period; features adjust accordingly</li>
              <li><strong>Failed Payments:</strong> 7-day grace period; automatic downgrade to free tier with notice if not resolved</li>
              <li><strong>Disputes:</strong> Contact billing@thebayislands.au before initiating chargebacks</li>
            </ul>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Questions?</h3>
            <p style={{ color: '#475569' }}>Contact: <strong>billing@thebayislands.au</strong></p>
          </section>
        </div>
      )}

      {/* Cookies Policy Tab */}
      {activeTab === 'cookies' && (
        <div style={{ display: 'grid', gap: 24 }}>
          <section>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0066b3' }}>Cookies Policy</h2>
            <p style={{ color: '#475569' }}>We use cookies to provide essential services and improve your experience.</p>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Cookie Types</h3>
            <ul style={{ paddingLeft: 20, color: '#475569', display: 'grid', gap: 8 }}>
              <li><strong>Essential:</strong> Required for authentication, security, and core functionality</li>
              <li><strong>Preference:</strong> Remember your settings (language, theme)</li>
              <li><strong>Analytics:</strong> Help us understand how you use the site (anonymised where possible)</li>
              <li><strong>Marketing:</strong> Track campaigns and engagement (requires consent)</li>
            </ul>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Your Control</h3>
            <ul style={{ paddingLeft: 20, color: '#475569', display: 'grid', gap: 8 }}>
              <li>Manage cookies in your browser settings anytime</li>
              <li>Withdraw consent for non-essential cookies anytime</li>
              <li>Essential cookies cannot be disabled (required for service functionality)</li>
            </ul>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Cookie Duration</h3>
            <p style={{ color: '#475569' }}>Most cookies expire after 12 months. Session cookies expire when you close your browser.</p>
          </section>
        </div>
      )}

      {/* Sustainability Tab */}
      {activeTab === 'environment' && (
        <div style={{ display: 'grid', gap: 24 }}>
          <section>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0066b3' }}>Environmental & Community Commitment</h2>
            <p style={{ color: '#475569' }}>thebayislands.au is committed to sustainable practices and supporting local communities.</p>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Sustainability</h3>
            <ul style={{ paddingLeft: 20, color: '#475569', display: 'grid', gap: 8 }}>
              <li><strong>Green Hosting:</strong> Prioritise providers with carbon reporting and offset programs</li>
              <li><strong>Efficiency:</strong> Use CDN caching, image optimisation, and lifecycle policies to reduce digital footprint</li>
              <li><strong>Data Reduction:</strong> Minimise unnecessary data collection and retention</li>
              <li><strong>Transparency:</strong> Annual summary of sustainability impact (when available)</li>
            </ul>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Community Standards</h3>
            <ul style={{ paddingLeft: 20, color: '#475569', display: 'grid', gap: 8 }}>
              <li>Support local businesses and island communities</li>
              <li>Enforce anti-harassment and anti-misinformation policies</li>
              <li>Promote ethical business practices on the platform</li>
              <li>Partner with local organisations like SMBI Local for community benefit</li>
            </ul>
          </section>

          <section>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Acknowledgement</h3>
            <p style={{ color: '#475569' }}>We acknowledge the Quandamooka people as the Traditional Custodians of the lands and waters of the Southern Moreton Bay Islands — including Canaipa/Kanopa (Russell Island) — and pay respect to Elders past and present.</p>
          </section>
        </div>
      )}

      {/* Footer Contact */}
      <div style={{ marginTop: 60, paddingTop: 40, borderTop: '1px solid #e2e8f0', color: '#64748b', fontSize: 14 }}>
        <p><strong>Questions or concerns?</strong></p>
        <p>
          Privacy: <Link href="mailto:privacy@thebayislands.au" style={{ color: '#0066b3', textDecoration: 'none' }}>privacy@thebayislands.au</Link>
        </p>
        <p>
          Billing: <Link href="mailto:billing@thebayislands.au" style={{ color: '#0066b3', textDecoration: 'none' }}>billing@thebayislands.au</Link>
        </p>
        <p>
          Support: <Link href="mailto:support@thebayislands.au" style={{ color: '#0066b3', textDecoration: 'none' }}>support@thebayislands.au</Link>
        </p>
      </div>
    </main>
  );
}
