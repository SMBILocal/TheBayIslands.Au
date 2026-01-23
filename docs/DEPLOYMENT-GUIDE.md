# v0.0.3 Deployment Guide

This guide provides step-by-step instructions for deploying v0.0.3 to production.

## Prerequisites

- Node.js 18+ installed
- Supabase project created
- Stripe account with API keys
- Domain configured (e.g., thebayislands.au)
- Vercel/Netlify account (or other Next.js hosting)

---

## Step 1: Database Setup

### 1.1 Run Migration

Connect to your Supabase project and run the migration:

```sql
-- Copy the contents of supabase/migration-v0.0.3-subscriptions.sql
-- Paste into Supabase SQL Editor
-- Execute the migration
```

### 1.2 Verify Tables

Check that these tables exist:
- `users` (with new subscription columns)
- `directory_listings` (with moderation columns)
- `jobs` (with moderation columns)
- `classifieds` (with moderation columns)
- `events` (with moderation columns)
- `ratings` (new table)
- `comments` (updated)

### 1.3 Create Admin User

```sql
-- Set your user as admin
UPDATE users 
SET role = 'admin' 
WHERE email = 'your-admin@email.com';
```

---

## Step 2: Environment Variables

### 2.1 Create .env.local

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe (use test keys first, then production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... # or pk_live_...
STRIPE_SECRET_KEY=sk_test_... # or sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_... # Get from Stripe Dashboard

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://thebayislands.au

# Admin Configuration
NEXT_PUBLIC_ADMIN_EMAILS=admin@thebayislands.au,moderator@example.com
```

### 2.2 Deployment Platform Variables

Set the same variables in your hosting platform:
- Vercel: Project Settings > Environment Variables
- Netlify: Site Settings > Build & Deploy > Environment

---

## Step 3: Stripe Configuration

### 3.1 Create Products

In Stripe Dashboard (https://dashboard.stripe.com/products):

1. **Standard Tier**
   - Name: "Standard"
   - Price: $14.99 AUD/month
   - Copy the Price ID (starts with `price_...`)

2. **Professional Tier**
   - Name: "Professional"
   - Price: $29.99 AUD/month
   - Copy the Price ID

3. **Pro Tier**
   - Name: "Pro"
   - Price: $59.99 AUD/month
   - Copy the Price ID

### 3.2 Update Price IDs

Edit `lib/stripe.ts`:

```typescript
export const STRIPE_PRICE_IDS = {
  standard: 'price_1234567890abcdef', // Your Standard price ID
  popular: 'price_abcdef1234567890',  // Your Professional price ID
  pro: 'price_fedcba0987654321',      // Your Pro price ID
};
```

### 3.3 Configure Webhook

1. Go to Stripe Dashboard > Developers > Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://thebayislands.au/api/webhooks/stripe`
4. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the webhook signing secret
6. Add to .env.local as `STRIPE_WEBHOOK_SECRET`

---

## Step 4: Radio Stream Configuration

### 4.1 Obtain Stream URL

Contact Bay Islands Radio 88.0 FM for their streaming URL.

Example formats:
- Icecast: `https://stream.example.com:8000/bayislands`
- HLS: `https://stream.example.com/bayislands/playlist.m3u8`
- MP3: `https://stream.example.com/bayislands.mp3`

### 4.2 Update Components

Edit `components/TopAuthBar.tsx` (around line 30):

```typescript
const streamUrl = 'https://your-actual-stream-url.com/bayislands';
```

Edit `components/RadioStreamPlayer.tsx` (around line 40):

```typescript
const defaultStreamUrl = 'https://your-actual-stream-url.com/bayislands';
```

---

## Step 5: Build and Test Locally

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test the build locally
npm run start

# Open http://localhost:3000 and test:
# - All pages load
# - Payment flow works (Stripe test mode)
# - Admin access works
# - Radio player plays
```

---

## Step 6: Deploy to Production

### 6.1 Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Follow prompts and configure:
# - Link to existing project or create new
# - Confirm environment variables
# - Deploy
```

### 6.2 Netlify Deployment

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod

# Follow prompts and configure
```

### 6.3 Alternative: GitHub Integration

1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Configure environment variables in dashboard
4. Deploy automatically on push

---

## Step 7: SEO Setup

### 7.1 Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `https://thebayislands.au`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://thebayislands.au/sitemap.xml`

### 7.2 Verify Rich Snippets

Test structured data:
1. Go to https://search.google.com/test/rich-results
2. Enter URL of money page (e.g., `https://thebayislands.au/russell/cafes`)
3. Verify LocalBusiness schema is detected
4. Fix any errors

### 7.3 Social Media

Test OpenGraph tags:
1. Facebook Debugger: https://developers.facebook.com/tools/debug/
2. Twitter Card Validator: https://cards-dev.twitter.com/validator
3. Enter URLs and verify previews

---

## Step 8: Testing Checklist

### 8.1 Payment Flow

- [ ] User can click "Upgrade" on /upgrade page
- [ ] Stripe checkout session opens
- [ ] Test card works: 4242 4242 4242 4242
- [ ] User is redirected to /dashboard after payment
- [ ] Subscription status shows in dashboard
- [ ] Webhook is received (check Stripe Dashboard > Webhooks)
- [ ] User's tier is updated in database

### 8.2 Content Management

- [ ] User can create directory listing
- [ ] Listing appears as "pending" in admin dashboard
- [ ] Admin can approve listing
- [ ] Approved listing shows on public pages
- [ ] User can edit their listing
- [ ] User can delete their listing
- [ ] Tier limits are enforced (Free=1, Standard=5, etc.)

### 8.3 Moderation

- [ ] Admin can access /admin/moderation
- [ ] Pending counts are correct
- [ ] Admin can approve/reject content
- [ ] Moderated content updates status
- [ ] Non-admin users cannot access admin pages

### 8.4 Reviews

- [ ] Logged-in user can submit review on listing page
- [ ] Review requires 1-5 stars
- [ ] Review appears as "pending"
- [ ] Admin can approve review
- [ ] Approved review shows on listing page
- [ ] Average rating updates correctly

### 8.5 Radio Streaming

- [ ] Radio player shows in top auth bar
- [ ] Click play starts audio stream
- [ ] Click pause stops audio
- [ ] Volume control works
- [ ] /radio page shows all stations
- [ ] Station selector works

### 8.6 SEO Pages

- [ ] /suburbs/russell loads correctly
- [ ] /categories/cafes-and-coffee-shops loads
- [ ] /russell/cafes loads
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Breadcrumbs show correctly
- [ ] Internal links work

---

## Step 9: Monitoring

### 9.1 Set Up Error Tracking

Optional but recommended:

```bash
# Install Sentry
npm install @sentry/nextjs

# Configure in next.config.js
# Add DSN to environment variables
```

### 9.2 Monitor Stripe

- Check webhook delivery in Stripe Dashboard
- Review failed payments
- Monitor subscription renewals
- Check for disputes

### 9.3 Database Monitoring

- Monitor Supabase dashboard for:
  - Database size
  - Query performance
  - API usage
  - Auth users

---

## Step 10: Go Live Checklist

### Before Launch
- [ ] All environment variables set (production)
- [ ] Stripe webhooks configured and tested
- [ ] Radio stream URL updated
- [ ] Admin user created
- [ ] Database migration run
- [ ] Build passes locally
- [ ] All tests pass

### Launch Day
- [ ] Deploy to production
- [ ] Verify all pages load
- [ ] Test one payment flow end-to-end
- [ ] Submit sitemap to Google
- [ ] Announce on social media
- [ ] Monitor error logs

### Post-Launch (First Week)
- [ ] Monitor Stripe webhook deliveries
- [ ] Review pending moderation queue daily
- [ ] Check for user signup issues
- [ ] Monitor radio stream uptime
- [ ] Review analytics for SEO performance
- [ ] Gather user feedback

---

## Troubleshooting

### Build Fails

**Error**: Missing environment variables
```bash
# Solution: Create .env.local with all required variables
cp .env.example .env.local
# Fill in actual values
```

**Error**: Supabase connection failed
```bash
# Solution: Check Supabase URL and keys
# Verify project is running in Supabase dashboard
```

### Stripe Issues

**Webhook not receiving**
- Check webhook URL is correct: `/api/webhooks/stripe`
- Verify webhook secret is set correctly
- Check Stripe Dashboard > Webhooks for delivery attempts
- Review error logs

**Payment fails**
- Check Stripe publishable key is correct
- Ensure using test mode initially
- Verify price IDs match products
- Check Stripe Dashboard > Logs

### Radio Not Playing

**No audio**
- Verify stream URL is correct
- Check browser console for errors
- Try stream URL directly in browser
- Confirm CORS headers allow your domain
- Test with different browsers

### Admin Access Denied

**Cannot access /admin**
- Check user role in database: `SELECT role FROM users WHERE email = 'your@email.com'`
- Update role: `UPDATE users SET role = 'admin' WHERE email = 'your@email.com'`
- Verify email in NEXT_PUBLIC_ADMIN_EMAILS
- Clear browser cache and cookies

---

## Support

For issues during deployment:

1. Check build logs in your hosting platform
2. Review browser console for client-side errors
3. Check Supabase logs for database errors
4. Review Stripe webhook delivery logs
5. Consult Next.js documentation: https://nextjs.org/docs

---

## Next Steps After Deployment

1. **Content Population**
   - Add business listings
   - Create job postings
   - Publish initial articles
   - Schedule events

2. **Marketing**
   - Social media campaigns
   - Email newsletters
   - Local business outreach
   - SEO content creation

3. **Monitoring**
   - Set up Google Analytics
   - Monitor Stripe subscriptions
   - Track user engagement
   - Review feedback

4. **Iteration**
   - Implement user suggestions
   - Add requested features
   - Optimize based on analytics
   - Improve SEO rankings

---

**Deployment Complete!** 🎉

Your Bay Islands platform is now live with:
- ✅ Payment processing
- ✅ User dashboards
- ✅ Admin moderation
- ✅ 275+ SEO pages
- ✅ Reviews and ratings
- ✅ Radio streaming

Enjoy your production deployment!
