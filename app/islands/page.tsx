'use client';

import Link from 'next/link';

export default function IslandsPage() {
  return (
    <main>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 20px)',
        marginBottom: 40
      }}>
        <h1 style={{ fontSize: 'clamp(2em, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0' }}>
          South Moreton Bay Islands Guide 🏝️
        </h1>
        <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', opacity: 0.95, margin: 0, maxWidth: 700 }}>
          Discover Russell, Macleay, Lamb, and Karragarra Islands — their unique character, amenities, attractions, and lifestyle.
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 5vw, 20px) clamp(40px, 8vw, 60px)' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.9em', color: '#64748b', marginBottom: 32, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#0066b3' }}>Home</Link>
          <span>/</span>
          <span>Islands</span>
        </div>

        {/* Island Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 60 }}>
          
          {/* Russell Island Card */}
          <Link href="/islands/russell" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: 'white',
              borderRadius: 16,
              padding: 'clamp(24px, 4vw, 32px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              border: '2px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              height: '100%'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
              el.style.borderColor = '#0066b3';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              el.style.borderColor = 'transparent';
            }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5em, 2.5vw, 24px)', fontWeight: 700, margin: '0 0 8px 0' }}>
                  🏝️ Russell Island
                </h2>
                <p style={{ fontSize: 'clamp(0.95em, 1.5vw, 14px)', color: '#0066b3', fontWeight: 600, margin: 0 }}>
                  The Hub — Shops, Schools & Community
                </p>
              </div>
              
              <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                The largest and most populated island with local shops, schools, medical centre, and thriving community clubs.
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: '0.85em' }}>
                <span style={{ background: '#e0f2fe', color: '#0066b3', padding: '4px 10px', borderRadius: 20 }}>Population 2,000+</span>
                <span style={{ background: '#e0f2fe', color: '#0066b3', padding: '4px 10px', borderRadius: 20 }}>Postcode 4184</span>
                <span style={{ background: '#e0f2fe', color: '#0066b3', padding: '4px 10px', borderRadius: 20 }}>Main Services</span>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
                <div style={{ color: '#0066b3', fontWeight: 600, fontSize: 'clamp(0.9em, 1.5vw, 14px)' }}>
                  Explore Russell Island →
                </div>
              </div>
            </div>
          </Link>

          {/* Macleay Island Card */}
          <Link href="/islands/macleay" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: 'white',
              borderRadius: 16,
              padding: 'clamp(24px, 4vw, 32px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              border: '2px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              height: '100%'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
              el.style.borderColor = '#c85a17';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              el.style.borderColor = 'transparent';
            }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5em, 2.5vw, 24px)', fontWeight: 700, margin: '0 0 8px 0' }}>
                  🌊 Macleay Island
                </h2>
                <p style={{ fontSize: 'clamp(0.95em, 1.5vw, 14px)', color: '#c85a17', fontWeight: 600, margin: 0 }}>
                  Upscale & Serene — Golf, Dining & Art
                </p>
              </div>
              
              <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                A sophisticated retreat featuring world-class golf, waterfront dining, art galleries, and beautiful residences.
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: '0.85em' }}>
                <span style={{ background: '#fed7aa', color: '#c85a17', padding: '4px 10px', borderRadius: 20 }}>Population 1,200+</span>
                <span style={{ background: '#fed7aa', color: '#c85a17', padding: '4px 10px', borderRadius: 20 }}>Golf Course</span>
                <span style={{ background: '#fed7aa', color: '#c85a17', padding: '4px 10px', borderRadius: 20 }}>Fine Dining</span>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
                <div style={{ color: '#c85a17', fontWeight: 600, fontSize: 'clamp(0.9em, 1.5vw, 14px)' }}>
                  Explore Macleay Island →
                </div>
              </div>
            </div>
          </Link>

          {/* Lamb Island Card */}
          <Link href="/islands/lamb" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: 'white',
              borderRadius: 16,
              padding: 'clamp(24px, 4vw, 32px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              border: '2px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              height: '100%'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
              el.style.borderColor = '#0f766e';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              el.style.borderColor = 'transparent';
            }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5em, 2.5vw, 24px)', fontWeight: 700, margin: '0 0 8px 0' }}>
                  🌴 Lamb Island
                </h2>
                <p style={{ fontSize: 'clamp(0.95em, 1.5vw, 14px)', color: '#0f766e', fontWeight: 600, margin: 0 }}>
                  Family-Friendly — Heritage & Nature
                </p>
              </div>
              
              <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                A family-friendly island with Pioneer Park heritage cottages, wetlands circuit, beaches, and tight-knit community.
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: '0.85em' }}>
                <span style={{ background: '#ccfbf1', color: '#0f766e', padding: '4px 10px', borderRadius: 20 }}>Population 450</span>
                <span style={{ background: '#ccfbf1', color: '#0f766e', padding: '4px 10px', borderRadius: 20 }}>Heritage Site</span>
                <span style={{ background: '#ccfbf1', color: '#0f766e', padding: '4px 10px', borderRadius: 20 }}>Walking Trails</span>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
                <div style={{ color: '#0f766e', fontWeight: 600, fontSize: 'clamp(0.9em, 1.5vw, 14px)' }}>
                  Explore Lamb Island →
                </div>
              </div>
            </div>
          </Link>

          {/* Karragarra Island Card */}
          <Link href="/islands/karragarra" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: 'white',
              borderRadius: 16,
              padding: 'clamp(24px, 4vw, 32px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              border: '2px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              height: '100%'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
              el.style.borderColor = '#7c3aed';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              el.style.borderColor = 'transparent';
            }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5em, 2.5vw, 24px)', fontWeight: 700, margin: '0 0 8px 0' }}>
                  🏖️ Karragarra Island
                </h2>
                <p style={{ fontSize: 'clamp(0.95em, 1.5vw, 14px)', color: '#7c3aed', fontWeight: 600, margin: 0 }}>
                  Ultimate Seclusion — Peace & Pristine Nature
                </p>
              </div>
            
            <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              The smallest inhabited island with pristine beaches, swimming enclosure, and tight-knit 200-person community. Ultimate seclusion.
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: '0.85em' }}>
              <span style={{ background: '#f3e8ff', color: '#7c3aed', padding: '4px 10px', borderRadius: 20 }}>Population 200</span>
              <span style={{ background: '#f3e8ff', color: '#7c3aed', padding: '4px 10px', borderRadius: 20 }}>Most Secluded</span>
              <span style={{ background: '#f3e8ff', color: '#7c3aed', padding: '4px 10px', borderRadius: 20 }}>Pristine Beach</span>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
              <div style={{ color: '#7c3aed', fontWeight: 600, fontSize: 'clamp(0.9em, 1.5vw, 14px)' }}>
                Explore Karragarra Island →
              </div>
            </div>
          </Link>
        </div>

        {/* Comparison Section */}
        <div style={{ background: '#f1f5f9', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, marginBottom: 60 }}>
          <h2 style={{ marginTop: 0, marginBottom: 32 }}>Island Comparison at a Glance</h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 'clamp(0.85em, 1.3vw, 14px)',
              minWidth: 500
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #0066b3' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: '#0066b3' }}>Island</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: '#0066b3' }}>Population</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: '#0066b3' }}>Ferry Time</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: '#0066b3' }}>Key Feature</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Russell Island</td>
                  <td style={{ padding: '12px 16px' }}>2,000+</td>
                  <td style={{ padding: '12px 16px' }}>40-50 mins</td>
                  <td style={{ padding: '12px 16px' }}>Main services hub, schools, clubs</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Macleay Island</td>
                  <td style={{ padding: '12px 16px' }}>1,200+</td>
                  <td style={{ padding: '12px 16px' }}>50-60 mins</td>
                  <td style={{ padding: '12px 16px' }}>Golf course, fine dining, arts</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Lamb Island</td>
                  <td style={{ padding: '12px 16px' }}>500+</td>
                  <td style={{ padding: '12px 16px' }}>55-65 mins</td>
                  <td style={{ padding: '12px 16px' }}>Quiet, scenic, nature focused</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Karragarra Island</td>
                  <td style={{ padding: '12px 16px' }}>250+</td>
                  <td style={{ padding: '12px 16px' }}>60+ mins</td>
                  <td style={{ padding: '12px 16px' }}>Day trips, beaches, picnics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Info Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 60 }}>
          <div style={{ background: '#f1f5f9', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 12, borderLeft: '4px solid #0066b3' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>🚢 Ferry Information</h3>
            <p style={{ margin: 0, fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#475569', lineHeight: 1.6 }}>
              All islands are accessible by ferry from Redland Bay Marina. Multiple operators provide daily services with bookings available online.
            </p>
            <Link href="/articles/transport-on-the-islands" style={{ color: '#0066b3', fontWeight: 600, fontSize: '0.9em', marginTop: 12, display: 'block' }}>
              Learn more about transport →
            </Link>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 12, borderLeft: '4px solid #c85a17' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>🏡 Housing & Living</h3>
            <p style={{ margin: 0, fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#475569', lineHeight: 1.6 }}>
              Each island has a unique housing market from modest homes to luxury waterfront properties. Browse available listings.
            </p>
            <Link href="/classifieds" style={{ color: '#c85a17', fontWeight: 600, fontSize: '0.9em', marginTop: 12, display: 'block' }}>
              View properties for sale & rent →
            </Link>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(24px, 4vw, 32px)', borderRadius: 12, borderLeft: '4px solid #2e7d32' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>🎯 Community & Events</h3>
            <p style={{ margin: 0, fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#475569', lineHeight: 1.6 }}>
              Active communities with weekly markets, seasonal festivals, clubs, and cultural events year-round.
            </p>
            <Link href="/articles/island-events-calendar" style={{ color: '#2e7d32', fontWeight: 600, fontSize: '0.9em', marginTop: 12, display: 'block' }}>
              Check island events calendar →
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div style={{ background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)', color: 'white', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, marginBottom: 40, textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 16px 0' }}>Planning Your Island Visit or Move?</h2>
          <p style={{ margin: '0 0 24px 0', opacity: 0.95 }}>Explore jobs, events, local directory, and comprehensive guides</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/directory" style={{ background: 'white', color: '#0066b3', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 'clamp(0.9em, 1.5vw, 14px)' }}>
              Business Directory
            </Link>
            <Link href="/jobs" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, border: '2px solid white', fontSize: 'clamp(0.9em, 1.5vw, 14px)' }}>
              Job Listings
            </Link>
            <Link href="/events" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, border: '2px solid white', fontSize: 'clamp(0.9em, 1.5vw, 14px)' }}>
              Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
