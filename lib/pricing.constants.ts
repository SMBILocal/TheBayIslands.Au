// Pricing tiers with all features and metadata
export const PRICING_TIERS = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'Forever',
    description: 'Perfect for exploring',
    cta: 'Get Started',
    ctaVariant: 'secondary',
    position: 0,
    badge: null,
    color: '#f5f5f5',
    borderColor: '#e0e0e0',
    features: [
      { name: '1 directory listing', included: true, tooltip: 'One business profile in our directory' },
      { name: 'Listed in 1 category', included: true, tooltip: 'Your business appears in one service category' },
      { name: 'View jobs & classifieds', included: true, tooltip: 'Browse all job postings and classifieds for free' },
      { name: 'Basic profile', included: true, tooltip: 'Name, contact, and basic business info' },
      { name: 'Featured placement', included: false, tooltip: 'Premium spot at the top of search results' },
      { name: 'Priority support', included: false, tooltip: 'Dedicated customer support team' },
      { name: 'Analytics dashboard', included: false, tooltip: 'Track views, clicks, and leads' },
      { name: 'API access', included: false, tooltip: 'Integrate with your own systems' },
      { name: 'Multiple categories', included: false, tooltip: 'List in more than one service category' },
    ],
    limitations: 'Limited to 1 category, basic features only',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 14.99,
    period: 'per month',
    description: 'For growing businesses',
    cta: 'Upgrade Now',
    ctaVariant: 'outline',
    position: 1,
    badge: null,
    color: '#ffffff',
    borderColor: '#0066b3',
    features: [
      { name: '1 directory listing', included: true, tooltip: 'One business profile in our directory' },
      { name: 'Listed in 2 categories', included: true, tooltip: 'Your business appears in up to 2 service categories' },
      { name: 'Post job listings', included: true, tooltip: 'Create and post job opportunities (2 paid posts/month)' },
      { name: 'Enhanced profile', included: true, tooltip: 'Photos, descriptions, and business details' },
      { name: 'Featured placement', included: true, tooltip: 'Priority visibility in search results' },
      { name: 'Basic analytics', included: true, tooltip: 'View basic stats on profile views and inquiries' },
      { name: 'Priority support', included: true, tooltip: 'Get help within 24 hours' },
      { name: 'API access', included: false, tooltip: 'Integrate with your own systems' },
      { name: 'Advanced features', included: false, tooltip: 'Extra tools for enterprise use' },
    ],
    limitations: 'Up to 2 category placements',
  },
  {
    id: 'popular',
    name: 'Professional',
    price: 29.99,
    period: 'per month',
    description: 'Most popular choice',
    cta: 'Start Free Trial',
    ctaVariant: 'primary',
    position: 2,
    badge: 'Most Popular',
    color: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
    borderColor: '#0066b3',
    textColor: '#ffffff',
    isPopular: true,
    features: [
      { name: '1 directory listing', included: true, tooltip: 'One business profile in our directory' },
      { name: 'Listed in 5 categories', included: true, tooltip: 'Your business appears in up to 5 service categories' },
      { name: 'Featured placement', included: true, tooltip: 'Premium visibility in search results and featured sections' },
      { name: 'Up to 10 photos', included: true, tooltip: 'Showcase your business with up to 10 high-quality photos' },
      { name: 'Enhanced profile badge', included: true, tooltip: 'Verified badge to build customer trust' },
      { name: '24/7 Priority support', included: true, tooltip: 'Get help anytime via phone or chat' },
      { name: 'Advanced analytics', included: true, tooltip: 'Detailed insights on leads, clicks, and customer behavior' },
      { name: 'Featured badge display', included: true, tooltip: 'Stand out with a prominent featured business badge' },
      { name: 'Up to 5 paid job posts/month', included: true, tooltip: 'Post up to 5 job listings per month' },
      { name: 'Up to 5 paid classifieds/month', included: true, tooltip: 'Post up to 5 paid classifieds listings per month' },
    ],
    savings: 'Best value for most businesses',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 59.99,
    period: 'per month',
    description: 'For serious businesses',
    cta: 'Upgrade Now',
    ctaVariant: 'outline',
    position: 3,
    badge: null,
    color: '#ffffff',
    borderColor: '#0066b3',
    features: [
      { name: '2 directory listings (shared dashboard)', included: true, tooltip: 'Manage 2 businesses from one dashboard (separate dashboards available at higher tiers)' },
      { name: 'Listed in 10 categories', included: true, tooltip: 'Your businesses appear in up to 10 service categories each' },
      { name: 'Featured placement', included: true, tooltip: 'Premium visibility for both listings' },
      { name: 'Unlimited photos', included: true, tooltip: 'Upload unlimited high-quality photos for all listings' },
      { name: 'Premium profile badge', included: true, tooltip: 'Premium verified badges for added credibility' },
      { name: '24/7 Dedicated support', included: true, tooltip: 'Direct phone line to your dedicated support agent' },
      { name: 'Advanced analytics + reports', included: true, tooltip: 'Deep analytics, custom reports, and lead tracking' },
      { name: 'Priority visibility', included: true, tooltip: 'Top placement in all search results' },
      { name: 'API access', included: true, tooltip: 'Full API integration with your systems' },
      { name: '10 paid job posts/month', included: true, tooltip: 'Post up to 10 job listings per month' },
    ],
    benefits: [
      'Custom integrations',
      'Bulk category management',
      'Advanced reporting',
      'Dedicated account manager',
    ],
  },
  {
    id: 'custom',
    name: 'Enterprise',
    price: null,
    priceDisplay: 'Custom Pricing',
    period: 'Tailored to your needs',
    description: 'Unlimited everything',
    cta: 'Contact Sales',
    ctaVariant: 'secondary',
    position: 4,
    badge: null,
    color: '#f5f5f5',
    borderColor: '#cccccc',
    features: [
      { name: 'Multiple listings (separate dashboards)', included: true, tooltip: 'Unlimited listings with individual dashboards for each' },
      { name: 'Listed in ALL categories', included: true, tooltip: 'Your businesses can appear in every available service category' },
      { name: 'Premium placement', included: true, tooltip: 'Top placement across all directories and searches' },
      { name: 'Unlimited photos & media', included: true, tooltip: 'Unlimited uploads including videos and media files' },
      { name: 'Executive profile badge', included: true, tooltip: 'Executive-level verified badge with premium treatment' },
      { name: 'Dedicated account manager', included: true, tooltip: 'Personal account manager for your business needs' },
      { name: 'Custom analytics & reports', included: true, tooltip: 'Custom reporting dashboards and business intelligence' },
      { name: 'Priority visibility', included: true, tooltip: 'Guaranteed top placement in all searches' },
      { name: 'Full API access', included: true, tooltip: 'Full API with custom integrations and white-label options' },
      { name: 'Unlimited paid posts', included: true, tooltip: 'Unlimited job posts, classifieds, articles, and events' },
    ],
    benefits: [
      'Custom feature development',
      'Unlimited category access',
      'White-label platform',
      'Custom SLA',
      'Direct executive access',
    ],
  },
];

