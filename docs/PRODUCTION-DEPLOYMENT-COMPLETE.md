# Supabase Production Deployment Guide

## Overview

This guide covers the complete deployment of TheBayIslands.Au with full Supabase integration, including schema migrations, environment setup, seeding, API wiring, and production validation.

**Status**: Production-Ready (Enterprise Grade)  
**Last Updated**: January 23, 2026  
**Estimated Deployment Time**: 2-3 hours

---

## Phase 1: Pre-Deployment Checklist

### 1.1 Security Review
- [ ] All exposed keys in `.env.local`, docs, and prior commits have been rotated
- [ ] New publishable and service-role keys generated in Supabase
- [ ] GitHub secrets updated with sanitized keys
- [ ] `.env.local` and `.env.example` reviewed and sanitized
- [ ] No secrets committed to git (check `.git/config`, `.gitignore`)

### 1.2 Environment Variables

**Create `.env.local` (do not commit):**
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://jazreuartewyrmbfhtdz.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=<new-publishable-key>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<new-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<new-service-role-key>
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Stripe (if payment features enabled)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Admin emails
NEXT_PUBLIC_ADMIN_EMAILS=admin@thebayislands.au
```

**Add to GitHub Secrets:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY` (if applicable)
- `STRIPE_WEBHOOK_SECRET` (if applicable)

### 1.3 Backup Existing Data (if applicable)
```bash
# Export current Supabase data
pg_dump postgresql://postgres:PASSWORD@db.jazreuartewyrmbfhtdz.supabase.co:5432/postgres > backup-$(date +%Y%m%d).sql
```

---

## Phase 2: Database Schema Deployment

**Timing**: ~10 minutes

### 2.1 Run Migrations in Order

Go to **Supabase Dashboard → SQL Editor** and execute each migration in this exact order:

1. **Core Schema (v0.0.2)**
   - File: `supabase/schema-v0.0.2.sql`
   - Includes: All tables, indexes, RLS policies, auth triggers
   - Expected result: 8 tables created (users, directory_listings, jobs, events, classifieds, comments, favorites, saved_searches)

2. **Subscription & Moderation Fields (v0.0.3)**
   - File: `supabase/migration-v0.0.3-subscriptions.sql`
   - Includes: Subscription tier, stripe fields, moderation fields, ratings table
   - Expected result: Ratings table created, users/listings tables extended

3. **Approval Workflow (v0.0.5)**
   - File: `supabase/schema-v0.0.5-content-approval.sql`
   - Includes: Approval queue, moderation logs, content reports, workflows, triggers
   - Expected result: Approval queue + workflow tables created, triggers active

4. **Public Read Policies (optional if using v0.0.2 scaffold tables)**
   - File: `supabase/policies.sql`
   - Includes: RLS policies for public reads on legacy tables
   - Only needed if you have old articles/jobs/events/businesses/classifieds tables

### 2.2 Verify Schema Creation

In Supabase SQL Editor, run:
```sql
-- Count tables
SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';

-- Verify core tables exist
SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;

-- Check RLS is enabled
SELECT schemaname, tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public';
```

Expected output:
- 12+ tables (excluding pg_ system tables)
- All public tables have `rowsecurity = true`

---

## Phase 3: Seed Initial Data

**Timing**: ~5 minutes

### 3.1 Local Testing (with service role key)

```bash
# Navigate to project root
cd /workspaces/TheBayIslands.Au

# Ensure .env.local is set with SUPABASE_SERVICE_ROLE_KEY
# Run seed script
node scripts/seed-v0.0.2.js
```

Expected output:
```
Seed v0.0.2 content inserted successfully
```

Verify in Supabase:
```sql
SELECT COUNT(*) as directory_count FROM directory_listings;
SELECT COUNT(*) as jobs_count FROM jobs;
SELECT COUNT(*) as events_count FROM events;
SELECT COUNT(*) as classifieds_count FROM classifieds;
```

Expected: 2+ records in each table

### 3.2 GitHub Actions Seeding (for CI/CD)

