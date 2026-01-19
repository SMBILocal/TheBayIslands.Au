'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RussellIslandPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'living' | 'attractions' | 'directory'>('overview');

  return (
    <main>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
        color: 'white',
        padding: 'clamp(30px, 6vw, 50px) clamp(16px, 5vw, 20px)',
        marginBottom: 40
      }}>
        <h1 style={{ fontSize: 'clamp(2em, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0' }}>
          Russell Island 🏝️
        </h1>
        <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', opacity: 0.95, margin: '0 0 24px 0', maxWidth: 600 }}>
          The vibrant heart of the South Moreton Bay Islands — with local shops, schools, transport hub, and thriving community life.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            👨‍👩‍👧‍👦 Population: 2,000+
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            🚢 40-50 min ferry from Redland Bay
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            📍 20km from Brisbane CBD
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 5vw, 20px) clamp(40px, 8vw, 60px)' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.9em', color: '#64748b', marginBottom: 32, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#0066b3' }}>Home</Link>
          <span>/</span>
          <Link href="/islands" style={{ color: '#0066b3' }}>Islands</Link>
          <span>/</span>
          <span>Russell Island</span>
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
                borderBottom: activeTab === tab ? '3px solid #0066b3' : 'none',
                color: activeTab === tab ? '#0066b3' : '#64748b',
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

        {/* Tab Content */}
        <div style={{ display: activeTab === 'overview' ? 'grid' : 'none', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 60 }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <h2>About Russell Island</h2>
            <p>Russell Island (postcode 4184) is the largest and most populated of the South Moreton Bay Islands, serving as the commercial and transport hub for the region. Located approximately 20km east of Brisbane, Russell Island is home to over 2,000 residents and welcomes thousands of visitors annually.</p>
            
            <h3>Quick Facts</h3>
            <ul style={{ columns: 2, gap: '2em' }}>
              <li>Population: 2,000+</li>
              <li>Postcode: 4184</li>
              <li>Ferry Time: 40-50 mins from Redland Bay</li>
              <li>Main Services Hub: Shops, medical, pharmacy, post office</li>
              <li>Schools: Russell Island State School (Prep-Year 6)</li>
              <li>Transport: Daily ferry services</li>
              <li>Key Streets: Jackson Road, High Street, Anzac Drive</li>
              <li>Community Centre: Bay Islands Community Services Inc (BICS)</li>
            </ul>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
            <h3>🚢 Getting To Russell Island</h3>
            <p>Russell Island is accessed exclusively by ferry from Redland Bay Marina on the mainland. Multiple ferry operators provide daily services:</p>
            <ul>
              <li><strong>Stradbroke Ferries</strong> – high-speed and conventional vessels</li>
              <li><strong>TransLink SeaLink</strong> – integrated bus/ferry services to mainland</li>
              <li>Ferry frequency: 4-6 services daily (subject to tides & weather)</li>
              <li>Return cost: ~$30-40 per adult</li>
              <li><strong>Book ahead:</strong> <a href="https://translink.com.au" target="_blank" rel="noopener" style={{ color: '#0066b3' }}>TransLink SeaLink</a> or Stradbroke Ferries</li>
            </ul>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
            <h3>🏪 Shopping & Services</h3>
            <p><strong>Russell Island has all essential services</strong> near the town centre and ferry terminal:</p>
            <ul>
              <li><strong>Supa IGA</strong> – main supermarket with fresh produce & groceries</li>
              <li><strong>Russell Island Pharmacy</strong> – prescription & OTC medicines</li>
              <li><strong>Russell Island Post Office</strong> – mail, parcels & banking services</li>
              <li><strong>Russell Island Bakery</strong> – fresh bread, pastries & coffee</li>
              <li><strong>Service Station</strong> – fuel & convenience items</li>
              <li>Hairdresser, pharmacy, newsagent, hardware stores</li>
            </ul>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
            <h3>🏥 Healthcare</h3>
            <p>Russell Island has local medical services; serious emergencies access Redland Hospital via ferry:</p>
            <ul>
              <li><strong>Russell Island Medical Centre</strong> – local GP services & pathology</li>
              <li><strong>Russell Island Pharmacy</strong> – prescription dispensing</li>
              <li><strong>Redland Hospital</strong> (mainland, 50 mins) – major emergencies</li>
              <li>Telehealth options available for after-hours queries</li>
              <li>Queensland Ambulance accessible via emergency call</li>
            </ul>
          </div>
        </div>

        {/* Living Tab */}
        <div style={{ display: activeTab === 'living' ? 'block' : 'none', marginBottom: 60 }}>
          <h2>Living on Russell Island</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 32 }}>
            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>📚 Education</h3>
              <ul>
                <li><strong>Russell Island State School</strong> (Prep–Year 6)</li>
                <li>Kindergarten & preschool programs available</li>
                <li><strong>Secondary:</strong> Ferry + bus to Cleveland State High or Victoria Point State High (45 mins total)</li>
                <li>After-school clubs & community sports programs</li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>🏡 Housing & Accommodation</h3>
              <ul>
                <li>Mix of family homes, island cottages & newer developments</li>
                <li><Link href="/classifieds" style={{ color: '#0066b3' }}>Browse rental & sale listings</Link> on The Bay Islands</li>
                <li>Rental range: $400–800/week (varies by size & location)</li>
                <li>Purchase price: $700k–$2M+ (beachfront & elevated properties premium)</li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>⚡ Utilities & Services</h3>
              <ul>
                <li><strong>Electricity:</strong> Island power grid (reliable, occasional outages post-storm)</li>
                <li><strong>Water:</strong> Island supply (residents advised to check tank capacity)</li>
                <li><strong>Internet:</strong> NBN available in most areas; private providers also service the island</li>
                <li><strong>Waste:</strong> Council bin collection; recycling programs available</li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>💰 Cost of Living</h3>
              <p>Russell Island has comparable living costs to mainland Brisbane with some differences:</p>
              <ul>
                <li>Groceries: ~5–10% higher than mainland (transport costs)</li>
                <li>Services: Competitive pricing at local shops & services</li>
                <li>Transport: Ferry pass savings for regular commuters (~$500–1000/month)</li>
                <li>Council rates: Consistent with Redland City Council standard rates</li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>🚗 Transport & Parking</h3>
              <ul>
                <li><strong>Redland Bay Marina:</strong> Car park (short & long-term), ride-share zones, shuttle pickup</li>
                <li><strong>On-island:</strong> Local taxi & courtesy bus services from clubs</li>
                <li><strong>Ferry + Bus:</strong> Integrated TransLink services to mainland & other islands</li>
                <li><strong>Vehicle Barge:</strong> Car transport available via SeaLink (booking required)</li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>👥 Community & Lifestyle</h3>
              <ul>
                <li>Close-knit community with regular events & markets</li>
                <li>Active clubs: Bowls, RSL, sailing, fishing, sports</li>
                <li>Island markets: Weekends (check <Link href="/articles/island-events-calendar" style={{ color: '#0066b3' }}>events calendar</Link>)</li>
                <li>Casual island pace with modern amenities nearby</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Attractions Tab */}
        <div style={{ display: activeTab === 'attractions' ? 'block' : 'none', marginBottom: 60 }}>
          <h2>Things To Do on Russell Island</h2>
          <p>Russell Island offers plenty of activities for families, nature lovers, and adventure seekers.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 32 }}>
            {[
              { icon: '🏖️', title: 'Sandy Beach Recreation Reserve', desc: 'Popular beach with lifeguards, playground, picnic facilities, and shaded areas. Perfect for families.' },
              { icon: '🚴', title: 'BMX Park & Skate Park', desc: 'Russell Island BMX Park offers courses for all levels. Skate park for skateboarding and roller skating.' },
              { icon: '🐦', title: 'Whistling Kite Wetlands', desc: 'Nature reserve for birdwatching and bushwalking. Home to native island birds and natural wetland systems.' },
              { icon: '🎣', title: 'Fishing & Boating', desc: 'Multiple boat ramps for tinny fishing, kayaking, and recreational boating in Moreton Bay.' },
              { icon: '🏊', title: 'Public Swimming Pool', desc: 'Community pool on Jackson Road, open seasonally. Great for lap swimming and family visits.' },
              { icon: '⚽', title: 'Sports Fields & Courts', desc: 'Cricket, soccer, tennis, basketball facilities available for community use and competitions.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3 style={{ fontSize: 'clamp(1.1em, 1.8vw, 18px)', margin: '0 0 12px 0' }}>{item.icon} {item.title}</h3>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3>📍 Key Attractions & Landmarks</h3>
          <ul style={{ columns: 2, gap: '2em' }}>
            <li><strong>Russell Island Museum</strong> – Local history exhibits & heritage displays</li>
            <li><strong>Russell Island Bowls Club</strong> – Dining, entertainment, scenic views</li>
            <li><strong>Russell Island RSL Club</strong> – Bistro, functions, community hub</li>
            <li><strong>Tingara Boat Club</strong> – Sailing, marine social events</li>
            <li><strong>Community Library</strong> – Books, public internet, community events</li>
            <li><strong>Bay Islands Community Services (BICS)</strong> – Op shop, café, support programs</li>
          </ul>
        </div>

        {/* Directory Tab */}
        <div style={{ display: activeTab === 'directory' ? 'block' : 'none', marginBottom: 60 }}>
          <h2>Russell Island Business Directory</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
            <div>
              <h3>🛍️ Retail & Shopping</h3>
              <ul>
                <li><strong>Supa IGA Supermarket</strong> – Main grocery store, fresh produce, deli</li>
                <li><strong>Russell Island Bakery</strong> – Fresh bread, pastries, coffee, takeaway</li>
                <li><strong>Russell Island Pharmacy</strong> – Prescriptions, health products, cosmetics</li>
                <li><strong>Russell Island Post Office</strong> – Mail, parcels, banking services</li>
                <li><strong>Service Station</strong> – Fuel, convenience, car supplies</li>
              </ul>
            </div>

            <div>
              <h3>🍽️ Dining & Clubs</h3>
              <ul>
                <li><strong>Russell Island Bowls Club</strong> – Bistro, bar, functions, meals</li>
                <li><strong>Russell Island RSL Club</strong> – Dinners, parmas, entertainment, events</li>
                <li><strong>Black Pearl Café</strong> – Café, meals, takeaway near jetty</li>
                <li><strong>IGA Food Court</strong> – Takeaway & light meals near supermarket</li>
              </ul>
            </div>

            <div>
              <h3>🏥 Health & Professional Services</h3>
              <ul>
                <li><strong>Russell Island Medical Centre</strong> – GP services, pathology tests</li>
                <li><strong>Russell Island Pharmacy</strong> – Prescription dispensing, health advice</li>
                <li><strong>Local Dentist</strong> – Dental services (check directory for details)</li>
                <li><strong>Pet Vet Services</strong> – Small animal veterinary clinic</li>
              </ul>
            </div>

            <div>
              <h3>🔧 Trades & Services</h3>
              <ul>
                <li><strong>Local Builders & Contractors</strong> – Home renovations, maintenance</li>
                <li><strong>Electricians</strong> – Residential & commercial work</li>
                <li><strong>Plumbers</strong> – General plumbing, hot water services</li>
                <li><strong>Gardeners & Landscapers</strong> – Property maintenance & design</li>
                <li><strong>Handymen</strong> – Minor repairs, general odd jobs</li>
              </ul>
            </div>

            <div>
              <h3>👥 Community & Social</h3>
              <ul>
                <li><strong>Bay Islands Community Services Inc (BICS)</strong> – Op shop, café, programs</li>
                <li><strong>Russell Island Library</strong> – Books, programs, internet access</li>
                <li><strong>Community Hall</strong> – Events, workshops, meetings</li>
                <li><strong>Tingara Boat Club</strong> – Sailing, boating, social events</li>
              </ul>
            </div>

            <div>
              <h3>💼 Job Opportunities</h3>
              <p>Russell Island employers include:</p>
              <ul>
                <li>Retail & hospitality (shops, clubs, cafés)</li>
                <li>Healthcare (medical centre, pharmacy)</li>
                <li>Education (schools, kindergartens)</li>
                <li>Trades & services (electricians, plumbers, builders)</li>
                <li><Link href="/jobs" style={{ color: '#0066b3' }}>View all job listings</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Businesses */}
        <div style={{ marginBottom: 44, marginTop: 44 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Featured Local Services</h3>
            <Link href="/upgrade" style={{ color: '#0066b3', fontWeight: 700, textDecoration: 'none' }}>Feature your business →</Link>
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
              <p style={{ margin: '0 0 10px', color: '#713f12', fontSize: 14, lineHeight: 1.5 }}>Emergency & healthcare in Cleveland</p>
              <Link href="/directory/redland-hospital" style={{ color: '#854d0e', fontWeight: 700, fontSize: 14 }}>View →</Link>
            </div>
            <div style={{ background: '#fee2e2', padding: 18, borderRadius: 12, border: '1px solid #fecaca' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🚨</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Emergency Services</h4>
              <p style={{ margin: '0 0 10px', color: '#991b1b', fontSize: 14, lineHeight: 1.5 }}>Dial 000 for Police, Fire, Ambulance</p>
              <Link href="/articles/community-infrastructure" style={{ color: '#b91c1c', fontWeight: 700, fontSize: 14 }}>Learn More →</Link>
            </div>
            <div style={{ background: '#dcfce7', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🎳</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Russell Bowls Club</h4>
              <p style={{ margin: '0 0 10px', color: '#166534', fontSize: 14, lineHeight: 1.5 }}>Bistro, barefoot bowls & events</p>
              <Link href="/directory/russell-bowls-club" style={{ color: '#15803d', fontWeight: 700, fontSize: 14 }}>Visit →</Link>
            </div>
            <div style={{ background: '#e0e7ff', padding: 18, borderRadius: 12, border: '1px solid #c7d2fe' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏫</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Russell Island School</h4>
              <p style={{ margin: '0 0 10px', color: '#3730a3', fontSize: 14, lineHeight: 1.5 }}>Local primary education</p>
              <Link href="/directory/russell-island-school" style={{ color: '#4f46e5', fontWeight: 700, fontSize: 14 }}>Learn More →</Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section style={{ 
          background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)', 
          padding: 'clamp(2rem, 5vw, 3rem)', 
          borderRadius: '1rem',
          color: 'white',
          marginBottom: '2.75rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
            Discover Life on Russell Island
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
            Experience island living with all the essentials. Explore homes for sale, local businesses, and upcoming community events.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              href="/events?location=russell" 
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
              href="/classifieds?location=russell" 
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
              href="/directory?location=russell" 
              style={{ 
                background: 'white', 
                color: '#0066b3', 
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

        {/* Explore More Islands */}
        <div style={{ background: '#f1f5f9', padding: 'clamp(28px, 7vw, 40px)', borderRadius: 14, marginBottom: 44 }}>
          <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: 20, fontWeight: 700 }}>Explore more Bay Islands</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
            <Link href="/islands/macleay" style={{ background: 'white', border: '1px solid #e2e8f0', padding: 14, borderRadius: 10, display: 'block', color: '#0f172a', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}>
              <div>🏌️ Macleay Island</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Golf course & beaches</div>
            </Link>
            <Link href="/islands/lamb" style={{ background: 'white', border: '1px solid #e2e8f0', padding: 14, borderRadius: 10, display: 'block', color: '#0f172a', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}>
              <div>🌿 Lamb Island</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Peaceful & quiet</div>
            </Link>
            <Link href="/islands/karragarra" style={{ background: 'white', border: '1px solid #e2e8f0', padding: 14, borderRadius: 10, display: 'block', color: '#0f172a', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}>
              <div>🦘 Karragarra Island</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Nature & wildlife</div>
            </Link>
            <Link href="/islands" style={{ background: 'white', border: '1px solid #e2e8f0', padding: 14, borderRadius: 10, display: 'block', color: '#0f172a', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}>
              <div>🏝️ All Islands</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Compare all</div>
            </Link>
          </div>
        </div>

        {/* Related Resources */}
        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #0066b3' }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
            🔗 Related Resources
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
            <li><Link href="/islands/macleay" style={{ color: '#0066b3', textDecoration: 'underline' }}>Macleay Island</Link></li>
            <li><Link href="/islands/lamb" style={{ color: '#0066b3', textDecoration: 'underline' }}>Lamb Island</Link></li>
            <li><Link href="/islands/karragarra" style={{ color: '#0066b3', textDecoration: 'underline' }}>Karragarra Island</Link></li>
            <li><Link href="/areas/mainland/redland-bay" style={{ color: '#0066b3', textDecoration: 'underline' }}>Redland Bay (ferry terminal)</Link></li>
            <li><Link href="/directory?location=russell" style={{ color: '#0066b3', textDecoration: 'underline' }}>Russell Island Directory</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
