import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Redland Bay - Gateway to the Bay Islands',
  description: 'Redland Bay is the ferry gateway to the Southern Moreton Bay Islands. Home to the marina, boat ramps, shopping, cafes, and mainland services for island residents. Population 15,000.',
  keywords: [
    'Redland Bay',
    'Redland Bay Marina',
    'Redland Bay ferry terminal',
    'Redland Bay Queensland',
    'Redland Bay shopping',
    'gateway to islands',
    'SMBI mainland',
    'island ferry access'
  ],
});

export default function RedlandBayPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
            Redland Bay
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2.8vw, 1.5rem)', lineHeight: 1.6, maxWidth: '800px', opacity: 0.95 }}>
            Gateway to the Southern Moreton Bay Islands - ferry terminal, marina, shopping, and mainland services for island communities. Population 15,000.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              🚢 Ferry Terminal & Marina
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              📍 35km from Brisbane
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              👨‍👩‍👧‍👦 Population: 15,000
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem' }}>
          Welcome to Redland Bay
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
          Redland Bay is the vital connection point between the mainland and the Southern Moreton Bay Islands. Home to the <strong>Redland Bay Marina</strong> - the primary ferry terminal for Russell, Macleay, Lamb, and Karragarra Islands - this waterfront suburb serves as the mainland hub for thousands of island residents and visitors.
        </p>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🚢 Redland Bay Marina & Ferry Services
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Ferry operators:</strong> Stradbroke Ferries, TransLink SeaLink</li>
          <li><strong>Daily services:</strong> 15-25 ferries to SMBI islands</li>
          <li><strong>Parking:</strong> Short-term ($8/day) and long-term ($18/day) options</li>
          <li><strong>Facilities:</strong> Toilets, drink fountains, sheltered waiting areas</li>
          <li><strong>Café & convenience:</strong> Coffee, snacks, newspapers</li>
          <li><strong>Ride-share zone:</strong> Uber/taxi pickup area</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🛒 Shopping & Services
        </h3>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
          Redland Bay Shopping Village and surrounding area offers:
        </p>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Supermarkets:</strong> Woolworths, IGA</li>
          <li><strong>Restaurants & takeaway:</strong> Chinese, Thai, Indian, fish & chips, pizza, cafes</li>
          <li><strong>Medical:</strong> Redland Bay Medical Centre, dental, physio</li>
          <li><strong>Pharmacy:</strong> Chemist Warehouse, Blooms</li>
          <li><strong>Banking:</strong> ATMs, bank branches</li>
          <li><strong>Hardware:</strong> Mitre 10</li>
          <li><strong>Liquor:</strong> Bottle shops</li>
          <li><strong>Pet services:</strong> Vet, pet supplies</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🏠 Real Estate & Living
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Median house price:</strong> $650,000-$850,000 (2026)</li>
          <li><strong>Waterfront premium:</strong> Marina/bay views $1M+</li>
          <li><strong>Rentals:</strong> $450-$650/week for family homes</li>
          <li><strong>Popular with:</strong> Island workers, boaties, retirees, families</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🚗 Transport & Access
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Road access:</strong> 35km from Brisbane CBD via M1 motorway (35-45 min drive)</li>
          <li><strong>Bus services:</strong> TransLink routes to Victoria Point, Cleveland</li>
          <li><strong>School transport:</strong> Integrated ferry+bus for island students</li>
        </ul>

        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginTop: '2rem' }}>
          For complete ferry schedules, see our <a href="/articles/transport-on-islands" style={{ color: '#1e40af', textDecoration: 'underline' }}>Transport Guide</a>.
        </p>

        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #1e40af' }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
            🔗 Related Resources
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
            <li><a href="/islands" style={{ color: '#1e40af', textDecoration: 'underline' }}>Southern Moreton Bay Islands</a></li>
            <li><a href="/areas/mainland/victoria-point" style={{ color: '#1e40af', textDecoration: 'underline' }}>Victoria Point (nearby)</a></li>
            <li><a href="/articles/transport-on-islands" style={{ color: '#1e40af', textDecoration: 'underline' }}>Ferry Timetables</a></li>
            <li><a href="/directory?location=redland-bay" style={{ color: '#1e40af', textDecoration: 'underline' }}>Redland Bay Directory</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
