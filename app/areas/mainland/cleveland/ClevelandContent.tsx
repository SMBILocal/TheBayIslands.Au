"use client";

import { useState } from 'react';
import Link from 'next/link';

type TabKey = 'overview' | 'services' | 'transport' | 'lifestyle';

const mainlandLinks = [
  { href: '/areas/mainland/cleveland', label: '🏛️ Cleveland', desc: 'Council, hospital, markets' },
  { href: '/areas/mainland/redland-bay', label: '🚢 Redland Bay', desc: 'Ferry & marina hub' },
  { href: '/areas/mainland/victoria-point', label: '🛒 Victoria Point', desc: 'Shopping & dining' },
  { href: '/areas/mainland/capalaba', label: '🛍️ Capalaba', desc: 'Retail powerhouse' },
];

const featured = [
  { title: 'Redland Hospital', desc: 'Emergency and specialist services', href: '/directory?category=health&location=cleveland', bg: '#eff6ff' },
  { title: 'Cleveland Markets', desc: 'Sunday fresh food & crafts', href: '/events?location=cleveland', bg: '#ecfdf3' },
  { title: 'Raby Bay Foreshore', desc: 'Beaches, playgrounds, cafes', href: '/articles/tourism-attractions', bg: '#fff7ed' },
  { title: 'Council Services', desc: 'Redland City Council offices & permits', href: '/articles/community-infrastructure', bg: '#fefce8' },
];

