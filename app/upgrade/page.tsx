'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PricingCarousel from '@/components/PricingCarousel';
import { PRICING_SECTIONS } from '@/lib/pricing.constants';

export default function UpgradePage() {
  const [selectedTier, setSelectedTier] = useState<string>('popular');
  const searchParams = useSearchParams();
  const businessSlug = searchParams?.get('business');
  const [claimingBusiness, setClaimingBusiness] = useState<any>(null);
  const [showClaimForm, setShowClaimForm] = useState(false);

  useEffect(() => {
    if (businessSlug) {
      // Fetch business details
      fetch(`/api/directory`)
        .then(res => res.json())
        .then(data => {
          const business = data.find((b: any) => b.slug === businessSlug || b.id === businessSlug);
          if (business) {
            setClaimingBusiness(business);
            setShowClaimForm(true);
          }
        })
        .catch(err => console.error('Failed to fetch business:', err));
    }
  }, [businessSlug]);

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Claim Business Modal */}
      {showClaimForm && claimingBusiness && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: 20
        }}>
          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 'clamp(24px, 5vw, 40px)',
            maxWidth: 600,
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowClaimForm(false)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'transparent',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
                color: '#64748b'
              }}
            >
              ✕
            </button>

            <h2 style={{ fontSize: 'clamp(1.5em, 3vw, 28px)', fontWeight: 700, margin: '0 0 8px 0' }}>
              Claim This Business
            </h2>
            <p style={{ color: '#64748b', margin: '0 0 24px 0' }}>
              Claiming <strong>{claimingBusiness.name}</strong>
            </p>

            <div style={{
              background: '#f8fafc',
              borderRadius: 12,
              padding: 16,
              marginBottom: 24,
              borderLeft: '4px solid #0ea5e9'
            }}>
              <p style={{ fontSize: 14, color: '#475569', margin: 0, lineHeight: 1.6 }}>
                <strong>Business Details:</strong><br />
                {claimingBusiness.name}<br />
                {claimingBusiness.category}<br />
                {claimingBusiness.address}
              </p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData);
              console.log('Claim submission:', { business: claimingBusiness.slug, ...data });
              alert('Claim request submitted! We\'ll verify your details and contact you within 24 hours.');
              setShowClaimForm(false);
            }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: 14 }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: 14 }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: 14 }}>
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                  placeholder="0412 345 678"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: 14 }}>
                  Your Role at this Business *
                </label>
                <select
                  name="role"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">Select your role</option>
                  <option value="owner">Owner</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Authorized Employee</option>
                  <option value="agent">Agent/Representative</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: 14 }}>
                  Proof of Ownership/Authorization
                </label>
                <p style={{ fontSize: 12, color: '#64748b', margin: '0 0 8px 0' }}>
                  We'll verify your claim via email or phone. You may be asked to provide ABN, business registration, or other proof.
                </p>
                <textarea
                  name="notes"
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    fontSize: 14,
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                  placeholder="ABN, business registration number, or any additional information..."
                />
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 8,
                padding: 12,
                background: '#fef3c7',
                borderRadius: 8,
                fontSize: 13
              }}>
                <span>⚠️</span>
                <p style={{ margin: 0, color: '#92400e', lineHeight: 1.5 }}>
                  By claiming this business, you confirm that you are an authorized representative and have the right to manage this listing.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <button
                  type="button"
                  onClick={() => setShowClaimForm(false)}
                  style={{
                    flex: 1,
                    padding: '12px 24px',
                    background: '#e2e8f0',
                    color: '#0f172a',
                    border: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: 14
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 2,
                    padding: '12px 24px',
                    background: '#0ea5e9',
                    color: 'white',
                    border: 'none',
                    borderRadius: 8,
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: 14
                  }}
                >
                  Submit Claim Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div style={{
        background: businessSlug 
          ? 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)'
          : 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 20px)',
        textAlign: 'center',
        marginBottom: 60
      }}>
        <h1 style={{ fontSize: 'clamp(2em, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0' }}>
          {businessSlug ? 'Claim & Upgrade Your Listing' : 'Get Premium Featured Listings'}
        </h1>
        <p style={{ fontSize: 'clamp(1em, 2vw, 20px)', opacity: 0.95, margin: 0, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          {businessSlug 
            ? 'Take control of your business listing and unlock premium features to reach more customers.'
            : 'Stand out from the crowd. Get seen by thousands of Bay Islanders every day with premium placement.'}
        </p>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(16px, 5vw, 20px) clamp(40px, 8vw, 60px)' }}>
        
        {/* Pricing Carousel Section */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 'clamp(1.8em, 4vw, 36px)', fontWeight: 700, textAlign: 'center', margin: '0 0 16px 0' }}>
            {PRICING_SECTIONS.hero.title}
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: 'clamp(1em, 1.8vw, 16px)', margin: '0 0 40px 0', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
            {PRICING_SECTIONS.hero.description}
          </p>
          
          <PricingCarousel 
            onTierSelect={(tierId) => setSelectedTier(tierId)}
            defaultTier="popular"
          />
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
                q: 'Is the free tier always free?',
                a: 'Absolutely! The Free tier will always be free. You can upgrade to a paid tier anytime to unlock more features, and you can also downgrade back to Free at any time. No surprises, no hidden fees.'
              },
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
