import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Cleveland - Redlands CBD & Government Services',
  description: 'Cleveland is the Redlands CBD with Redland City Council, Redland Hospital, government services, schools, and waterfront dining. Major mainland hub for Bay Islands residents. Population 13,500.',
  keywords: [
    'Cleveland',
    'Cleveland Queensland',
    'Redland City Council',
    'Redland Hospital',
    'Cleveland CBD',
    'Cleveland State High School',
    'Redlands government services',
    'Cleveland waterfront'
  ],
});

export default function ClevelandPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
            Cleveland
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2.8vw, 1.5rem)', lineHeight: 1.6, maxWidth: '800px', opacity: 0.95 }}>
            Redlands CBD - home to Council, Redland Hospital, government services, waterfront dining, and administrative hub for Bay Islands residents. Population 13,500.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              🏛️ Redlands CBD
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              📍 28km from Brisbane
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              👨‍👩‍👧‍👦 Population: 13,500
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem' }}>
          Welcome to Cleveland
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
          Cleveland is the administrative and commercial heart of Redland City, serving as the primary government services hub for the Southern Moreton Bay Islands and surrounding mainland communities.
        </p>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🏛️ Government & Council Services
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Redland City Council Headquarters:</strong> Planning, building approvals, rates, waste services</li>
          <li><strong>Civic Centre:</strong> Customer service centre, libraries, community spaces</li>
          <li><strong>Queensland Government offices:</strong> Centrelink, Queensland Health, TMR</li>
          <li><strong>Courts:</strong> Magistrates Court, childrens court</li>
          <li><strong>Police station:</strong> Redlands District Police HQ</li>
          <li><strong>Service Queensland:</strong> Licenses, registrations, permits</li>
        </ul>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
          Island residents frequently visit Cleveland for council business, building permits, and government services.
        </p>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🏥 Redland Hospital & Healthcare
        </h3>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
          The region's major hospital serving all Bay Islands:
        </p>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Emergency department:</strong> 24/7 emergency care</li>
          <li><strong>Inpatient services:</strong> Surgery, medical wards, maternity</li>
          <li><strong>Outpatients:</strong> Specialist clinics, allied health, diagnostics</li>
          <li><strong>Mental health:</strong> Crisis team, counseling services</li>
          <li><strong>Island access:</strong> Ambulance ferry transport for emergencies</li>
        </ul>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
          <strong>Additional medical:</strong> Numerous GP clinics, specialists (cardiologists, orthopedics, etc.), pathology, radiology.
        </p>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🎓 Education
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Cleveland State High School:</strong> 1,200+ students, academic excellence, diverse programs</li>
          <li><strong>Primary schools:</strong> Cleveland District State High School, St Mary's Catholic Primary</li>
          <li><strong>TAFE Queensland East Coast:</strong> Vocational training, apprenticeships</li>
          <li><strong>Island student access:</strong> Integrated ferry+bus service (45-55 min from islands)</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🛍️ Shopping & Retail
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Cleveland CBD:</strong> Specialty shops, boutiques, services</li>
          <li><strong>Supermarkets:</strong> Woolworths, IGA</li>
          <li><strong>Hardware:</strong> Bunnings Warehouse</li>
          <li><strong>Homewares:</strong> Spotlight, Kmart (nearby)</li>
          <li><strong>Automotive:</strong> Car dealerships, auto parts, service centres</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🍽️ Dining & Waterfront
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Cleveland Point waterfront:</strong> Cafes, restaurants with Moreton Bay views</li>
          <li><strong>Cuisine variety:</strong> Modern Australian, Asian, Italian, seafood, pub meals</li>
          <li><strong>Cafes:</strong> Coffee culture, brunch spots along main street</li>
          <li><strong>Pubs & clubs:</strong> Grand View Hotel, Cleveland Leagues Club</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🏛️ Culture & Recreation
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Cleveland Showgrounds:</strong> Annual agricultural show, markets, events</li>
          <li><strong>Lighthouse & Point Halloran:</strong> Historic lighthouse, walking trails, bay views</li>
          <li><strong>Raby Bay:</strong> Marina, canal estate, waterfront dining</li>
          <li><strong>Wellington Point:</strong> Beach, parklands, walking/cycling tracks</li>
          <li><strong>Libraries:</strong> Cleveland Library & Knowledge Centre</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🚗 Transport
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Brisbane CBD:</strong> 28km (30-35 min drive via M1)</li>
          <li><strong>Train:</strong> Cleveland railway station - direct to Brisbane (55 min)</li>
          <li><strong>Bus services:</strong> Extensive TransLink network</li>
          <li><strong>To Redland Bay ferry:</strong> 12km (15 min drive)</li>
          <li><strong>Island student transport:</strong> Integrated ferry+bus service</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🏠 Real Estate
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Median house price:</strong> $750,000-$950,000 (2026)</li>
          <li><strong>Waterfront properties:</strong> $1M-$2M+ (Raby Bay, Cleveland Point)</li>
          <li><strong>Units:</strong> $400,000-$600,000</li>
          <li><strong>Rentals:</strong> $500-$750/week</li>
        </ul>

        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #dc2626' }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
            🔗 Related Resources
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
            <li><a href="/areas/mainland/victoria-point" style={{ color: '#dc2626', textDecoration: 'underline' }}>Victoria Point (shopping)</a></li>
            <li><a href="/areas/mainland/redland-bay" style={{ color: '#dc2626', textDecoration: 'underline' }}>Redland Bay (ferry terminal)</a></li>
            <li><a href="/islands" style={{ color: '#dc2626', textDecoration: 'underline' }}>Bay Islands</a></li>
            <li><a href="/articles/community-infrastructure" style={{ color: '#dc2626', textDecoration: 'underline' }}>Community Services Guide</a></li>
            <li><a href="/directory?location=cleveland" style={{ color: '#dc2626', textDecoration: 'underline' }}>Cleveland Directory</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
