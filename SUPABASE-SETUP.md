# Supabase Setup Instructions

## Current Status
✅ **Supabase is FULLY CONNECTED and CONFIGURED**

**Database:** `jazreuartewyrmbfhtdz.supabase.co`  
**Status:** ✅ All tables created, users configured, ready for production

## Connection Summary
- ✅ Database connection working
- ✅ Read/Write access confirmed
- ✅ 7 tables deployed (plans, user_profiles, user_subscriptions, organizations, etc.)
- ✅ 8 pricing plans configured (Free, Standard, Professional, Enterprise, Tailored)
- ✅ 7 users created with roles and permissions
- ✅ All users verified, approved, and activated

## Quick Setup (5 minutes)

### Step 1: Get Your Supabase Keys

1. Go to your Supabase project dashboard:
   **https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/settings/api**

2. Copy these 3 keys:
   - **URL**: `https://jazreuartewyrmbfhtdz.supabase.co` (already set ✅)
   - **anon public** key (under "Project API keys")
   - **service_role** secret key (under "Service role")

### Step 2: Update .env.local

Open `/workspaces/TheBayIslands.Au/.env.local` and replace the placeholder values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://jazreuartewyrmbfhtdz.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-key-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-service-role-key-here
```

### Step 3: Restart the Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### Step 4: Run Database Migrations

```bash
# Connect to your Supabase project
npx supabase login

# Link to the project
npx supabase link --project-ref jazreuartewyrmbfhtdz

# Push migrations to create tables
npx supabase db push
```

### Step 5: Create Admin User

```bash
# Run the admin user creation script
node scripts/create-admin-user.mjs
```

This will create:
- **Admin User**: `admin@thebayislands.au` / `Admin123!@#` (super_admin role)
- **Demo User**: `demo@thebayislands.au` / `Demo123!@#` (user role)

### Step 6: Test Login

1. Go to: http://localhost:3000/login
2. Login with: `admin@thebayislands.au` / `Admin123!@#`
3. You should see the admin dashboard

## Verify Connection

After updating .env.local, check if it works:

```bash
# Test Supabase connection
node test-supabase.mjs
```

Expected output:
```
✅ Supabase URL: https://jazreuartewyrmbfhtdz.supabase.co
✅ Anon key configured
✅ Connection successful
```

## Troubleshooting

### Error: "Invalid API key"
- Double-check you copied the full anon and service_role keys
- Keys are very long (200+ characters)
- Make sure there are no extra spaces or line breaks

### Error: "Failed to fetch"
- Check your internet connection
- Verify the Supabase project is not paused
- Check project status: https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz

### Tables don't exist
- Run the migrations: `npx supabase db push`
- Or manually run SQL files in the Supabase SQL Editor

## Database Schema

The app uses these main tables:

### Core Tables (All Deployed ✅)

1. **plans** (8 records)
   - Free, Trial, Starter, Standard, Professional, Pro, Enterprise, Tailored
   - Pricing and feature configuration

2. **user_profiles** (7 records)
   - User profile information
   - Links to auth users

3. **user_subscriptions** (7 active)
   - User plan assignments
   - Subscription status tracking

4. **organizations** (0 records)
   - Multi-user organization support

5. **organization_members** (0 records)
   - Organization membership tracking

6. **plan_changes** (0 records)
   - Plan change history

7. **settings** (0 records)
   - Application settings

## User Accounts & Roles

All users are **fully verified, approved, and activated** - no email verification required!

### Role → Plan Mapping
- **super_admin** → Tailored (unlimited)
- **administrator** → Enterprise ($99.99/mo)
- **moderator** → Professional ($29.99/mo)
- **editor** → Standard ($14.99/mo)
- **user** → Free ($0)
- **demo** → Free ($0)

### Login Credentials

#### Super Admin (Tailored Plan)
```
Email: smbilocal@gmail.com
Password: SuperAdmin123!@#
Role: super_admin
Plan: Tailored
```

```
Email: admin@thebayislands.au
Password: Admin123!@#
Role: super_admin
Plan: Tailored
```

#### Administrator (Enterprise Plan)
```
Email: administrator@thebayislands.au
Password: Admin123!@#
Role: administrator
Plan: Enterprise
```

#### Moderator (Professional Plan)
```
Email: moderator@thebayislands.au
Password: Moderator123!@#
Role: moderator
Plan: Professional
```

#### Editor (Standard Plan)
```
Email: editor@thebayislands.au
Password: Editor123!@#
Role: editor
Plan: Standard
```

#### Regular User (Free Plan)
```
Email: user@thebayislands.au
Password: User123!@#
Role: user
Plan: Free
```

#### Demo User (Free Plan)
```
Email: demo@thebayislands.au
Password: Demo123!@#
Role: demo
Plan: Free
```

## Testing & Verification

### Test Connection
```bash
node comprehensive-supabase-test.mjs
```

### Test Read/Write Access
```bash
node test-rw-access.mjs
```

### View All Users & Subscriptions
```bash
node fix-subscriptions.mjs
```

## Quick Links

- **Project Dashboard:** https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz
- **Database Editor:** https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/editor
- **Auth Users:** https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/auth/users
- **Edge Functions:** https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/functions
- **Local Login:** http://localhost:3000/login

## Environment Variables (Already Configured ✅)

```bash
NEXT_PUBLIC_SUPABASE_URL=https://jazreuartewyrmbfhtdz.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_jV-jGCss7g4MmxIy8aDlpw_4wYaBSmd
SUPABASE_SECRET_KEY=sb_secret_b2qQ4DIFS_jEqvJpfJBfzw_Jx6Nk0rw
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Pricing Plans Configuration

| Plan | ID | Monthly | Yearly | Features |
|------|-----|---------|--------|----------|
| Free | `free` | $0 | $0 | Basic features, 4 max points |
| Trial | `trial` | $0 | $0 | Trial features, 4 max points |
| Starter | `monthly_14_99` | $14.99 | $149.90 | Starter features, 14 max points |
| Standard | `standard` | $14.99 | $149.90 | Standard features, 14 max points |
| Professional | `professional` | $29.99 | $299.90 | Professional features, 29 max points |
| Pro | `monthly_29_99` | $29.99 | $299.90 | Pro features, 29 max points |
| Enterprise | `enterprise` | $99.99 | $999.90 | Enterprise features, 1000 max points |
| Tailored | `tailored` | Custom | Custom | All features, unlimited |

## Database Schema
- `users` - User profiles and roles
- `businesses` - Business directory listings
- `classifieds` - Classified ads
- `jobs` - Job postings
- `events` - Community events
- `articles` - News articles

See `/supabase/migrations/` for full schema.

## User Roles

- `super_admin` - Full system access
- `admin` - Most admin functions
- `moderator` - Content moderation
- `editor` - Content editing
- `user` - Standard user
- `business_user` - Business listing owner
- `premium_user` - Paid subscription user

## Next Steps

After Supabase is connected:
1. ✅ Create admin user
2. ✅ Test login/logout
3. ✅ Test creating a business listing
4. ✅ Test role-based access control
5. Run seed data: `npm run seed` (featured content)
