"use client";

import { useState } from 'react';
import Link from 'next/link';

type TabKey = 'overview' | 'shopping' | 'waterfront' | 'access';

const mainlandLinks = [
  { href: '/areas/mainland/victoria-point', label: '🛒 Victoria Point', desc: 'Shopping & dining' },
  { href: '/areas/mainland/redland-bay', label: '🚢 Redland Bay', desc: 'Ferry terminal' },
  { href: '/areas/mainland/cleveland', label: '🏛️ Cleveland', desc: 'Council & hospital' },
  { href: '/areas/mainland/capalaba', label: '🛍️ Capalaba', desc: 'Retail powerhouse' },
];

const featured = [
  { title: 'Victoria Point Lakeside', desc: 'Cinema, dining strip, weekend buzz', href: '/events?location=victoria-point', bg: '#eff6ff' },
  { title: 'Thompson Beach & Jetty', desc: 'Waterfront walks, sunsets, fishing', href: '/articles/tourism-attractions', bg: '#ecfdf3' },
  { title: 'Shopping Centre', desc: 'Big-box retail, groceries, everyday essentials', href: '/directory?location=victoria-point', bg: '#fff7ed' },
  { title: 'Barge Connection', desc: 'Vehicle barge option from Redland Bay nearby', href: '/articles/transport-on-islands', bg: '#fefce8' },
];

