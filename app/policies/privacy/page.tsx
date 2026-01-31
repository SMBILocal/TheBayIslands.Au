export default function PrivacyPolicy() {
  return (
    <div style={{display: 'grid', gap: 24}}>
      <section>
        <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Privacy Policy</h2>
        <p style={{color: '#475569', marginBottom: 12}}>thebayislands.au ("we," "us," "our") operated by SMBI Local is committed to protecting your privacy in compliance with the Australian Privacy Act 1988, Privacy Amendment (Notifiable Data Breaches) Act 2017, and applicable international standards including GDPR where relevant.</p>
        <p style={{color: '#475569'}}>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and services.</p>
      </section>

      <section>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Information We Collect</h3>
        <p style={{color: '#475569', marginBottom: 12}}><strong>Personal Information:</strong></p>
        <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
          <li>Name, email address, phone number, business name</li>
          <li>Business address and trading hours (for directory listings)</li>
          <li>Payment information (processed securely by Stripe - we do not store full card details)</li>
          <li>Profile photos, business logos, and uploaded images</li>
          <li>Communication preferences and subscription settings</li>
        </ul>
        
        <p style={{color: '#475569', marginBottom: 12, marginTop: 16}}><strong>Automatically Collected Information:</strong></p>
        <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
          <li>IP address, browser type, operating system</li>
          <li>Pages visited, time spent, click patterns</li>
          <li>Referral source and exit pages</li>
          <li>Device identifiers and mobile network information</li>
          <li>Geo-location data (with your consent)</li>
        </ul>

        <p style={{color: '#475569', marginBottom: 12, marginTop: 16}}><strong>User-Generated Content:</strong></p>
        <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
          <li>Business listings, classifieds, job postings, event descriptions</li>
          <li>Comments, reviews, and ratings</li>
          <li>Messages and support communications</li>
          <li>Photos and videos uploaded to listings</li>
        </ul>
      </section>

      <section>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>How We Use Your Information</h3>
        <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
          <li>Provide, operate, and maintain our directory, marketplace, and community services</li>
          <li>Process transactions, subscriptions, and billing</li>
          <li>Send transactional emails (receipts, account updates, password resets)</li>
          <li>Send promotional communications (only with explicit consent - you can opt out anytime)</li>
          <li>Respond to customer service requests and support inquiries</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Understand and analyze usage trends and preferences</li>
          <li>Prevent fraud, monitor for suspicious activity, and enhance security</li>
          <li>Comply with legal obligations and enforce our Terms of Service</li>
          <li>Develop new features, products, and services</li>
        </ul>
      </section>

      <section>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Your Rights Under Australian Privacy Law</h3>
        <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
          <li><strong>Access:</strong> Request a copy of your personal information</li>
          <li><strong>Correction:</strong> Update or correct inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
          <li><strong>Restriction:</strong> Object to certain processing activities</li>
          <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
          <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
          <li><strong>Complaint:</strong> Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
        </ul>
        <p style={{color: '#475569', marginTop: 12}}>To exercise these rights, contact: <strong>privacy@thebayislands.au</strong></p>
      </section>

      <section>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Data Security & Retention</h3>
        <p style={{color: '#475569', marginBottom: 12}}>We implement industry-standard security measures:</p>
        <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
          <li>TLS/SSL encryption for data in transit</li>
          <li>Encrypted storage for sensitive data at rest</li>
          <li>Regular security audits and penetration testing</li>
          <li>Least-privilege access controls and authentication</li>
          <li>Audit logging of administrative actions</li>
          <li>Data backup and disaster recovery procedures</li>
        </ul>
      </section>
    </div>
  )
}