export default function ClevelandContent() {
  const [active, setActive] = useState<TabKey>('overview');

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', color: 'white', padding: 'clamp(30px, 7vw, 56px) clamp(16px, 5vw, 20px)', marginBottom: 32 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, margin: '0 0 12px 0' }}>Cleveland 🏛️</h1>
          <p style={{ fontSize: 'clamp(16px, 2.6vw, 19px)', opacity: 0.95, maxWidth: 720, lineHeight: 1.65 }}>
            Administrative and health hub for the Redlands — council chambers, Redland Hospital, Raby Bay dining, and train links to Brisbane.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
            {['Redland City Council HQ', 'Redland Hospital', 'Cleveland Train Station'].map((pill) => (
              <span key={pill} style={{ background: 'rgba(255,255,255,0.18)', padding: '8px 14px', borderRadius: 999, fontWeight: 600 }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 5vw, 20px) clamp(56px, 8vw, 72px)' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 6, color: '#64748b', fontSize: 14, marginBottom: 24, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#0284c7' }}>Home</Link>
          <span>/</span>
          <Link href="/areas/mainland/cleveland" style={{ color: '#0284c7' }}>Mainland</Link>
          <span>/</span>
          <span>Cleveland</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 14px)', borderBottom: '2px solid #e2e8f0', marginBottom: 28, flexWrap: 'wrap' }}>
          {[
            { key: 'overview', label: 'Overview' },
            { key: 'services', label: 'Services & Shopping' },
            { key: 'transport', label: 'Transport' },
            { key: 'lifestyle', label: 'Lifestyle' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key as TabKey)}
              style={{
                padding: '12px 16px',
                background: 'none',
                border: 'none',
                borderBottom: active === tab.key ? '3px solid #0284c7' : 'none',
                color: active === tab.key ? '#0284c7' : '#64748b',
                fontWeight: active === tab.key ? 700 : 500,
                fontSize: 15,
                cursor: 'pointer'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        <div style={{ display: active === 'overview' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', marginBottom: 12 }}>Heart of the Redlands</h2>
          <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: 24 }}>
            Cleveland is the civic, health, and transport core. Islanders head here for council services, hospital care, rail to Brisbane, and Raby Bay dining.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { icon: '🏥', title: 'Health hub', desc: 'Redland Hospital, specialist clinics, imaging' },
              { icon: '🏛️', title: 'Council & courts', desc: 'Redland City Council, planning & permits' },
              { icon: '🚉', title: 'Rail to Brisbane', desc: 'Cleveland line terminus, park-and-ride' },
              { icon: '🍽️', title: 'Raby Bay dining', desc: 'Restaurants, cafes, marina boardwalk' },
              { icon: '🎓', title: 'Education', desc: 'TAFE campus, schools, training providers' },
              { icon: '🛥️', title: 'Marina access', desc: 'Raby Bay Harbour for boating' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 26 }}>{item.icon}</div>
                <h3 style={{ margin: '10px 0 6px', fontSize: 17 }}>{item.title}</h3>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div style={{ display: active === 'services' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Shopping & essential services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#fff7ed', padding: 18, borderRadius: 12, border: '1px solid #fed7aa' }}>
              <h3 style={{ marginTop: 0 }}>Retail & errands</h3>
              <ul style={{ color: '#9a3412', lineHeight: 1.7 }}>
                <li>Coles, Woolworths, specialty grocers</li>
                <li>Hardware & auto: Bunnings, Supercheap Auto</li>
                <li>Homewares, electronics, pet supplies</li>
              </ul>
            </div>
            <div style={{ background: '#ecfeff', padding: 18, borderRadius: 12, border: '1px solid #cffafe' }}>
              <h3 style={{ marginTop: 0 }}>Health & wellbeing</h3>
              <ul style={{ color: '#0e7490', lineHeight: 1.7 }}>
                <li>Hospital + private clinics, dental, physio</li>
                <li>Allied health, imaging, pathology</li>
                <li>Pharmacies and after-hours care</li>
              </ul>
            </div>
            <div style={{ background: '#f1f5f9', padding: 18, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginTop: 0 }}>Council & admin</h3>
              <ul style={{ color: '#334155', lineHeight: 1.7 }}>
                <li>Rates, permits, planning & building</li>
                <li>Libraries, customer service centre</li>
                <li>Court and legal services nearby</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transport */}
        <div style={{ display: active === 'transport' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Transport connections</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#eff6ff', padding: 18, borderRadius: 12, border: '1px solid #dbeafe' }}>
              <h3 style={{ marginTop: 0 }}>Rail & bus</h3>
              <ul style={{ color: '#1e3a8a', lineHeight: 1.7 }}>
                <li>Train to Brisbane CBD (~55 mins)</li>
                <li>Bus routes to Redland Bay, Victoria Point</li>
                <li>Park-and-ride at Cleveland station</li>
              </ul>
            </div>
            <div style={{ background: '#e0f2fe', padding: 18, borderRadius: 12, border: '1px solid #bae6fd' }}>
              <h3 style={{ marginTop: 0 }}>Road links</h3>
              <ul style={{ color: '#0ea5e9', lineHeight: 1.7 }}>
                <li>Finucane Rd → Gateway/M1</li>
                <li>30–40 mins to Brisbane (off-peak)</li>
                <li>Fares for parking vary; arrive early</li>
              </ul>
            </div>
            <div style={{ background: '#ecfdf3', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <h3 style={{ marginTop: 0 }}>Island connections</h3>
              <ul style={{ color: '#166534', lineHeight: 1.7 }}>
                <li>Bus to Redland Bay ferry terminal</li>
                <li>Taxi/rideshare for late-night ferries</li>
                <li>See <Link href="/articles/transport-on-islands" style={{ color: '#166534', textDecoration: 'underline' }}>Transport Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lifestyle */}
        <div style={{ display: active === 'lifestyle' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Lifestyle & recreation</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#fef3c7', padding: 18, borderRadius: 12, border: '1px solid #fde68a' }}>
              <h3 style={{ marginTop: 0 }}>Raby Bay</h3>
              <ul style={{ color: '#854d0e', lineHeight: 1.7 }}>
                <li>Harbourside restaurants & bars</li>
                <li>Foreshore beaches & playgrounds</li>
                <li>Sunset boardwalk walks</li>
              </ul>
            </div>
            <div style={{ background: '#f8fafc', padding: 18, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginTop: 0 }}>Parks & markets</h3>
              <ul style={{ color: '#0f172a', lineHeight: 1.7 }}>
                <li>Bloomfield Street Markets (Sundays)</li>
                <li>Beachside parklands & dog-friendly areas</li>
                <li>Art galleries and cultural centre</li>
              </ul>
            </div>
            <div style={{ background: '#ecfeff', padding: 18, borderRadius: 12, border: '1px solid #cffafe' }}>
              <h3 style={{ marginTop: 0 }}>Education</h3>
              <ul style={{ color: '#0e7490', lineHeight: 1.7 }}>
                <li>TAFE Queensland Cleveland campus</li>
                <li>Public & private schools nearby</li>
                <li>Community training & workshops</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Businesses */}
        <div style={{ marginBottom: 44, marginTop: 44 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Featured Local Services</h3>
            <Link href="/upgrade" style={{ color: '#0284c7', fontWeight: 700, textDecoration: 'none' }}>Feature your business →</Link>
          </div>
          {/* Top featured - full width */}
          <div style={{ marginBottom: 14, background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: 24, borderRadius: 12, border: '2px solid #0ea5e9', display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 auto' }}>
              <div style={{ width: 80, height: 80, background: '#0ea5e9', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>⛴️</div>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 700, color: '#0c4a6e' }}>Sealink Ferry Service</h4>
              <p style={{ margin: '0 0 12px', color: '#475569', lineHeight: 1.6 }}>Daily passenger & vehicle ferry service to Southern Moreton Bay Islands. Check timetables and book online.</p>
              <Link href="/directory/sealink-ferry" style={{ display: 'inline-block', background: '#0ea5e9', color: 'white', padding: '8px 16px', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>View Details →</Link>
            </div>
          </div>
          {/* Grid of 4 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            <div style={{ background: '#fef3c7', padding: 18, borderRadius: 12, border: '1px solid #fde68a' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏥</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Redland Hospital</h4>
              <p style={{ margin: '0 0 10px', color: '#713f12', fontSize: 14, lineHeight: 1.5 }}>24/7 emergency & healthcare hub</p>
              <Link href="/directory/redland-hospital" style={{ color: '#854d0e', fontWeight: 700, fontSize: 14 }}>View →</Link>
            </div>
            <div style={{ background: '#fee2e2', padding: 18, borderRadius: 12, border: '1px solid #fecaca' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🚨</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Emergency Services</h4>
              <p style={{ margin: '0 0 10px', color: '#991b1b', fontSize: 14, lineHeight: 1.5 }}>Dial 000 for Police, Fire, Ambulance</p>
              <Link href="/articles/community-infrastructure" style={{ color: '#b91c1c', fontWeight: 700, fontSize: 14 }}>Learn More →</Link>
            </div>
            <div style={{ background: '#e0e7ff', padding: 18, borderRadius: 12, border: '1px solid #c7d2fe' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏛️</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Redland City Council</h4>
              <p style={{ margin: '0 0 10px', color: '#3730a3', fontSize: 14, lineHeight: 1.5 }}>City services & admin hub</p>
              <Link href="/directory?location=cleveland" style={{ color: '#4f46e5', fontWeight: 700, fontSize: 14 }}>Visit →</Link>
            </div>
            <div style={{ background: '#dcfce7', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏬</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Cleveland Mall</h4>
              <p style={{ margin: '0 0 10px', color: '#166534', fontSize: 14, lineHeight: 1.5 }}>Shopping, dining & services</p>
              <Link href="/directory?location=cleveland" style={{ color: '#15803d', fontWeight: 700, fontSize: 14 }}>Browse →</Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #075985 0%, #0ea5e9 100%)', padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 5vw, 2rem)', borderRadius: '0.5rem', textAlign: 'center', color: 'white', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Civic Heart of the Redlands
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
            Connect with council services, healthcare, events, and community resources. Your hub for administrative and lifestyle needs.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              href="/events?location=cleveland" 
              style={{ 
                background: 'rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '0.5rem', 
                fontWeight: 600, 
                textDecoration: 'none',
                display: 'inline-block',
                border: '2px solid white'
              }}
            >
              View Events
            </Link>
            <Link 
              href="/classifieds?location=cleveland" 
              style={{ 
                background: 'rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '0.5rem', 
                fontWeight: 600, 
                textDecoration: 'none',
                display: 'inline-block',
                border: '2px solid white'
              }}
            >
              View Classifieds
            </Link>
            <Link 
              href="/directory?location=cleveland" 
              style={{ 
                background: 'white', 
                color: '#075985', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '0.5rem', 
                fontWeight: 600, 
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Browse Local Directory
            </Link>
          </div>
        </section>

        {/* Explore More Mainland Suburbs */}
        <div style={{ background: '#f1f5f9', padding: 'clamp(28px, 7vw, 40px)', borderRadius: 14, marginBottom: 44 }}>
          <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: 20, fontWeight: 700 }}>Explore more mainland suburbs</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
            {mainlandLinks.map((item) => (
              <Link key={item.href} href={item.href} style={{ background: 'white', border: '1px solid #e2e8f0', padding: 14, borderRadius: 10, display: 'block', color: '#0f172a', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}>
                <div>{item.label}</div>
                <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Related */}
        <div style={{ padding: 20, background: '#f8fafc', borderRadius: 12, borderLeft: '4px solid #0284c7' }}>
          <h3 style={{ marginTop: 0, marginBottom: 12 }}>Related resources</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#475569', lineHeight: 1.7 }}>
            <li><Link href="/articles/community-infrastructure" style={{ color: '#0284c7' }}>Community Infrastructure Guide</Link></li>
            <li><Link href="/directory?location=cleveland" style={{ color: '#0284c7' }}>Cleveland Directory</Link></li>
            <li><Link href="/events?location=cleveland" style={{ color: '#0284c7' }}>Cleveland Events</Link></li>
            <li><Link href="/articles/tourism-attractions" style={{ color: '#0284c7' }}>Raby Bay Attractions</Link></li>
            <li><Link href="/islands" style={{ color: '#0284c7' }}>Bay Islands Overview</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
