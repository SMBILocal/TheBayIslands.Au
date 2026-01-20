export default function AboutSmbiLocalPage() {
  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '48px 20px', lineHeight: 1.7}}>
      <p style={{color: '#0ea5e9', fontWeight: 700, letterSpacing: 0.2}}>About SMBI Local</p>
      <h1 style={{fontSize: 32, fontWeight: 700, margin: '8px 0'}}>Who powers thebayislands.au</h1>
      <p style={{color: '#475569'}}>SMBI Local (smbilocal.au) is the community-led group that created and operates thebayislands.au. SMBI Local Ltd (charitable) handles donations, fundraising, and commercial transactions on behalf of the community.</p>

      <section style={{marginTop: 24, border: '1px solid #e2e8f0', borderRadius: 12, padding: 20, background: '#fff'}}>
        <h2 style={{fontSize: 20, fontWeight: 700, marginBottom: 8}}>Mission</h2>
        <p style={{color: '#475569'}}>Serve Southern Moreton Bay Islands by connecting residents and businesses, improving local visibility, and reinvesting in community outcomes.</p>
      </section>

      <section style={{marginTop: 16, border: '1px solid #e2e8f0', borderRadius: 12, padding: 20, background: '#fff'}}>
        <h2 style={{fontSize: 20, fontWeight: 700, marginBottom: 8}}>How we operate</h2>
        <ul style={{color: '#475569', paddingLeft: 20}}>
          <li>thebayislands.au product and content are run by SMBI Local.</li>
          <li>SMBI Local Ltd (charity) receives donations, manages raffles, and handles payments for upgrades and fundraising.</li>
          <li>Community-first: "serving each other in the SMBI to help each other."</li>
        </ul>
      </section>

      <section style={{marginTop: 16, border: '1px solid #e2e8f0', borderRadius: 12, padding: 20, background: '#fff'}}>
        <h2 style={{fontSize: 20, fontWeight: 700, marginBottom: 8}}>Get involved</h2>
        <ul style={{color: '#475569', paddingLeft: 20}}>
          <li><a href="/donate" style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 700}}>Donate</a> funds or sponsor prizes for monthly raffles.</li>
          <li>Volunteer skills (content, moderation, outreach, events).</li>
          <li>Email <a href="mailto:donations@smbilocal.au" style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 700}}>donations@smbilocal.au</a> to partner.</li>
        </ul>
      </section>

      <section style={{marginTop: 16}}>
        <h2 style={{fontSize: 20, fontWeight: 700, marginBottom: 8}}>Acknowledgement</h2>
        <p style={{color: '#475569'}}>We acknowledge the Quandamooka people as the Traditional Custodians of the lands and waters of the Southern Moreton Bay Islands — including Canaipa/Kanopa (Russell Island) — and pay our respects to Elders past and present.</p>
      </section>
    </main>
  );
}
