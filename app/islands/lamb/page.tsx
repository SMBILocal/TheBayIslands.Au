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
        padding: 'clamp(30px, 6vw, 50px) clamp(16px, 5vw, 20px)',
        marginBottom: 40
      }}>
        <h1 style={{ fontSize: 'clamp(2em, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0' }}>
          Lamb Island 🌿
        </h1>
        <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', opacity: 0.95, margin: '0 0 24px 0', maxWidth: 600 }}>
          A quiet, family-friendly island community with rich pioneer heritage, peaceful beaches, and close-knit neighbors.
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

        {/* Tab Content - Overview */}
        <div style={{ display: activeTab === 'overview' ? 'block' : 'none', marginBottom: 60 }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem' }}>
            Welcome to Lamb Island
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            Lamb Island is the hidden gem of the Southern Moreton Bay Islands. With a population of just 450 residents, it offers an authentic island lifestyle away from the crowds. Known for its strong community spirit, pioneer heritage, and family-friendly atmosphere, Lamb Island is perfect for those seeking peace, nature, and genuine connection with neighbors.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            The island features peaceful beaches, wetland walking trails, historic Pioneer Park, and regular community events. Ferry services connect to Redland Bay Marina in 55-65 minutes, providing easy access to mainland shopping, services, and schools while maintaining island tranquility.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {[
              { icon: '🏘️', title: 'Small Community', desc: '450 friendly residents who know each other by name' },
              { icon: '🌳', title: 'Natural Beauty', desc: 'Wetlands, beaches, native bushland & wildlife' },
              { icon: '🏛️', title: 'Rich Heritage', desc: 'Pioneer Park preserves island history & culture' },
              { icon: '🚣', title: 'Outdoor Living', desc: 'Kayaking, fishing, beach walks, birdwatching' },
              { icon: '👨‍👩‍👧', title: 'Family Friendly', desc: 'Safe streets, community events, close-knit support' },
              { icon: '💰', title: 'Affordable', desc: 'Lower property prices than Russell & Macleay Islands' },
            ].map((feature) => (
              <div key={feature.title} style={{ 
                padding: '1.5rem', 
                background: 'white', 
                borderRadius: '0.75rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 2.7vw, 1.25rem)', fontWeight: 600, color: '#2d3748', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', color: '#4a5568', lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Content - Living Here */}
        <div style={{ display: activeTab === 'living' ? 'block' : 'none', marginBottom: 60 }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem' }}>
            Living on Lamb Island
          </h2>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🏠 Housing & Real Estate
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            Lamb Island offers excellent value with median house prices around <strong>$280,000-$380,000</strong> (2026). Properties range from established homes on large blocks to vacant land for your dream island build.
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Land sizes:</strong> Typically 600-1000m² (larger than city suburbs)</li>
            <li><strong>Property types:</strong> 3-4 bedroom homes, weekenders, vacant land</li>
            <li><strong>Rental market:</strong> $250-$350/week for family homes</li>
            <li><strong>Water & power:</strong> Mains electricity, rainwater tanks required</li>
            <li><strong>Sewerage:</strong> Septic systems (maintained by owners)</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🛒 Shopping & Services
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            As a smaller island, Lamb has limited on-island retail. Residents typically:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Russell Island:</strong> 10-min ferry for groceries (Supa IGA), pharmacy, post office</li>
            <li><strong>Macleay Island:</strong> 15-min ferry for additional shopping</li>
            <li><strong>Mainland:</strong> Victoria Point, Redland Bay for major shopping (25-35 min ferry + drive)</li>
            <li><strong>Monthly markets:</strong> Third Saturday at Community Hall (8am-12pm) - fresh produce, crafts, food</li>
            <li><strong>Online delivery:</strong> Many retailers deliver to Redland Bay Marina for ferry pickup</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🏥 Healthcare & Medical
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Nearest medical centre:</strong> Russell Island Medical Centre (10-min ferry + short drive)</li>
            <li><strong>Emergency:</strong> Call 000 - QAS operates on islands, ambulance ferry transport if needed</li>
            <li><strong>Hospital access:</strong> Redland Hospital, Cleveland (45-60 min total travel)</li>
            <li><strong>Allied health:</strong> Mobile services visit island (physio, podiatry, massage)</li>
            <li><strong>Telehealth:</strong> Available via NBN internet for routine consultations</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🎓 Education & Schools
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            Lamb Island doesn't have its own school. Families have several options:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Primary school:</strong> Russell Island State School (10-min ferry) or Macleay Island State School (15-min ferry)</li>
            <li><strong>Secondary school:</strong> Cleveland State High School or Victoria Point State High School (integrated ferry+bus service)</li>
            <li><strong>School transport:</strong> Free student ferry passes + bus connections (50-60 min total journey)</li>
            <li><strong>Kindergarten/childcare:</strong> Available on Russell and Macleay Islands</li>
            <li><strong>Home schooling:</strong> Some families choose this option for island lifestyle</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            Learn more in our <a href="/articles/education-schools-islands" style={{ color: '#0f766e', textDecoration: 'underline' }}>Education & Schools Guide</a>.
          </p>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🚢 Ferry Access & Transport
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Ferry route:</strong> Redland Bay Marina → Lamb Island (55-65 minutes)</li>
            <li><strong>Operators:</strong> Stradbroke Ferries, TransLink SeaLink</li>
            <li><strong>Frequency:</strong> 4-6 services daily (more on weekdays)</li>
            <li><strong>Fares:</strong> Adult return $35-45, child $20-30, monthly pass $450-650</li>
            <li><strong>Vehicle access:</strong> Vehicle barge service available (book ahead) - $180-250 return</li>
            <li><strong>On-island transport:</strong> Cars, golf carts, bikes, walking (island is small - 2.5km × 1.5km)</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            See detailed schedules in our <a href="/articles/transport-on-islands" style={{ color: '#0f766e', textDecoration: 'underline' }}>Complete Transport Guide</a>.
          </p>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🌐 Internet & Communications
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>NBN:</strong> Fixed Wireless available (25-50 Mbps typical speeds)</li>
            <li><strong>Mobile coverage:</strong> Telstra (good), Optus (fair), Vodafone (limited)</li>
            <li><strong>Postal services:</strong> Use Russell Island Post Office or Redland Bay</li>
            <li><strong>Parcel delivery:</strong> Australia Post, couriers deliver to Redland Bay Marina for pickup</li>
          </ul>
        </div>

        {/* Tab Content - Things To Do */}
        <div style={{ display: activeTab === 'attractions' ? 'block' : 'none', marginBottom: 60 }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem' }}>
            Things To Do on Lamb Island
          </h2>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🏛️ Pioneer Park & Historical Precinct
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            The heart of Lamb's heritage, featuring:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Restored 1920s settlers' cottages (open for tours)</li>
            <li>Vintage farming equipment and tools</li>
            <li>Memorial gardens with native plantings</li>
            <li>Community hall (hosts markets and events)</li>
            <li>BBQ facilities and picnic areas</li>
            <li>Historical information plaques</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🏖️ Beaches & Swimming
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>North Beach:</strong> Calm, shallow waters perfect for young families</li>
            <li><strong>Esplanade Beach:</strong> Long stretch ideal for morning walks and shell collecting</li>
            <li><strong>Fishing spots:</strong> Rocky outcrops for bream, whiting, flathead</li>
            <li><strong>Kayaking:</strong> Protected waters suitable for paddling beginners</li>
            <li><strong>Quieter than Russell/Macleay:</strong> Often have beaches to yourself</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🥾 Lamb Island Wetlands Circuit
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            A 3.8km loop walk through diverse ecosystems:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Mangrove boardwalks with interpretive signage</li>
            <li>Freshwater wetlands teeming with birdlife (120+ species)</li>
            <li>Coastal dune vegetation and wildflowers (spring)</li>
            <li>Fishing access points along tidal creeks</li>
            <li>Educational stops about ecosystem services</li>
            <li>Suitable for all fitness levels (mostly flat terrain)</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🎣 Fishing & Boating
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Popular catches:</strong> Whiting, bream, flathead, tailor, squid, mud crabs</li>
            <li><strong>Boat ramp:</strong> Small boat launch facility on east side</li>
            <li><strong>Kayak fishing:</strong> Calm waters ideal for kayak anglers</li>
            <li><strong>Licenses:</strong> Queensland recreational fishing license required (free for seniors)</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🌿 Wildlife & Nature
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Birdwatching:</strong> Kites, herons, egrets, pelicans, rainbow lorikeets, kookaburras</li>
            <li><strong>Native mammals:</strong> Wallabies, echidnas, possums, flying foxes</li>
            <li><strong>Marine life:</strong> Dolphins, turtles, dugongs occasionally sighted</li>
            <li><strong>Flora:</strong> Eucalypt forests, banksias, coastal heath, mangroves</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🎉 Community Events
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Monthly markets:</strong> Third Saturday 8am-12pm at Community Hall</li>
            <li><strong>Christmas carols:</strong> Annual community gathering in December</li>
            <li><strong>ANZAC Day service:</strong> Dawn service at memorial</li>
            <li><strong>Community BBQs:</strong> Regular fundraisers and social gatherings</li>
            <li><strong>Clean-up days:</strong> Beach and wetlands environmental care</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            See our <Link href="/articles/island-events-calendar" style={{ color: '#0f766e', textDecoration: 'underline' }}>full events calendar</Link> for all SMBI happenings.
          </p>
        </div>

        {/* Tab Content - Directory */}
        <div style={{ display: activeTab === 'directory' ? 'block' : 'none', marginBottom: 60 }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem' }}>
            Lamb Island Directory
          </h2>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            Community Services
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Lamb Island Community Hall:</strong> Venue hire, markets, events - (07) 3829 8999 (Council)</li>
            <li><strong>Emergency Services:</strong> Dial 000 (Police, Fire, Ambulance)</li>
            <li><strong>Redland City Council:</strong> (07) 3829 8999 | <a href="https://www.redland.qld.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: '#0f766e', textDecoration: 'underline' }}>redland.qld.gov.au</a></li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            Local Services & Trades
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            For comprehensive business listings including:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Builders, electricians, plumbers (island-based and mainland servicing Lamb)</li>
            <li>Lawn care, gardening, property maintenance</li>
            <li>Real estate agents specializing in Lamb Island properties</li>
            <li>Boat repairs, marine services</li>
            <li>Mobile mechanics, handyman services</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            Visit <a href="/directory" style={{ color: '#0f766e', textDecoration: 'underline' }}>The Bay Islands Directory</a> and filter by "Lamb Island" to find local businesses.
          </p>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            Nearby Services (Russell Island - 10 min ferry)
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Supa IGA:</strong> Full supermarket, deli, bakery - (07) 3409 8000</li>
            <li><strong>Russell Island Medical Centre:</strong> Bulk billing - (07) 3409 7333</li>
            <li><strong>Russell Island Pharmacy:</strong> Prescriptions, health products - (07) 3409 9000</li>
            <li><strong>Australia Post:</strong> Postal services, banking - 38 High Street</li>
            <li><strong>Russell Island RSL Club:</strong> Meals, entertainment - (07) 3409 7666</li>
          </ul>
        </div>

        {/* Featured Businesses */}
        <div style={{ marginBottom: 44, marginTop: 44 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Featured Local Services</h3>
            <Link href="/upgrade" style={{ color: '#0f766e', fontWeight: 700, textDecoration: 'none' }}>Feature your business →</Link>
          </div>
          {/* Top featured - full width */}
          <div style={{ marginBottom: 14, background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: 24, borderRadius: 12, border: '2px solid #0ea5e9', display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 auto' }}>
              <div style={{ width: 80, height: 80, background: '#0ea5e9', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>
                ⛴️
              </div>
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
            <div style={{ background: '#dcfce7', padding: 18, borderRadius: 12, border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏛️</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Lamb Island Community Hall</h4>
              <p style={{ margin: '0 0 10px', color: '#166534', fontSize: 14, lineHeight: 1.5 }}>Community events & meetings hub</p>
              <Link href="/directory/lamb-community-hall" style={{ color: '#15803d', fontWeight: 700, fontSize: 14 }}>View →</Link>
            </div>
            <div style={{ background: '#f3e8ff', padding: 18, borderRadius: 12, border: '1px solid #e9d5ff' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏫</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700 }}>Island Primary Services</h4>
              <p style={{ margin: '0 0 10px', color: '#6b21a8', fontSize: 14, lineHeight: 1.5 }}>Education & family support</p>
              <Link href="/articles/education-schools-islands" style={{ color: '#7c3aed', fontWeight: 700, fontSize: 14 }}>Learn More →</Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', 
          padding: 'clamp(2rem, 5vw, 3rem)', 
          borderRadius: '1rem',
          color: 'white',
          marginBottom: '2.75rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
            Discover Life on Lamb Island
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
            Experience the peace, community spirit, and natural beauty of Queensland's friendliest island. Explore homes for sale, local businesses, and upcoming community events.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              href="/events?location=lamb" 
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
              href="/classifieds?location=lamb" 
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
              href="/directory?location=lamb" 
              style={{ 
                background: 'white', 
                color: '#0f766e', 
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
            <Link href="/islands/russell" style={{ background: 'white', border: '1px solid #e2e8f0', padding: 14, borderRadius: 10, display: 'block', color: '#0f172a', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}>
              <div>🏝️ Russell Island</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Island hub</div>
            </Link>
            <Link href="/islands/macleay" style={{ background: 'white', border: '1px solid #e2e8f0', padding: 14, borderRadius: 10, display: 'block', color: '#0f172a', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}>
              <div>🏌️ Macleay Island</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Golf course & beaches</div>
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

        {/* Related Links */}
        <div style={{ padding: 20, background: '#f8fafc', borderRadius: 12, borderLeft: '4px solid #0f766e' }}>
          <h3 style={{ marginTop: 0, marginBottom: 12 }}>Related resources</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#475569', lineHeight: 1.7 }}>
            <li><Link href="/islands" style={{ color: '#0f766e' }}>Explore All Bay Islands</Link></li>
            <li><Link href="/islands/russell" style={{ color: '#0f766e' }}>Russell Island Guide</Link></li>
            <li><Link href="/islands/macleay" style={{ color: '#0f766e' }}>Macleay Island Guide</Link></li>
            <li><Link href="/articles/transport-on-islands" style={{ color: '#0f766e' }}>Ferry Timetables & Transport</Link></li>
            <li><Link href="/directory?location=lamb" style={{ color: '#0f766e' }}>Lamb Island Directory</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
