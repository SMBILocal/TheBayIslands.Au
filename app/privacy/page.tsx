export default function PrivacyPage() {
  return (
    <main style={{maxWidth: 900, margin: '0 auto', padding: '48px 20px', lineHeight: 1.6}}>
      <h1 style={{fontSize: 32, fontWeight: 700, marginBottom: 16}}>Privacy Policy</h1>
      <p style={{color: '#475569', marginBottom: 24}}>Last updated: January 2026</p>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Data We Collect</h2>
        <ul style={{paddingLeft: 20, color: '#475569'}}>
          <li>Account details (name, email, phone) and business listings you create.</li>
          <li>Usage data (device/IP, pages viewed), analytics events, and support communications.</li>
          <li>Payments handled by Stripe; we do not store card numbers.</li>
        </ul>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>How We Use Data</h2>
        <p>To deliver directory and marketplace services, process billing, prevent fraud, provide support, and improve the product.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Sharing</h2>
        <p>We share data with processors (Stripe, Supabase, analytics) under contracts, and when required by law. We do not sell personal data.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Your Rights</h2>
        <ul style={{paddingLeft: 20, color: '#475569'}}>
          <li>Access, correction, deletion, restriction, and objection where applicable.</li>
          <li>Opt out of marketing; manage cookie preferences for non-essential cookies.</li>
          <li>Request data export or deletion via privacy@thebayislands.au.</li>
        </ul>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Security</h2>
        <p>Encryption in transit, least-privilege access, audit logs for admin actions. Notify us immediately of suspected account compromise.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Contact</h2>
        <p>privacy@thebayislands.au</p>
      </section>
    </main>
  );
}
