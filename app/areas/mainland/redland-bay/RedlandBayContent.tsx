"use client";

import { useState } from 'react';
import Link from 'next/link';

type TabKey = 'overview' | 'marina' | 'services' | 'living';

const mainlandLinks = [
  { href: '/areas/mainland/redland-bay', label: '🚢 Redland Bay', desc: 'Ferry terminal gateway' },
  { href: '/areas/mainland/victoria-point', label: '🛒 Victoria Point', desc: 'Shopping & dining' },
  { href: '/areas/mainland/cleveland', label: '🏛️ Cleveland', desc: 'Council & hospital' },
  { href: '/areas/mainland/capalaba', label: '🛍️ Capalaba', desc: 'Retail powerhouse' },
];

const featuredBusinesses = [
  { title: 'Redland Bay Marina Parking', blurb: 'Short & long-term options by the terminal', cta: '/articles/transport-on-islands', color: '#eff6ff' },
  { title: 'Bay Runner Shuttle', blurb: 'Book-ahead rides to the ferry & back', cta: '/directory?category=transport&location=redland-bay', color: '#ecfdf3' },
  { title: 'Island Essentials Mini Mart', blurb: 'Snacks, coffee, last-minute supplies', cta: '/directory?location=redland-bay', color: '#fff7ed' },
  { title: 'Marina Cafe', blurb: 'Grab a coffee before you sail', cta: '/events?location=redland-bay', color: '#fefce8' },
];

