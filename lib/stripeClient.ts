// Stripe configuration and utilities for client-side
import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      console.error('Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY');
      return null;
    }
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

// Map tier IDs to display names
export const TIER_NAMES = {
  free: 'Free',
  standard: 'Standard',
  popular: 'Professional',
  pro: 'Pro',
  custom: 'Enterprise',
};

// Map tier IDs to prices
export const TIER_PRICES = {
  free: 0,
  standard: 14.99,
  popular: 29.99,
  pro: 59.99,
  custom: null, // Contact sales
};
