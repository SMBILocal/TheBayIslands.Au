"use client";

import { useState } from 'react';
import Link from 'next/link';

type TabKey = 'overview' | 'shopping' | 'services' | 'living';

const mainlandLinks = [
  { href: '/areas/mainland/redland-bay', label: '🚢 Redland Bay', desc: 'Ferry terminal gateway' },
  { href: '/areas/mainland/victoria-point', label: '🛒 Victoria Point', desc: 'Shopping & dining' },
  { href: '/areas/mainland/cleveland', label: '🏛️ Cleveland', desc: 'Council & hospital' },
  { href: '/areas/mainland/capalaba', label: '🛍️ Capalaba', desc: 'Retail powerhouse' },
];

const featuredBusinesses = [
  { title: 'Harbour Home Mega Mart', blurb: 'Furniture + homewares | Pickup & delivery', cta: '/directory?category=homewares&location=capalaba', color: '#fef3c7' },
  { title: 'Capalaba Central Cinema', blurb: 'Blockbusters + family deals', cta: '/events', color: '#e0f2fe' },
  { title: 'Bay Islands Shuttle', blurb: 'Express shuttle to ferry + malls', cta: '/directory?category=transport&location=redland-bay', color: '#ecfdf3' },
  { title: 'Tradie Trade Hub', blurb: 'Power tools, paint, timber', cta: '/classifieds', color: '#f3e8ff' },
];

