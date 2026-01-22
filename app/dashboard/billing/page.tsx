'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BillingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [creatingPortalSession, setCreatingPortalSession] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push('/login?redirectTo=/dashboard/billing');
    } else {
      setLoading(false);
    }
  }, [user, router]);

  const handleManageBilling = async () => {
    setCreatingPortalSession(true);
    try {
      const response = await fetch('/api/billing-portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to create billing portal session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to open billing portal. Please try again.');
      setCreatingPortalSession(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  const subscriptionTier = user.subscription_tier || 'free';
  const tierDisplayName = subscriptionTier.charAt(0).toUpperCase() + subscriptionTier.slice(1);

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <Link href="/dashboard" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Back to Dashboard
        </Link>
        
        <h1>Billing & Subscription</h1>

        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '30px',
          borderRadius: '8px',
          marginBottom: '30px'
        }}>
          <h2 style={{ marginTop: 0 }}>Current Plan</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3', margin: '10px 0' }}>
            {tierDisplayName}
          </p>
          {subscriptionTier === 'free' && (
            <p style={{ color: '#666', marginBottom: '20px' }}>
              Upgrade to unlock more features and create more listings.
            </p>
          )}
          {subscriptionTier !== 'free' && (
            <p style={{ color: '#666', marginBottom: '20px' }}>
              Thank you for being a {tierDisplayName} member!
            </p>
          )}
        </div>

        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          padding: '30px',
          borderRadius: '8px',
          marginBottom: '30px'
        }}>
          <h3 style={{ marginTop: 0 }}>Manage Subscription</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Update your payment method, view invoices, or change your subscription plan.
          </p>
          <button
            onClick={handleManageBilling}
            disabled={creatingPortalSession}
            style={{
              backgroundColor: '#0070f3',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '4px',
              border: 'none',
              cursor: creatingPortalSession ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              opacity: creatingPortalSession ? 0.6 : 1
            }}
          >
            {creatingPortalSession ? 'Loading...' : 'Manage Billing'}
          </button>
        </div>

        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          padding: '30px',
          borderRadius: '8px'
        }}>
          <h3 style={{ marginTop: 0 }}>Upgrade Your Plan</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Explore our pricing plans and choose the one that fits your needs.
          </p>
          <Link href="/pricing">
            <button style={{
              backgroundColor: '#666',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}>
              View Pricing Plans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