export default function RedlandBayContent() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)', color: 'white', padding: 'clamp(30px, 7vw, 56px) clamp(16px, 5vw, 20px)', marginBottom: 32 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, margin: '0 0 12px 0' }}>Redland Bay 🚢</h1>
          <p style={{ fontSize: 'clamp(16px, 2.6vw, 19px)', opacity: 0.95, maxWidth: 720, lineHeight: 1.65 }}>
            Gateway to the Southern Moreton Bay Islands — ferry terminal, marina, shopping village, and key services for island communities.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
            {['Ferry terminal + marina', '35km from Brisbane', 'Population 15,000'].map((pill) => (
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
          <Link href="/" style={{ color: '#1e3a8a' }}>Home</Link>
          <span>/</span>
          <Link href="/areas/mainland/redland-bay" style={{ color: '#1e3a8a' }}>Mainland</Link>
          <span>/</span>
          <span>Redland Bay</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 14px)', borderBottom: '2px solid #e2e8f0', marginBottom: 28, flexWrap: 'wrap' }}>
          {[
            { key: 'overview', label: 'Overview' },
            { key: 'marina', label: 'Marina & Ferry' },
            { key: 'services', label: 'Shopping & Services' },
            { key: 'living', label: 'Living & Access' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabKey)}
              style={{
                padding: '12px 16px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.key ? '3px solid #1e3a8a' : 'none',
                color: activeTab === tab.key ? '#1e3a8a' : '#64748b',
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
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', marginBottom: 12 }}>Mainland lifeline for the islands</h2>
          <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: 24 }}>
            Redland Bay is the jump-off point to Russell, Macleay, Lamb, and Karragarra Islands. The marina precinct combines ferry services, parking, and last-minute supplies steps from the terminal.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { icon: '⛴️', title: 'Main ferry terminal', desc: 'SeaLink + Stradbroke Ferries, frequent SMBI runs' },
              { icon: '🅿️', title: 'Parking options', desc: 'Short & long stay, rideshare/taxi zone' },
              { icon: '☕', title: 'Coffee & essentials', desc: 'Cafe, snacks, convenience items at the marina' },
              { icon: '🛒', title: 'Village shopping', desc: 'Woolworths, IGA, bottle shops, takeaways' },
              { icon: '🩺', title: 'Health nearby', desc: 'Medical centre, physio, dental, pharmacy' },
              { icon: '🚲', title: 'Foreshore', desc: 'Walking paths, playgrounds, bay views' },
            ].map((feature) => (
              <div key={feature.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 26 }}>{feature.icon}</div>
                <h3 style={{ margin: '10px 0 6px', fontSize: 17 }}>{feature.title}</h3>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marina & Ferry */}
        <div style={{ display: activeTab === 'marina' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Marina & ferry details</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#eff6ff', padding: 18, borderRadius: 12, border: '1px solid #dbeafe' }}>
              <h3 style={{ marginTop: 0 }}>Ferry operations</h3>
              <ul style={{ color: '#1e3a8a', lineHeight: 1.7 }}>
                <li>SeaLink + Stradbroke Ferries</li>
                <li>15–25 daily services to SMBI</li>
                <li>Integrated TransLink bus connections</li>
                <li>Ticketing on-site; book vehicle barges ahead</li>
              </ul>
            </div>
            <div style={{ background: '#e0f2fe', padding: 18, borderRadius: 12, border: '1px solid #bae6fd' }}>
              <h3 style={{ marginTop: 0 }}>Parking & access</h3>
              <ul style={{ color: '#0ea5e9', lineHeight: 1.7 }}>
                <li>Short stay ~$8/day, long stay ~$18/day</li>
                <li>Ride-share & taxi pickup lane</li>
                <li>Bike racks, kiss-and-ride area</li>
                <li>Restrooms, water fountains, shelter</li>
              </ul>
            </div>
            <div style={{ background: '#ecfdf3', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <h3 style={{ marginTop: 0 }}>Plan ahead</h3>
              <ul style={{ color: '#166534', lineHeight: 1.7 }}>
                <li>Check tides & weather for barge crossings</li>
                <li>Arrive 20–30 mins early in peak</li>
                <li>Link ferry + bus for island students</li>
                <li>See <Link href="/articles/transport-on-islands" style={{ color: '#166534', textDecoration: 'underline' }}>Transport Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Shopping & Services */}
        <div style={{ display: activeTab === 'services' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Shopping, food & services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#fff7ed', padding: 18, borderRadius: 12, border: '1px solid #fed7aa' }}>
              <h3 style={{ marginTop: 0 }}>Village shopping</h3>
              <ul style={{ color: '#9a3412', lineHeight: 1.7 }}>
                <li>Supermarkets: Woolworths, IGA</li>
                <li>Hardware: Mitre 10</li>
                <li>Liquor stores + bottle shops</li>
                <li>Pet services & supplies</li>
              </ul>
            </div>
            <div style={{ background: '#f1f5f9', padding: 18, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginTop: 0 }}>Food & coffee</h3>
              <ul style={{ color: '#334155', lineHeight: 1.7 }}>
                <li>Chinese, Thai, Indian, pizza, fish & chips</li>
                <li>Cafes + takeaway near the marina</li>
                <li>Grab-and-go snacks for ferry travellers</li>
              </ul>
            </div>
            <div style={{ background: '#ecfeff', padding: 18, borderRadius: 12, border: '1px solid #cffafe' }}>
              <h3 style={{ marginTop: 0 }}>Health & wellbeing</h3>
              <ul style={{ color: '#0e7490', lineHeight: 1.7 }}>
                <li>Redland Bay Medical Centre, physio, dental</li>
                <li>Pharmacies: Chemist Warehouse, Blooms</li>
                <li>Pathology & optical nearby</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Living */}
        <div style={{ display: activeTab === 'living' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Living & access</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#e0f2fe', padding: 18, borderRadius: 12, border: '1px solid #bae6fd' }}>
              <h3 style={{ marginTop: 0 }}>Transport</h3>
              <ul style={{ color: '#075985', lineHeight: 1.7 }}>
                <li>Brisbane CBD: 35–45 mins via M1</li>
                <li>Bus to Victoria Point, Cleveland</li>
                <li>Integrated ferry + bus for students</li>
              </ul>
            </div>
            <div style={{ background: '#f8fafc', padding: 18, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginTop: 0 }}>Property snapshot</h3>
              <ul style={{ color: '#0f172a', lineHeight: 1.7 }}>
                <li>Median house: $650k–$850k (2026)</li>
                <li>Waterfront premium: $1M+</li>
                <li>Rentals: $450–$650/w</li>
                <li>Popular with island workers & boaties</li>
              </ul>
            </div>
            <div style={{ background: '#fef3c7', padding: 18, borderRadius: 12, border: '1px solid #fde68a' }}>
              <h3 style={{ marginTop: 0 }}>Why islanders stop here</h3>
              <ul style={{ color: '#854d0e', lineHeight: 1.7 }}>
                <li>Fastest access to SMBI ferries</li>
                <li>Easy last-minute supplies before sailing</li>
                <li>Family-friendly foreshore while waiting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Businesses */}
        <div style={{ marginBottom: 44, marginTop: 44 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Featured Local Services</h3>
            <Link href="/upgrade" style={{ color: '#1e3a8a', fontWeight: 700, textDecoration: 'none' }}>Feature your business →</Link>
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
              <p style={{ margin: '0 0 10px', color: '#713f12', fontSize: 14, lineHeight: 1.5 }}>Emergency & healthcare services in Cleveland</p>
              <Link href="/directory/redland-hospital" style={{ color: '#854d0e', fontWeight: 700, fontSize: 14 }}>View →</Link>
            </div>
            <div style={{ background: '#fee2e2', padding: 18, borderRadius: 12, border: '1px solid #fecaca' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🚨</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Emergency Services</h4>
              <p style={{ margin: '0 0 10px', color: '#991b1b', fontSize: 14, lineHeight: 1.5 }}>Dial 000 for Police, Fire, Ambulance</p>
              <Link href="/articles/community-infrastructure" style={{ color: '#b91c1c', fontWeight: 700, fontSize: 14 }}>Learn More →</Link>
            </div>
            <div style={{ background: '#e0e7ff', padding: 18, borderRadius: 12, border: '1px solid #c7d2fe' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🚢</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Redland Bay Marina</h4>
              <p style={{ margin: '0 0 10px', color: '#3730a3', fontSize: 14, lineHeight: 1.5 }}>Ferry terminal & parking hub</p>
              <Link href="/articles/transport-on-islands" style={{ color: '#4f46e5', fontWeight: 700, fontSize: 14 }}>Learn More →</Link>
            </div>
            <div style={{ background: '#dcfce7', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🛒</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Village Shopping</h4>
              <p style={{ margin: '0 0 10px', color: '#166534', fontSize: 14, lineHeight: 1.5 }}>Woolworths, IGA, cafes & more</p>
              <Link href="/directory?location=redland-bay" style={{ color: '#15803d', fontWeight: 700, fontSize: 14 }}>Browse →</Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 5vw, 2rem)', borderRadius: '0.5rem', textAlign: 'center', color: 'white', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Gateway to the Islands
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
            The main ferry terminal and mainland hub. Check services, parking, events, and classifieds before heading out.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              href="/events?location=redland-bay" 
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
              href="/classifieds?location=redland-bay" 
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
              href="/directory?location=redland-bay" 
              style={{ 
                background: 'white', 
                color: '#1e3a8a', 
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
        <div style={{ padding: 20, background: '#f8fafc', borderRadius: 12, borderLeft: '4px solid #1e3a8a' }}>
          <h3 style={{ marginTop: 0, marginBottom: 12 }}>Related resources</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#475569', lineHeight: 1.7 }}>
            <li><Link href="/articles/transport-on-islands" style={{ color: '#1e3a8a' }}>Transport & Ferry Guide</Link></li>
            <li><Link href="/islands" style={{ color: '#1e3a8a' }}>Bay Islands Overview</Link></li>
            <li><Link href="/directory?location=redland-bay" style={{ color: '#1e3a8a' }}>Redland Bay Directory</Link></li>
            <li><Link href="/events?location=redland-bay" style={{ color: '#1e3a8a' }}>Redland Bay Events</Link></li>
            <li><Link href="/articles/tourism-attractions" style={{ color: '#1e3a8a' }}>Things To Do Nearby</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