Push changes and trigger workflow:
```bash
# GitHub Actions will auto-run on push if configured
# Or manually trigger:
# GitHub → Actions → Seed Supabase → Run workflow
```

---

## Phase 4: API Wiring & Testing

**Timing**: ~30 minutes

### 4.1 Test Search APIs Locally

Start dev server:
```bash
npm run dev
```

Test endpoints with curl:

**Directory Search:**
```bash
curl "http://localhost:3000/api/directory/search?q=cafe&location=russell&limit=10"
```

Expected: `{ data: [...], pagination: {...} }`

**Jobs Search:**
```bash
curl "http://localhost:3000/api/jobs/search?location=russell&limit=10"
```

**Events Search:**
```bash
curl "http://localhost:3000/api/events/search?location=russell&limit=10"
```

**Classifieds Search:**
```bash
curl "http://localhost:3000/api/classifieds/search?location=russell&minPrice=50&maxPrice=500"
```

### 4.2 Test Individual Listing Endpoints

**Get Directory Listing:**
```bash
# Replace {ID} with actual listing ID from directory_listings
curl "http://localhost:3000/api/directory/{ID}"
```

**Get Job Listing:**
```bash
curl "http://localhost:3000/api/jobs/{ID}"
```

### 4.3 Verify Rate Limiting

Send 101 rapid requests:
```bash
for i in {1..101}; do curl http://localhost:3000/api/directory/search; done
```

Expected on 101st request: `429 Too Many Requests`

### 4.4 Verify Error Handling

Test with invalid data:
```bash
# Invalid location
curl "http://localhost:3000/api/directory/search?location=invalid&q=test"

# Missing required fields
curl -X POST http://localhost:3000/api/directory/listings \
  -H "Content-Type: application/json" \
  -d '{"description": "missing required fields"}'
```

Expected: Proper error responses with 400/401/500 status codes

---

## Phase 5: Frontend Integration

**Timing**: ~45 minutes

### 5.1 Update Data Fetching

Replace mock data with API calls in components:

**Example: Directory page**
```typescript
const [listings, setListings] = useState([])

useEffect(() => {
  fetch(`/api/directory/search?q=${searchQuery}&location=${location}`)
    .then(r => r.json())
    .then(data => setListings(data.data))
    .catch(err => console.error(err))
}, [searchQuery, location])
```

### 5.2 Test All Pages

- [ ] `/directory` - displays real listings
- [ ] `/jobs` - displays real jobs
- [ ] `/events` - displays real events
- [ ] `/classifieds` - displays real classifieds
- [ ] `/directory/[id]` - details page works
- [ ] Search hero on homepage - filters work

### 5.3 Test Authenticated Features

If user logged in:
- [ ] Create listing → saved to Supabase
- [ ] Create job → saved to Supabase
- [ ] Favorite item → saved to favorites table
- [ ] Rate listing → saved to ratings table
- [ ] View profile → shows user's listings

---

## Phase 6: Admin & Moderation

**Timing**: ~15 minutes

### 6.1 Set up Admin User

In Supabase SQL Editor:
```sql
-- Set your user as admin
UPDATE public.users 
SET user_role = 'admin', is_moderator = true 
WHERE email = 'admin@thebayislands.au';
```

### 6.2 Test Admin Endpoints

**Get Pending Approvals:**
```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  http://localhost:3000/api/admin/approvals
```

**Approve Content:**
```bash
curl -X POST http://localhost:3000/api/admin/approvals \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "approval_id": "APPROVAL_ID",
    "action": "approve"
  }'
```

### 6.3 Test Moderation Features

**Report Content:**
```bash
curl -X POST http://localhost:3000/api/reports/create \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "content_id": "LISTING_ID",
    "content_type": "directory",
    "report_reason": "spam",
    "description": "Spam listing"
  }'
```

**Get Reports (Admin):**
```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  http://localhost:3000/api/admin/reports
```

---

## Phase 7: Production Deployment

**Timing**: ~30 minutes