export default function VictoriaPointContent() {
  const [tab, setTab] = useState<TabKey>('overview');

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)', color: 'white', padding: 'clamp(30px, 7vw, 56px) clamp(16px, 5vw, 20px)', marginBottom: 32 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, margin: '0 0 12px 0' }}>Victoria Point 🛒</h1>
          <p style={{ fontSize: 'clamp(16px, 2.6vw, 19px)', opacity: 0.95, maxWidth: 720, lineHeight: 1.65 }}>
            Retail, dining, and waterfront leisure hub for the Redlands — ideal stop for islanders to stock up, dine out, or enjoy the bay.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
            {['Victoria Point Lakeside', 'Cinema & dining strip', '15 mins to Redland Bay ferry'].map((pill) => (
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
          <Link href="/" style={{ color: '#115e59' }}>Home</Link>
          <span>/</span>
          <Link href="/areas/mainland/victoria-point" style={{ color: '#115e59' }}>Mainland</Link>
          <span>/</span>
          <span>Victoria Point</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 14px)', borderBottom: '2px solid #e2e8f0', marginBottom: 28, flexWrap: 'wrap' }}>
          {[
            { key: 'overview', label: 'Overview' },
            { key: 'shopping', label: 'Shopping & Dining' },
            { key: 'waterfront', label: 'Waterfront & Leisure' },
            { key: 'access', label: 'Access & Connections' },
          ].map((tabItem) => (
            <button
              key={tabItem.key}
              onClick={() => setTab(tabItem.key as TabKey)}
              style={{
                padding: '12px 16px',
                background: 'none',
                border: 'none',
                borderBottom: tab === tabItem.key ? '3px solid #115e59' : 'none',
                color: tab === tabItem.key ? '#115e59' : '#64748b',
                fontWeight: tab === tabItem.key ? 700 : 500,
                fontSize: 15,
                cursor: 'pointer'
              }}
            >
              {tabItem.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        <div style={{ display: tab === 'overview' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)', marginBottom: 12 }}>Retail + waterfront energy</h2>
          <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: 24 }}>
            Victoria Point offers lakeside dining, cinemas, supermarkets, and calm waterfront parks. It is the go-to mainland stop for islanders to restock, catch a movie, or enjoy an easy bay sunset.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { icon: '🎬', title: 'Entertainment', desc: 'Cinemas, bowling, arcade at Lakeside' },
              { icon: '🛍️', title: 'Retail mix', desc: 'Kmart, Coles, Aldi, specialty stores' },
              { icon: '🌅', title: 'Waterfront parks', desc: 'Thompson Beach, jetties, picnic spots' },
              { icon: '🍣', title: 'Dining', desc: 'Restaurants, cafes, fresh seafood' },
              { icon: '🚌', title: 'Bus links', desc: 'Direct buses to Redland Bay & Cleveland' },
              { icon: '🚗', title: 'Easy parking', desc: 'Plentiful free parking across centres' },
            ].map((feature) => (
              <div key={feature.title} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 26 }}>{feature.icon}</div>
                <h3 style={{ margin: '10px 0 6px', fontSize: 17 }}>{feature.title}</h3>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping & Dining */}
        <div style={{ display: tab === 'shopping' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Shopping, dining, entertainment</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#fff7ed', padding: 18, borderRadius: 12, border: '1px solid #fed7aa' }}>
              <h3 style={{ marginTop: 0 }}>Retail core</h3>
              <ul style={{ color: '#9a3412', lineHeight: 1.7 }}>
                <li>Victoria Point Shopping Centre</li>
                <li>Kmart, Coles, Aldi, Woolworths</li>
                <li>Banking, post, mobile repairs</li>
              </ul>
            </div>
            <div style={{ background: '#f1f5f9', padding: 18, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginTop: 0 }}>Lakeside precinct</h3>
              <ul style={{ color: '#334155', lineHeight: 1.7 }}>
                <li>Cinema, dining strip, weekend buzz</li>
                <li>Casual + family dining options</li>
                <li>Events and pop-ups at the lake</li>
              </ul>
            </div>
            <div style={{ background: '#ecfeff', padding: 18, borderRadius: 12, border: '1px solid #cffafe' }}>
              <h3 style={{ marginTop: 0 }}>Food to-go</h3>
              <ul style={{ color: '#0e7490', lineHeight: 1.7 }}>
                <li>Fresh seafood, sushi, burgers, pizza</li>
                <li>Grocer specials for ferry prep</li>
                <li>Cafes for pre-commute coffee</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Waterfront */}
        <div style={{ display: tab === 'waterfront' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Waterfront & outdoors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#ecfdf3', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <h3 style={{ marginTop: 0 }}>Thompson Beach</h3>
              <ul style={{ color: '#166534', lineHeight: 1.7 }}>
                <li>Walks, birdwatching, sunsets</li>
                <li>Accessible jetty and boat ramps</li>
                <li>Calm water for families</li>
              </ul>
            </div>
            <div style={{ background: '#fef3c7', padding: 18, borderRadius: 12, border: '1px solid #fde68a' }}>
              <h3 style={{ marginTop: 0 }}>Parks & play</h3>
              <ul style={{ color: '#854d0e', lineHeight: 1.7 }}>
                <li>Skatepark, sports fields, playgrounds</li>
                <li>BBQ areas and picnic shelters</li>
                <li>Foreshore cycling paths</li>
              </ul>
            </div>
            <div style={{ background: '#e0f2fe', padding: 18, borderRadius: 12, border: '1px solid #bae6fd' }}>
              <h3 style={{ marginTop: 0 }}>On the water</h3>
              <ul style={{ color: '#0ea5e9', lineHeight: 1.7 }}>
                <li>Kayaking, SUP, fishing spots</li>
                <li>Boat ramps to the bay</li>
                <li>Close to Redland Bay barges</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Access */}
        <div style={{ display: tab === 'access' ? 'block' : 'none', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: 12 }}>Access & connections</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            <div style={{ background: '#eff6ff', padding: 18, borderRadius: 12, border: '1px solid #dbeafe' }}>
              <h3 style={{ marginTop: 0 }}>By road</h3>
              <ul style={{ color: '#1e3a8a', lineHeight: 1.7 }}>
                <li>15 mins to Redland Bay ferry</li>
                <li>30–40 mins to Brisbane via M1</li>
                <li>Plentiful free parking</li>
              </ul>
            </div>
            <div style={{ background: '#e0f2fe', padding: 18, borderRadius: 12, border: '1px solid #bae6fd' }}>
              <h3 style={{ marginTop: 0 }}>By bus</h3>
              <ul style={{ color: '#0ea5e9', lineHeight: 1.7 }}>
                <li>Routes to Cleveland & Capalaba</li>
                <li>Links to Redland Bay ferry terminal</li>
                <li>Late-night rideshare for ferries</li>
              </ul>
            </div>
            <div style={{ background: '#ecfeff', padding: 18, borderRadius: 12, border: '1px solid #cffafe' }}>
              <h3 style={{ marginTop: 0 }}>Plan your trip</h3>
              <ul style={{ color: '#0e7490', lineHeight: 1.7 }}>
                <li>Check ferry times before shopping</li>
                <li>Bundle errands with movie or dining</li>
                <li>See <Link href="/articles/transport-on-islands" style={{ color: '#0e7490', textDecoration: 'underline' }}>Transport Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Businesses */}
        <div style={{ marginBottom: 44, marginTop: 44 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Featured Local Services</h3>
            <Link href="/upgrade" style={{ color: '#115e59', fontWeight: 700, textDecoration: 'none' }}>Feature your business →</Link>
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
              <p style={{ margin: '0 0 10px', color: '#713f12', fontSize: 14, lineHeight: 1.5 }}>Emergency & healthcare services</p>
              <Link href="/directory/redland-hospital" style={{ color: '#854d0e', fontWeight: 700, fontSize: 14 }}>View →</Link>
            </div>
            <div style={{ background: '#fee2e2', padding: 18, borderRadius: 12, border: '1px solid #fecaca' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🚨</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Emergency Services</h4>
              <p style={{ margin: '0 0 10px', color: '#991b1b', fontSize: 14, lineHeight: 1.5 }}>Dial 000 for Police, Fire, Ambulance</p>
              <Link href="/articles/community-infrastructure" style={{ color: '#b91c1c', fontWeight: 700, fontSize: 14 }}>Learn More →</Link>
            </div>
            <div style={{ background: '#dcfce7', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🛒</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Victoria Point Shopping</h4>
              <p style={{ margin: '0 0 10px', color: '#166534', fontSize: 14, lineHeight: 1.5 }}>Lakeside, supermarkets & dining</p>
              <Link href="/directory?location=victoria-point" style={{ color: '#15803d', fontWeight: 700, fontSize: 14 }}>Browse →</Link>
            </div>
            <div style={{ background: '#e0e7ff', padding: 18, borderRadius: 12, border: '1px solid #c7d2fe' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏛️</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Community Hub</h4>
              <p style={{ margin: '0 0 10px', color: '#3730a3', fontSize: 14, lineHeight: 1.5 }}>Library, rec center & sports</p>
              <Link href="/directory?location=victoria-point" style={{ color: '#4f46e5', fontWeight: 700, fontSize: 14 }}>Explore →</Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)', padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 5vw, 2rem)', borderRadius: '0.5rem', textAlign: 'center', color: 'white', marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Shopping & Waterfront Destination
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
            The premier shopping and entertainment hub of the Redlands. Browse dining, retail, events, and plan your next visit.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              href="/events?location=victoria-point" 
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
              href="/classifieds?location=victoria-point" 
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
              href="/directory?location=victoria-point" 
              style={{ 
                background: 'white', 
                color: '#115e59', 
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
        <div style={{ padding: 20, background: '#f8fafc', borderRadius: 12, borderLeft: '4px solid #115e59' }}>
          <h3 style={{ marginTop: 0, marginBottom: 12 }}>Related resources</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#475569', lineHeight: 1.7 }}>
            <li><Link href="/directory?location=victoria-point" style={{ color: '#115e59' }}>Victoria Point Directory</Link></li>
            <li><Link href="/events?location=victoria-point" style={{ color: '#115e59' }}>Victoria Point Events</Link></li>
            <li><Link href="/articles/tourism-attractions" style={{ color: '#115e59' }}>Things To Do Nearby</Link></li>
            <li><Link href="/articles/transport-on-islands" style={{ color: '#115e59' }}>Transport & Ferry Guide</Link></li>
            <li><Link href="/islands" style={{ color: '#115e59' }}>Bay Islands Overview</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
