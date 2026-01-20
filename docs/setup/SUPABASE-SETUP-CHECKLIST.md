# 🚀 Supabase Integration Checklist

Use this checklist to track your Supabase setup progress.

## Phase 1: Project Setup (1-2 hours)

### A. Create Supabase Project
- [ ] Go to https://supabase.com
- [ ] Sign up or log in
- [ ] Create new project
- [ ] Wait for project to be ready (5-10 minutes)
- [ ] Note your Project URL
- [ ] Copy ANON_KEY
- [ ] Copy SERVICE_ROLE_KEY

### B. Configure Environment Variables
- [ ] Open `.env.local` in your editor
- [ ] Add `NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co`
- [ ] Add `NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key`
- [ ] Add `SUPABASE_SERVICE_ROLE_KEY=your-service-key`
- [ ] Save file (don't commit to git!)

### C. Deploy Database Schema
- [ ] Go to Supabase Dashboard → SQL Editor
- [ ] Click "New Query"
- [ ] Open `supabase/schema-v0.0.2.sql`
- [ ] Copy entire file content
- [ ] Paste into Supabase SQL Editor
- [ ] Click "Run" button
- [ ] Verify all 8 tables created:
  - [ ] users
  - [ ] directory_listings
  - [ ] jobs
  - [ ] events
  - [ ] classifieds
  - [ ] comments
  - [ ] favorites
  - [ ] saved_searches

### D. Verify RLS Policies
- [ ] Go to Supabase Dashboard → Authentication → Policies
- [ ] Verify each table has RLS enabled:
  - [ ] directory_listings: public read, user-specific writes
  - [ ] jobs: public read, user-specific writes
  - [ ] events: public read, user-specific writes
  - [ ] classifieds: public read, user-specific writes
  - [ ] comments: public read, authenticated writes
  - [ ] favorites: authenticated only
  - [ ] saved_searches: authenticated only

### E. Test Database Connection
```bash
npm run dev
# Then visit http://localhost:3000 in browser
```
- [ ] App loads without errors
- [ ] Check browser console for any errors
- [ ] Check server logs for connection issues

---

## Phase 2: Authentication Setup (4-6 hours)

### A. Enable Supabase Auth
- [ ] Go to Supabase Dashboard → Authentication → Providers
- [ ] Enable "Email" (already enabled)
- [ ] Consider enabling "Google" for easier signup
- [ ] Configure email templates if needed

### B. Create Login Page
```bash
# File: app/auth/login/page.tsx
```
- [ ] Design login form
- [ ] Add email/password fields
- [ ] Implement `signInWithPassword()` function
- [ ] Add "Forgot Password" link
- [ ] Add signup redirect
- [ ] Test login flow

### C. Create Signup Page
```bash
# File: app/auth/signup/page.tsx
```
- [ ] Design signup form
- [ ] Add email/password/confirm password fields
- [ ] Implement `signUp()` function
- [ ] Add email confirmation logic
- [ ] Add login redirect
- [ ] Test signup flow

### D. Create Auth Context
```bash
# File: lib/AuthContext.tsx (already exists)
```
- [ ] Verify context provides user and auth methods
- [ ] Update navbar to use AuthContext
- [ ] Show user profile when logged in
- [ ] Show login/signup when logged out

### E. Protect Routes
- [ ] Create middleware.ts for route protection
- [ ] Redirect unauthenticated users from /dashboard/*
- [ ] Redirect authenticated users from /auth/*
- [ ] Test redirects work

---

## Phase 3: Connect Forms to API (6-8 hours)

### A. Update DirectoryListingForm
```bash
# File: components/forms/DirectoryListingForm.tsx
```
- [ ] Add API endpoint: `/api/directory`
- [ ] Implement form submission handler
- [ ] Add loading state
- [ ] Add success notification
- [ ] Add error handling
- [ ] Test form submission

### B. Update JobListingForm
```bash
# File: components/forms/JobListingForm.tsx
```
- [ ] Add API endpoint: `/api/jobs`
- [ ] Implement form submission handler
- [ ] Add loading state
- [ ] Add success notification
- [ ] Add error handling
- [ ] Test form submission

### C. Test API Routes
```bash
# Test each route:
curl http://localhost:3000/api/directory
curl http://localhost:3000/api/jobs
curl http://localhost:3000/api/events
curl http://localhost:3000/api/classifieds
```
- [ ] GET returns listings
- [ ] POST requires authentication
- [ ] Filters work correctly
- [ ] Pagination works

### D. Add Image Upload
- [ ] Create `/api/upload` route
- [ ] Integrate Supabase Storage
- [ ] Allow uploading to `listings/` folder
- [ ] Update forms to handle image uploads
- [ ] Test file uploads

---

## Phase 4: Search & Detail Pages (4-6 hours)

### A. Update Directory Page
```bash
# File: app/directory/page.tsx
```
- [ ] Fetch listings from `/api/directory`
- [ ] Show search filter component
- [ ] Display results in grid
- [ ] Add pagination
- [ ] Test filtering by location
- [ ] Test filtering by category

### B. Create Detail Page
```bash
# File: app/directory/[id]/page.tsx
```
- [ ] Fetch listing by ID
- [ ] Display full business info
- [ ] Show image gallery
- [ ] Add contact form
- [ ] Add review section
- [ ] Add structured data
- [ ] Test page loads correctly

### C. Repeat for Other Pages
- [ ] `/jobs/page.tsx` - list all jobs
- [ ] `/jobs/[id]/page.tsx` - job detail
- [ ] `/events/page.tsx` - list all events
- [ ] `/events/[id]/page.tsx` - event detail
- [ ] `/classifieds/page.tsx` - list all classifieds
- [ ] `/classifieds/[id]/page.tsx` - classified detail

### D. Test Search Functionality
- [ ] Search by text works
- [ ] Filter by location works
- [ ] Filter by category works
- [ ] Multiple filters work together
- [ ] Sorting works (recent/featured/popular)
- [ ] Pagination works

---

## Phase 5: User Dashboard (2-4 hours)

### A. Create Dashboard Page
```bash
# File: app/dashboard/page.tsx
```
- [ ] Show user profile info
- [ ] Show user's listings
- [ ] Show user's favorites
- [ ] Show user's saved searches
- [ ] Add navigation menu

### B. Create Listing Management
```bash
# File: app/dashboard/listings/page.tsx
```
- [ ] List user's own listings
- [ ] Add edit functionality
- [ ] Add delete functionality
- [ ] Show listing stats (views, featured status)
- [ ] Test CRUD operations

### C. Create Profile Settings
```bash
# File: app/dashboard/settings/page.tsx
```
- [ ] Allow updating profile info
- [ ] Allow changing password
- [ ] Allow managing email
- [ ] Test updates save correctly

---

## Phase 6: Premium Features (2-3 hours)

### A. Add Premium Listing Support
- [ ] Add `featured` column to listings (already in schema)
- [ ] Create featured listing filter
- [ ] Show featured listings prominently
- [ ] Add "Upgrade to Featured" button
- [ ] Test featured filter

### B. Payment Integration
- [ ] Choose payment provider (Stripe/Paddle)
- [ ] Create checkout flow
- [ ] Create subscription management
- [ ] Update user premium_until timestamp
- [ ] Test payment flow

---

## Testing Checklist

### Database Tests
- [ ] Can create a user
- [ ] Can create a directory listing
- [ ] Can create a job posting
- [ ] Can create an event
- [ ] Can create a classified listing
- [ ] RLS prevents unauthorized access
- [ ] User can only see their own private data

### API Tests
- [ ] GET /api/directory returns listings
- [ ] GET /api/directory?location=russell filters correctly
- [ ] GET /api/directory?search=cafe searches correctly
- [ ] POST /api/directory requires auth
- [ ] POST /api/directory validates required fields
- [ ] POST /api/directory creates listing with correct owner

### Frontend Tests
- [ ] Forms validate input
- [ ] Forms show loading state
- [ ] Forms show success message
- [ ] Forms show error message
- [ ] Forms require authentication
- [ ] Pages load listings correctly
- [ ] Filters work correctly

### Performance Tests
- [ ] First load < 3 seconds
- [ ] Search results < 1 second
- [ ] Images load with optimization
- [ ] Mobile responsive works

---

## Troubleshooting

### Database Connection Issues
```bash
# Check environment variables
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# Clear next cache
rm -rf .next
npm run dev
```

### RLS Policy Errors
- Go to Supabase Dashboard → Table
- Check RLS is enabled
- Check policies allow your user
- Test with admin user first

### Form Submission Fails
- Check browser console for errors
- Check server logs with `npm run dev`
- Verify API route exists
- Verify authentication works

### API 401 Errors
- User is not logged in
- Auth token is expired
- Service role key not available

### API 403 Errors
- RLS policy is blocking access
- User doesn't have permission
- Check Supabase policy settings

---

## Success Criteria

By the end of this setup, you should have:

✅ Supabase project created and configured
✅ Database schema deployed with all 8 tables
✅ RLS policies protecting data
✅ Authentication system working (login/signup)
✅ Forms submitting data to database
✅ API routes returning data from database
✅ Search and filters working
✅ Detail pages displaying correct data
✅ User dashboard showing user's listings
✅ Images uploading and displaying correctly
✅ Mobile responsive design working
✅ No console errors or warnings

---

## Timeline

| Phase | Duration | Status |
|-------|----------|--------|
| 1. Project Setup | 1-2 hours | ⏳ |
| 2. Authentication | 4-6 hours | ⏳ |
| 3. Forms & API | 6-8 hours | ⏳ |
| 4. Search & Details | 4-6 hours | ⏳ |
| 5. Dashboard | 2-4 hours | ⏳ |
| 6. Premium Features | 2-3 hours | ⏳ |
| **Total** | **~20-30 hours** | **⏳** |

---

## Getting Help

- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs
- API Implementation Guide: See `V0.0.2-IMPLEMENTATION-GUIDE.md`
- Database Reference: See `lib/database.types.ts`
- Query Reference: See `lib/database.queries.ts`

---

**Next Steps:**
1. Create your Supabase project
2. Update `.env.local`
3. Run database schema
4. Run `npm run dev` to test
5. Work through Phase 2 (Authentication)