### 7.1 Production Build

```bash
# Lint & test
npm run lint
npm run type-check

# Build production bundle
npm run build

# Check build size
du -sh .next/
```

### 7.2 Deploy to Vercel/Production

```bash
# Commit changes
git add .
git commit -m "feat: production supabase integration ready"

# Push to main (if using GitHub Actions auto-deploy)
git push origin main

# Or manually deploy
# vercel --prod
```

### 7.3 Add Production Secrets to Hosting

Set environment variables on Vercel/hosting:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (if applicable)
- `STRIPE_SECRET_KEY` (if applicable)

### 7.4 Production Validation

Once deployed to production URL:

```bash
# Test API from production
curl "https://thebayislands.au/api/directory/search?limit=5"

# Check logs
# Vercel Dashboard → Deployments → Logs

# Monitor errors
# Sentry / error tracking (if configured)
```

---

## Phase 8: Post-Deployment

### 8.1 Data Backup

```bash
# Set up automated daily backups in Supabase
# Supabase Dashboard → Backups → Enable automated backups
```

### 8.2 Monitoring & Logging

Configure:
- [ ] Sentry for error tracking
- [ ] Datadog/CloudWatch for performance monitoring
- [ ] Analytics dashboard for user activity
- [ ] Email alerts for critical errors

### 8.3 Security Hardening

- [ ] Enable CORS (if needed for third-party integrations)
- [ ] Review RLS policies for compliance
- [ ] Set up WAF rules (DDoS protection)
- [ ] Enable SSL/TLS enforcement
- [ ] Review webhook signatures (Stripe, etc.)

### 8.4 Documentation

- [ ] API documentation (OpenAPI/Swagger)
- [ ] Database schema documentation
- [ ] Runbook for common issues
- [ ] Disaster recovery procedures

---

## Rollback Plan

If critical issues arise post-deployment:

### Step 1: Quick Rollback
```bash
# Revert to previous deployment
# Vercel: Dashboard → Deployments → Select previous → Promote to Production
```

### Step 2: Database Rollback (if needed)
```bash
# Restore from backup
# Supabase: Dashboard → Backups → Restore
```

### Step 3: Contact Team
- Notify development team immediately
- Document issue and root cause
- Create incident report
- Schedule postmortem

---

## Troubleshooting

### Issue: "401 Unauthorized" on API calls
**Solution**: Check `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` is set and valid

### Issue: "429 Too Many Requests"
**Solution**: Rate limit triggered; wait 1 minute or adjust rate limit in `lib/apiUtils.ts`

### Issue: "Rows not found" in search
**Solution**: Check record status is "active" and approval_status is "approved"

### Issue: RLS policy blocking queries
**Solution**: Verify RLS policies were applied; check `policies.sql` ran successfully

### Issue: Seed script fails
**Solution**: Ensure `SUPABASE_SERVICE_ROLE_KEY` is set; check database credentials

---

## Success Metrics

After deployment, validate:

- [ ] All search APIs return data (no 500 errors)
- [ ] Rate limiting works (429 on 101 requests)
- [ ] Pagination works (page/limit parameters)
- [ ] Filtering works (location, category, price range)
- [ ] Sorting works (newest, featured, price)
- [ ] Admin approvals work (with proper auth)
- [ ] User ratings/reviews save
- [ ] Favorites system works
- [ ] Moderation reports functional
- [ ] Performance: <500ms for search queries
- [ ] Error handling: proper HTTP status codes
- [ ] Logging: errors visible in monitoring tool
- [ ] Database: no orphaned records
- [ ] Security: RLS enforced, no SQL injection

---

## Contact & Support

**For issues or questions:**
- Development: `dev@thebayislands.au`
- Database: Supabase Dashboard Support
- Hosting: Vercel Dashboard Support

**Escalation:**
- Critical production issue: Page on-call engineer
- Security concern: Report to security team immediately

---

**Deployment Ready**: ✅ All systems GO

Last verified: January 23, 2026  
Next review: February 23, 2026
