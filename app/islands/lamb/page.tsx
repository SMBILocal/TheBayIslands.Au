'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LambIslandPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'living' | 'attractions' | 'directory'>('overview');

  return (
    <main>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 20px)',
        marginBottom: 40
      }}>
        <h1 style={{ fontSize: 'clamp(2em, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0' }}>
          Lamb Island 🏝️
        </h1>
        <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', opacity: 0.95, margin: '0 0 24px 0', maxWidth: 600 }}>
          A quiet, family-friendly island community with rich pioneer heritage, peaceful beaches, strong community spirit, and close-knit neighbors.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            👨‍👩‍👧‍👦 Population: 450
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            🚢 55-65 min ferry from Redland Bay
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            📍 48km from Brisbane CBD
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 5vw, 20px) clamp(40px, 8vw, 60px)' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.9em', color: '#64748b', marginBottom: 32, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#0f766e' }}>Home</Link>
          <span>/</span>
          <Link href="/islands" style={{ color: '#0f766e' }}>Islands</Link>
          <span>/</span>
          <span>Lamb Island</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 16px)', marginBottom: 32, flexWrap: 'wrap', borderBottom: '2px solid #e2e8f0' }}>
          {(['overview', 'living', 'attractions', 'directory'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 20px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '3px solid #0f766e' : 'none',
                color: activeTab === tab ? '#0f766e' : '#64748b',
                fontWeight: activeTab === tab ? 600 : 400,
                cursor: 'pointer',
                fontSize: 'clamp(0.9em, 1.5vw, 15px)',
                transition: 'all 0.3s'
              }}
            >
              {tab === 'overview' && 'Overview'}
              {tab === 'living' && 'Living Here'}
              {tab === 'attractions' && 'Things To Do'}
              {tab === 'directory' && 'Directory'}
            </button>
          ))}
        </div>

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <div style={{ marginBottom: 60 }}>
            <h2>Welcome to Lamb Island</h2>
            <p>Lamb Island (postcode 4184) is a peaceful, family-friendly island community with rich pioneer heritage, beautiful beaches, and authentic island charm. Home to 450 residents who value community spirit and a slower pace of life, Lamb Island is perfect for families, retirees, and anyone seeking a quieter island lifestyle.</p>
            <h3>Quick Facts</h3>
            <ul style={{ columns: 2, gap: '2em' }}>
              <li>Population: 450</li>
              <li>Postcode: 4184</li>
              <li>Ferry Time: 55-65 mins from Redland Bay</li>
              <li>Distance: 48km from Brisbane CBD</li>
              <li>Community Focus: Family-friendly, heritage-rich</li>
              <li>Schools: Accessible via Russell Island (10 min ferry)</li>
              <li>Heritage: Pioneer settlement history & preserved landmarks</li>
              <li>Main Attractions: Pioneer Park, beaches, wetlands, markets</li>
            </ul>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginTop: 32, marginBottom: 60 }}>
              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🚢 Getting To Lamb Island</h3>
                <p>Lamb Island is accessed exclusively by ferry from Redland Bay Marina. Regular ferry services operate daily:</p>
                <ul>
                  <li><strong>Stradbroke Ferries</strong> – high-speed and conventional services</li>
                  <li><strong>TransLink SeaLink</strong> – integrated bus/ferry options</li>
                  <li>Ferry frequency: 3-4 daily services (tide & weather dependent)</li>
                  <li>Return cost: ~$35-45 per adult</li>
                  <li><strong>Book ahead:</strong> <a href="https://translink.com.au" target="_blank" rel="noopener" style={{ color: '#0f766e' }}>TransLink SeaLink</a></li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🏛️ Pioneer Heritage & History</h3>
                <p><strong>Lamb Island has rich pioneer heritage</strong> dating back to the 1850s:</p>
                <ul>
                  <li>Preserved heritage buildings and historic landmarks</li>
                  <li><strong>Pioneer Park</strong> – Community museum & heritage displays</li>
                  <li>Original settler stories and island history exhibits</li>
                  <li>Annual heritage festivals & community celebrations</li>
                  <li>Walking tours of historic sites</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🛍️ Shopping & Services</h3>
                <p><strong>Lamb Island has essential services</strong> near the town centre:</p>
                <ul>
                  <li><strong>Lamb Island General Store</strong> – Groceries, supplies, local goods</li>
                  <li><strong>Lamb Island Post Office</strong> – Mail, parcels, banking services</li>
                  <li><strong>Lamb Island Pharmacy</strong> – Prescriptions & health products</li>
                  <li><strong>Local Bakery & Café</strong> – Fresh bread, pastries, coffee</li>
                  <li>Hardware store & home maintenance services</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🏥 Healthcare & Medical Services</h3>
                <p>Lamb Island has local medical support with mainland hospital access:</p>
                <ul>
                  <li><strong>Lamb Island Medical Centre</strong> – Local GP services</li>
                  <li><strong>Lamb Island Pharmacy</strong> – Prescription dispensing</li>
                  <li><strong>Redland Hospital</strong> (mainland, 60 mins) – Major medical care</li>
                  <li>Telehealth services available for after-hours consultations</li>
                  <li>Queensland Ambulance emergency services</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>👥 Community & Lifestyle</h3>
                <ul>
                  <li><strong>Strong community spirit</strong> with regular gatherings & events</li>
                  <li>Community hall for events, workshops, and markets</li>
                  <li>Active clubs: Tennis, bowls, fishing, gardening</li>
                  <li>Monthly island markets featuring local produce & crafts</li>
                  <li>Peaceful, friendly neighborhood atmosphere</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>⚡ Utilities & Infrastructure</h3>
                <ul>
                  <li><strong>Electricity:</strong> Island power grid (reliable)</li>
                  <li><strong>Water:</strong> Island supply with tank systems</li>
                  <li><strong>Internet:</strong> NBN available; private providers also service island</li>
                  <li><strong>Waste:</strong> Council collection & recycling programs</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Living Tab */}
        {activeTab === 'living' && (
          <div style={{ marginBottom: 60 }}>
            <h2>Living on Lamb Island</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🏡 Housing & Accommodation</h3>
                <ul>
                  <li>Mix of family homes, cottages, and peaceful residences</li>
                  <li>Purchase price: $280k–$450k (affordable island option)</li>
                  <li>Rental range: $350–600/week</li>
                  <li><Link href="/classifieds" style={{ color: '#0f766e' }}>Browse rentals & sales</Link></li>
                  <li>Lower cost than Russell or Macleay</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>📚 Education</h3>
                <ul>
                  <li><strong>Primary:</strong> Russell Island State School (10-min ferry)</li>
                  <li><strong>Secondary:</strong> Ferry + bus to mainland schools (50 mins)</li>
                  <li>Kindergarten & preschool programs available</li>
                  <li>Community learning & adult education programs</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>💰 Cost of Living</h3>
                <p>Lamb Island has affordable living costs:</p>
                <ul>
                  <li>Most affordable of the four major islands</li>
                  <li>Groceries: ~5% higher than mainland (transport)</li>
                  <li>Services: Competitive pricing at local shops</li>
                  <li>Council rates: Consistent with Redland City Council</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🚗 Transport & Ferry Access</h3>
                <ul>
                  <li><strong>Ferry + Bus:</strong> Integrated TransLink services to mainland</li>
                  <li><strong>Redland Bay Marina:</strong> Car park, ride-share, shuttle pickup</li>
                  <li><strong>On-island:</strong> Taxi & courtesy services available</li>
                  <li><strong>Vehicle Barge:</strong> Car transport via SeaLink</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>👥 Recreation & Community</h3>
                <ul>
                  <li>Close-knit, friendly community</li>
                  <li>Active clubs: Tennis, bowls, fishing</li>
                  <li>Monthly markets & community events</li>
                  <li>Beach access & outdoor recreation</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Attractions Tab */}
        {activeTab === 'attractions' && (
          <div style={{ marginBottom: 60 }}>
            <h2>Things To Do on Lamb Island</h2>
            <p>Lamb Island offers peaceful activities perfect for families, nature lovers, and those seeking a slower pace of life.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 32 }}>
              {[
                { icon: '🏛️', title: 'Pioneer Park & Heritage Site', desc: 'Explore island history through preserved buildings, exhibits, and heritage displays.' },
                { icon: '🏖️', title: 'Beautiful Island Beaches', desc: 'Sandy beaches with safe swimming areas, picnic facilities, and peaceful ocean views.' },
                { icon: '🌿', title: 'Wetlands Circuit Walk', desc: 'Nature reserve walkway through native wetlands with birdwatching & wildlife spotting.' },
                { icon: '🎣', title: 'Fishing & Boating', desc: 'Multiple boat ramps for tinny fishing, kayaking, and recreational boating.' },
                { icon: '🦅', title: 'Wildlife & Nature', desc: 'Native birdwatching, wallabies, echidnas, and natural wildlife viewing.' },
                { icon: '🎉', title: 'Community Markets', desc: 'Monthly island markets with local produce, crafts, and goods.' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                  <h3 style={{ fontSize: 'clamp(1.1em, 1.8vw, 18px)', margin: '0 0 12px 0' }}>{item.icon} {item.title}</h3>
                  <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Directory Tab */}
        {activeTab === 'directory' && (
          <div style={{ marginBottom: 60 }}>
            <h2>Lamb Island Community Directory</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
              <div>
                <h3>🛍️ Retail & Shopping</h3>
                <ul>
                  <li><strong>Lamb Island General Store</strong> – Groceries & supplies</li>
                  <li><strong>Lamb Island Bakery & Café</strong> – Fresh bread, pastries</li>
                  <li><strong>Lamb Island Pharmacy</strong> – Prescriptions & health</li>
                  <li><strong>Lamb Island Post Office</strong> – Mail & parcels</li>
                </ul>
              </div>

              <div>
                <h3>🏥 Health & Services</h3>
                <ul>
                  <li><strong>Lamb Island Medical Centre</strong> – GP services</li>
                  <li><strong>Lamb Island Pharmacy</strong> – Prescriptions</li>
                  <li><strong>Dentist</strong> – Local services</li>
                  <li><strong>Emergency:</strong> Call 000</li>
                </ul>
              </div>

              <div>
                <h3>👥 Community</h3>
                <ul>
                  <li><strong>Community Hall</strong> – Events & meetings</li>
                  <li><strong>Bowls Club</strong> – Social activities</li>
                  <li><strong>Island Markets</strong> – Monthly events</li>
                  <li><Link href="/directory?location=lamb" style={{ color: '#0f766e' }}>Browse full directory →</Link></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Related Islands */}
        <div style={{ background: '#f1f5f9', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, marginBottom: 40 }}>
          <h3 style={{ marginTop: 0, marginBottom: 20 }}>Explore Other Islands</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
            <Link href="/islands/russell" style={{ color: '#0f766e', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center' }}>
              🏝️ Russell Island
            </Link>
            <Link href="/islands/macleay" style={{ color: '#0f766e', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center' }}>
              🏝️ Macleay Island
            </Link>
            <Link href="/islands/karragarra" style={{ color: '#0f766e', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center' }}>
              🏝️ Karragarra Island
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', color: 'white', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 12px 0' }}>Considering Lamb Island?</h3>
          <p style={{ margin: '0 0 20px 0', opacity: 0.9 }}>Affordable island living with community spirit and heritage charm</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/classifieds" style={{ background: 'white', color: '#0f766e', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
              View Rentals & Sales
            </Link>
            <Link href="/jobs" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, border: '2px solid white' }}>
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
