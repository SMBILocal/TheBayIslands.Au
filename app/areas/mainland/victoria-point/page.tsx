import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Victoria Point - Major Shopping & Services Hub',
  description: 'Victoria Point is a major Redlands shopping and services hub with Woolworths, medical centres, restaurants, and transit connections. Key mainland suburb for Bay Islands residents. Population 14,000.',
  keywords: [
    'Victoria Point',
    'Victoria Point shopping',
    'Victoria Point Queensland',
    'Lakeside shopping centre',
    'Victoria Point medical',
    'Redlands shopping',
    'mainland services SMBI',
    'Victoria Point High School'
  ],
});

export default function VictoriaPointPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
            Victoria Point
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2.8vw, 1.5rem)', lineHeight: 1.6, maxWidth: '800px', opacity: 0.95 }}>
            Major Redlands shopping and services hub with Lakeside Shopping Centre, medical facilities, schools, and connections to Bay Islands. Population 14,000.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              🛍️ Major Shopping Centre
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              📍 32km from Brisbane
            </span>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.95rem' }}>
              👨‍👩‍👧‍👦 Population: 14,000
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1a202c', marginBottom: '1.5rem' }}>
          Welcome to Victoria Point
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
          Victoria Point is the Redlands' premier shopping and services destination, serving mainland residents and Bay Island communities with comprehensive retail, medical, dining, and educational facilities.
        </p>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🛍️ Victoria Point Lakeside Shopping Centre
        </h3>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1rem' }}>
          The region's largest shopping complex features:
        </p>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Supermarkets:</strong> Woolworths, Coles, ALDI</li>
          <li><strong>Department stores:</strong> Kmart, Target, Big W</li>
          <li><strong>Specialty retail:</strong> 80+ stores including fashion, electronics, homewares</li>
          <li><strong>Food court:</strong> 15+ restaurants and cafes</li>
          <li><strong>Entertainment:</strong> Cinema complex, arcade</li>
          <li><strong>Services:</strong> Banks, Australia Post, medical centres</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🏥 Medical & Healthcare
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Medical centres:</strong> Multiple GP clinics (bulk billing available)</li>
          <li><strong>Specialists:</strong> Dentists, orthodontists, optometrists</li>
          <li><strong>Allied health:</strong> Physiotherapy, chiropractic, podiatry, psychology</li>
          <li><strong>Pharmacies:</strong> Chemist Warehouse, Terry White, Amcal</li>
          <li><strong>Pathology:</strong> Blood tests, health screening</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🎓 Education
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Victoria Point State High School:</strong> 1,800+ students, comprehensive secondary education</li>
          <li><strong>Primary schools:</strong> Victoria Point State School, Sheldon College</li>
          <li><strong>Island student access:</strong> Integrated ferry+bus service for SMBI students</li>
          <li><strong>Private schools:</strong> Faith Lutheran College nearby</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🍽️ Dining & Food
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Restaurants:</strong> Chinese, Thai, Indian, Japanese, Italian, Mexican</li>
          <li><strong>Fast food:</strong> McDonald's, KFC, Subway, Nando's, Guzman y Gomez</li>
          <li><strong>Cafes:</strong> Coffee culture, brunch spots, bakeries</li>
          <li><strong>Takeaway:</strong> Pizza, fish & chips, kebabs</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🏠 Real Estate
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Median house price:</strong> $700,000-$900,000 (2026)</li>
          <li><strong>Units/townhouses:</strong> $450,000-$650,000</li>
          <li><strong>Rentals:</strong> $500-$700/week for houses</li>
          <li><strong>Popular with:</strong> Families, professionals, retirees</li>
        </ul>

        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
          🚗 Transport
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Brisbane CBD:</strong> 32km (35-40 min drive via M1)</li>
          <li><strong>Bus services:</strong> Regular TransLink routes to Cleveland, Capalaba, Brisbane</li>
          <li><strong>School transport:</strong> Integrated ferry+bus for island students</li>
          <li><strong>To Redland Bay ferry:</strong> 5km (10 min drive), bus connections available</li>
        </ul>

        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #059669' }}>
          <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
            🔗 Related Resources
          </h3>
          <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
            <li><a href="/areas/mainland/redland-bay" style={{ color: '#059669', textDecoration: 'underline' }}>Redland Bay (ferry terminal)</a></li>
            <li><a href="/areas/mainland/cleveland" style={{ color: '#059669', textDecoration: 'underline' }}>Cleveland (Redlands CBD)</a></li>
            <li><a href="/islands" style={{ color: '#059669', textDecoration: 'underline' }}>Bay Islands</a></li>
            <li><a href="/directory?location=victoria-point" style={{ color: '#059669', textDecoration: 'underline' }}>Victoria Point Directory</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
