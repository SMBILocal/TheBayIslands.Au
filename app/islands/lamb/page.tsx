import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Lamb Island - Community, Heritage & Island Living',
  description: 'Discover Lamb Island - a peaceful Southern Moreton Bay island with 450 residents, rich pioneer heritage, community spirit, and family-friendly atmosphere. Ferry access from Redland Bay.',
  keywords: [
    'Lamb Island',
    'Lamb Island Queensland',
    'Lamb Island real estate',
    'Lamb Island ferry',
    'Lamb Island community',
    'SMBI Lamb Island',
    'island living Queensland',
    'Moreton Bay islands'
  ],
});

export default function LambIslandPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', 
        padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)',
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
            Lamb Island
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.125rem, 2.8vw, 1.5rem)', 
            lineHeight: 1.6,
            maxWidth: '800px',
            opacity: 0.95
          }}>
            A quiet, family-friendly island community with rich pioneer heritage, peaceful beaches, and close-knit neighbors. Population 450.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              🚢 55-65 min ferry from Redland Bay
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              👨‍👩‍👧‍👦 Population: 450
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              📍 48km from Brisbane CBD
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
            {['Overview', 'Living Here', 'Things To Do', 'Directory'].map((tab) => (
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
        </section>

        {/* Living Here */}
        <section id="living-here" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', borderBottom: '3px solid #0f766e', paddingBottom: '0.5rem' }}>
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
        </section>

        {/* Things To Do */}
        <section id="things-to-do" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', borderBottom: '3px solid #0f766e', paddingBottom: '0.5rem' }}>
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
            See our <a href="/articles/island-events-calendar" style={{ color: '#0f766e', textDecoration: 'underline' }}>full events calendar</a> for all SMBI happenings.
          </p>
        </section>

        {/* Directory */}
        <section id="directory" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem', borderBottom: '3px solid #0f766e', paddingBottom: '0.5rem' }}>
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
        </section>

        {/* CTA Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', 
          padding: 'clamp(2rem, 5vw, 3rem)', 
          borderRadius: '1rem',
          color: 'white',
          marginTop: '4rem'
        }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
            Discover Life on Lamb Island
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
            Experience the peace, community spirit, and natural beauty of Queensland's friendliest island. Explore homes for sale, local businesses, and upcoming community events.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a 
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
            </a>
            <a 
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
        <section style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #0f766e' }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
            🔗 Related Resources
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
            <li><a href="/islands" style={{ color: '#0f766e', textDecoration: 'underline' }}>Explore All Bay Islands</a></li>
            <li><a href="/islands/russell" style={{ color: '#0f766e', textDecoration: 'underline' }}>Russell Island Guide</a></li>
            <li><a href="/islands/macleay" style={{ color: '#0f766e', textDecoration: 'underline' }}>Macleay Island Guide</a></li>
            <li><a href="/islands/karragarra" style={{ color: '#0f766e', textDecoration: 'underline' }}>Karragarra Island Guide</a></li>
            <li><a href="/articles/transport-on-islands" style={{ color: '#0f766e', textDecoration: 'underline' }}>Ferry Timetables & Transport</a></li>
            <li><a href="/articles/tourism-attractions" style={{ color: '#0f766e', textDecoration: 'underline' }}>Tourist Attractions Guide</a></li>
            <li><a href="/articles/community-infrastructure" style={{ color: '#0f766e', textDecoration: 'underline' }}>Community Services & Infrastructure</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