// Display configurations
export const PRICING_CONFIG = {
  // Desktop: Show all 5 tiers in grid
  desktop: {
    layout: 'grid',
    columns: 5,
    gap: 'md',
    highlightCenter: true,
  },
  
  // Tablet: Show 3 main tiers, carousel for 2 premium
  tablet: {
    layout: 'carousel',
    visible: 3,
    highlightCenter: true,
  },
  
  // Mobile: Swipeable carousel with 1 visible + hints
  mobile: {
    layout: 'carousel',
    visible: 1,
    showHints: true,
    swipeable: true,
  },
};

// Comparison table for showing feature differences
export const FEATURE_COMPARISON = {
  categories: [
    {
      name: 'Listings & Publishing',
      features: [
        { label: 'Active listings', free: '1', standard: '5', popular: 'Unlimited', pro: 'Unlimited', custom: 'Unlimited' },
        { label: 'Featured listings', free: '0', standard: '0', popular: '3', pro: '10', custom: 'Custom' },
        { label: 'Job postings', free: '0', standard: 'Yes', popular: 'Unlimited', pro: 'Unlimited', custom: 'Unlimited' },
      ],
    },
    {
      name: 'Support & Access',
      features: [
        { label: 'Support level', free: 'Community', standard: 'Priority', popular: '24/7 Priority', pro: 'Dedicated', custom: 'Dedicated' },
        { label: 'Response time', free: '48h', standard: '24h', popular: '2h', pro: '1h', custom: 'Custom' },
        { label: 'Phone support', free: 'No', standard: 'No', popular: 'Yes', pro: 'Yes', custom: 'Yes' },
      ],
    },
    {
      name: 'Analytics & Tools',
      features: [
        { label: 'Analytics', free: 'No', standard: 'Basic', popular: 'Advanced', pro: 'Advanced+', custom: 'Custom' },
        { label: 'Reports', free: 'No', standard: 'Basic', popular: 'Standard', pro: 'Advanced', custom: 'Custom' },
        { label: 'API access', free: 'No', standard: 'No', popular: 'No', pro: 'Yes', custom: 'Yes' },
      ],
    },
  ],
};

