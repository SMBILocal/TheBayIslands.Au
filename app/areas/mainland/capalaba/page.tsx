import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Capalaba - Major Retail & Entertainment Hub',
  description: 'Capalaba is the Redlands largest shopping and entertainment destination with Capalaba Central, cinemas, restaurants, and services. Key mainland hub for Bay Islands residents. Population 22,000.',
  keywords: [
    'Capalaba',
    'Capalaba Central',
    'Capalaba shopping',
    'Capalaba Queensland',
    'Capalaba Park shopping centre',
    'Redlands shopping',
    'mainland services SMBI',
    'Capalaba cinemas'
  ],
});

export default function CapalabaPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
            Capalaba
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2.8vw, 1.5rem)', lineHeight: 1.6, maxWidth: '800px', opacity: 0.95 }}>
            Redlands' largest retail and entertainment hub with Capalaba Central, Capalaba Park, cinemas, dining, and comprehensive services for Bay Islands residents. Population 22,000.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              🛍️ Largest Shopping Hub
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              📍 22km from Brisbane
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              👨‍👩‍👧‍👦 Population: 22,000
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem' }}>
          Welcome to Capalaba
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
          Capalaba is the Redlands' premier shopping and entertainment destination, offering the widest selection of retail, dining, and services in the region. Its proximity to the M1 motorway makes it easily accessible for Bay Islands residents making mainland trips.
        </p>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🛍️ Capalaba Central Shopping Centre
        </h3>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
          The Redlands' flagship shopping destination:
        </p>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Major retailers:</strong> Woolworths, Coles, ALDI</li>
          <li><strong>Department stores:</strong> Kmart, Target, Big W</li>
          <li><strong>Fashion:</strong> 100+ specialty stores including major chains</li>
          <li><strong>Electronics:</strong> JB Hi-Fi, Harvey Norman, Officeworks</li>
          <li><strong>Homewares:</strong> Spotlight, Anaconda, BCF</li>
          <li><strong>Food court:</strong> 20+ restaurants and cafes</li>
          <li><strong>Services:</strong> Banks, Australia Post, newsagents</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🛒 Capalaba Park & Retail Precinct
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Bunnings Warehouse:</strong> Major hardware and trade supplies</li>
          <li><strong>Automotive:</strong> Supercheap Auto, Repco, Autobarn, car dealerships</li>
          <li><strong>Furniture:</strong> Harvey Norman, Fantastic Furniture, Freedom</li>
          <li><strong>Homemaker:</strong> Bed Bath N' Table, Adairs, pet stores</li>
          <li><strong>Gym & fitness:</strong> Anytime Fitness, Jetts, F45</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🎬 Entertainment & Leisure
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Capalaba Central Cinemas:</strong> Event Cinemas complex with 10+ screens</li>
          <li><strong>Restaurants:</strong> Modern Australian, Asian fusion, Italian, Mexican</li>
          <li><strong>Fast food:</strong> McDonald's, Hungry Jack's, KFC, Subway, Guzman y Gomez</li>
          <li><strong>Cafes:</strong> Specialty coffee, brunch destinations</li>
          <li><strong>Bowling:</strong> Strike Bowling, arcade games</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🏥 Medical & Health Services
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Medical centres:</strong> Multiple GP clinics (bulk billing options)</li>
          <li><strong>Specialists:</strong> Dentists, orthodontists, skin clinics</li>
          <li><strong>Allied health:</strong> Physio, chiro, podiatry, psychology</li>
          <li><strong>Pharmacies:</strong> Chemist Warehouse, Priceline, Terry White</li>
          <li><strong>Pathology:</strong> Sullivan Nicolaides, QML</li>
          <li><strong>Optical:</strong> Specsavers, OPSM</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🎓 Education
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Primary schools:</strong> Capalaba State School, St Rita's Catholic School</li>
          <li><strong>Secondary schools:</strong> Capalaba State College (nearby)</li>
          <li><strong>Early childhood:</strong> Numerous childcare centres and kindergartens</li>
          <li><strong>TAFE:</strong> Training facilities nearby (Cleveland campus)</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🚗 Transport & Access
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Brisbane CBD:</strong> 22km (25-30 min drive via M1 motorway)</li>
          <li><strong>Bus services:</strong> Major TransLink hub with routes to Cleveland, Victoria Point, Brisbane</li>
          <li><strong>To Redland Bay ferry:</strong> 18km (20-25 min drive)</li>
          <li><strong>Parking:</strong> Abundant free parking at all shopping centres</li>
          <li><strong>Easy M1 access:</strong> Direct motorway connection</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🏠 Real Estate
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Median house price:</strong> $750,000-$900,000 (2026)</li>
          <li><strong>Units/townhouses:</strong> $450,000-$600,000</li>
          <li><strong>Rentals:</strong> $500-$700/week for houses, $400-$550 for units</li>
          <li><strong>Popular with:</strong> Families, professionals, first-home buyers</li>
          <li><strong>Proximity to employment:</strong> Many businesses and industrial areas nearby</li>
        </ul>

        <div style={{ background: '#fef3c7', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #d97706', marginTop: '2rem' }}>
          <h4 style={{ fontSize: 'clamp(1.1rem, 2.7vw, 1.2rem)', fontWeight: 600, color: '#78350f', marginBottom: '0.75rem' }}>
            💡 Why Bay Islands Residents Visit Capalaba
          </h4>
          <p style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)', lineHeight: 1.7, color: '#78350f' }}>
              <strong>Widest retail selection:</strong> More stores than any other Redlands location - one-stop shopping for furniture, electronics, homewares, fashion, and trade supplies.
              <br /><br />
              <strong>Entertainment destination:</strong> Cinemas, bowling, diverse dining make it popular for family outings when on mainland.
              <br /><br />
              <strong>Easy access from Brisbane:</strong> Many island workers commuting to/from Brisbane stop at Capalaba (right off M1 motorway).
            </p>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #d97706' }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
            🔗 Related Resources
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
            <li><a href="/areas/mainland/victoria-point" style={{ color: '#d97706', textDecoration: 'underline' }}>Victoria Point (alternative shopping)</a></li>
            <li><a href="/areas/mainland/cleveland" style={{ color: '#d97706', textDecoration: 'underline' }}>Cleveland (government services)</a></li>
            <li><a href="/areas/mainland/redland-bay" style={{ color: '#d97706', textDecoration: 'underline' }}>Redland Bay (ferry terminal)</a></li>
            <li><a href="/islands" style={{ color: '#d97706', textDecoration: 'underline' }}>Bay Islands</a></li>
            <li><a href="/directory?location=capalaba" style={{ color: '#d97706', textDecoration: 'underline' }}>Capalaba Directory</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
