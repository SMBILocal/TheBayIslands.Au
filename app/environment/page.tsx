export default function EnvironmentPage() {
  return (
    <main style={{maxWidth: 900, margin: '0 auto', padding: '48px 20px', lineHeight: 1.6}}>
      <h1 style={{fontSize: 32, fontWeight: 700, marginBottom: 16}}>Environmental & Community Commitment</h1>
      <p style={{color: '#475569', marginBottom: 24}}>Last updated: January 2026</p>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Hosting & Efficiency</h2>
        <ul style={{paddingLeft: 20, color: '#475569'}}>
          <li>Prioritize cloud providers with carbon reporting and offsets.</li>
          <li>Use CDN caching, image optimization, and data lifecycle policies to reduce footprint.</li>
        </ul>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Community Standards</h2>
        <p>Support local businesses, enforce anti-harassment and anti-misinformation policies, and highlight sustainable practices in listings where provided.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Reporting</h2>
        <p>We plan to publish an annual summary of sustainability efforts and community impact as data becomes available.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Contact</h2>
        <p>environment@thebayislands.au</p>
      </section>
    </main>
  );
}