// Migration guidance for tier upgrades
export const TIER_FEATURES_BY_MIGRATION = {
  'free_to_standard': {
    gain: ['5 listings', 'Job posting', 'Priority support', 'Basic analytics'],
    price: '$9.99/month',
    savings: null,
  },
  'free_to_popular': {
    gain: ['Unlimited listings', 'Unlimited jobs', '24/7 support', 'Advanced analytics', '3 featured listings'],
    price: '$29.99/month',
    savings: 'Most popular tier',
  },
  'standard_to_popular': {
    gain: ['Unlimited listings', 'Advanced analytics', '3 featured listings', '24/7 support'],
    price: '$20/month more',
    savingsPercent: '30%',
  },
  'popular_to_pro': {
    gain: ['10 featured listings', 'Dedicated support', 'API access', 'Custom branding'],
    price: '$70/month more',
    for: 'Enterprise features',
  },
};

// Color scheme for each tier
export const TIER_COLORS = {
  free: { bg: '#f9f9f9', border: '#ddd', text: '#333', accent: '#666' },
  standard: { bg: '#ffffff', border: '#0066b3', text: '#333', accent: '#0066b3' },
  popular: { bg: '#0066b3', border: '#0052a3', text: '#ffffff', accent: '#ff6b35' },
  pro: { bg: '#ffffff', border: '#0066b3', text: '#333', accent: '#0066b3' },
  custom: { bg: '#f5f5f5', border: '#999', text: '#333', accent: '#666' },
};

// Animation timings for carousel
export const CAROUSEL_CONFIG = {
  transitionDuration: 300, // ms
  swipeThreshold: 50, // px
  autoplayInterval: 0, // disabled
  showIndicators: true,
  showArrows: true,
};

// Pricing page sections
export const PRICING_SECTIONS = {
  hero: {
    title: 'Simple, Transparent Pricing',
    description: 'Choose the plan that fits your needs. Always flexible, always fair.',
    cta: 'Start Free Trial',
  },
  billing: {
    annualDiscount: 17,
    billingPeriod: 'monthly', // or 'annual'
    toggleText: 'Bill annually & save 17%',
  },
  faq: [
    {
      question: 'Can I upgrade or downgrade anytime?',
      answer: 'Yes! Change your plan anytime. Upgrades take effect immediately, downgrades at billing cycle end.',
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'No contracts. Cancel anytime from your account settings. No hidden fees.',
    },
    {
      question: 'Do you offer educational discounts?',
      answer: 'Yes. Contact our team for non-profit and educational organization discounts.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, Amex) and PayPal.',
    },
    {
      question: 'Is there a free trial?',
      answer: '14-day free trial on Professional plan. No credit card required to start.',
    },
  ],
  testimonials: [
    {
      quote: 'Switched to Professional and my listings get 3x more visibility!',
      author: 'Sarah M.',
      title: 'Local Business Owner',
      tier: 'popular',
    },
    {
      quote: 'The Pro tier API access completely transformed our workflow.',
      author: 'James K.',
      title: 'Tech Agency',
      tier: 'pro',
    },
    {
      quote: 'Great value for money. Easy to upgrade when we needed more features.',
      author: 'Emma T.',
      title: 'Event Organizer',
      tier: 'standard',
    },
  ],
};

// Export types
export type PricingTier = typeof PRICING_TIERS[0];
export type PricingConfig = typeof PRICING_CONFIG;
export type FeatureComparison = typeof FEATURE_COMPARISON;
