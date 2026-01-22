'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { getStripe } from '@/lib/stripeClient';
import { useRouter } from 'next/navigation';

interface UpgradeButtonProps {
  tier: string;
  price: number | null;
  ctaText: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function UpgradeButton({
  tier,
  price,
  ctaText,
  variant = 'primary',
}: UpgradeButtonProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpgrade = async () => {
    // Enterprise tier requires contact
    if (tier === 'custom' || price === null) {
      window.location.href = 'mailto:admin@thebayislands.au?subject=Enterprise Inquiry';
      return;
    }

    // Free tier - just navigate to signup
    if (tier === 'free') {
      router.push('/signup');
      return;
    }

    // Check if user is logged in
    if (!user) {
      router.push('/login?redirect=/upgrade');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tier,
          userId: user.id,
          email: user.email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err: any) {
      console.error('Upgrade error:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const getButtonStyle = () => {
    const baseStyle = {
      padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)',
      fontSize: 'clamp(0.95em, 1.8vw, 15px)',
      fontWeight: '700',
      borderRadius: '8px',
      cursor: loading ? 'not-allowed' : 'pointer',
      border: 'none',
      transition: 'all 0.2s',
      minHeight: '44px',
      width: '100%',
      opacity: loading ? 0.6 : 1,
    };

    if (variant === 'primary') {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
        color: 'white',
      };
    }

    if (variant === 'outline') {
      return {
        ...baseStyle,
        background: 'transparent',
        color: '#0066b3',
        border: '2px solid #0066b3',
      };
    }

    // secondary
    return {
      ...baseStyle,
      background: '#f3f4f6',
      color: '#0f172a',
      border: '1px solid #d1d5db',
    };
  };

  return (
    <div>
      <button
        onClick={handleUpgrade}
        disabled={loading}
        style={getButtonStyle()}
      >
        {loading ? 'Processing...' : ctaText}
      </button>
      {error && (
        <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '8px', textAlign: 'center' }}>
          {error}
        </p>
      )}
    </div>
  );
}
