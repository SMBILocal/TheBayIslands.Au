# ✅ Production Deployment Checklist

## 🔐 Vercel & Supabase Setup

### Vercel Environment Variables
Log into [Vercel Dashboard](https://vercel.com) → Your Project → Settings → Environment Variables

Add these variables for **Production**, **Preview**, and **Development**:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://jazreuartewyrmbfhtdz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<GET_FROM_SUPABASE_DASHBOARD>
SUPABASE_SERVICE_ROLE_KEY=<GET_FROM_SUPABASE_DASHBOARD>

# App
NEXT_PUBLIC_APP_URL=https://thebayislands.au
NEXT_PUBLIC_SITE_URL=https://thebayislands.au

# Stripe (if using payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

**Where to find Supabase keys:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click Settings → API
4. Copy `anon` public key → Use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Copy `service_role` key → Use for `SUPABASE_SERVICE_ROLE_KEY`

---

## 👥 Create Demo Accounts

### Option 1: Via Supabase Dashboard (Recommended)

1. Go to [Supabase Dashboard](https://supabase.com/dashboard) → Authentication → Users
2. Click "Add User" for each account:

**Super Admin:**
- Email: `admin@thebayislands.au`
- Password: (generate strong password)
- ✅ Auto Confirm User

**Content Manager:**
- Email: `content@thebayislands.au`
- Password: (generate strong password)
- ✅ Auto Confirm User

**Premium Business:**
- Email: `business.premium@thebayislands.au`
- Password: (generate strong password)
- ✅ Auto Confirm User

**Basic Business:**
- Email: `business.basic@thebayislands.au`
- Password: (generate strong password)
- ✅ Auto Confirm User

**Standard User:**
- Email: `user@thebayislands.au`
- Password: (generate strong password)
- ✅ Auto Confirm User

3. After creating, get each user's UUID from the users table
4. Run these SQL queries in Supabase SQL Editor:

```sql
-- Get user IDs
SELECT id, email FROM auth.users 
WHERE email IN (
  'admin@thebayislands.au',
  'content@thebayislands.au',
  'business.premium@thebayislands.au',
  'business.basic@thebayislands.au',
  'user@thebayislands.au'
);

-- Assign roles (replace UUIDs with actual values from above)
UPDATE public.users SET role = 'super_admin', display_name = 'Demo Admin' 
WHERE auth_id = 'ADMIN_UUID';

UPDATE public.users SET role = 'content_manager', display_name = 'Demo Content Manager' 
WHERE auth_id = 'CONTENT_UUID';

UPDATE public.users SET role = 'premium_user', display_name = 'Demo Premium Business' 
WHERE auth_id = 'PREMIUM_UUID';

UPDATE public.users SET role = 'business_user', display_name = 'Demo Business' 
WHERE auth_id = 'BUSINESS_UUID';

UPDATE public.users SET role = 'user', display_name = 'Demo User' 
WHERE auth_id = 'USER_UUID';
```

---

## 🏢 Add Featured Businesses

To make the carousel work, you need at least 6 featured businesses:

### Option 1: Feature Existing Businesses

```sql
-- Mark 6 random businesses as featured
UPDATE directory_listings 
SET featured = true 
WHERE id IN (
  SELECT id FROM directory_listings 
  WHERE status = 'active' 
  ORDER BY RANDOM() 
  LIMIT 6
);
```

### Option 2: Create Sample Featured Businesses

Run in Supabase SQL Editor:

```sql
-- Sample Featured Business 1
INSERT INTO directory_listings (
  business_name, description, category, location, 
  phone, status, featured
) VALUES (
  'Island Paradise Resort',
  'Luxury accommodation with stunning water views, spa facilities, and fine dining on Macleay Island.',
  'Accommodation & Lodging',
  'macleay-island',
  '07 1234 5678',
  'active',
  true
);

-- Sample Featured Business 2
INSERT INTO directory_listings (
  business_name, description, category, location, 
  phone, status, featured
) VALUES (
  'Bay Islands Cafe',
  'Fresh coffee, homemade pastries, and breakfast all day. Local favorite on Russell Island.',
  'Food & Dining',
  'russell-island',
  '07 2345 6789',
  'active',
  true
);

-- Add 4 more similar businesses...
```

---

## 📝 Add Sample Content

### Articles (for "What's New" tab)

```sql
INSERT INTO articles (
  title, slug, excerpt, content, status, author
) VALUES (
  'Welcome to Bay Islands Community Hub',
  'welcome-bay-islands-community-hub',
  'Your trusted guide for South Moreton Bay Islands - Russell, Macleay, Lamb, and Karragarra.',
  '<p>Full article content here...</p>',
  'published',
  'admin@thebayislands.au'
);
```

### Events (for "Upcoming Events" tab)

```sql
INSERT INTO events (
  title, description, event_date, location, status
) VALUES (
  'Russell Island Markets',
  'Weekly community markets with local produce, crafts, and food stalls.',
  '2026-02-01 08:00:00',
  'Russell Island',
  'active'
);
```

### Jobs (for "Latest Jobs" tab)

```sql
INSERT INTO jobs (
  title, company, description, location, type, salary, status
) VALUES (
  'Cafe Manager',
  'Bay Islands Cafe',
  'Experienced cafe manager needed for busy island cafe.',
  'Russell Island',
  'Full-time',
  '$55,000 - $65,000',
  'active'
);
```

---

## 🚀 Deploy to Production

### Step 1: Commit Changes
```bash
git add .
git commit -m "feat: modernize homepage with featured carousel and enhanced CTAs"
git push origin thebayislands.au-v0.0.5
```

### Step 2: Vercel Auto-Deploy
Vercel will automatically detect the push and deploy. Monitor at:
- [Vercel Dashboard](https://vercel.com/dashboard)

### Step 3: Verify Deployment
Visit your production URL and check:
- ✅ Homepage loads
- ✅ Featured carousel displays (if you have featured businesses)
- ✅ "What's New" tabs work
- ✅ All CTAs link correctly
- ✅ Mobile responsive design works
- ✅ No console errors

---

## 🧪 Testing Checklist

### Desktop Testing
- [ ] Homepage hero section displays correctly
- [ ] Featured business carousel shows and auto-scrolls
- [ ] Carousel navigation arrows work
- [ ] Carousel dots navigation works
- [ ] "What's New" tabs switch content
- [ ] All CTAs are clickable and link correctly
- [ ] Island cards have hover effects
- [ ] Popular sections cards have hover effects
- [ ] Bottom CTA buttons work

### Mobile Testing (< 768px)
- [ ] Search bar is responsive
- [ ] Category filters hidden (as designed)
- [ ] Carousel shows 1 item at a time
- [ ] Tab headers scroll horizontally if needed
- [ ] CTA buttons stack vertically
- [ ] All text is readable
- [ ] Touch targets are adequate (44x44px minimum)

### Tablet Testing (768px - 1024px)
- [ ] Carousel shows 2 items
- [ ] Layout adjusts gracefully
- [ ] All features work

---

## 🔍 API Testing

Test the homepage API endpoint:

```bash
curl https://thebayislands.au/api/homepage/featured
```

Expected response:
```json
{
  "success": true,
  "data": {
    "featuredBusinesses": [...],
    "latestArticles": [...],
    "upcomingEvents": [...],
    "latestJobs": [...],
    "stats": {
      "businessCount": 0,
      "jobCount": 0,
      "eventCount": 0
    }
  }
}
```

---

## 🎯 Performance Checklist

### Before Going Live
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Test page load time (< 3 seconds)
- [ ] Verify images are optimized
- [ ] Check mobile performance
- [ ] Test on slow 3G connection

### Optimizations
```javascript
// Add to next.config.js if not present
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'your-image-cdn.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable SWC minification
  swcMinify: true,
}
```

---

## 📊 Analytics Setup (Optional but Recommended)

### Google Analytics 4
Add to `app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## 🐛 Common Issues & Solutions

### Issue: Carousel doesn't show
**Solution:** Check if you have featured businesses in database
```sql
SELECT COUNT(*) FROM directory_listings WHERE featured = true AND status = 'active';
```
Should return at least 6.

### Issue: API returns empty data
**Solution:** Check Supabase RLS policies allow public read access for active listings

### Issue: Environment variables not working
**Solution:** Redeploy from Vercel dashboard after adding env vars

### Issue: Images not loading
**Solution:** Add image domains to `next.config.js`

---

## ✅ Final Pre-Launch Checklist

- [ ] Vercel environment variables set
- [ ] Demo accounts created and roles assigned
- [ ] At least 6 featured businesses added
- [ ] Sample articles, events, jobs created
- [ ] Changes committed and pushed to GitHub
- [ ] Vercel deployment successful
- [ ] Production site tested on desktop
- [ ] Production site tested on mobile
- [ ] API endpoint tested
- [ ] No console errors
- [ ] Lighthouse performance > 80
- [ ] SEO meta tags present
- [ ] Analytics tracking added (optional)

---

## 🎊 You're Ready!

Once all checkboxes above are ticked, your modernized homepage is ready for the world!

**Quick Commands:**
```bash
# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]

# Force redeploy
vercel --prod
```

**Support Resources:**
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Need Help?** Check these files:
- `/docs/HOMEPAGE-MODERNIZATION-SUMMARY.md` - Complete implementation details
- `/docs/HOMEPAGE-ENHANCEMENT-PLAN-JAN-2026.md` - Planning and strategy
- `/supabase/migrations/v0.0.7-demo-accounts-seed.sql` - Demo account setup

---

*Last updated: January 23, 2026*