export default function CapalabaContent() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)', color: 'white', padding: 'clamp(30px, 7vw, 56px) clamp(16px, 5vw, 20px)', marginBottom: 32 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, margin: '0 0 12px 0' }}>Capalaba 🛍️</h1>
          <p style={{ fontSize: 'clamp(16px, 2.6vw, 19px)', opacity: 0.95, maxWidth: 720, lineHeight: 1.65 }}>
            Redlands' biggest retail and entertainment hub with Capalaba Central, Capalaba Park, cinemas, and trade supplies — the mainland stop for Bay Islands residents.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
            {['Largest shopping hub', '22km from Brisbane', 'Population 22,000'].map((pill) => (
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
          <Link href="/" style={{ color: '#b45309' }}>Home</Link>
          <span>/</span>
          <Link href="/areas/mainland/redland-bay" style={{ color: '#b45309' }}>Mainland</Link>
          <span>/</span>
          <span>Capalaba</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 14px)', borderBottom: '2px solid #e2e8f0', marginBottom: 28, flexWrap: 'wrap' }}>
          {[
            { key: 'overview', label: 'Overview' },
            { key: 'shopping', label: 'Shopping & Entertainment' },
            { key: 'services', label: 'Services & Health' },
            { key: 'living', label: 'Living & Access' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabKey)}
              style={{
                padding: '12px 16px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.key ? '3px solid #b45309' : 'none',
                color: activeTab === tab.key ? '#b45309' : '#64748b',
                fontWeight: activeTab === tab.key ? 700 : 500,
                fontSize: 15,
                cursor: 'pointer'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        <div style={{ display: activeTab === 'overview' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', marginBottom: 12 }}>Why Capalaba matters</h2>
          <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: 24 }}>
            Capalaba is the one-stop mainland run for Bay Islands residents: two major malls, cinemas, trade supplies, and easy M1 access for Brisbane commuters.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { icon: '🏬', title: 'Capalaba Central', desc: 'Woolworths, Coles, ALDI, 100+ specialty stores' },
              { icon: '🛒', title: 'Capalaba Park', desc: 'Kmart, Target, Big W, Spotlight, Anaconda, BCF' },
              { icon: '🎬', title: 'Entertainment', desc: 'Event Cinemas, bowling, arcades, family dining' },
              { icon: '🔧', title: 'Trade & DIY', desc: 'Bunnings + auto + homemaker precincts' },
              { icon: '🚍', title: 'Transport hub', desc: 'TransLink bus interchange to Brisbane & Redlands' },
              { icon: '🅿️', title: 'Parking', desc: 'Abundant free parking at both centres' },
            ].map((feature) => (
              <div key={feature.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 26 }}>{feature.icon}</div>
                <h3 style={{ margin: '10px 0 6px', fontSize: 17 }}>{feature.title}</h3>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping & Entertainment */}
        <div style={{ display: activeTab === 'shopping' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Shopping & entertainment</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#fef3c7', padding: 18, borderRadius: 12, border: '1px solid #fde68a' }}>
              <h3 style={{ marginTop: 0 }}>Capalaba Central</h3>
              <ul style={{ color: '#713f12', lineHeight: 1.7 }}>
                <li>Woolworths, Coles, ALDI</li>
                <li>JB Hi-Fi, Harvey Norman, Officeworks</li>
                <li>Food court with 20+ cafes & restaurants</li>
                <li>Event Cinemas + bowling & arcades</li>
              </ul>
            </div>
            <div style={{ background: '#fff7ed', padding: 18, borderRadius: 12, border: '1px solid #fed7aa' }}>
              <h3 style={{ marginTop: 0 }}>Capalaba Park & homemaker</h3>
              <ul style={{ color: '#9a3412', lineHeight: 1.7 }}>
                <li>Kmart, Target, Big W</li>
                <li>Spotlight, Anaconda, BCF, Fantastic Furniture</li>
                <li>Automotive: Supercheap, Repco, Autobarn</li>
                <li>Gyms: Anytime, Jetts, F45</li>
              </ul>
            </div>
            <div style={{ background: '#f1f5f9', padding: 18, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginTop: 0 }}>Dining picks</h3>
              <ul style={{ color: '#334155', lineHeight: 1.7 }}>
                <li>Asian fusion, Italian, Mexican, pubs</li>
                <li>Fast food: McDonald's, Hungry Jack's, KFC, Subway, Guzman y Gomez</li>
                <li>Cafes & brunch spots throughout both centres</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services & Health */}
        <div style={{ display: activeTab === 'services' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Services, health & education</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#ecfdf3', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <h3 style={{ marginTop: 0 }}>Medical & health</h3>
              <ul style={{ color: '#14532d', lineHeight: 1.7 }}>
                <li>GP clinics (bulk billing options)</li>
                <li>Dentists, skin clinics, pathology</li>
                <li>Allied health: physio, chiro, podiatry, psychology</li>
                <li>Pharmacies: Chemist Warehouse, Priceline, Terry White</li>
              </ul>
            </div>
            <div style={{ background: '#eff6ff', padding: 18, borderRadius: 12, border: '1px solid #dbeafe' }}>
              <h3 style={{ marginTop: 0 }}>Education</h3>
              <ul style={{ color: '#1e3a8a', lineHeight: 1.7 }}>
                <li>Capalaba State School, St Rita's Catholic</li>
                <li>Capalaba State College (secondary)</li>
                <li>Early learning and childcare centres</li>
                <li>TAFE (Cleveland campus nearby)</li>
              </ul>
            </div>
            <div style={{ background: '#f1f5f9', padding: 18, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginTop: 0 }}>Banks & services</h3>
              <ul style={{ color: '#334155', lineHeight: 1.7 }}>
                <li>Australia Post, newsagents</li>
                <li>Banks and ATMs across both centres</li>
                <li>Pet services, vet clinics, grooming</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Living */}
        <div style={{ display: activeTab === 'living' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Living & access</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#fff1f2', padding: 18, borderRadius: 12, border: '1px solid #ffe4e6' }}>
              <h3 style={{ marginTop: 0 }}>Transport</h3>
              <ul style={{ color: '#9f1239', lineHeight: 1.7 }}>
                <li>Brisbane CBD: 25–30 mins via M1</li>
                <li>Bus interchange to Cleveland, Victoria Point, Brisbane</li>
                <li>To Redland Bay ferry: 18km (20–25 mins)</li>
                <li>Easy parking at all centres</li>
              </ul>
            </div>
            <div style={{ background: '#f8fafc', padding: 18, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginTop: 0 }}>Property snapshot</h3>
              <ul style={{ color: '#0f172a', lineHeight: 1.7 }}>
                <li>Median house: $750k–$900k (2026)</li>
                <li>Units/townhouses: $450k–$600k</li>
                <li>Rentals: $500–$700/w houses, $400–$550 units</li>
                <li>Popular with families and commuters</li>
              </ul>
            </div>
            <div style={{ background: '#fefce8', padding: 18, borderRadius: 12, border: '1px solid #fef08a' }}>
              <h3 style={{ marginTop: 0 }}>Why islanders stop here</h3>
              <ul style={{ color: '#854d0e', lineHeight: 1.7 }}>
                <li>Widest retail selection in Redlands</li>
                <li>Entertainment & dining for day trips</li>
                <li>On the way to/from Brisbane jobs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Businesses */}
        <div style={{ marginBottom: 44, marginTop: 44 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Featured Local Services</h3>
            <Link href="/upgrade" style={{ color: '#b45309', fontWeight: 700, textDecoration: 'none' }}>Feature your business →</Link>
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
              <p style={{ margin: '0 0 10px', color: '#713f12', fontSize: 14, lineHeight: 1.5 }}>Emergency services in Cleveland</p>
              <Link href="/directory/redland-hospital" style={{ color: '#854d0e', fontWeight: 700, fontSize: 14 }}>View →</Link>
            </div>
            <div style={{ background: '#fee2e2', padding: 18, borderRadius: 12, border: '1px solid #fecaca' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🚨</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Emergency Services</h4>
              <p style={{ margin: '0 0 10px', color: '#991b1b', fontSize: 14, lineHeight: 1.5 }}>Dial 000 for Police, Fire, Ambulance</p>
              <Link href="/articles/community-infrastructure" style={{ color: '#b91c1c', fontWeight: 700, fontSize: 14 }}>Learn More →</Link>
            </div>
            <div style={{ background: '#fef3c7', padding: 18, borderRadius: 12, border: '1px solid #fed7aa' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🛍️</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Capalaba Central</h4>
              <p style={{ margin: '0 0 10px', color: '#713f12', fontSize: 14, lineHeight: 1.5 }}>Major shopping destination</p>
              <Link href="/directory?location=capalaba" style={{ color: '#854d0e', fontWeight: 700, fontSize: 14 }}>Shop →</Link>
            </div>
            <div style={{ background: '#dcfce7', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🎾</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Recreation Center</h4>
              <p style={{ margin: '0 0 10px', color: '#166534', fontSize: 14, lineHeight: 1.5 }}>Sports, pool & fitness facilities</p>
              <Link href="/directory?location=capalaba" style={{ color: '#15803d', fontWeight: 700, fontSize: 14 }}>Explore →</Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)', padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 5vw, 2rem)', borderRadius: '0.5rem', textAlign: 'center', color: 'white', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Shopping & Entertainment Capital
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
            Browse the Redlands' largest shopping hub with retail, dining, entertainment, and classifieds to plan your stay.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              href="/events?location=capalaba" 
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
              href="/classifieds?location=capalaba" 
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
              href="/directory?location=capalaba" 
              style={{ 
                background: 'white', 
                color: '#b45309', 
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

        {/* Related Resources */}
        <div style={{ padding: 20, background: '#f8fafc', borderRadius: 12, borderLeft: '4px solid #d97706' }}>
          <h3 style={{ marginTop: 0, marginBottom: 12 }}>Related resources</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#475569', lineHeight: 1.7 }}>
            <li><Link href="/articles/community-infrastructure" style={{ color: '#b45309' }}>Community Services Guide</Link></li>
            <li><Link href="/articles/transport-on-islands" style={{ color: '#b45309' }}>Transport & Ferry Guide</Link></li>
            <li><Link href="/directory?location=capalaba" style={{ color: '#b45309' }}>Capalaba Directory</Link></li>
            <li><Link href="/events" style={{ color: '#b45309' }}>Redlands Events</Link></li>
            <li><Link href="/classifieds" style={{ color: '#b45309' }}>Buy & Sell Marketplace</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
