export default function CookiesPage() {
  return (
    <main style={{maxWidth: 900, margin: '0 auto', padding: '48px 20px', lineHeight: 1.6}}>
      <h1 style={{fontSize: 32, fontWeight: 700, marginBottom: 16}}>Cookies Policy</h1>
      <p style={{color: '#475569', marginBottom: 24}}>Last updated: January 2026</p>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Types of Cookies</h2>
        <ul style={{paddingLeft: 20, color: '#475569'}}>
          <li>Essential: authentication, session management, security.</li>
          <li>Preference: remembering choices like location or filters.</li>
          <li>Analytics: understanding site usage (anonymized where possible).</li>
          <li>Marketing (optional): only used with consent where required.</li>
        </ul>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Control</h2>
        <p>Manage cookies through your browser settings and in-product preferences (where available). You can withdraw consent for non-essential cookies at any time.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Data Collected</h2>
        <p>Page views, device details, referrers, and interaction data. We avoid collecting personal data in analytics wherever possible.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Contact</h2>
        <p>privacy@thebayislands.au</p>
      </section>
    </main>
  );
}
