# 🚀 Quick Start Guide - TheBayIslands.Au

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier available)

---

## 1️⃣ Local Setup (5 minutes)

### Clone and Install
```bash
cd /workspaces/TheBayIslands.Au
npm install
```

### Configure Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyXXXXX...
SUPABASE_SERVICE_ROLE_KEY=eyXXXXX...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Start Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser 🎉

---

## 2️⃣ Database Setup (10 minutes)

### Create Tables & Policies

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Open SQL Editor
4. Run the contents of `supabase/schema.sql`
5. Run the contents of `supabase/policies.sql`

### Seed with Sample Data

```bash
node scripts/seed.js
```

This populates your database with sample articles, jobs, events, businesses, and classifieds.

---

## 3️⃣ Verify Everything Works

### Check Pages Load
- [ ] Home: http://localhost:3000
- [ ] Articles: http://localhost:3000/articles
- [ ] Jobs: http://localhost:3000/jobs
- [ ] Events: http://localhost:3000/events
- [ ] Directory: http://localhost:3000/directory
- [ ] Classifieds: http://localhost:3000/classifieds

### Check Detail Pages
- [ ] Job Detail: http://localhost:3000/jobs/1
- [ ] Article Detail: http://localhost:3000/articles/1
- [ ] Business Detail: http://localhost:3000/directory/b1
- [ ] Event Detail: http://localhost:3000/events/e1
- [ ] Classified Detail: http://localhost:3000/classifieds/c1

### Test Mobile Menu
- Resize browser to < 768px width
- Hamburger menu should appear
- Click to open/close navigation

### Test Search & Filters
- Click "Search" or use the filter panel
- Type in search box
- Select category and location dropdowns
- Results should filter in real-time

---

## 4️⃣ Project Structure Tour

```
📁 app/
  └── Route handlers and page components
  ├── page.tsx (Home)
  ├── articles/, jobs/, events/, directory/, classifieds/ (List pages)
  └── [id]/ (Detail pages for each section)

📁 components/
  └── Reusable React components
  ├── Navbar.tsx (Header with hamburger menu)
  ├── SearchFilter.tsx (Search + filter UI)
  ├── AuthModal.tsx (Login/signup form)
  ├── ListingForm.tsx (Create/edit listing)
  └── ListingCard.tsx & ImageCard.tsx (Display components)

📁 styles/
  └── globals.css (Complete design system)

📁 lib/
  └── Supabase client helpers

📁 supabase/
  └── schema.sql (Database tables)
  └── policies.sql (Security rules)
```

---

## 5️⃣ Key Features Guide

### 🔍 Search & Filter
- Type in search box to filter by title/name
- Select category dropdown to narrow by type
- Select location dropdown to filter by area
- Click "Clear" to reset all filters

### 📱 Mobile Menu
- Automatically appears on screens ≤768px wide
- Click hamburger icon to toggle
- Smooth slide-in animation
- Closes when link is clicked

### 🎨 Island Color Themes
- Russell Island: Coastal blues
- Macleay Island: Warm terracotta
- Stradbroke Island: Ocean colors
- Lamb Island: Forest green

Applied automatically based on location in listings.

### 📄 Detail Pages
- Click any listing card to view full details
- Full content, images, contact info
- Related items sidebar
- Share buttons (Email, Facebook, Twitter)
- CTA buttons (Apply, RSVP, Contact)

---

## 6️⃣ Common Tasks

### Add New Article
1. Go to Articles page
2. Click "Add Article" button (future feature)
3. Fill form and submit
4. Check Articles page to see it listed

### Create Job Posting
1. Go to Jobs page
2. Click "Post a Job" button
3. Fill job details
4. Submit to database
5. Appears immediately in job list

### List a Business
1. Go to Directory page
2. Click "List Your Business"
3. Enter business info, location, hours
4. Verify and publish
5. Appears with island color theme

### Post Classified Ad
1. Go to Classifieds page
2. Click "Post an Ad"
3. Upload photo, set price, describe item
4. Select location
5. Goes live immediately

### Search Everything
- Use search box on any list page
- Search by title, location, description
- Use filters to narrow results
- Clear filters to reset

---

## 7️⃣ Customization

### Change Colors
Edit `styles/globals.css`:
```css
--color-primary: #ff6b3d;      /* Main brand color */
--color-accent: #ff6b3d;       /* Highlight color */
--color-text: #1a202c;         /* Text color */
```

### Update Island Colors
```css
--island-russell-primary: #0066b3;
--island-macleay-primary: #c85a17;
/* etc */
```

### Modify Logo
Replace `/public/logo.png` with your own

### Update Navigation
Edit `components/Navbar.tsx` to add/remove links

### Change Content
- Edit `.env.local` to point to different Supabase project
- Run `node scripts/seed.js` to populate with new data

---

## 8️⃣ Deployment

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Set Production Environment Variables
1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_APP_URL` = your production domain

### Enable GitHub Auto-Deploy
1. Connect GitHub repo to Vercel
2. Pushes to `main` auto-deploy
3. GitHub Actions seeds database automatically

---

## 9️⃣ Troubleshooting

### Pages Won't Load
- Check `.env.local` has correct Supabase URLs
- Make sure `npm run dev` is running
- Clear browser cache (Ctrl+Shift+Delete)
- Check console for errors (F12)

### Search Not Working
- Ensure page is client component (`'use client'`)
- Check that useState and useEffect are imported
- Verify API endpoint returns data

### Database Connection Failed
- Verify Supabase URL and keys in `.env.local`
- Check Supabase project is active
- Run `node scripts/seed.js` to test connection
- Check RLS policies allow public SELECT

### Mobile Menu Not Working
- Verify hamburger icon appears on small screens
- Check z-index in styles (should be high)
- Clear browser cache
- Test in different mobile browser

### Images Not Showing
- Check image URL is valid
- Verify Supabase Storage bucket is public
- Use fallback image URLs
- Check CORS settings

---

## 🔟 Performance Tips

### Development
- Use React DevTools to check re-renders
- Check Network tab for slow API calls
- Use `npm run build` to test production build

### Production
- Enable image optimization with Next.js Image component
- Implement code splitting (already in Next.js)
- Cache static assets with Vercel
- Monitor Core Web Vitals

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Supabase Docs](https://supabase.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

## ✅ Checklist Before Launch

- [ ] Environment variables configured
- [ ] Database tables created and seeded
- [ ] All pages load without errors
- [ ] Mobile menu works on small screens
- [ ] Search and filters function correctly
- [ ] Detail pages load with correct content
- [ ] Images display properly
- [ ] Share buttons work
- [ ] Contact forms ready (if implemented)
- [ ] Production environment variables set
- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate ready
- [ ] Analytics set up (Google Analytics, etc.)
- [ ] SEO metadata configured

---

## 🎉 You're Ready!

Your **world-class Bay Islands directory and classifieds platform** is ready to launch. 

Start with http://localhost:3000 and explore the full feature set. Everything is connected, responsive, and production-ready.

**Questions?** Check API_DOCUMENTATION.md or IMPLEMENTATION_COMPLETE.md for more details.

---

**Good luck! 🏝️**
