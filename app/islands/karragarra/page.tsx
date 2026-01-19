'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KarragarraIslandPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'living' | 'attractions' | 'community'>('overview');

  return (
    <main>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 20px)',
        marginBottom: 40
      }}>
        <h1 style={{ fontSize: 'clamp(2em, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0' }}>
          Karragarra Island 🏝️
        </h1>
        <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', opacity: 0.95, margin: '0 0 24px 0', maxWidth: 600 }}>
          The smallest and most secluded of the bay islands. Ultimate peace, pristine natural beauty, and sophisticated island living for those seeking genuine seclusion and tranquility.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            👥 Population: 200 (smallest island)
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            🚢 70-80 min ferry from Redland Bay
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            📍 55km from Brisbane CBD
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 5vw, 20px) clamp(40px, 8vw, 60px)' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.9em', color: '#64748b', marginBottom: 32, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#7c3aed' }}>Home</Link>
          <span>/</span>
          <Link href="/islands" style={{ color: '#7c3aed' }}>Islands</Link>
          <span>/</span>
          <span>Karragarra Island</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 16px)', marginBottom: 32, flexWrap: 'wrap', borderBottom: '2px solid #e2e8f0' }}>
          {(['overview', 'living', 'attractions', 'community'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 20px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '3px solid #7c3aed' : 'none',
                color: activeTab === tab ? '#7c3aed' : '#64748b',
                fontWeight: activeTab === tab ? 600 : 400,
                cursor: 'pointer',
                fontSize: 'clamp(0.9em, 1.5vw, 15px)',
                transition: 'all 0.3s'
              }}
            >
              {tab === 'overview' && 'Overview'}
              {tab === 'living' && 'Living Here'}
              {tab === 'attractions' && 'Things To Do'}
              {tab === 'community' && 'Community'}
            </button>
          ))}
        </div>

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <div style={{ marginBottom: 60 }}>
            <h2>Welcome to Karragarra Island</h2>
            <p>Karragarra Island (postcode 4184) is the smallest and most secluded of the four major Redland Bay islands, with only 200 residents. It's a place where genuine seclusion meets sophisticated island living. Perfect for those seeking peace, privacy, and authentic island tranquility away from crowds.</p>
            <h3>Quick Facts</h3>
            <ul style={{ columns: 2, gap: '2em' }}>
              <li>Population: 200 (smallest island)</li>
              <li>Postcode: 4184</li>
              <li>Ferry Time: 70-80 mins from Redland Bay</li>
              <li>Distance: 55km from Brisbane CBD</li>
              <li>Community Focus: Ultimate seclusion & peace</li>
              <li>Character: Pristine beaches, self-sufficient lifestyle</li>
              <li>Lifestyle: Quietest island with genuine tranquility</li>
              <li>Best For: Those seeking peace & privacy</li>
            </ul>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginTop: 32, marginBottom: 60 }}>
              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🚢 Getting To Karragarra Island</h3>
                <p><strong>Karragarra is the most remote of the bay islands.</strong> Access is exclusively by ferry:</p>
                <ul>
                  <li><strong>Ferry Service:</strong> Stradbroke Ferries operates daily services</li>
                  <li><strong>Journey Time:</strong> 70-80 minutes from Redland Bay Marina</li>
                  <li>Ferry frequency: 2-3 daily services (tide & weather dependent)</li>
                  <li>Return cost: ~$45-55 per adult</li>
                  <li><strong>Note:</strong> Check timetables due to weather sensitivity</li>
                  <li><strong>Book ahead:</strong> <a href="https://translink.com.au" target="_blank" rel="noopener" style={{ color: '#7c3aed' }}>TransLink SeaLink</a></li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🏖️ Pristine Natural Beauty</h3>
                <p><strong>Karragarra's greatest asset is its untouched natural environment:</strong></p>
                <ul>
                  <li>Pristine white sandy beaches with few visitors</li>
                  <li>Crystal clear waters ideal for swimming</li>
                  <li>Minimal light pollution – ideal stargazing</li>
                  <li>Protected native vegetation & wildlife habitat</li>
                  <li>Natural forest reserves for peaceful walks</li>
                  <li>Secluded picnic & beach spots</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🛒 Shopping & Essential Services</h3>
                <p><strong>Important:</strong> Services are limited on Karragarra. Plan ahead:</p>
                <ul>
                  <li><strong>Limited local store</strong> – basic groceries & supplies</li>
                  <li>Most residents shop on mainland during ferry trips</li>
                  <li>No supermarkets – plan grocery needs ahead</li>
                  <li><strong>General services available:</strong> Post office, limited retail</li>
                  <li>Ordering groceries & supplies online for island delivery is common</li>
                  <li><strong>Recommendation:</strong> Weekly mainland shopping trips typical</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🏥 Healthcare & Emergency Services</h3>
                <p>Healthcare requires mainland access for major services:</p>
                <ul>
                  <li><strong>Island Clinic:</strong> Limited basic medical services</li>
                  <li><strong>Doctor visits:</strong> Scheduled mainland appointments</li>
                  <li><strong>Emergencies:</strong> QAS helicopter evacuation if needed</li>
                  <li><strong>Major care:</strong> Redland Hospital (80+ mins via ferry)</li>
                  <li><strong>Important:</strong> Serious health issues require mainland access</li>
                  <li><strong>Telehealth:</strong> Limited; unreliable internet at times</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🌿 Environmental Consciousness</h3>
                <ul>
                  <li><strong>Self-sufficiency culture:</strong> Water tank systems standard</li>
                  <li>Solar power widely adopted</li>
                  <li>Waste minimization & composting emphasis</li>
                  <li>Strong conservation & environmental protection ethos</li>
                  <li>Community commitment to preserving pristine environment</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>⚡ Utilities & Infrastructure</h3>
                <ul>
                  <li><strong>Electricity:</strong> Island grid with solar supplement common</li>
                  <li><strong>Water:</strong> Tank-based systems (winter/summer management)</li>
                  <li><strong>Internet:</strong> Limited; some locations unreliable</li>
                  <li><strong>Phone:</strong> Mobile coverage inconsistent; landline recommended</li>
                  <li><strong>Waste:</strong> Limited council collection – self-disposal typical</li>
                  <li><strong>Note:</strong> Plan utilities carefully before moving</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Living Tab */}
        {activeTab === 'living' && (
          <div style={{ marginBottom: 60 }}>
            <h2>Living on Karragarra Island</h2>
            <div style={{ background: '#fff5e6', padding: '24px', borderRadius: 12, marginBottom: 32, borderLeft: '4px solid #7c3aed' }}>
              <p style={{ margin: 0 }}>
                <strong>⚠️ Important Lifestyle Considerations:</strong> Karragarra Island is for those who genuinely value seclusion and are prepared for the challenges of remote island living. Regular mainland access for shopping, healthcare, and services is essential. Not recommended for those needing frequent access to mainland amenities.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🏡 Housing & Property</h3>
                <ul>
                  <li>Limited housing stock (only 200 residents)</li>
                  <li>Purchase price: $350k–$500k+ (premium seclusion pricing)</li>
                  <li>Rental: Limited availability; $400–700/week when available</li>
                  <li><Link href="/classifieds" style={{ color: '#7c3aed' }}>Browse rentals & sales</Link></li>
                  <li>Most expensive island per capita</li>
                  <li>Properties often sited for privacy & ocean views</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>📚 Education</h3>
                <ul>
                  <li><strong>Primary:</strong> Russell Island State School (via ferry shuttle)</li>
                  <li><strong>Secondary:</strong> Mainland schools (requires daily ferry commute)</li>
                  <li>Family education planning essential</li>
                  <li>Home schooling considered by many families</li>
                  <li><strong>Challenge:</strong> 70-80 min daily commute for school-aged children</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>💰 Cost of Living</h3>
                <p>Karragarra has highest living costs of the islands:</p>
                <ul>
                  <li>Groceries: 10-15% higher (limited selection, transport costs)</li>
                  <li>Services: Premium pricing for island delivery & specialist work</li>
                  <li>Fuel: Barge transport costs affect pricing</li>
                  <li>Council rates: Higher for remote island property</li>
                  <li>Plan for bulk shopping trips to mainland</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🚗 Transport & Ferry Access</h3>
                <ul>
                  <li><strong>Ferry:</strong> Only access (70-80 mins each way)</li>
                  <li><strong>Frequency:</strong> 2-3 daily services (weather dependent)</li>
                  <li><strong>Redland Bay Marina:</strong> Car park, shuttle services</li>
                  <li><strong>Vehicle Barge:</strong> Available for vehicle transport</li>
                  <li><strong>Connectivity:</strong> Plan for ferry cancellations due to weather</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>👥 Community & Social Life</h3>
                <ul>
                  <li>Tight-knit community of 200 residents</li>
                  <li>Very quiet; limited social venues</li>
                  <li>Community events & gatherings few but meaningful</li>
                  <li>Island life requires self-entertainment & independence</li>
                  <li>Social connections form around shared lifestyle values</li>
                </ul>
              </div>

              <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                <h3>🔧 Self-Sufficiency Matters</h3>
                <ul>
                  <li><strong>Power:</strong> Solar systems common; island grid unreliable</li>
                  <li><strong>Water:</strong> Rainwater tanks essential; droughts require management</li>
                  <li><strong>Maintenance:</strong> Skilled trades expensive; DIY culture</li>
                  <li><strong>Food:</strong> Home gardens & preservation common</li>
                  <li><strong>Lifestyle:</strong> Preparation & planning are essential</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Attractions Tab */}
        {activeTab === 'attractions' && (
          <div style={{ marginBottom: 60 }}>
            <h2>Things To Do on Karragarra Island</h2>
            <p>Karragarra Island is a place for contemplation, nature immersion, and peaceful activities. The appeal lies in solitude, natural beauty, and genuine escape from busy mainland life.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', marginBottom: 32 }}>
              {[
                { icon: '🏖️', title: 'Pristine Beaches', desc: 'Untouched sandy beaches with crystal clear water – perfect for peaceful swimming and solitude.' },
                { icon: '🚶', title: 'Nature Walks & Trails', desc: 'Scenic walking trails through native forest with native wildlife and peaceful forest immersion.' },
                { icon: '🎣', title: 'Fishing & Water Sports', desc: 'Excellent fishing spots, kayaking, and boating in pristine waters away from crowds.' },
                { icon: '🌅', title: 'Sunrise & Stargazing', desc: 'Minimal light pollution provides exceptional stargazing and stunning sunrises over the bay.' },
                { icon: '📸', title: 'Photography & Nature', desc: 'Photographer\'s paradise with pristine landscapes, wildlife, and natural light.' },
                { icon: '🧘', title: 'Meditation & Peace', desc: 'Ultimate retreat for meditation, contemplation, and genuine peaceful solitude.' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12 }}>
                  <h3 style={{ fontSize: 'clamp(1.1em, 1.8vw, 18px)', margin: '0 0 12px 0' }}>{item.icon} {item.title}</h3>
                  <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Community Tab */}
        {activeTab === 'community' && (
          <div style={{ marginBottom: 60 }}>
            <h2>Karragarra Island Community</h2>
            <div style={{ background: '#f1f5f9', padding: 'clamp(20px, 4vw, 24px)', borderRadius: 12, marginBottom: 32 }}>
              <h3 style={{ marginTop: 0 }}>🤝 Community Character</h3>
              <p>Karragarra's 200-person community is close-knit, environmentally conscious, and united by a desire for peaceful island living. The community values self-sufficiency, environmental protection, and neighborly support.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
              <div>
                <h3>👥 Social & Community Services</h3>
                <ul>
                  <li><strong>Community Hall</strong> – Regular gatherings & events</li>
                  <li><strong>Island Residents Association</strong> – Advocacy & coordination</li>
                  <li><strong>Shared Values:</strong> Environmental protection & sustainability</li>
                  <li><strong>Events:</strong> Monthly community gatherings (limited)</li>
                  <li><strong>Cooperation:</strong> Strong reciprocal support system</li>
                </ul>
              </div>

              <div>
                <h3>🛍️ Retail & Services</h3>
                <ul>
                  <li><strong>General Store</strong> – Limited groceries & supplies</li>
                  <li><strong>Post Office</strong> – Mail & basic services</li>
                  <li><strong>Pharmacy:</strong> Limited; mainland prescription pickup typical</li>
                  <li><strong>Note:</strong> Most services require mainland trips</li>
                  <li><Link href="/directory?location=karragarra" style={{ color: '#7c3aed' }}>Browse full directory →</Link></li>
                </ul>
              </div>

              <div>
                <h3>⚡ Community Focus</h3>
                <ul>
                  <li><strong>Environmental Stewardship</strong> – Strong conservation ethic</li>
                  <li><strong>Self-Reliance:</strong> DIY culture & mutual help</li>
                  <li><strong>Sustainability:</strong> Solar/water systems widely adopted</li>
                  <li><strong>Connection:</strong> Strong bonds among residents</li>
                  <li><strong>Seclusion Philosophy:</strong> Shared desire for peace & privacy</li>
                </ul>
              </div>

              <div>
                <h3>🌍 Island Lifestyle Philosophy</h3>
                <ul>
                  <li><strong>Simplicity:</strong> Embracing simpler, slower lifestyle</li>
                  <li><strong>Independence:</strong> Self-sufficiency is valued</li>
                  <li><strong>Nature Connection:</strong> Living harmoniously with environment</li>
                  <li><strong>Community Values:</strong> Cooperation & mutual support</li>
                  <li><strong>Peace Priority:</strong> Preserving quiet island character</li>
                </ul>
              </div>
            </div>

            <div style={{ background: '#fff5e6', padding: '24px', borderRadius: 12, marginTop: 32, borderLeft: '4px solid #7c3aed' }}>
              <h4 style={{ marginTop: 0 }}>Is Karragarra Right For You?</h4>
              <p><strong>✅ Best if you:</strong> Value peace, privacy, & seclusion over convenience; are prepared for remote island life; enjoy self-sufficiency & independence; want genuine escape from crowds; embrace environmental sustainability</p>
              <p><strong>❌ May be challenging if you:</strong> Need frequent mainland access; require extensive medical services; want variety of shopping/dining; prefer active social scene; work away from home regularly; struggle with isolation</p>
            </div>
          </div>
        )}

        {/* Related Islands */}
        <div style={{ background: '#f1f5f9', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, marginBottom: 40 }}>
          <h3 style={{ marginTop: 0, marginBottom: 20 }}>Explore Other Islands</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(16px, 3vw, 24px)' }}>
            <Link href="/islands/russell" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center' }}>
              🏝️ Russell Island
            </Link>
            <Link href="/islands/macleay" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center' }}>
              🏝️ Macleay Island
            </Link>
            <Link href="/islands/lamb" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600, padding: '12px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', textAlign: 'center' }}>
              🏝️ Lamb Island
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)', color: 'white', padding: 'clamp(32px, 8vw, 48px)', borderRadius: 16, textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 12px 0' }}>Ready for Ultimate Island Seclusion?</h3>
          <p style={{ margin: '0 0 20px 0', opacity: 0.9 }}>Karragarra Island: Where genuine peace meets pristine natural beauty</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/classifieds" style={{ background: 'white', color: '#7c3aed', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
              View Rentals & Sales
            </Link>
            <Link href="/jobs" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, border: '2px solid white' }}>
              Browse Remote Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
