'use client';

import { useState } from 'react';

export default function UpgradePage() {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('premium');

  const features = [
    { name: 'Post Listings', basic: true, premium: true },
    { name: 'Photos & Images', basic: '1 photo', premium: 'Up to 10 photos' },
    { name: 'Listing Duration', basic: '30 days', premium: '90 days (auto-renew)' },
    { name: 'Featured Placement', basic: false, premium: true },
    { name: 'Top Search Results', basic: false, premium: true },
    { name: 'No Competitor Ads', basic: false, premium: true },
    { name: 'Highlighted Badge', basic: false, premium: true },
    { name: 'Priority Support', basic: false, premium: true },
    { name: 'Analytics Dashboard', basic: false, premium: true },
    { name: 'Boost Option', basic: false, premium: 'Included' },
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 20px)',
        textAlign: 'center',
        marginBottom: 60
      }}>
        <h1 style={{ fontSize: 'clamp(2em, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0' }}>
          Get Premium Featured Listings
        </h1>
        <p style={{ fontSize: 'clamp(1em, 2vw, 20px)', opacity: 0.95, margin: 0, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          Stand out from the crowd. Get seen by thousands of Bay Islanders every day with premium placement.
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 5vw, 20px) clamp(40px, 8vw, 60px)' }}>
        
        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(20px, 4vw, 40px)', marginBottom: 80 }}>
          
          {/* Basic Plan */}
          <div style={{
            background: 'white',
            border: '2px solid #e2e8f0',
            borderRadius: 16,
            padding: 'clamp(24px, 5vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{ fontSize: 'clamp(1.3em, 2.5vw, 24px)', fontWeight: 700, margin: '0 0 8px 0' }}>Standard</h3>
            <p style={{ color: '#64748b', fontSize: 'clamp(0.9em, 1.5vw, 14px)', margin: '0 0 20px 0' }}>Perfect for testing</p>
            <div style={{ fontSize: 'clamp(2em, 5vw, 36px)', fontWeight: 800, color: '#0066b3', margin: '0 0 4px 0' }}>
              Free
            </div>
            <p style={{ color: '#64748b', fontSize: '0.9em', margin: '0 0 24px 0' }}>Forever free, no credit card required</p>
            <button style={{
              width: '100%',
              padding: '12px 24px',
              background: '#e2e8f0',
              color: '#0f172a',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: 'clamp(0.9em, 1.5vw, 14px)',
              minHeight: '44px',
              marginBottom: 24
            }}>
              Currently Active
            </button>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {features.map((f) => (
                <div key={f.name} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 'clamp(0.85em, 1.5vw, 13px)' }}>
                  <span style={{ fontSize: '1.2em', marginTop: -2 }}>
                    {f.basic ? '✓' : '✗'}
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#0f172a' }}>{f.name}</div>
                    {typeof f.basic === 'string' && <div style={{ color: '#64748b', fontSize: '0.9em' }}>{f.basic}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Plan */}
          <div style={{
            background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
            color: 'white',
            border: '3px solid #0066b3',
            borderRadius: 16,
            padding: 'clamp(24px, 5vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            transform: 'scale(1.05)',
            boxShadow: '0 20px 50px rgba(0,102,179,0.3)'
          }}>
            <div style={{
              position: 'absolute',
              top: -12,
              right: 20,
              background: '#fff',
              color: '#c85a17',
              padding: '4px 12px',
              borderRadius: 20,
              fontSize: '0.75em',
              fontWeight: 700,
              textTransform: 'uppercase'
            }}>
              Most Popular
            </div>
            <h3 style={{ fontSize: 'clamp(1.3em, 2.5vw, 24px)', fontWeight: 700, margin: '0 0 8px 0' }}>Premium Featured</h3>
            <p style={{ opacity: 0.9, fontSize: 'clamp(0.9em, 1.5vw, 14px)', margin: '0 0 20px 0' }}>Maximum visibility & impact</p>
            <div style={{ fontSize: 'clamp(2em, 5vw, 36px)', fontWeight: 800, margin: '0 0 4px 0' }}>
              $14.90
            </div>
            <p style={{ opacity: 0.9, fontSize: '0.9em', margin: '0 0 24px 0' }}>per month (7-day free trial)</p>
            <button style={{
              width: '100%',
              padding: '12px 24px',
              background: 'white',
              color: '#0066b3',
              border: 'none',
              borderRadius: 8,
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: 'clamp(0.9em, 1.5vw, 14px)',
              minHeight: '44px',
              marginBottom: 24
            }}>
              Upgrade Now
            </button>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {features.map((f) => (
                <div key={f.name} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 'clamp(0.85em, 1.5vw, 13px)' }}>
                  <span style={{ fontSize: '1.2em', marginTop: -2 }}>✓</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>{f.name}</div>
                    {typeof f.premium === 'string' && <div style={{ opacity: 0.8, fontSize: '0.9em' }}>{f.premium}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Premium Section */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 'clamp(1.8em, 4vw, 36px)', fontWeight: 700, textAlign: 'center', margin: '0 0 40px 0' }}>
            Why Go Premium?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
            {[
              {
                icon: '🚀',
                title: 'Top Placement',
                desc: 'Your listing appears first in search results, getting seen by thousands of potential buyers/renters daily.'
              },
              {
                icon: '📸',
                title: 'Multiple Photos',
                desc: 'Upload up to 10 high-quality photos. Listings with photos get 5x more inquiries.'
              },
              {
                icon: '⭐',
                title: 'Highlighted Badge',
                desc: 'Your listing stands out with a "Featured" badge that catches buyer attention immediately.'
              },
              {
                icon: '📊',
                title: 'Analytics',
                desc: 'Track views, clicks, and inquiries. See exactly how many people are interested in your listing.'
              },
              {
                icon: '🔄',
                title: 'Auto-Renewal',
                desc: 'Your listing automatically renews for 90 days. No need to repost constantly.'
              },
              {
                icon: '💬',
                title: 'Priority Support',
                desc: 'Get dedicated support to help optimize your listing and answer questions quickly.'
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: 12,
                padding: 'clamp(20px, 4vw, 24px)',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}>
                <div style={{ fontSize: 'clamp(2em, 5vw, 36px)' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(1.1em, 1.8vw, 18px)', fontWeight: 600, margin: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginBottom: 80, background: '#f1f5f9', borderRadius: 16, padding: 'clamp(32px, 8vw, 60px)' }}>
          <h2 style={{ fontSize: 'clamp(1.8em, 4vw, 36px)', fontWeight: 700, textAlign: 'center', margin: '0 0 40px 0' }}>
            What Premium Users Say
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 4vw, 32px)' }}>
            {[
              {
                name: 'Sarah Mitchell',
                business: 'Island Cafe & Bakery',
                quote: 'Premium placement has been a game-changer. We\'re getting 3x more customers than before. Worth every dollar!',
                rating: 5
              },
              {
                name: 'James Wong',
                business: 'Bay Marina Services',
                quote: 'The analytics dashboard is fantastic. We can see exactly which times get the most traffic and optimize accordingly.',
                rating: 5
              },
              {
                name: 'Emma Roberts',
                business: 'Luxury Island Resort',
                quote: 'Being featured at the top was instrumental in our growth. Highly recommend to any business wanting visibility.',
                rating: 5
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: 12,
                padding: 'clamp(20px, 4vw, 24px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} style={{ fontSize: '1.2em' }}>⭐</span>
                  ))}
                </div>
                <p style={{ fontSize: 'clamp(0.95em, 1.5vw, 15px)', fontStyle: 'italic', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                  "{item.quote}"
                </p>
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a', fontSize: 'clamp(0.95em, 1.5vw, 15px)' }}>
                    {item.name}
                  </div>
                  <div style={{ color: '#64748b', fontSize: 'clamp(0.9em, 1.5vw, 13px)' }}>
                    {item.business}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 'clamp(1.8em, 4vw, 36px)', fontWeight: 700, textAlign: 'center', margin: '0 0 40px 0' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! No long-term contracts. Cancel anytime from your account settings. If you cancel mid-month, you won\'t be charged again.'
              },
              {
                q: 'What if my listing sells before 90 days?',
                a: 'Great! You can mark your listing as SOLD and pause your subscription. You can reactivate it later if needed.'
              },
              {
                q: 'Do I get a refund if I\'m not satisfied?',
                a: 'Absolutely. We offer a 7-day money-back guarantee, no questions asked. If you\'re not seeing results, we\'ll refund your payment.'
              },
              {
                q: 'Can I add more photos after I upgrade?',
                a: 'Yes! Upload, replace, or rearrange your photos anytime from your listing dashboard.'
              },
              {
                q: 'Will my listing automatically renew?',
                a: 'Yes, Premium listings auto-renew every 90 days using your saved payment method. You\'ll get a reminder email 7 days before renewal.'
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: 12,
                padding: 'clamp(16px, 4vw, 20px)',
                borderLeft: '4px solid #0066b3'
              }}>
                <h4 style={{ fontSize: 'clamp(1em, 1.8vw, 16px)', fontWeight: 600, margin: '0 0 8px 0' }}>
                  {item.q}
                </h4>
                <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
          color: 'white',
          borderRadius: 16,
          padding: 'clamp(32px, 8vw, 60px)',
          textAlign: 'center',
          marginBottom: 40
        }}>
          <h2 style={{ fontSize: 'clamp(1.5em, 3vw, 32px)', fontWeight: 700, margin: '0 0 16px 0' }}>
            Ready to Get Featured?
          </h2>
          <p style={{ fontSize: 'clamp(0.95em, 1.8vw, 16px)', opacity: 0.95, margin: '0 0 24px 0' }}>
            Start your 7-day free trial today. No credit card required.
          </p>
          <button style={{
            padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)',
            fontSize: 'clamp(1em, 1.8vw, 16px)',
            background: 'white',
            color: '#0066b3',
            border: 'none',
            borderRadius: 8,
            fontWeight: 700,
            cursor: 'pointer',
            minHeight: '44px',
            minWidth: '200px'
          }}>
            Upgrade Now
          </button>
        </div>
      </div>
    </main>
  );
}
