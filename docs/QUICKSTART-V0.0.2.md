# Quick Start - v0.0.2 Production Features

## 🎯 What's New in v0.0.2

This version adds **production-ready authentication, dashboards, and APIs** to make the site fully operational.

---

## 📋 Quick Setup (15 minutes)

### Step 1: Deploy Schema to Supabase
```bash
# 1. Go to https://supabase.com/dashboard
# 2. Select your project
# 3. Navigate to: SQL Editor
# 4. Create New Query
# 5. Copy and paste: supabase/schema-v0.0.2.sql
# 6. Click "Run"
```

### Step 2: Update Environment Variables
Edit `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://thebayislands.au
NEXT_PUBLIC_ADMIN_EMAILS=your-email@example.com
```

### Step 3: Install Dependencies
```bash
npm install
npm run build
```

### Step 4: Test Locally
```bash
npm run dev
```

Then visit: http://localhost:3000

---

## 🚀 New Pages Available

### User Routes
- `/signup` - Register new account with email verification
- `/login` - Login with email/password
- `/forgot-password` - Request password reset
- `/auth/reset` - Complete password reset (from email link)
- `/dashboard` - User home dashboard
- `/dashboard/profile` - Update profile info
- `/dashboard/directory` - Manage directory listings
- `/dashboard/jobs` - Manage job postings
- `/dashboard/events` - Manage events
- `/dashboard/classifieds` - Manage buy/sell listings

### Admin Routes
- `/admin` - Admin dashboard (for admin emails only)

---

## 🔌 API Endpoints

All APIs require authentication (user must be logged in).

### Directory Listings
```bash
# Get your listings
GET /api/directory/listings

# Create new listing
POST /api/directory/listings
Content-Type: application/json
{
  "business_name": "My Shop",
  "description": "Description here",
  "category": "retail",
  "location": "russell",
  "address": "123 Main St",
  "phone": "1234567890",
  "email": "shop@example.com"
}

# Get single listing
GET /api/directory/listings/[listing-id]

# Update listing
PUT /api/directory/listings/[listing-id]
{ ...updated fields... }

# Delete listing
DELETE /api/directory/listings/[listing-id]
```

### Jobs
```bash
GET /api/jobs/listings
POST /api/jobs/listings
{ "title": "...", "company_name": "...", ... }
```

### Events
```bash
GET /api/events/listings
POST /api/events/listings
{ "title": "...", "start_date": "...", ... }
```

### Classifieds
```bash
GET /api/classifieds/listings
POST /api/classifieds/listings
{ "title": "...", "price": 100, ... }
```

---

## 🛠️ Common Tasks

### Add Admin Access
1. Add email to `.env.local`:
   ```
   NEXT_PUBLIC_ADMIN_EMAILS=admin@example.com,support@example.com
   ```
2. Restart dev server
3. Login with that email
4. Visit `/admin`

### Create New Listing (API Example)
```javascript
const response = await fetch('/api/directory/listings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    business_name: 'My Business',
    description: 'Great business',
    category: 'retail',
    location: 'russell',
    address: '123 Main St'
  })
});
const newListing = await response.json();
```

### Send Emails
Edit `lib/email-templates.ts` to add your email provider:
```javascript
// Example with Resend
const response = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
  },
  body: JSON.stringify({
    from: 'noreply@thebayislands.au',
    to: user.email,
    subject: 'Verify your email',
    html: html
  })
});
```

---

## 🔐 Security Checklist

Before deploying to production:

- [ ] Update `NEXT_PUBLIC_ADMIN_EMAILS` with real admin accounts
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your domain
- [ ] Configure email provider (Resend recommended)
- [ ] Test signup → verify email → login flow
- [ ] Test password reset flow
- [ ] Verify RLS policies in Supabase
- [ ] Set up CORS if needed
- [ ] Enable 2FA in Supabase Auth settings

---

## 📊 Database Overview

### Main Tables
- **users** - User profiles (synced from auth.users)
- **directory_listings** - Business listings
- **jobs** - Job postings
- **events** - Events/activities
- **classifieds** - Buy & sell items
- **comments** - Reviews/ratings
- **favorites** - Saved listings
- **saved_searches** - Saved search queries

All tables have:
- Row-Level Security enabled
- Proper indexes for performance
- Full-text search support

---

## 🐛 Troubleshooting

### "User not authenticated" errors
- Make sure user is logged in
- Check if session cookie is set
- Try clearing browser cookies

### API returns 403 Forbidden
- Verify user owns the resource
- Check user_id matches in database

### Email not sending
- Configure email provider in `lib/email-templates.ts`
- Add `RESEND_API_KEY` or provider credentials to `.env.local`

### Build fails
- Run `npm install` again
- Delete `.next` folder: `rm -rf .next`
- Run `npm run build` again

---

## 📚 Next: Implement Remaining Features

1. **Email Integration** (1-2 hours)
   - Choose Resend, SendGrid, or SMTP
   - Update email-templates.ts
   - Test verification emails

2. **Storage Setup** (1 hour)
   - Create buckets in Supabase
   - Configure image uploads
   - Test upload endpoint

3. **Dashboard Polish** (2-3 hours)
   - Add edit pages
   - Add pagination
   - Add search/filter

4. **Admin Features** (2-4 hours)
   - Listing approval workflow
   - User management
   - Analytics dashboard

---

## 📞 Support

See `PRODUCTION-SETUP.md` for detailed setup and deployment instructions.

---

**Happy coding! 🚀**
