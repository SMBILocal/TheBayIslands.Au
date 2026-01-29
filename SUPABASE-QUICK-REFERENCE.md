# Quick Reference - Supabase Setup

## ✅ Status: FULLY CONFIGURED

### Connection
```
URL: https://jazreuartewyrmbfhtdz.supabase.co
Status: ✅ Connected and verified
```

### Users & Credentials

| Role | Email | Password | Plan |
|------|-------|----------|------|
| **Super Admin** | `smbilocal@gmail.com` | `SuperAdmin123!@#` | Tailored |
| **Administrator** | `administrator@thebayislands.au` | `Admin123!@#` | Enterprise |
| **Moderator** | `moderator@thebayislands.au` | `Moderator123!@#` | Professional |
| **Editor** | `editor@thebayislands.au` | `Editor123!@#` | Standard |
| **User** | `user@thebayislands.au` | `User123!@#` | Free |
| **Demo** | `demo@thebayislands.au` | `Demo123!@#` | Free |

✅ All users are **verified, approved, and activated**

### Database Tables
- ✅ `plans` (8 records)
- ✅ `user_profiles` (5 records)  
- ✅ `user_subscriptions` (7 active)
- ✅ `organizations` (ready)
- ✅ `organization_members` (ready)
- ✅ `plan_changes` (ready)
- ✅ `settings` (ready)

### Test Commands
```bash
# Full connection test
node comprehensive-supabase-test.mjs

# Read/write verification
node test-rw-access.mjs

# Network check
./check-supabase.sh

# View users & subscriptions
node fix-subscriptions.mjs
```

### Quick Links
- **Login:** http://localhost:3000/login
- **Dashboard:** https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz
- **Database:** https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/editor
- **Auth:** https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/auth/users

### Environment Variables (.env.local)
```bash
NEXT_PUBLIC_SUPABASE_URL=https://jazreuartewyrmbfhtdz.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_jV-jGCss7g4MmxIy8aDlpw_4wYaBSmd
SUPABASE_SECRET_KEY=sb_secret_b2qQ4DIFS_jEqvJpfJBfzw_Jx6Nk0rw
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**All systems operational - ready to use!**
