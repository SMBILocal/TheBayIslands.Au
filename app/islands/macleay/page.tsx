'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MacleayIslandPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'living' | 'attractions' | 'directory'>('overview');

  return (
    <main>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #c85a17 0%, #0066b3 100%)',
        color: 'white',
        padding: 'clamp(30px, 6vw, 50px) clamp(16px, 5vw, 20px)',
        marginBottom: 40
      }}>
        <h1 style={{ fontSize: 'clamp(2em, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0' }}>
          Macleay Island 🌊
        </h1>
        <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', opacity: 0.95, margin: '0 0 24px 0', maxWidth: 600 }}>
          A tranquil island retreat with world-class golf, waterfront dining, and natural beauty — perfect for active living and recreation.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            👨‍👩‍👧‍👦 Population: 550
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            🚢 50-60 min ferry from Redland Bay
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            📍 25km from Brisbane CBD
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
          <span>Macleay Island</span>
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
                borderBottom: activeTab === tab ? '3px solid #c85a17' : 'none',
                color: activeTab === tab ? '#c85a17' : '#64748b',
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

        {/* Overview Tab */}
        <div style={{ display: activeTab === 'overview' ? 'grid' : 'none', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 60 }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <h2>About Macleay Island</h2>
            <p>Macleay Island (postcode 4184) is the second-largest and most upscale of the South Moreton Bay Islands. Known for its world-class 9-hole golf course, waterfront dining, beautiful residences, and natural attractions, Macleay Island appeals to retirees, golfers, nature lovers, and families seeking a sophisticated island lifestyle.</p>
            
            <h3>Quick Facts</h3>
            <ul style={{ columns: 2, gap: '2em' }}>
              <li>Population: 1,200+</li>
              <li>Postcode: 4184</li>
              <li>Ferry Time: 50-60 mins from Redland Bay</li>
              <li>Key Feature: Macleay Island Golf Club (renowned 9-hole course)</li>
              <li>Schools: Macleay Island State School (Prep-Year 6)</li>
              <li>Clubs: Club Macleay, Bowls Club, Golf Club</li>
              <li>Shopping: Emerald Isle & Southsea Shopping Centres</li>
              <li>Recreation: Heritage trails, boat ramps, galleries</li>
            </ul>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
            <h3>🚢 Getting To Macleay Island</h3>
            <p>Macleay Island is accessed by ferry from Redland Bay Marina. Ferry services operate daily:</p>
            <ul>
              <li><strong>Stradbroke Ferries</strong> – high-speed & conventional services</li>
              <li><strong>TransLink SeaLink</strong> – integrated bus/ferry options</li>
              <li>Ferry frequency: 3-5 daily services (tide & weather dependent)</li>
              <li>Return cost: ~$35-45 per adult</li>
              <li><strong>Book now:</strong> <a href="https://translink.com.au" target="_blank" rel="noopener" style={{ color: '#0066b3' }}>TransLink SeaLink</a></li>
            </ul>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
            <h3>⛳ Macleay Island Golf Club</h3>
            <p><strong>World-renowned 9-hole golf course</strong> — one of Australia's most picturesque island courses:</p>
            <ul>
              <li>Championship-standard 9-hole course with stunning ocean views</li>
              <li>Clubhouse with restaurant, bar, and social facilities</li>
              <li>Membership available; visitor rounds welcome</li>
              <li>Golf tournaments, competitions, and social events year-round</li>
              <li>Pro shop and tuition available</li>
            </ul>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
            <h3>🛍️ Shopping Centers</h3>
            <p>Macleay Island offers convenient shopping at two main centres:</p>
            <ul>
              <li><strong>Emerald Isle Shopping Centre</strong> – retail, food, services</li>
              <li><strong>Southsea Shopping Village</strong> – specialist stores, convenience</li>
              <li><strong>Spar Shopping Centre</strong> – groceries & essentials</li>
              <li>Plant Nursery & Café – local plants & community gathering spot</li>
            </ul>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
            <h3>🏥 Healthcare & Services</h3>
            <ul>
              <li><strong>Macleay Island Medical Clinic</strong> – GP services & health care</li>
              <li><strong>Redland Hospital</strong> (mainland, 55 mins) – major medical care</li>
              <li>Pharmacy services at shopping centres</li>
              <li>Emergency access via Queensland Ambulance</li>
            </ul>
          </div>

          <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
            <h3>🍽️ Dining & Social</h3>
            <ul>
              <li><strong>Club Macleay</strong> – Fine dining, waterfront bistro, social events</li>
              <li><strong>Macleay Island Bowls Club</strong> – Bistro meals, bowls events</li>
              <li><strong>Bay Islands Golf Club Clubhouse</strong> – Restaurant & bar</li>
              <li>Local cafés and takeaway options at shopping centres</li>
            </ul>
          </div>
        </div>

        {/* Living Tab */}
        <div style={{ display: activeTab === 'living' ? 'block' : 'none', marginBottom: 60 }}>
          <h2>Living on Macleay Island</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 32 }}>
            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>🏡 Housing Market</h3>
              <ul>
                <li>Range: Modest homes to luxury waterfront residences</li>
                <li>Purchase price: $900k–$3M+ (premium beachfront properties)</li>
                <li>Rental: $500–1000+ /week (highly variable by location & amenities)</li>
                <li><Link href="/classifieds" style={{ color: '#0066b3' }}>Browse Macleay rentals & sales</Link></li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>📚 Schools & Education</h3>
              <ul>
                <li><strong>Macleay Island State School</strong> (Prep–Year 6)</li>
                <li>Kindergarten & preschool programs</li>
                <li><strong>Secondary:</strong> Ferry + bus to Cleveland or Victoria Point High (50 mins)</li>
                <li>Community learning & adult education programs</li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>⛳ Recreation & Clubs</h3>
              <ul>
                <li><strong>Macleay Island Golf Club</strong> – Membership & social play</li>
                <li><strong>Club Macleay</strong> – Bowls, dining, social events</li>
                <li><strong>Macleay Island Bowls Club</strong> – Competitive & social bowls</li>
                <li>Bay Islands Golf Club – Additional golf community</li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>🌲 Environment & Nature</h3>
              <ul>
                <li>Heritage trail walks with scenic coastal views</li>
                <li>Native birdwatching & wildlife spotting</li>
                <li>Beautiful beaches & water access for boating/kayaking</li>
                <li>Environmental conservation programs</li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>🎨 Arts & Culture</h3>
              <ul>
                <li><strong>Macleay Island Galleries</strong> – Local art & pottery exhibitions</li>
                <li>Community art workshops & classes</li>
                <li>Island markets featuring artisan crafts & produce</li>
                <li>Cultural events & performances year-round</li>
              </ul>
            </div>

            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
              <h3>⚡ Utilities & Infrastructure</h3>
              <ul>
                <li><strong>Electricity:</strong> Island power grid (modern, reliable)</li>
                <li><strong>Water:</strong> Island supply (quality & capacity excellent)</li>
                <li><strong>Internet:</strong> NBN & private providers widely available</li>
                <li><strong>Waste:</strong> Regular council collection & recycling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Attractions Tab */}
        <div style={{ display: activeTab === 'attractions' ? 'block' : 'none', marginBottom: 60 }}>
          <h2>Things To Do on Macleay Island</h2>
          <p>Macleay Island is a haven for golfers, nature lovers, and water enthusiasts seeking relaxation and outdoor adventure.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 32 }}>
            {[
              { icon: '⛳', title: 'Macleay Island Golf Club', desc: 'Championship 9-hole course with clubhouse restaurant. Open for membership and visitor rounds. Year-round tournaments.' },
              { icon: '🏖️', title: 'Dalpura Beach & Pat\'s Point', desc: 'Scenic beach with swimming enclosures, BBQ areas, and picnic tables. Popular for families and picnics.' },
              { icon: '🚶', title: 'Heritage Trail Walks', desc: 'Peaceful coastal walking routes with ocean views, wildlife spotting, and photography opportunities.' },
              { icon: '🎨', title: 'Macleay Island Galleries', desc: 'Local art galleries featuring pottery, paintings, and works by island artisans. Community exhibitions year-round.' },
              { icon: '🛶', title: 'Boating & Fishing', desc: 'Well-maintained boat ramps for tinny fishing, kayaking, and recreational boating in Moreton Bay.' },
              { icon: '🍽️', title: 'Waterfront Dining', desc: 'Club Macleay and golf club offer fine dining with panoramic water views.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3 style={{ fontSize: 'clamp(1.1em, 1.8vw, 18px)', margin: '0 0 12px 0' }}>{item.icon} {item.title}</h3>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3>📍 Key Attractions</h3>
          <ul style={{ columns: 2, gap: '2em' }}>
            <li><strong>Club Macleay</strong> – Waterfront bowls, bistro, events</li>
            <li><strong>Macleay Island Galleries</strong> – Art & pottery</li>
            <li><strong>Emerald Isle Shopping Centre</strong> – Retail hub</li>
            <li><strong>Bay Islands Golf Club</strong> – Golf facility</li>
            <li><strong>Macleay Island Library</strong> – Books & community programs</li>
            <li><strong>Plant Nursery & Café</strong> – Local flora & social gathering</li>
          </ul>
        </div>

        {/* Directory Tab */}
        <div style={{ display: activeTab === 'directory' ? 'block' : 'none', marginBottom: 60 }}>
          <h2>Macleay Island Business Directory</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
            <div>
              <h3>🛍️ Retail & Shopping</h3>
              <ul>
                <li><strong>Emerald Isle Shopping Centre</strong> – Main retail hub, variety of shops</li>
                <li><strong>Southsea Shopping Village</strong> – Specialist stores, boutiques</li>
                <li><strong>Spar Shopping Centre</strong> – Groceries & essentials</li>
                <li><strong>Plant Nursery & Café</strong> – Plants, garden supplies, community café</li>
              </ul>
            </div>

            <div>
              <h3>🍽️ Dining & Clubs</h3>
              <ul>
                <li><strong>Club Macleay</strong> – Waterfront fine dining, events, bowls</li>
                <li><strong>Macleay Island Bowls Club</strong> – Bistro meals, bowls events</li>
                <li><strong>Bay Islands Golf Club</strong> – Clubhouse restaurant & bar</li>
                <li><strong>Local Cafés</strong> – Coffee & light meals at shopping centres</li>
              </ul>
            </div>

            <div>
              <h3>⛳ Recreation & Sports</h3>
              <ul>
                <li><strong>Macleay Island Golf Club</strong> – Championship 9-hole course, pro shop</li>
                <li><strong>Club Macleay</strong> – Bowls, social sports, waterfront location</li>
                <li><strong>Macleay Island Bowls Club</strong> – Competitive & social lawn bowls</li>
                <li><strong>Boat Ramps</strong> – Multiple locations for boating & fishing</li>
              </ul>
            </div>

            <div>
              <h3>🏥 Health & Services</h3>
              <ul>
                <li><strong>Macleay Island Medical Clinic</strong> – GP services, health care</li>
                <li><strong>Pharmacy Services</strong> – At shopping centres</li>
                <li><strong>Dental Services</strong> – Available at shopping centres</li>
                <li><strong>Emergency Services</strong> – Queensland Ambulance, Redland Hospital</li>
              </ul>
            </div>

            <div>
              <h3>🎨 Arts, Culture & Community</h3>
              <ul>
                <li><strong>Macleay Island Galleries</strong> – Art exhibitions & sales</li>
                <li><strong>Macleay Island Library</strong> – Books, programs, community events</li>
                <li><strong>Macleay Island Progress Association</strong> – Community advocacy & events</li>
                <li><strong>Community Workshops</strong> – Arts, crafts, local skill-sharing</li>
              </ul>
            </div>

            <div>
              <h3>💼 Local Employment</h3>
              <p>Opportunities in:</p>
              <ul>
                <li>Hospitality & dining (clubs, restaurants, cafés)</li>
                <li>Golf industry (club staff, pro, tuition)</li>
                <li>Retail & shopping centres</li>
                <li>Healthcare & services</li>
                <li><Link href="/jobs" style={{ color: '#0066b3' }}>View all island jobs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div style={{ background: '#f1f5f9', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, marginBottom: 40 }}>
          <h3 style={{ marginTop: 0, marginBottom: 20 }}>Explore More Islands</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
            <Link href="/islands/russell" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center', transition: 'all 0.3s' }}>
              🏝️ Russell Island
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
        <div style={{ background: 'linear-gradient(135deg, #c85a17 0%, #0066b3 100%)', color: 'white', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 12px 0' }}>Considering Macleay Island?</h3>
          <p style={{ margin: '0 0 20px 0', opacity: 0.9 }}>Browse properties, jobs, and local experiences</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/classifieds" style={{ background: 'white', color: '#c85a17', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
              View Rentals & Sales
            </Link>
            <Link href="/events" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, border: '2px solid white' }}>
              Local Events
            </Link>
          </div>
        </div>

        {/* Related Resources */}
        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #c85a17' }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
            🔗 Related Resources
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
            <li><Link href="/islands/russell" style={{ color: '#c85a17', textDecoration: 'underline' }}>Russell Island</Link></li>
            <li><Link href="/islands/lamb" style={{ color: '#c85a17', textDecoration: 'underline' }}>Lamb Island</Link></li>
            <li><Link href="/islands/karragarra" style={{ color: '#c85a17', textDecoration: 'underline' }}>Karragarra Island</Link></li>
            <li><Link href="/areas/mainland/redland-bay" style={{ color: '#c85a17', textDecoration: 'underline' }}>Redland Bay (ferry terminal)</Link></li>
            <li><Link href="/directory?location=macleay" style={{ color: '#c85a17', textDecoration: 'underline' }}>Macleay Island Directory</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
