'use client'

import { useState } from 'react'

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('agreement')

  const sections = [
    { id: 'agreement', label: 'Agreement to Terms' },
    { id: 'definitions', label: 'Definitions' },
    { id: 'services', label: 'Our Services' },
    { id: 'accounts', label: 'Accounts & Registration' },
    { id: 'listings', label: 'Listing Guidelines' },
    { id: 'payments', label: 'Payments & Billing' },
    { id: 'intellectual', label: 'Intellectual Property' },
    { id: 'conduct', label: 'User Conduct' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'termination', label: 'Termination' },
    { id: 'disputes', label: 'Dispute Resolution' },
    { id: 'changes', label: 'Changes to Terms' },
    { id: 'contact', label: 'Contact Us' },
  ]

  const renderContent = () => {
    switch(activeSection) {
      case 'agreement':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Agreement to Terms of Service</h2>
              <p style={{color: '#475569', marginBottom: 12}}>By accessing, browsing, or using thebayislands.au ("Site") and its associated services, features, and content (collectively, "Services"), you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use this Site or its Services.</p>
              <p style={{color: '#475569'}}>These Terms constitute a legally binding agreement between you ("User," "you," or "your") and SMBI Local, trading as thebayislands.au ("Company," "we," "us," or "our"), regarding your access to and use of the Site and Services.</p>
            </section>
          </div>
        )
      
      case 'definitions':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Definitions</h2>
              <ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: 12}}>
                <li><strong>"Account"</strong>: Your registered user profile with credentials (email/password)</li>
                <li><strong>"Listing"</strong>: Any content you publish on thebayislands.au, including directory entries, classifieds, jobs, events, or articles</li>
                <li><strong>"Premium Services"</strong>: Paid subscription tiers (Basic, Plus, Premium) with enhanced features and distribution</li>
                <li><strong>"Content"</strong>: All text, images, videos, descriptions, and media you submit</li>
                <li><strong>"User-Generated Content"</strong>: Listings, comments, reviews, and feedback created by Users</li>
                <li><strong>"Sensitive Data"</strong>: Personal information including email, phone, payment details, location data</li>
                <li><strong>"Bay Islands Region"</strong>: The Southern Moreton Bay Islands and surrounding mainland areas</li>
              </ul>
            </section>
          </div>
        )
      
      case 'services':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Our Services</h2>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>Service Categories</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>Business Directory:</strong> Searchable listings of local businesses with contact, hours, and premium features</li>
                <li><strong>Classifieds:</strong> Peer-to-peer marketplace for buying/selling goods and services</li>
                <li><strong>Jobs:</strong> Employment listings and job board for Bay Islands employment opportunities</li>
                <li><strong>Events:</strong> Community event calendar with event details, tickets, and promotions</li>
                <li><strong>Articles:</strong> Editorial content, guides, and community news</li>
                <li><strong>Premium Upgrades:</strong> Enhanced visibility, advanced analytics, priority support</li>
              </ul>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Service Availability</h3>
              <p style={{color: '#475569'}}>Services are provided on an "as-is" basis. We maintain the Site and Services 24/7, with scheduled maintenance communicated in advance. We aim for 99.5% availability.</p>
            </section>
          </div>
        )
      
      case 'accounts':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Accounts & Registration</h2>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>Eligibility</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>You must be at least 16 years of age to register an Account</li>
                <li>You must be a resident or represent a business operating in the Bay Islands region</li>
                <li>If registering on behalf of a business, you have authority to bind that entity</li>
              </ul>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Account Information</h3>
              <p style={{color: '#475569'}}>You agree to provide accurate, complete information. You are responsible for maintaining password confidentiality, all Account activities, notifying us of unauthorized access, and keeping information current.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Account Suspension</h3>
              <p style={{color: '#475569'}}>We reserve the right to suspend or terminate your Account if you violate these Terms or pose a risk to the Site or other Users. Suspension may be immediate if necessary for safety or legal compliance.</p>
            </section>
          </div>
        )
      
      case 'listings':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Listing Guidelines & Responsibilities</h2>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>Content Ownership</h3>
              <p style={{color: '#475569'}}>You retain all ownership rights to your Listings. By publishing, you grant thebayislands.au a worldwide, non-exclusive license to use, reproduce, and display your content on the Site.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Acceptable Listings</h3>
              <p style={{color: '#475569', marginBottom: 12}}>Your Listings must be accurate, honest, comply with all laws, not infringe IP rights, not contain inappropriate or misleading content, not disparage competitors, respect privacy, and not spam the platform.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Prohibited Content</h3>
              <p style={{color: '#475569', marginBottom: 12}}>No illegal goods/services, adult content, weapons, hate speech, phishing/malware, MLM schemes, counterfeit items, or contact harvesting.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Listing Moderation</h3>
              <p style={{color: '#475569'}}>We reserve the right to review, edit, or remove Listings that violate these Terms. Repeated violations may result in Account suspension or termination.</p>
            </section>
          </div>
        )
      
      case 'payments':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Payments, Billing & Renewals</h2>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>Payment Processing</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>All payments processed via Stripe (PCI DSS-compliant)</li>
                <li>Full card details not stored on our servers</li>
                <li>Information encrypted in transit using TLS 1.2+</li>
              </ul>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Subscription Options</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>Monthly:</strong> Full rate each month</li>
                <li><strong>6-Monthly:</strong> 10% discount</li>
                <li><strong>Annual:</strong> 20% discount</li>
              </ul>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Automatic Renewal</h3>
              <p style={{color: '#475569'}}>Subscriptions auto-renew unless cancelled 24 hours before renewal. Reminder emails sent 7 days prior.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Failed Payments</h3>
              <p style={{color: '#475569'}}>Failed charges retry up to 3 times over 7 days. After failure, your Account downgrades to free tier with notice.</p>
            </section>
          </div>
        )
      
      case 'intellectual':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Intellectual Property Rights</h2>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>Our IP</h3>
              <p style={{color: '#475569'}}>The Site, Services, logos, design, code, functionality, and trademarks are owned by or licensed to us and protected by copyright and IP laws.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Limited License</h3>
              <p style={{color: '#475569'}}>You may not reproduce, modify, reverse engineer, scrape, remove notices, or mirror the Site without permission.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>DMCA Notices</h3>
              <p style={{color: '#475569'}}>For copyright infringement claims, contact legal@thebayislands.au with identification of the copyrighted work, location of infringing material, and your contact information.</p>
            </section>
          </div>
        )
      
      case 'conduct':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Prohibited Conduct & User Obligations</h2>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>Prohibited Activities</h3>
              <p style={{color: '#475569', marginBottom: 12}}>You agree not to violate laws, engage in harassment, post hate speech, attempt unauthorized access, inject malicious code, scrape data, impersonate others, engage in phishing/spam, sell user data, or use the Site for commercial resale.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Your Responsibilities</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Maintain Account security</li>
                <li>Provide accurate information</li>
                <li>Indemnify us from liability arising from your use or violation of Terms</li>
              </ul>
            </section>
          </div>
        )
      
      case 'liability':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Limitation of Liability & Disclaimers</h2>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>Disclaimer</h3>
              <p style={{color: '#475569'}}>Services provided "as-is" without warranties. We disclaim merchantability, fitness, non-infringement, uninterrupted service, or error-free operation.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Limitation of Damages</h3>
              <p style={{color: '#475569'}}>We are not liable for indirect, incidental, special, or consequential damages, lost profits, data, or business opportunity. Our liability limited to AUD $100 or 12 months of payments, whichever is greater. Some jurisdictions do not allow this limitation.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Third-Party Content</h3>
              <p style={{color: '#475569'}}>We are not liable for User-Generated Content or third-party services. You access at your own risk.</p>
            </section>
          </div>
        )
      
      case 'termination':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Termination</h2>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>By You</h3>
              <p style={{color: '#475569'}}>Terminate anytime via account settings or contacting support@thebayislands.au. Your Account and Listings deactivate; you lose Premium access; personal data deleted per Privacy Policy; no refunds for current period.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>By Us</h3>
              <p style={{color: '#475569'}}>We may terminate immediately if you violate Terms, engage in illegal conduct, breach payment, pose a threat, or repeatedly publish prohibited content.</p>
            </section>
          </div>
        )
      
      case 'disputes':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Dispute Resolution</h2>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>Informal Resolution</h3>
              <p style={{color: '#475569'}}>Contact support@thebayislands.au with complaint details. We respond within 10 business days.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Governing Law</h3>
              <p style={{color: '#475569'}}>These Terms governed by Queensland, Australia law. You irrevocably submit to exclusive jurisdiction of Queensland courts. Legal claims must be brought within 12 months.</p>
              <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 12, marginTop: 24}}>Australian Consumer Law</h3>
              <p style={{color: '#475569'}}>Nothing excludes rights under Australian Consumer Law. If applicable, our liability limited to re-supply of services or payment of re-supply costs.</p>
            </section>
          </div>
        )
      
      case 'changes':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Changes to Terms</h2>
              <p style={{color: '#475569', marginBottom: 16}}>We may update Terms periodically via email, Site notice, or updated "Last Updated" date. Continued use constitutes acceptance. If you disagree, terminate your Account. Disputes must be raised within 30 days of notification.</p>
            </section>
          </div>
        )
      
      case 'contact':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Contact Us</h2>
              <div style={{background: '#f0f4f8', padding: 20, borderRadius: 8}}>
                <p style={{color: '#475569', marginBottom: 8}}><strong>Support:</strong> <a href="mailto:support@thebayislands.au" style={{color: '#0066b3', textDecoration: 'none'}}>support@thebayislands.au</a></p>
                <p style={{color: '#475569', marginBottom: 8}}><strong>Legal:</strong> <a href="mailto:legal@thebayislands.au" style={{color: '#0066b3', textDecoration: 'none'}}>legal@thebayislands.au</a></p>
                <p style={{color: '#475569'}}><strong>Address:</strong> SMBI Local, Bay Islands, QLD 4184, Australia</p>
              </div>
              <p style={{color: '#64748b', fontSize: 14, marginTop: 20}}><strong>Last Updated:</strong> January 21, 2026</p>
            </section>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <main style={{minHeight: '100vh', background: '#f8fafc'}}>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '40px 20px'}}>
        <h1 style={{fontSize: 42, fontWeight: 700, marginBottom: 12, color: '#0f172a'}}>Terms of Service</h1>
        <p style={{fontSize: 16, color: '#64748b', marginBottom: 40}}>Legal terms and conditions governing use of thebayislands.au</p>

        <style jsx>{`
          .terms-layout {
            display: grid;
            grid-template-columns: 250px 1fr;
            gap: 32px;
          }
          
          .terms-sidebar {
            background: white;
            border-radius: 12px;
            padding: 20px;
            height: fit-content;
            position: sticky;
            top: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          }
          
          @media (max-width: 1024px) and (orientation: portrait) {
            .terms-layout {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            
            .terms-sidebar {
              position: static;
            }
          }
          
          @media (max-width: 768px) {
            .terms-layout {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .terms-sidebar {
              position: static;
            }
          }
        `}</style>

        <div className="terms-layout">
          {/* Navigation Sidebar */}
          <div className="terms-sidebar">
            <div style={{fontWeight: 700, fontSize: 12, color: '#64748b', textTransform: 'uppercase', marginBottom: 12}}>Sections</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  style={{
                    padding: '10px 12px',
                    background: activeSection === section.id ? '#0066b3' : 'transparent',
                    color: activeSection === section.id ? 'white' : '#0f172a',
                    border: activeSection === section.id ? 'none' : '1px solid #e2e8f0',
                    borderRadius: 6,
                    cursor: 'pointer',
                    fontWeight: activeSection === section.id ? 600 : 500,
                    fontSize: 13,
                    textAlign: 'left',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.background = '#f0f4f8'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div style={{background: 'white', borderRadius: 12, padding: 40, boxShadow: '0 1px 3px rgba(0,0,0,0.08)'}}>
            {renderContent()}
          </div>
        </div>
      </div>
    </main>
  )
}
