'use client'

import { useState } from 'react'

export default function PoliciesPage() {
  const [activeSection, setActiveSection] = useState('privacy')

  const sections = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'data-protection', label: 'Data Protection & GDPR' },
    { id: 'cookies', label: 'Cookie Policy' },
    { id: 'content', label: 'Content & Community Guidelines' },
    { id: 'listings', label: 'Business Listing Policy' },
    { id: 'classifieds', label: 'Classifieds Policy' },
    { id: 'jobs', label: 'Jobs Board Policy' },
    { id: 'intellectual', label: 'Intellectual Property' },
    { id: 'refunds', label: 'Refunds & Cancellations' },
    { id: 'acceptable-use', label: 'Acceptable Use Policy' },
    { id: 'dmca', label: 'DMCA & Copyright' },
    { id: 'security', label: 'Security & Data Breach' },
    { id: 'children', label: 'Children\'s Privacy' },
    { id: 'environmental', label: 'Environmental Commitment' },
  ]

  const renderContent = () => {
    switch(activeSection) {
      case 'privacy':
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
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Data Sharing & Disclosure</h3>
              <p style={{color: '#475569', marginBottom: 12}}>We do not sell, trade, or rent your personal information. We may share information with:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>Service Providers:</strong> Stripe (payments), Supabase (database), Vercel (hosting), analytics providers - all bound by strict data processing agreements</li>
                <li><strong>Business Transfers:</strong> In the event of merger, acquisition, or asset sale</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Protection:</strong> To protect our rights, property, safety, or that of our users</li>
                <li><strong>Public Information:</strong> Business listings are publicly visible by design</li>
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
              <p style={{color: '#475569', marginTop: 12}}><strong>Retention Periods:</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Account data: Retained while account is active + 90 days after closure</li>
                <li>Financial records: 7 years (Australian taxation requirements)</li>
                <li>Marketing consent records: 3 years after withdrawal</li>
                <li>Support communications: 3 years for quality assurance</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>International Data Transfers</h3>
              <p style={{color: '#475569'}}>Your data may be transferred to and processed in countries outside Australia (primarily USA for cloud services). We ensure appropriate safeguards through standard contractual clauses and data processing agreements that meet Australian Privacy Principles.</p>
            </section>
          </div>
        )

      case 'data-protection':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Data Protection & GDPR Compliance</h2>
              <p style={{color: '#475569'}}>While thebayislands.au primarily serves Australian users, we respect international data protection standards including the EU General Data Protection Regulation (GDPR) where applicable.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Legal Basis for Processing (GDPR)</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>Contract Performance:</strong> Processing necessary to provide services you've requested</li>
                <li><strong>Legitimate Interests:</strong> Fraud prevention, security, and service improvement</li>
                <li><strong>Legal Obligation:</strong> Tax records, compliance with court orders</li>
                <li><strong>Consent:</strong> Marketing communications, optional analytics</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Data Subject Rights (EU Users)</h3>
              <p style={{color: '#475569'}}>If you are in the European Economic Area, you have additional rights:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Right to be forgotten (erasure under specific conditions)</li>
                <li>Right to object to automated decision-making</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to lodge complaints with supervisory authority</li>
                <li>Right to data portability in machine-readable format</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Data Protection Officer</h3>
              <p style={{color: '#475569'}}>For data protection inquiries: <strong>dpo@thebayislands.au</strong></p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Privacy by Design</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Minimize data collection to what's necessary</li>
                <li>Pseudonymization and anonymization where possible</li>
                <li>Regular privacy impact assessments for new features</li>
                <li>Default privacy-protective settings</li>
                <li>Transparent data practices and clear policies</li>
              </ul>
            </section>
          </div>
        )

      case 'cookies':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Cookie Policy</h2>
              <p style={{color: '#475569'}}>thebayislands.au uses cookies and similar tracking technologies to enhance your experience, analyze usage, and deliver personalized content.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Types of Cookies We Use</h3>
              
              <p style={{color: '#475569', marginTop: 16}}><strong>1. Strictly Necessary Cookies</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Authentication and session management</li>
                <li>Security and fraud prevention</li>
                <li>Load balancing and performance</li>
                <li>Cannot be disabled as they are essential for site functionality</li>
              </ul>

              <p style={{color: '#475569', marginTop: 16}}><strong>2. Preference Cookies</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Remember your language preference</li>
                <li>Store your location for local business filtering</li>
                <li>Maintain your display settings</li>
              </ul>

              <p style={{color: '#475569', marginTop: 16}}><strong>3. Analytics Cookies</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Understand how visitors use our site</li>
                <li>Track page views, bounce rates, session duration</li>
                <li>Identify technical issues and improve performance</li>
                <li>Data is aggregated and anonymized where possible</li>
              </ul>

              <p style={{color: '#475569', marginTop: 16}}><strong>4. Marketing Cookies</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Deliver relevant advertising based on your interests</li>
                <li>Track campaign effectiveness</li>
                <li>Frequency capping to avoid repetitive ads</li>
                <li>Requires your consent - can be withdrawn anytime</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Managing Your Cookie Preferences</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Use our cookie consent banner to customize preferences</li>
                <li>Adjust browser settings to block or delete cookies</li>
                <li>Use private/incognito browsing mode</li>
                <li>Opt out of third-party advertising cookies via industry opt-out tools</li>
              </ul>
              <p style={{color: '#475569', marginTop: 12}}>Note: Disabling essential cookies may impair site functionality.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Cookie Duration</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain for up to 12 months</li>
                <li><strong>Authentication:</strong> Up to 30 days (configurable)</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Third-Party Cookies</h3>
              <p style={{color: '#475569'}}>We may use third-party services (Google Analytics, advertising networks) that set their own cookies. These are governed by the respective third-party privacy policies.</p>
            </section>
          </div>
        )

      case 'content':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Content & Community Guidelines</h2>
              <p style={{color: '#475569'}}>thebayislands.au is a community platform. We expect all users to contribute positively and respectfully.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Prohibited Content</h3>
              <p style={{color: '#475569', marginBottom: 12}}>You may not post content that:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Is illegal, fraudulent, or promotes illegal activity</li>
                <li>Violates intellectual property rights (copyright, trademarks)</li>
                <li>Contains hate speech, harassment, or discrimination</li>
                <li>Is sexually explicit, obscene, or promotes violence</li>
                <li>Contains malware, viruses, or malicious code</li>
                <li>Impersonates another person or entity</li>
                <li>Is spam, repetitive, or artificially inflates engagement</li>
                <li>Violates privacy (doxxing, sharing personal info without consent)</li>
                <li>Contains misleading, deceptive, or false advertising</li>
                <li>Promotes dangerous products (weapons, drugs, counterfeit goods)</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Content Moderation</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>We reserve the right to review, edit, or remove any content</li>
                <li>Automated filters detect spam and prohibited content</li>
                <li>User reports are reviewed by moderation team within 48 hours</li>
                <li>Repeat violations may result in account suspension or termination</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Reporting Violations</h3>
              <p style={{color: '#475569'}}>If you encounter content that violates these guidelines, please report it:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Use the "Report" button on the listing or content</li>
                <li>Email: <strong>abuse@thebayislands.au</strong></li>
                <li>Include specific details and links to the problematic content</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>User Conduct Standards</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Be respectful and professional in all interactions</li>
                <li>Provide accurate, truthful information in listings</li>
                <li>Honor commitments made in classifieds and job postings</li>
                <li>Respond promptly to inquiries and customer messages</li>
                <li>Resolve disputes amicably and in good faith</li>
              </ul>
            </section>
          </div>
        )

      case 'listings':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Business Listing Policy</h2>
              <p style={{color: '#475569'}}>Guidelines for creating and maintaining business directory listings on thebayislands.au.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Eligibility</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Business must operate in or serve the Southern Moreton Bay Islands region</li>
                <li>Must be a legitimate, registered business (ABN required for premium listings)</li>
                <li>One listing per business location</li>
                <li>Authorized representative must create and manage listing</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Listing Requirements</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Accurate business name, address, and contact information</li>
                <li>Current trading hours and service areas</li>
                <li>Truthful description of products and services</li>
                <li>High-quality, relevant photos (no stock images unless supplementary)</li>
                <li>Proper categorization and relevant tags</li>
                <li>Compliance with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Prohibited Businesses</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Adult entertainment, escort services</li>
                <li>Illegal activities, unregistered gambling</li>
                <li>Pyramid schemes, multi-level marketing without clear disclosure</li>
                <li>Counterfeit goods, stolen property</li>
                <li>Unregulated financial services or investment schemes</li>
                <li>Businesses operating without required licenses or permits</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Premium Listing Features</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Enhanced visibility in search results</li>
                <li>Unlimited photos and videos</li>
                <li>Custom business hours and special event calendar</li>
                <li>Social media integration</li>
                <li>Analytics and insights dashboard</li>
                <li>Priority customer support</li>
                <li>Featured placement in category pages</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Listing Ownership & Disputes</h3>
              <p style={{color: '#475569'}}>If multiple users claim the same business:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Proof of business ownership (ABN, business license) required</li>
                <li>Official business email or phone verification</li>
                <li>We may contact the business directly to verify authorized representative</li>
                <li>Duplicate listings will be merged or removed</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Reviews & Ratings</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Customers may leave honest reviews of their experience</li>
                <li>Business owners may respond to reviews publicly</li>
                <li>Fake, paid, or incentivized reviews are prohibited</li>
                <li>Reviews must comply with content guidelines (no hate speech, defamation)</li>
                <li>Report inappropriate reviews to <strong>reviews@thebayislands.au</strong></li>
              </ul>
            </section>
          </div>
        )

      case 'classifieds':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Classifieds Policy</h2>
              <p style={{color: '#475569'}}>Rules for buying and selling on thebayislands.au classifieds marketplace.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>General Rules</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>You must be at least 16 years old to post classifieds</li>
                <li>Items must be located in or deliverable to the Bay Islands region</li>
                <li>Accurately describe condition, price, and availability</li>
                <li>Use clear, relevant photos (no stock images for used items)</li>
                <li>One listing per item (no duplicates)</li>
                <li>Update or remove listings when item is sold or no longer available</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Prohibited Items</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Weapons, firearms, ammunition, explosives</li>
                <li>Illegal drugs, drug paraphernalia, prescription medications</li>
                <li>Stolen property, counterfeit goods</li>
                <li>Adult content, sex toys, escort services</li>
                <li>Live animals (except responsible rehoming with proper documentation)</li>
                <li>Tobacco, vaping products, alcohol</li>
                <li>Hazardous materials, recalled products</li>
                <li>Human body parts, organs, bodily fluids</li>
                <li>Academic cheating services (essays, exam answers)</li>
                <li>Tickets above face value (no scalping)</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Restricted Items (Compliance Required)</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Vehicles must include registration details and roadworthy status</li>
                <li>Real estate listings must comply with fair housing laws</li>
                <li>Event tickets must be genuine and transferable</li>
                <li>Electronics must disclose IMEI/serial if applicable</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Safety Tips</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Meet in public, well-lit locations for transactions</li>
                <li>Bring a friend or notify someone of your meeting</li>
                <li>Inspect items before paying</li>
                <li>Be wary of deals that seem too good to be true</li>
                <li>Never send money to strangers via bank transfer</li>
                <li>Report suspicious activity or scams immediately</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Dispute Resolution</h3>
              <p style={{color: '#475569'}}>thebayislands.au does not facilitate transactions. We are not responsible for disputes between buyers and sellers. However:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Report fraudulent listings or scammers to <strong>abuse@thebayislands.au</strong></li>
                <li>We will investigate and remove violating listings</li>
                <li>Repeat offenders will be banned</li>
                <li>For legal disputes, contact local consumer protection or police</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Listing Duration & Fees</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Free listings expire after 60 days (can be renewed)</li>
                <li>Featured listings (premium) remain active for subscription duration</li>
                <li>Sold items should be marked as sold or removed within 7 days</li>
                <li>Inactive listings may be automatically removed</li>
              </ul>
            </section>
          </div>
        )

      case 'jobs':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Jobs Board Policy</h2>
              <p style={{color: '#475569'}}>Guidelines for posting and applying for jobs on thebayislands.au.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Employer Requirements</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Must be a legitimate business or organization</li>
                <li>Provide accurate company name and contact information</li>
                <li>Job must be located in or serve Bay Islands region</li>
                <li>Clearly state job title, responsibilities, and requirements</li>
                <li>Include salary range or "competitive" (hiding compensation discouraged)</li>
                <li>Specify employment type (full-time, part-time, casual, contract)</li>
                <li>Comply with Australian employment laws (Fair Work Act 2009)</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Prohibited Job Postings</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Illegal activities or unregistered businesses</li>
                <li>Pyramid schemes, multi-level marketing without disclosure</li>
                <li>Discriminatory hiring (race, gender, age, religion, disability)</li>
                <li>Adult entertainment, escort work</li>
                <li>Unpaid work disguised as "exposure" or "experience" (except legitimate internships)</li>
                <li>Commission-only roles without base salary (must be clearly disclosed)</li>
                <li>Work-from-home scams or "envelope stuffing" schemes</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Equal Opportunity Employment</h3>
              <p style={{color: '#475569'}}>All job postings must comply with anti-discrimination laws:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>No discrimination based on race, color, religion, sex, national origin, age, disability, or genetic information</li>
                <li>Reasonable accommodations for applicants with disabilities</li>
                <li>Fair and transparent hiring processes</li>
                <li>Language requirements must be job-related and necessary</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Job Seeker Protection</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Never pay fees to apply for a job</li>
                <li>Be wary of jobs requiring upfront investment or equipment purchase</li>
                <li>Verify employer legitimacy before sharing personal information</li>
                <li>Don't provide banking details until after official employment offer</li>
                <li>Report suspicious job postings immediately</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Application Privacy</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Your application and resume are sent directly to the employer</li>
                <li>We do not share your information with third parties</li>
                <li>Employers must handle your data in compliance with Privacy Act</li>
                <li>You may withdraw your application at any time</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Posting Duration</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Free job postings: 30 days</li>
                <li>Premium job postings: 60 days with featured placement</li>
                <li>Remove or mark as filled when position is no longer available</li>
                <li>Employers may renew or edit active listings</li>
              </ul>
            </section>
          </div>
        )

      case 'intellectual':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Intellectual Property Policy</h2>
              <p style={{color: '#475569'}}>Protecting intellectual property rights on thebayislands.au.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Your Content</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>You retain all ownership rights to content you upload</li>
                <li>By posting, you grant us a non-exclusive, worldwide, royalty-free license to use, display, reproduce, and distribute your content on our platform</li>
                <li>This license ends when you delete your content (subject to technical caching delays)</li>
                <li>You represent that you have all necessary rights to the content you post</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Our Content</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>thebayislands.au logo, design, code, and original content are our property</li>
                <li>Protected by copyright, trademark, and other intellectual property laws</li>
                <li>You may not copy, modify, distribute, or create derivative works without permission</li>
                <li>Limited license granted for personal, non-commercial use of the platform</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Trademark Guidelines</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Business names and logos should be your own or licensed</li>
                <li>Do not impersonate other businesses or use confusingly similar names</li>
                <li>Trademark owners may request removal of infringing content</li>
                <li>Contact: <strong>legal@thebayislands.au</strong> for trademark disputes</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Copyright Infringement</h3>
              <p style={{color: '#475569'}}>Using copyrighted material (photos, text, videos) without permission is prohibited. We comply with the Copyright Act 1968 (Cth) and respond to valid takedown notices.</p>
              <p style={{color: '#475569', marginTop: 12}}>See our DMCA Policy for full copyright infringement procedures.</p>
            </section>
          </div>
        )

      case 'refunds':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Refunds & Cancellation Policy</h2>
              <p style={{color: '#475569'}}>Our refund policy complies with Australian Consumer Law and ensures fair treatment for all subscribers.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Subscription Plans</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>Monthly:</strong> Billed monthly, cancel anytime, access continues until end of period</li>
                <li><strong>6-Month:</strong> Discounted rate, billed every 6 months</li>
                <li><strong>Annual:</strong> Best value, billed yearly with maximum discount</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Cancellation Terms</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Cancel your subscription anytime from your account dashboard</li>
                <li>No cancellation fees or penalties</li>
                <li>Access continues until the end of your current billing period</li>
                <li>No automatic refunds for unused time (except statutory rights below)</li>
                <li>Listings remain active until subscription ends</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Refund Eligibility</h3>
              <p style={{color: '#475569', marginBottom: 12}}>Refunds may be granted in the following circumstances:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>7-Day Cooling-Off (Annual/6-Month):</strong> Full refund if you cancel within 7 days and haven't meaningfully used premium features</li>
                <li><strong>Service Failure:</strong> If we fail to deliver advertised features or experience extended downtime (>7 days)</li>
                <li><strong>Billing Error:</strong> Incorrect charges or unauthorized transactions</li>
                <li><strong>Technical Issues:</strong> Persistent, unresolved technical problems preventing use</li>
                <li><strong>Australian Consumer Law:</strong> Statutory guarantees and consumer rights always apply</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Refund Process</h3>
              <ol style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Email <strong>billing@thebayislands.au</strong> with your request</li>
                <li>Include account email, reason for refund, and any supporting details</li>
                <li>We'll review within 3-5 business days</li>
                <li>Approved refunds processed within 7-10 business days</li>
                <li>Refunds issued to original payment method</li>
              </ol>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Non-Refundable Situations</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Change of mind after 7-day cooling-off period (unless consumer law applies)</li>
                <li>Account suspension or termination due to Terms violations</li>
                <li>Partial billing periods on monthly plans</li>
                <li>Third-party fees (payment processing fees may be deducted from refunds)</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Downgrades</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Downgrade to lower tier anytime</li>
                <li>Changes take effect at next billing period</li>
                <li>No pro-rata refunds for downgrades</li>
                <li>Premium features remain active until downgrade takes effect</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Failed Payments</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>7-day grace period to update payment method</li>
                <li>Email notification sent immediately upon failed payment</li>
                <li>Automatic downgrade to free tier if not resolved</li>
                <li>Reactivate premium features by updating payment and subscribing again</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Australian Consumer Law</h3>
              <p style={{color: '#475569'}}>Nothing in this policy limits or excludes any rights you may have under the Australian Consumer Law or other applicable consumer protection legislation. Our services come with guarantees that cannot be excluded under Australian law.</p>
            </section>
          </div>
        )

      case 'acceptable-use':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Acceptable Use Policy</h2>
              <p style={{color: '#475569'}}>This policy defines prohibited activities and acceptable behavior when using thebayislands.au services.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Prohibited Activities</h3>
              
              <p style={{color: '#475569', marginTop: 16}}><strong>Illegal Activities:</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Posting illegal content or promoting illegal activities</li>
                <li>Fraud, scams, phishing, or identity theft</li>
                <li>Money laundering or terrorist financing</li>
                <li>Sale of prohibited goods (weapons, drugs, stolen property)</li>
              </ul>

              <p style={{color: '#475569', marginTop: 16}}><strong>Abuse & Harassment:</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Hate speech, discrimination, or harassment</li>
                <li>Threats, intimidation, or incitement to violence</li>
                <li>Bullying, stalking, or doxxing</li>
                <li>Sexual harassment or unwanted sexual advances</li>
              </ul>

              <p style={{color: '#475569', marginTop: 16}}><strong>Spam & Manipulation:</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Spamming, flooding, or repetitive posting</li>
                <li>Fake reviews, ratings, or testimonials</li>
                <li>Vote manipulation or artificial engagement</li>
                <li>Automated scraping or data harvesting</li>
                <li>Creating multiple accounts to circumvent restrictions</li>
              </ul>

              <p style={{color: '#475569', marginTop: 16}}><strong>Technical Abuse:</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Hacking, unauthorized access, or security breaches</li>
                <li>Distributing malware, viruses, or malicious code</li>
                <li>DDoS attacks or attempts to disrupt service</li>
                <li>Reverse engineering or circumventing security measures</li>
                <li>Excessive API requests or bandwidth consumption</li>
              </ul>

              <p style={{color: '#475569', marginTop: 16}}><strong>Misrepresentation:</strong></p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Impersonating another person, business, or organization</li>
                <li>False or misleading advertising</li>
                <li>Misrepresenting affiliation with thebayislands.au</li>
                <li>Falsifying credentials, licenses, or qualifications</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Enforcement</h3>
              <p style={{color: '#475569', marginBottom: 12}}>Violations may result in:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Content removal without notice</li>
                <li>Account warning or temporary suspension</li>
                <li>Permanent account termination</li>
                <li>Loss of premium features or refund eligibility</li>
                <li>Legal action and referral to law enforcement</li>
                <li>Reporting to regulatory authorities (ACCC, eSafety Commissioner)</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Reporting Violations</h3>
              <p style={{color: '#475569'}}>If you witness prohibited activities, please report them:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Use in-app "Report" button on content</li>
                <li>Email: <strong>abuse@thebayislands.au</strong></li>
                <li>For urgent safety concerns: Contact local police</li>
                <li>For online safety issues: <a href="https://www.esafety.gov.au" style={{color: '#0066b3'}}>eSafety Commissioner</a></li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Appeals</h3>
              <p style={{color: '#475569'}}>If your content was removed or account suspended, you may appeal:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Email: <strong>appeals@thebayislands.au</strong></li>
                <li>Include account email and reason for appeal</li>
                <li>We'll review within 7 business days</li>
                <li>Decision is final after appeal review</li>
              </ul>
            </section>
          </div>
        )

      case 'dmca':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>DMCA & Copyright Policy</h2>
              <p style={{color: '#475569'}}>thebayislands.au respects intellectual property rights and complies with the Copyright Act 1968 (Cth) and the Digital Millennium Copyright Act (DMCA) where applicable.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Copyright Infringement</h3>
              <p style={{color: '#475569'}}>If you believe content on thebayislands.au infringes your copyright, please provide:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Your contact information (name, address, email, phone)</li>
                <li>Description of the copyrighted work being infringed</li>
                <li>URL or location of the infringing content on our site</li>
                <li>Statement that you have good-faith belief use is unauthorized</li>
                <li>Statement that information provided is accurate</li>
                <li>Electronic or physical signature of copyright owner or authorized agent</li>
              </ul>
              <p style={{color: '#475569', marginTop: 12}}>Send takedown notices to: <strong>dmca@thebayislands.au</strong></p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Counter-Notice</h3>
              <p style={{color: '#475569'}}>If your content was removed due to a copyright claim, you may file a counter-notice if you believe the removal was mistaken:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Your contact information</li>
                <li>Description of removed content and its former location</li>
                <li>Statement under penalty of perjury that removal was mistake or misidentification</li>
                <li>Consent to jurisdiction of Australian federal court (or your local jurisdiction)</li>
                <li>Your electronic or physical signature</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Repeat Infringer Policy</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Users with multiple valid copyright complaints may have accounts terminated</li>
                <li>Three strikes policy: warnings, suspension, permanent ban</li>
                <li>Appeals considered for mistaken claims</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Fair Use & Licensing</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Fair dealing provisions may apply (criticism, review, news reporting)</li>
                <li>Provide attribution when using third-party content</li>
                <li>Use licensed or Creative Commons content appropriately</li>
                <li>When in doubt, obtain permission from copyright owner</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Designated Copyright Agent</h3>
              <p style={{color: '#475569'}}>
                SMBI Local<br/>
                Attn: Copyright Agent<br/>
                Email: <strong>dmca@thebayislands.au</strong><br/>
                Address: PO Box [TBD], Cleveland QLD 4163
              </p>
            </section>
          </div>
        )

      case 'security':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Security & Data Breach Policy</h2>
              <p style={{color: '#475569'}}>Our commitment to protecting your data and responding to security incidents.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Security Measures</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>Encryption:</strong> TLS/SSL for data in transit, AES-256 for sensitive data at rest</li>
                <li><strong>Authentication:</strong> Secure password hashing (bcrypt), two-factor authentication available</li>
                <li><strong>Access Control:</strong> Least-privilege principle, role-based permissions</li>
                <li><strong>Monitoring:</strong> Real-time threat detection, intrusion prevention, audit logs</li>
                <li><strong>Infrastructure:</strong> Firewall protection, DDoS mitigation, regular security patches</li>
                <li><strong>Payment Security:</strong> PCI DSS compliant via Stripe - we never store card numbers</li>
                <li><strong>Backups:</strong> Daily automated backups with 30-day retention</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>User Responsibilities</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Use strong, unique passwords (minimum 8 characters, mix of types)</li>
                <li>Enable two-factor authentication for enhanced security</li>
                <li>Keep your login credentials confidential</li>
                <li>Don't share your account with others</li>
                <li>Log out from shared or public computers</li>
                <li>Report suspicious activity immediately</li>
                <li>Keep your email account secure (password reset vector)</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Data Breach Response</h3>
              <p style={{color: '#475569', marginBottom: 12}}>In accordance with the Notifiable Data Breaches scheme (Privacy Amendment Act 2017), if a data breach occurs:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>Assessment:</strong> Immediate investigation within 24 hours</li>
                <li><strong>Containment:</strong> Stop the breach and secure affected systems</li>
                <li><strong>Notification:</strong> Affected users notified within 72 hours if serious harm likely</li>
                <li><strong>OAIC Reporting:</strong> Submit statement to Office of the Australian Information Commissioner</li>
                <li><strong>Remediation:</strong> Implement fixes to prevent recurrence</li>
                <li><strong>Transparency:</strong> Public disclosure if significant number of users affected</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>What We'll Tell You</h3>
              <p style={{color: '#475569', marginBottom: 12}}>In case of a data breach, notifications will include:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Description of the breach and what data was affected</li>
                <li>Steps we're taking to address the breach</li>
                <li>Recommendations for protecting yourself (password changes, etc.)</li>
                <li>Contact information for questions and support</li>
                <li>Whether law enforcement has been notified</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Vulnerability Reporting</h3>
              <p style={{color: '#475569'}}>We encourage responsible disclosure of security vulnerabilities:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Report to: <strong>security@thebayislands.au</strong></li>
                <li>Provide detailed description and steps to reproduce</li>
                <li>Allow reasonable time for us to fix before public disclosure</li>
                <li>We'll acknowledge receipt within 48 hours</li>
                <li>Recognition in our security hall of fame for valid reports</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Incident Contact</h3>
              <p style={{color: '#475569'}}>
                For security concerns or suspected account compromise:<br/>
                <strong>security@thebayislands.au</strong><br/>
                Emergency: Available 24/7 for critical security incidents
              </p>
            </section>
          </div>
        )

      case 'children':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Children's Privacy Policy</h2>
              <p style={{color: '#475569'}}>thebayislands.au is committed to protecting children's privacy in compliance with the Children's Online Privacy Protection Act (COPPA) and Australian privacy legislation.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Age Requirements</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>You must be at least 16 years old to create an account</li>
                <li>Users under 16 may browse public content without an account</li>
                <li>Users 13-15 require verifiable parental consent to create accounts</li>
                <li>We do not knowingly collect personal information from children under 13</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Parental Controls</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Parents may request deletion of their child's account</li>
                <li>Parents can request access to information collected from their child</li>
                <li>Parents may refuse further collection or use of their child's information</li>
                <li>Contact: <strong>privacy@thebayislands.au</strong> for parental requests</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>What Information We Collect from Minors (16-17)</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Email address and chosen username</li>
                <li>General location (suburb/region for content relevance)</li>
                <li>Browsing activity and site usage</li>
                <li>We do NOT collect: financial information, precise geolocation, or social security numbers from minors</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>How We Use Information from Minors</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Provide access to age-appropriate content and features</li>
                <li>Ensure account security and prevent fraud</li>
                <li>Comply with legal obligations</li>
                <li>We do NOT use minor's information for behavioral advertising</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Safety Features</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Content moderation to remove inappropriate material</li>
                <li>Reporting tools for harassment or abuse</li>
                <li>Privacy settings to control profile visibility</li>
                <li>No direct messaging between users under 18 and adults (planned feature)</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Disclosure to Third Parties</h3>
              <p style={{color: '#475569'}}>We do not sell, trade, or share personal information of users under 18 with third parties for marketing purposes. Information may only be shared:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>With service providers necessary to operate the platform (under strict contracts)</li>
                <li>With parent or guardian upon verified request</li>
                <li>When required by law or to protect safety</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Deletion Requests</h3>
              <p style={{color: '#475569'}}>If you believe your child under 13 has created an account without permission, or if you're a parent requesting deletion of a child's account:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Email: <strong>privacy@thebayislands.au</strong></li>
                <li>Include child's username or email</li>
                <li>Provide verification of parental relationship</li>
                <li>We'll delete the account within 48 hours</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Changes to Children's Privacy Policy</h3>
              <p style={{color: '#475569'}}>We will notify parents and guardians of any material changes to how we collect, use, or disclose children's personal information.</p>
            </section>
          </div>
        )

      case 'environmental':
        return (
          <div style={{display: 'grid', gap: 24}}>
            <section>
              <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0066b3'}}>Environmental & Community Commitment</h2>
              <p style={{color: '#475569'}}>thebayislands.au is committed to environmental sustainability and supporting the Southern Moreton Bay Islands community.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Digital Sustainability</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li><strong>Green Hosting:</strong> Infrastructure hosted on providers with renewable energy commitments</li>
                <li><strong>Efficient Code:</strong> Optimized website performance to reduce energy consumption</li>
                <li><strong>CDN & Caching:</strong> Minimize data transfer and server load</li>
                <li><strong>Image Optimization:</strong> Compressed assets reduce bandwidth and carbon footprint</li>
                <li><strong>Data Minimization:</strong> Collect only necessary data, delete when no longer needed</li>
                <li><strong>Paperless Operations:</strong> Digital-first approach to reduce paper waste</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Community Support</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Free directory listings for local non-profits and community groups</li>
                <li>Promote local events, fundraisers, and community initiatives</li>
                <li>Support island businesses to reduce mainland dependence</li>
                <li>Platform for environmental advocacy and island conservation efforts</li>
                <li>Partnerships with local organizations like SMBI Local</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Indigenous Acknowledgement</h3>
              <p style={{color: '#475569'}}>We acknowledge the Quandamooka people as the Traditional Custodians of the lands and waters of the Southern Moreton Bay Islands — including Canaipa/Kanopa (Russell Island), Koombool (North Stradbroke Island), Minjerribah (Stradbroke Island), Moorgumpin (Moreton Island), and the surrounding mainland areas including the Redlands.</p>
              <p style={{color: '#475569', marginTop: 12}}>We pay our respects to Elders past, present, and emerging, and recognize the continuing connection of Aboriginal and Torres Strait Islander peoples to Country, culture, and community.</p>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Environmental Advocacy</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Platform for sharing environmental news and conservation efforts</li>
                <li>Highlight businesses with sustainable practices</li>
                <li>Promote events focused on environmental protection</li>
                <li>Support marine conservation and island ecosystem preservation</li>
                <li>Encourage responsible tourism and eco-friendly local businesses</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Ethical Business Practices</h3>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Transparent pricing with no hidden fees</li>
                <li>Fair treatment of users and business partners</li>
                <li>Support local employment and skill development</li>
                <li>Promote diversity and inclusion on the platform</li>
                <li>Reject exploitative or harmful business models</li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Continuous Improvement</h3>
              <p style={{color: '#475569'}}>We're committed to regularly reviewing and improving our environmental and community impact. We welcome feedback and suggestions:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Annual sustainability reporting (when available)</li>
                <li>Community feedback surveys</li>
                <li>Transparent communication about our practices</li>
                <li>Contact: <strong>community@thebayislands.au</strong></li>
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Community Partnerships</h3>
              <p style={{color: '#475569'}}>We actively seek partnerships with:</p>
              <ul style={{paddingLeft: 20, color: '#475569', display: 'grid', gap: 8}}>
                <li>Local environmental organizations</li>
                <li>Community groups and neighborhood associations</li>
                <li>Island councils and government bodies</li>
                <li>Indigenous cultural heritage organizations</li>
                <li>Educational institutions and schools</li>
              </ul>
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
        <h1 style={{fontSize: 42, fontWeight: 700, marginBottom: 12, color: '#0f172a'}}>Policies & Legal</h1>
        <p style={{fontSize: 16, color: '#64748b', marginBottom: 40}}>Comprehensive policies governing use of thebayislands.au • Last Updated: January 31, 2026</p>

        <style jsx>{`
          .policies-layout {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: 32px;
          }
          
          .policies-sidebar {
            background: white;
            border-radius: 12px;
            padding: 24px;
            height: fit-content;
            position: sticky;
            top: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          }
          
          .policies-content {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
            line-height: 1.7;
          }
          
          @media (max-width: 1024px) and (orientation: portrait) {
            .policies-layout {
              display: flex;
              flex-direction: column;
              gap: 24px;
            }
            
            .policies-content {
              order: 1;
            }
            
            .policies-sidebar {
              position: static;
              order: 2;
            }
          }
          
          @media (max-width: 768px) {
            .policies-layout {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            
            .policies-content {
              padding: 24px;
              order: 1;
            }
            
            .policies-sidebar {
              position: static;
              padding: 20px;
              order: 2;
            }
          }
        `}</style>

        <div className="policies-layout">
          {/* Content Area - First on mobile */}
          <div className="policies-content">
            {renderContent()}
            
            {/* Contact Footer */}
            <div style={{marginTop: 60, paddingTop: 40, borderTop: '2px solid #e2e8f0'}}>
              <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#0066b3'}}>Questions or Concerns?</h3>
              <p style={{color: '#475569', marginBottom: 8}}>We're here to help. Contact us for policy-related inquiries:</p>
              <ul style={{listStyle: 'none', padding: 0, color: '#475569', display: 'grid', gap: 8}}>
                <li>📧 Privacy: <a href="mailto:privacy@thebayislands.au" style={{color: '#0066b3', textDecoration: 'none', fontWeight: 500}}>privacy@thebayislands.au</a></li>
                <li>💳 Billing: <a href="mailto:billing@thebayislands.au" style={{color: '#0066b3', textDecoration: 'none', fontWeight: 500}}>billing@thebayislands.au</a></li>
                <li>⚖️ Legal: <a href="mailto:legal@thebayislands.au" style={{color: '#0066b3', textDecoration: 'none', fontWeight: 500}}>legal@thebayislands.au</a></li>
                <li>🛡️ Security: <a href="mailto:security@thebayislands.au" style={{color: '#0066b3', textDecoration: 'none', fontWeight: 500}}>security@thebayislands.au</a></li>
                <li>🚫 Abuse: <a href="mailto:abuse@thebayislands.au" style={{color: '#0066b3', textDecoration: 'none', fontWeight: 500}}>abuse@thebayislands.au</a></li>
              </ul>
              <p style={{color: '#64748b', fontSize: 13, marginTop: 24}}>
                SMBI Local trading as thebayislands.au<br/>
                Serving the Southern Moreton Bay Islands community<br/>
                Australian Business Number (ABN): [Pending]
              </p>
            </div>
          </div>
          
          {/* Navigation Sidebar - Last on mobile */}
          <div className="policies-sidebar">
            <div style={{fontWeight: 700, fontSize: 12, color: '#64748b', textTransform: 'uppercase', marginBottom: 12}}>Policies</div>
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
        </div>
      </div>
    </main>
  )
}
