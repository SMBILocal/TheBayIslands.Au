import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Karragarra Island - Secluded Island Paradise',
  description: 'Discover Karragarra Island - the smallest inhabited island in South Moreton Bay with 200 residents. Experience peace, seclusion, pristine beaches, and authentic island living. Ferry from Redland Bay.',
  keywords: [
    'Karragarra Island',
    'Karragarra Island Queensland',
    'Karragarra Island real estate',
    'Karragarra Island ferry',
    'smallest SMBI island',
    'secluded island living',
    'peaceful Queensland islands',
    'Moreton Bay islands'
  ],
});

export default function KarragarraIslandPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', 
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: 800, 
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Karragarra Island
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.125rem, 2.8vw, 1.5rem)', 
            lineHeight: 1.6,
            maxWidth: '800px',
            opacity: 0.95
          }}>
            The smallest inhabited island - a secluded paradise with pristine beaches, tight-knit community, and escape from the crowds. Population 200.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              🚢 60-70 min ferry from Redland Bay
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              👨‍👩‍👧‍👦 Population: 200
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              📍 52km from Brisbane CBD
            </span>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav style={{ 
        background: '#f7fafc', 
        borderBottom: '2px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)' }}>
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto' }}>
            {['Overview', 'Living Here', 'Things To Do', 'Community'].map((tab) => (
              <a
                key={tab}
                href={`#${tab.toLowerCase().replace(' ', '-')}`}
                style={{
                  padding: '1rem 0.5rem',
                  fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
                  fontWeight: 600,
                  color: '#2d3748',
                  textDecoration: 'none',
                  borderBottom: '3px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)' }}>
        
        {/* Overview */}
        <section id="overview" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem' }}>
            Welcome to Karragarra Island
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            Karragarra Island is the smallest and most secluded of the four inhabited Southern Moreton Bay Islands. With just 200 permanent residents, it offers an ultra-peaceful lifestyle for those seeking genuine escape from modern life's hustle. The island's pristine white-sand beach, crystal-clear waters, and lack of commercial development make it a true hidden paradise.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            This is not the island for those seeking shops, restaurants, or entertainment - Karragarra is for nature lovers, peace seekers, and those who want to know every neighbor by name. The absence of commercial facilities means a self-sufficient, close-knit community where neighbors genuinely help each other.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {[
              { icon: '🏝️', title: 'Ultimate Seclusion', desc: 'Just 200 residents - true island solitude' },
              { icon: '🏖️', title: 'Pristine Beach', desc: 'White sand, clear water, safe swimming enclosure' },
              { icon: '🤝', title: 'Tight-Knit Community', desc: 'Everyone knows everyone - genuine island spirit' },
              { icon: '🌅', title: 'Natural Paradise', desc: 'Unspoiled coastal bushland & native wildlife' },
              { icon: '🔇', title: 'Total Peace', desc: 'No traffic noise, no crowds, no commercial bustle' },
              { icon: '🏡', title: 'Affordable Entry', desc: 'Most affordable island properties in SMBI' },
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
        </section>

        {/* Living Here */}
        <section id="living-here" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', borderBottom: '3px solid #7c3aed', paddingBottom: '0.5rem' }}>
            Living on Karragarra Island
          </h2>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🏠 Housing & Real Estate
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            Karragarra offers the most affordable entry to island living in SMBI. Median house prices range <strong>$220,000-$320,000</strong> (2026), with vacant land from $80,000-$150,000.
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Land sizes:</strong> Typically 600-1200m² (generous island blocks)</li>
            <li><strong>Property types:</strong> Modest 2-3 bedroom homes, weekenders, vacant land</li>
            <li><strong>Rental market:</strong> Very limited - most residents are owner-occupiers ($200-280/week when available)</li>
            <li><strong>Water & power:</strong> Mains electricity (reliable), rainwater tanks essential (no town water)</li>
            <li><strong>Sewerage:</strong> Septic systems (all properties)</li>
            <li><strong>Building considerations:</strong> Ferry freight costs for materials, limited local trades</li>
          </ul>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            <em><strong>Note:</strong> Karragarra is best suited for those who value peace over convenience. Minimal on-island services means self-sufficiency is essential.</em>
          </p>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🛒 Shopping & Services (Off-Island)
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            Karragarra has <strong>no shops, restaurants, or commercial facilities</strong>. Residents rely on:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Russell Island:</strong> 15-20 min ferry for groceries (Supa IGA), pharmacy, medical centre, post office</li>
            <li><strong>Macleay Island:</strong> 20-25 min ferry for additional options</li>
            <li><strong>Mainland:</strong> Redland Bay, Victoria Point for major shopping (70-90 min total including ferry)</li>
            <li><strong>Online shopping:</strong> Delivered to Redland Bay Marina for pickup on return ferry</li>
            <li><strong>Bulk buying:</strong> Most residents shop weekly/fortnightly, stock pantries well</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🏥 Healthcare Access
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Nearest medical centre:</strong> Russell Island Medical Centre (15-20 min ferry)</li>
            <li><strong>Emergency:</strong> Call 000 - QAS operates on all islands, ferry ambulance transport if required</li>
            <li><strong>Hospital:</strong> Redland Hospital, Cleveland (1.5-2 hours total travel time)</li>
            <li><strong>Pharmacy:</strong> Russell Island Pharmacy (15-20 min ferry)</li>
            <li><strong>Suitability:</strong> Not ideal for those with serious medical conditions requiring frequent specialist care</li>
            <li><strong>Telehealth:</strong> Good NBN coverage allows online consultations</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🎓 Education (Off-Island)
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            No school on Karragarra. Families with school-age children use:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Primary:</strong> Russell Island State School or Macleay Island State School (ferry + short travel)</li>
            <li><strong>Secondary:</strong> Cleveland/Victoria Point High Schools (ferry + bus, 70-90 min each way)</li>
            <li><strong>School transport:</strong> Free student ferry passes, but long daily commute (not ideal for young children)</li>
            <li><strong>Home schooling:</strong> Popular option among island families</li>
            <li><strong>Consideration:</strong> Many families with young kids choose Russell or Macleay for easier school access</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🚢 Ferry Access & Transport
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Ferry route:</strong> Redland Bay Marina → Karragarra Island (60-70 minutes) - longest ferry ride of all islands</li>
            <li><strong>Operators:</strong> Stradbroke Ferries, TransLink SeaLink</li>
            <li><strong>Frequency:</strong> 3-5 services daily (fewer than larger islands)</li>
            <li><strong>Fares:</strong> Adult return $40-50, child $25-35, monthly pass $500-700</li>
            <li><strong>Vehicle access:</strong> Vehicle barge available but expensive ($200-280 return) - book well ahead</li>
            <li><strong>On-island transport:</strong> Cars, golf carts, bikes, walking (island only 2km × 1.2km)</li>
            <li><strong>Inter-island ferries:</strong> Can connect to Russell/Macleay for shopping (15-25 min)</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🌐 Internet & Communications
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>NBN:</strong> Fixed Wireless available (good speeds 25-50 Mbps)</li>
            <li><strong>Mobile coverage:</strong> Telstra (good), Optus (patchy), Vodafone (very limited)</li>
            <li><strong>Postal services:</strong> Use Russell Island Post Office or Redland Bay</li>
            <li><strong>Parcel delivery:</strong> Most couriers deliver to Redland Bay Marina only</li>
          </ul>

          <div style={{ background: '#fff7ed', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #f59e0b', marginTop: '2rem' }}>
            <h4 style={{ fontSize: 'clamp(1.1rem, 2.7vw, 1.2rem)', fontWeight: 600, color: '#92400e', marginBottom: '0.75rem' }}>
              ⚠️ Is Karragarra Right for You?
            </h4>
            <p style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)', lineHeight: 1.7, color: '#78350f' }}>
              <strong>Best suited for:</strong> Retirees, remote workers, nature lovers, those seeking complete privacy and peace, people comfortable with self-sufficiency.
              <br /><br />
              <strong>Not ideal for:</strong> Families with young school children (long commutes), those requiring frequent medical care, people who want walkable shops/restaurants, anyone uncomfortable with isolation.
              <br /><br />
              <strong>Consider Russell or Macleay instead if you want:</strong> On-island shops, medical centres, restaurants, schools, or more ferry services.
            </p>
          </div>
        </section>

        {/* Things To Do */}
        <section id="things-to-do" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', borderBottom: '3px solid #7c3aed', paddingBottom: '0.5rem' }}>
            Things To Do on Karragarra Island
          </h2>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🏖️ Karragarra Beach & Swimming Enclosure
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            The island's crown jewel - a pristine white-sand beach with:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Netted swimming area:</strong> Safe year-round swimming for all ages</li>
            <li><strong>Crystal-clear water:</strong> Some of the clearest water in Moreton Bay</li>
            <li><strong>White sand:</strong> Soft, clean beach perfect for sunbathing</li>
            <li><strong>Picnic facilities:</strong> Basic BBQs, shelters, toilets (maintained by residents)</li>
            <li><strong>Low crowds:</strong> Often have entire beach to yourself on weekdays</li>
            <li><strong>Shallow waters:</strong> Gentle slope, ideal for kids and non-swimmers</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🥾 Karragarra Esplanade Walk
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            A peaceful 2.2km waterfront walking path featuring:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Stunning coastal views of Moreton Bay and shipping channels</li>
            <li>Native coastal vegetation - banksias, she-oaks, pandanus</li>
            <li>Birdwatching opportunities (sea eagles, ospreys, herons)</li>
            <li>Historical markers about island settlement</li>
            <li>Quiet meditation and reflection spots</li>
            <li>Sunrise and sunset viewpoints</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🎣 Fishing & Boating
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Beach fishing:</strong> Whiting, bream, flathead from shore</li>
            <li><strong>Rock fishing:</strong> Northern rocky outcrops for bream and trevally</li>
            <li><strong>Kayak fishing:</strong> Calm protected waters, excellent for kayak anglers</li>
            <li><strong>Boat ramp access:</strong> Small boat launch on eastern side</li>
            <li><strong>Crabbing:</strong> Mud crabs in tidal creeks and channels</li>
            <li><strong>Quiet waters:</strong> Far fewer boats than Russell/Macleay</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🌿 Nature & Wildlife
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Birdwatching:</strong> White-bellied sea eagles, ospreys, pelicans, cormorants, terns</li>
            <li><strong>Marine life:</strong> Dolphins regularly visit bay, occasional dugong sightings, green turtles</li>
            <li><strong>Native mammals:</strong> Wallabies, echidnas, possums (less human interaction = more wildlife)</li>
            <li><strong>Bush walking:</strong> Informal tracks through coastal bushland</li>
            <li><strong>Stargazing:</strong> Minimal light pollution - exceptional night sky viewing</li>
            <li><strong>Wildflowers:</strong> Spring coastal heath blooms (Sept-Nov)</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            📚 Peace, Quiet & Reflection
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            Karragarra's greatest attraction is what it doesn't have - noise, traffic, crowds, commercialism. It's perfect for:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Writers, artists, and creative retreat</li>
            <li>Meditation and yoga practice</li>
            <li>Disconnecting from technology</li>
            <li>Reading, thinking, peaceful living</li>
            <li>Photography - landscapes, wildlife, astrophotography</li>
          </ul>
        </section>

        {/* Community */}
        <section id="community" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', borderBottom: '3px solid #7c3aed', paddingBottom: '0.5rem' }}>
            Karragarra Island Community
          </h2>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🤝 Community Spirit
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
            With just 200 residents, Karragarra has the strongest sense of community in SMBI:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Everyone knows everyone:</strong> Genuine neighborly spirit and mutual support</li>
            <li><strong>Helping hands:</strong> Residents assist with ferry runs, tool sharing, emergency help</li>
            <li><strong>Informal gatherings:</strong> Beach BBQs, sunset drinks, impromptu get-togethers</li>
            <li><strong>Christmas celebrations:</strong> Annual community gathering and carol singing</li>
            <li><strong>Emergency preparedness:</strong> Residents look out for each other during storms, medical events</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🎉 Community Events (Occasional)
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Beach clean-ups:</strong> Quarterly environmental care days</li>
            <li><strong>Christmas celebrations:</strong> December community gathering</li>
            <li><strong>ANZAC Day:</strong> Small memorial service for veterans</li>
            <li><strong>Informal BBQs:</strong> Resident-organized beach gatherings</li>
            <li><strong>For more events:</strong> Many residents participate in Russell/Macleay island events (ferry across)</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            📞 Key Contacts & Services
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Emergency Services:</strong> Dial 000 (Police, Fire, Ambulance)</li>
            <li><strong>Redland City Council:</strong> (07) 3829 8999 | <a href="https://www.redland.qld.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>redland.qld.gov.au</a></li>
            <li><strong>Ferry Bookings:</strong> Stradbroke Ferries (07) 3286 1964 | TransLink 13 12 30</li>
            <li><strong>Nearest medical:</strong> Russell Island Medical Centre (07) 3409 7333 (15-min ferry)</li>
            <li><strong>Community info:</strong> Check Russell/Macleay community boards or Facebook groups</li>
          </ul>

          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
            🔧 Trades & Services
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
            Very few trades based on Karragarra. For services, residents use:
          </p>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Russell/Macleay tradespeople:</strong> Willing to ferry to Karragarra (expect ferry surcharge)</li>
            <li><strong>Mainland contractors:</strong> For specialized work (account for ferry time in quotes)</li>
            <li><strong>DIY culture:</strong> Many residents are handy and self-sufficient</li>
            <li><strong>Directory:</strong> Browse <a href="/directory?location=karragarra" style={{ color: '#7c3aed', textDecoration: 'underline' }}>The Bay Islands Directory</a> for services</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', 
          padding: 'clamp(2rem, 5vw, 3rem)', 
          borderRadius: '1rem',
          color: 'white',
          marginTop: '4rem'
        }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
            Experience True Island Solitude
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
            If peace, nature, and community are your priorities, Karragarra Island might be your perfect island home. Explore affordable properties and connect with the small but welcoming community.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a 
              href="/directory?location=karragarra" 
              style={{ 
                background: 'white', 
                color: '#7c3aed', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '0.5rem', 
                fontWeight: 600, 
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Local Services
            </a>
            <a 
              href="/classifieds?location=karragarra" 
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
              View Properties
            </a>
            <a 
              href="/islands" 
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
              Compare All Islands
            </a>
          </div>
        </section>

        {/* Related Links */}
        <section style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #7c3aed' }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
            🔗 Related Resources
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
            <li><a href="/islands" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Explore All Bay Islands</a></li>
            <li><a href="/islands/russell" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Russell Island Guide (more services)</a></li>
            <li><a href="/islands/macleay" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Macleay Island Guide (golf, dining)</a></li>
            <li><a href="/islands/lamb" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Lamb Island Guide (family-friendly)</a></li>
            <li><a href="/articles/transport-on-islands" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Ferry Timetables & Transport</a></li>
            <li><a href="/articles/tourism-attractions" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Tourist Attractions Across SMBI</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
