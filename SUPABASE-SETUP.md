# Supabase Setup Instructions

## Current Status
❌ **Supabase is NOT connected** - Environment variables need to be configured

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
