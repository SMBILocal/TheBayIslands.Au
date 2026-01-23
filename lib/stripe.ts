// Stripe utility functions for server-side operations
import Stripe from 'stripe';

// Create Stripe instance lazily to avoid build-time errors
export function getStripeInstance(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!secretKey) {
    throw new Error('Missing STRIPE_SECRET_KEY environment variable');
  }

  return new Stripe(secretKey, {
    apiVersion: '2025-12-15.clover',
    typescript: true,
  });
}

// Price IDs for each tier (configure these in Stripe Dashboard)
export const STRIPE_PRICE_IDS = {
  standard: process.env.STRIPE_PRICE_STANDARD || 'price_standard',
  popular: process.env.STRIPE_PRICE_POPULAR || 'price_popular',
  pro: process.env.STRIPE_PRICE_PRO || 'price_pro',
  // Enterprise is custom pricing, handled separately
};

// Get or create a Stripe customer for a user
export async function getOrCreateStripeCustomer(
  userId: string,
  email: string
): Promise<string> {
  const stripe = getStripeInstance();
  
  // Search for existing customer
  const existingCustomers = await stripe.customers.list({
    email,
    limit: 1,
  });

  if (existingCustomers.data.length > 0) {
    return existingCustomers.data[0].id;
  }

  // Create new customer
  const customer = await stripe.customers.create({
    email,
    metadata: {
      userId,
    },
  });

  return customer.id;
}

// Create checkout session for subscription
export async function createCheckoutSession({
  customerId,
  priceId,
  tier,
  successUrl,
  cancelUrl,
}: {
  customerId: string;
  priceId: string;
  tier: string;
  successUrl: string;
  cancelUrl: string;
}): Promise<Stripe.Checkout.Session> {
  const stripe = getStripeInstance();
  
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      tier,
    },
    subscription_data: {
      metadata: {
        tier,
      },
    },
  });

  return session;
}

// Create billing portal session
export async function createBillingPortalSession({
  customerId,
  returnUrl,
}: {
  customerId: string;
  returnUrl: string;
}): Promise<Stripe.BillingPortal.Session> {
  const stripe = getStripeInstance();
  
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });

  return session;
}

// Cancel subscription
export async function cancelSubscription(
  subscriptionId: string
): Promise<Stripe.Subscription> {
  const stripe = getStripeInstance();
  return await stripe.subscriptions.cancel(subscriptionId);
}

// Update subscription
export async function updateSubscription({
  subscriptionId,
  priceId,
}: {
  subscriptionId: string;
  priceId: string;
}): Promise<Stripe.Subscription> {
  const stripe = getStripeInstance();
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  
  return await stripe.subscriptions.update(subscriptionId, {
    items: [
      {
        id: subscription.items.data[0].id,
        price: priceId,
      },
    ],
  });
}
