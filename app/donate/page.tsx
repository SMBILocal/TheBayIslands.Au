export default function DonatePage() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '48px 20px', lineHeight: 1.7}}>
      <header style={{marginBottom: 32}}>
        <p style={{color: '#0ea5e9', fontWeight: 700, letterSpacing: 0.2}}>Support SMBI Local</p>
        <h1 style={{fontSize: 32, fontWeight: 700, margin: '8px 0'}}>Donate to the Bay Islands community</h1>
        <p style={{color: '#475569'}}>SMBI Local (smbilocal.au) powers thebayislands.au. SMBI Local Ltd (charitable) manages donations, raffles, and community fundraising to serve Southern Moreton Bay Islands.</p>
      </header>

      <section style={{marginBottom: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16}}>
        {[{
          title: 'Donate funds',
          body: 'Support hosting, outreach, and community programs. One-time or recurring gifts welcome.'
        }, {
          title: 'Sponsor prizes or gift cards',
          body: 'Provide vouchers, hampers, or prizes for monthly raffles that give back to local residents.'
        }, {
          title: 'Volunteer skills & time',
          body: 'Help with content, moderation, outreach, design, or events. Community-first ethos.'
        }].map(card => (
          <div key={card.title} style={{border: '1px solid #e2e8f0', borderRadius: 12, padding: 20, background: '#fff'}}>
            <h2 style={{fontSize: 18, fontWeight: 700, marginBottom: 8}}>{card.title}</h2>
            <p style={{color: '#475569'}}>{card.body}</p>
          </div>
        ))}
      </section>

      <section style={{marginBottom: 32, border: '1px solid #e2e8f0', borderRadius: 12, padding: 24, background: '#f8fafc'}}>
        <h2 style={{fontSize: 20, fontWeight: 700, marginBottom: 12}}>Make a contribution</h2>
        <p style={{color: '#475569'}}>Email donations@smbilocal.au with the amount or prize you wish to contribute, or fill the quick pledge form below. We will confirm details and provide receipts where applicable.</p>
        <form style={{display: 'grid', gap: 12, marginTop: 12}}>
          <div>
            <label style={{display: 'block', fontWeight: 600, marginBottom: 4}}>Name</label>
            <input type="text" name="name" placeholder="Your name" style={{width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 8}} />
          </div>
          <div>
            <label style={{display: 'block', fontWeight: 600, marginBottom: 4}}>Email</label>
            <input type="email" name="email" placeholder="you@example.com" style={{width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 8}} />
          </div>
          <div>
            <label style={{display: 'block', fontWeight: 600, marginBottom: 4}}>Contribution type</label>
            <select name="type" style={{width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 8}}>
              <option>One-time donation</option>
              <option>Recurring donation</option>
              <option>Prize / gift card sponsorship</option>
              <option>Volunteer</option>
            </select>
          </div>
          <div>
            <label style={{display: 'block', fontWeight: 600, marginBottom: 4}}>Details</label>
            <textarea name="details" placeholder="Amount, prize details, or how you’d like to help" style={{width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 8, minHeight: 120}} />
          </div>
          <a href="mailto:donations@smbilocal.au?subject=SMBI%20Local%20Pledge" style={{display: 'inline-block', padding: '12px 16px', background: '#0ea5e9', color: '#fff', borderRadius: 8, fontWeight: 700, textDecoration: 'none'}}>Submit pledge via email</a>
          <p style={{color: '#475569', fontSize: 14}}>Email us your pledge details. Receipts are available for eligible donations.</p>
        </form>
      </section>

      <section style={{marginBottom: 16}}>
        <h2 style={{fontSize: 20, fontWeight: 700, marginBottom: 8}}>Acknowledgement</h2>
        <p style={{color: '#475569'}}>We acknowledge the Quandamooka people as the Traditional Custodians of the lands and waters of Southern Moreton Bay Islands—including Canaipa/Kanopa (Russell Island)—and pay our respects to Elders past and present.</p>
      </section>
    </main>
  );
}
