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
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 20px)',
        marginBottom: 40
      }}>
        <h1 style={{ fontSize: 'clamp(2em, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0' }}>
          Russell Island 🏝️
        </h1>
        <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', opacity: 0.95, margin: 0, maxWidth: 600 }}>
          The vibrant heart of the South Moreton Bay Islands — with local shops, schools, transport hub, and thriving community life.
        </p>
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

        {/* Related Links Section */}
        <div style={{ background: '#f1f5f9', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, marginBottom: 40 }}>
          <h3 style={{ marginTop: 0, marginBottom: 20 }}>Explore More Islands</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
            <Link href="/islands/macleay" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center', transition: 'all 0.3s' }}>
              🏝️ Macleay Island
            </Link>
            <Link href="/islands/lamb" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center', transition: 'all 0.3s' }}>
              🏝️ Lamb Island
            </Link>
            <Link href="/islands/karragarra" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center', transition: 'all 0.3s' }}>
              🏝️ Karragarra Island
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)', color: 'white', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 12px 0' }}>Planning to Move to Russell Island?</h3>
          <p style={{ margin: '0 0 20px 0', opacity: 0.9 }}>Browse accommodation, jobs, and local services</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/classifieds" style={{ background: 'white', color: '#0066b3', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
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
