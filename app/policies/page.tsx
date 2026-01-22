'use client';

import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function PoliciesPage() {
  const [activeSection, setActiveSection] = useState('privacy');

  const sections = [
    {
      id: 'privacy',
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal data',
      content: `
        # Privacy Policy

        **Last Updated:** January 21, 2026

        ## 1. Introduction
        thebayislands.au ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

        ## 2. Information We Collect

        ### Personal Information
        - Email address (for registration and communication)
        - Name (for business listings and user profiles)
        - Phone number (optional, for business contact)
        - Location data (optional, for directory filtering)
        - Payment information (processed securely via Stripe)

        ### Automatically Collected Information
        - IP address
        - Browser type and version
        - Operating system
        - Referring URL
        - Pages visited and time spent
        - Cookies and similar tracking technologies

        ## 3. How We Use Your Information
        - To provide and improve our services
        - To communicate with you about your account
        - To process transactions and send related information
        - To send promotional emails (with your consent)
        - To analyze site usage and optimize user experience
        - To comply with legal obligations

        ## 4. Data Security
        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your payment information is processed through Stripe's secure payment gateway and is never stored on our servers.

        ## 5. Data Retention
        - Account data: Retained while your account is active
        - Transaction records: Retained for 7 years (tax/legal requirements)
        - Cookies: Typically expire after 12 months
        - You can request deletion of your data at any time

        ## 6. Your Rights
        - Access: You can request a copy of your personal data
        - Correction: You can update or correct your information
        - Deletion: You can request deletion of your data ("right to be forgotten")
        - Portability: You can export your data in standard format
        - Opt-out: You can unsubscribe from marketing communications

        ## 7. Third-Party Services
        We use the following third-party services:
        - **Supabase:** Database and authentication
        - **Stripe:** Payment processing
        - **Vercel:** Website hosting
        - **Analytics:** Usage tracking and optimization

        These services have their own privacy policies which we encourage you to review.

        ## 8. International Data Transfers
        If you access our site from outside Australia, your data will be transferred to and stored in Australia. By using our site, you consent to this transfer.

        ## 9. Contact Us
        For privacy concerns or data requests, contact us at:
        **Email:** privacy@thebayislands.au
        **Mail:** SMBI Local, Bay Islands, QLD, Australia
      `
    },
    {
      id: 'terms',
      title: 'Terms of Service',
      description: 'Legal terms governing use of our platform',
      content: `
        # Terms of Service

        **Last Updated:** January 21, 2026

        ## 1. Agreement to Terms
        By accessing and using thebayislands.au, you accept and agree to be bound by and comply with these Terms of Service and our Privacy Policy.

        ## 2. Use License
        Permission is granted to temporarily download one copy of the materials (information or software) on thebayislands.au for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        - Modify or copy the materials
        - Use the materials for any commercial purpose or for any public display
        - Attempt to decompile or reverse engineer any software
        - Remove any copyright or other proprietary notations
        - Transfer the materials to another person or "mirror" the materials on any other server
        - Violate any applicable laws or regulations

        ## 3. Disclaimer
        The materials on thebayislands.au are provided on an 'as is' basis. thebayislands.au makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

        ## 4. Limitations
        In no event shall thebayislands.au or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on thebayislands.au.

        ## 5. User Accounts
        When you create an account on thebayislands.au, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your password and for all activities that occur under your account.

        ## 6. User-Generated Content
        You retain ownership of content you submit. By submitting content, you grant thebayislands.au a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, and display such content on our platform.

        ## 7. Prohibited Conduct
        You agree not to:
        - Submit false or misleading information
        - Engage in harassment, abuse, or hate speech
        - Infringe on intellectual property rights
        - Violate any applicable law or regulation
        - Disrupt the normal operation of the platform
        - Attempt to gain unauthorized access to systems

        ## 8. Payments and Refunds
        - Payments are processed via Stripe
        - Subscription upgrades take effect immediately
        - Refunds follow our Refund & Cancellation policy
        - Prices may change with notice

        ## 9. Termination
        We reserve the right to terminate or suspend your account if you violate these Terms of Service or engage in prohibited conduct.

        ## 10. Limitation of Liability
        Our liability is limited to the amount you paid in the past 12 months, or $100 AUD, whichever is greater.

        ## 11. Contact
        For questions about these Terms, contact us at: **support@thebayislands.au**
      `
    },
    {
      id: 'refunds',
      title: 'Refund & Cancellation',
      description: 'Our policy for refunds and subscription cancellations',
      content: `
        # Refund & Cancellation Policy

        **Last Updated:** January 21, 2026

        ## 1. Subscription Cancellation
        You can cancel your subscription at any time from your account dashboard. Your access will continue until the end of the current billing period.

        ## 2. Refund Eligibility

        ### Full Refunds (Within 7 Days)
        - If you cancel within 7 days of your first payment, you receive a full refund with no questions asked
        - You must not have published significant content or used services substantially

        ### Partial Refunds
        - If you cancel mid-billing cycle (after 7 days), no refund is issued
        - You'll have access through the end of the current billing period

        ## 3. Special Cases
        - **Technical Issues:** If services are unavailable due to our technical failure, we'll issue a credit or refund
        - **Duplicate Charges:** We'll refund duplicate charges immediately upon notification
        - **Billing Errors:** We'll correct errors and refund overpayments within 30 days

        ## 4. Refund Processing
        - Refunds are processed to your original payment method
        - Processing time: 3-7 business days after approval
        - Some banks may take longer to post refunds

        ## 5. Non-Refundable Items
        - Promotional credits or discounts
        - Service fees charged by payment processors
        - Completed ad campaigns or promotional placements

        ## 6. Contact for Refunds
        To request a refund, contact us at: **support@thebayislands.au**

        Include:
        - Order number or email address associated with account
        - Date of purchase
        - Reason for refund request

        ## 7. Review and Approval
        Refund requests are reviewed within 3 business days. You'll receive an email confirming approval or rejection.
      `
    },
    {
      id: 'cookies',
      title: 'Cookies Policy',
      description: 'How we use cookies and similar tracking technologies',
      content: `
        # Cookies Policy

        **Last Updated:** January 21, 2026

        ## 1. What Are Cookies?
        Cookies are small data files stored on your device. They help us remember your preferences, track usage, and provide personalized experiences.

        ## 2. Types of Cookies We Use

        ### Essential Cookies
        - **Session Cookies:** Maintain your login session
        - **Security Cookies:** Protect against fraud and threats
        - Duration: Session (until you close your browser)

        ### Preference Cookies
        - **Language Settings:** Remember your language choice
        - **Layout Preferences:** Save your preferred view mode
        - Duration: 1 year

        ### Analytics Cookies
        - Track page visits, search queries, and user flows
        - Help us understand how the platform is used
        - Anonymized and used for optimization
        - Duration: 12 months

        ### Advertising Cookies
        - Remember if you've seen promotional content
        - Help deliver relevant ads
        - Duration: 30 days

        ## 3. Third-Party Cookies
        We work with service providers who may set cookies:
        - **Stripe:** Payment processing (secure cookies)
        - **Vercel:** Website hosting and CDN
        - **Analytics Services:** Usage tracking

        ## 4. Your Cookie Choices

        ### Browser Settings
        You can control cookies through your browser settings:
        - **Chrome:** Settings → Privacy → Cookies
        - **Safari:** Preferences → Privacy → Cookies
        - **Firefox:** Preferences → Privacy → Cookies

        ### Opt-Out
        - Accept all, accept essential only, or reject all when you first visit
        - Change preferences anytime in your account settings
        - Use "Do Not Track" signals (though we may still use essential cookies)

        ## 5. Effects of Disabling Cookies
        If you disable cookies, you may not be able to:
        - Log in to your account
        - Access premium features
        - Get personalized recommendations
        - See saved preferences

        ## 6. Data Retention
        - Essential cookies: Duration of session
        - Other cookies: Up to 12 months
        - You can delete cookies anytime via your browser

        ## 7. Changes to This Policy
        We may update this policy. Continued use of our site after changes constitutes acceptance of new terms.
      `
    },
    {
      id: 'environment',
      title: 'Environmental Policy',
      description: 'Our commitment to environmental sustainability',
      content: `
        # Environmental Policy

        **Last Updated:** January 21, 2026

        ## 1. Our Commitment
        thebayislands.au is committed to minimizing our environmental impact and promoting sustainable practices across our operations and community.

        ## 2. Green Hosting
        - Our website is hosted on **Vercel**, which uses 100% renewable energy
        - We minimize server load to reduce carbon footprint
        - We use efficient CDN caching to reduce data transfer

        ## 3. Paperless Operations
        - All transactions, contracts, and communications are digital
        - No unnecessary printing or physical mail
        - Digital documents with digital signatures

        ## 4. Sustainable Practices
        - We promote local businesses to reduce transportation needs
        - Event listings prioritize local gatherings over distant travel
        - Directory connects consumers with nearby services

        ## 5. Community Environmental Initiatives
        - Free listings for environmental organizations
        - Promote local conservation groups and initiatives
        - Support island sustainability projects
        - Feature environmental news and articles

        ## 6. Data Privacy as Environmental Protection
        - We minimize data collection to protect privacy
        - Efficient databases reduce energy consumption
        - Regular cleanup of unused data

        ## 7. Future Goals
        - Achieve carbon-neutral operations by 2027
        - Plant 1 tree for every 100 premium listings
        - Reduce data center power consumption by 50%
        - Support renewable energy transition on the islands

        ## 8. Reporting
        We'll publish an annual sustainability report detailing:
        - Carbon footprint and offsetting
        - Community environmental initiatives
        - Energy consumption and renewable percentage
        - Progress toward environmental goals

        ## 9. Contact
        For environmental concerns or sustainability questions:
        **Email:** environment@thebayislands.au
      `
    }
  ];

  const activeContent = sections.find(s => s.id === activeSection);

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Policies', href: '/policies' },
        ]}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: 42, fontWeight: 700, marginBottom: 12, color: '#0f172a' }}>Policies & Terms</h1>
        <p style={{ fontSize: 18, color: '#64748b', marginBottom: 40 }}>
          All policies, terms, and conditions governing thebayislands.au
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: 32 }}>
          {/* Navigation Menu */}
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: 20,
            height: 'fit-content',
            position: 'sticky',
            top: 20,
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontWeight: 700, fontSize: 12, color: '#64748b', textTransform: 'uppercase', marginBottom: 12 }}>
              Select Policy
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  style={{
                    padding: '12px 16px',
                    background: activeSection === section.id ? '#0066b3' : 'transparent',
                    color: activeSection === section.id ? 'white' : '#0f172a',
                    border: activeSection === section.id ? 'none' : '1px solid #e2e8f0',
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: 14,
                    textAlign: 'left',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.background = '#f0f4f8';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== section.id) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: 40,
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
          }}>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: 32, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
                {activeContent?.title}
              </h2>
              <p style={{ fontSize: 16, color: '#64748b' }}>
                {activeContent?.description}
              </p>
            </div>

            <div style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: '#475569',
              maxWidth: '100%'
            }}>
              {activeContent?.content.split('\n').map((line, i) => {
                if (line.startsWith('#')) {
                  const level = line.match(/^#+/)[0].length;
                  if (level === 1) return null;
                  if (level === 2) {
                    return (
                      <h3 key={i} style={{ fontSize: 18, fontWeight: 700, marginTop: 24, marginBottom: 12, color: '#0f172a' }}>
                        {line.replace(/^#+\s/, '')}
                      </h3>
                    );
                  }
                  if (level === 3) {
                    return (
                      <h4 key={i} style={{ fontSize: 15, fontWeight: 600, marginTop: 16, marginBottom: 8, color: '#1e293b' }}>
                        {line.replace(/^#+\s/, '')}
                      </h4>
                    );
                  }
                }
                if (line.startsWith('- ')) {
                  return (
                    <div key={i} style={{ marginLeft: 20, marginBottom: 8, display: 'flex', gap: 8 }}>
                      <span>•</span>
                      <span>{line.replace(/^- /, '')}</span>
                    </div>
                  );
                }
                if (line.trim() === '') {
                  return <div key={i} style={{ height: 12 }} />;
                }
                if (line.startsWith('**')) {
                  return (
                    <div key={i} style={{ marginBottom: 8, fontWeight: 600 }}>
                      {line.replace(/\*\*/g, '')}
                    </div>
                  );
                }
                return line.trim() ? (
                  <p key={i} style={{ marginBottom: 12 }}>
                    {line}
                  </p>
                ) : null;
              })}
            </div>

            <div style={{ marginTop: 40, padding: 20, background: '#f0f4f8', borderRadius: 8, fontSize: 14, color: '#475569' }}>
              <strong>Last Updated:</strong> January 21, 2026
              <br />
              <strong>For questions:</strong> support@thebayislands.au
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
