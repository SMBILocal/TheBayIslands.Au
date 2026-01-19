export default function TermsPage() {
  return (
    <main style={{maxWidth: 900, margin: '0 auto', padding: '48px 20px', lineHeight: 1.6}}>
      <h1 style={{fontSize: 32, fontWeight: 700, marginBottom: 16}}>Terms of Service</h1>
      <p style={{color: '#475569', marginBottom: 24}}>Last updated: January 2026</p>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Overview</h2>
        <p>These terms govern your use of thebayislands.au, including the directory, classifieds, jobs, events, and upgrade plans.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Accounts & Listings</h2>
        <ul style={{paddingLeft: 20, color: '#475569'}}>
          <li>Provide accurate information and keep credentials secure.</li>
          <li>Only publish listings you own or are authorized to manage; we may moderate or remove content.</li>
          <li>Minimum age 16. Respect intellectual property and privacy rights.</li>
        </ul>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Billing & Renewals</h2>
        <ul style={{paddingLeft: 20, color: '#475569'}}>
          <li>Subscriptions are available monthly, 6-monthly, or annually with applicable discounts for longer terms.</li>
          <li>Plans auto-renew on the cadence you choose; you can cancel anytime to stop future renewals.</li>
          <li>Proration follows Stripe defaults where applicable; see Refund & Cancellation Policy for details.</li>
        </ul>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Acceptable Use</h2>
        <p>No spam, scraping, harassment, or illegal activity. We may suspend accounts that violate these rules.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Liability & Governing Law</h2>
        <p>Service is provided "as is". To the maximum extent permitted by law, liability is limited to fees paid in the prior 12 months. Governing law: Queensland, Australia.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Contact</h2>
        <p>support@thebayislands.au</p>
      </section>
    </main>
  );
}
