export default function RefundsPage() {
  return (
    <main style={{maxWidth: 900, margin: '0 auto', padding: '48px 20px', lineHeight: 1.6}}>
      <h1 style={{fontSize: 32, fontWeight: 700, marginBottom: 16}}>Refund & Cancellation Policy</h1>
      <p style={{color: '#475569', marginBottom: 24}}>Last updated: January 2026</p>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Plans & Billing Cadence</h2>
        <p>Paid tiers are available monthly, 6-monthly, and annually. Discounts apply to 6-month and annual plans where advertised.</p>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Cancellations</h2>
        <ul style={{paddingLeft: 20, color: '#475569'}}>
          <li>You can cancel anytime; access continues until the end of the current period.</li>
          <li>Downgrades take effect at the next renewal; features may reduce.</li>
          <li>Failed payments enter a 7-day grace period before downgrading to free.</li>
        </ul>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Refunds</h2>
        <ul style={{paddingLeft: 20, color: '#475569'}}>
          <li>No automatic refunds for unused time unless required by law.</li>
          <li>Goodwill: within 7 days for annual/6-month plans if no meaningful usage (admin review).</li>
          <li>Contact billing@thebayislands.au before initiating chargebacks.</li>
        </ul>
      </section>
      <section style={{marginBottom: 24}}>
        <h2 style={{fontSize: 20, fontWeight: 600}}>Contact</h2>
        <p>billing@thebayislands.au</p>
      </section>
    </main>
  );
}
