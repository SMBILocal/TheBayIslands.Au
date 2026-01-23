# Admin User Setup Guide

## Quick Setup for Admin Access

Your admin account needs to be created in Supabase with elevated privileges. Here's how to set it up:

### Option 1: Create Admin User via Supabase Dashboard (Recommended)

1. **Go to Supabase Dashboard**: https://supabase.com
2. **Select your project** (thebayislands.au)
3. **Navigate to**: Authentication → Users
4. **Click "Invite"** or create a new user
5. **Enter Details**:
   - Email: `smbilocal@thebayislands.au` (or your preferred admin email)
   - Password: `SMBILocal123$`
6. **Set Admin Role**:
   - After user is created, navigate to the database
   - Go to SQL Editor
   - Run this query to set the user as admin:

```sql
-- Get the user ID first (replace with actual email)
SELECT id FROM auth.users WHERE email = 'smbilocal@thebayislands.au';

-- Then update the user profile with admin role
UPDATE public.user_profiles 
SET role = 'admin' 
WHERE user_id = '[USER_ID_FROM_ABOVE]';
```

### Option 2: SQL Direct Setup

Run this in Supabase SQL Editor to create and configure the admin user:

```sql
-- Note: Supabase auth.users is managed by Supabase, so use the dashboard to create the user first
-- Then run this to set the role in your custom profile table:

INSERT INTO public.user_profiles (user_id, email, role, created_at, updated_at)
VALUES ('[USER_ID]', 'smbilocal@thebayislands.au', 'admin', now(), now())
ON CONFLICT (user_id) DO UPDATE SET role = 'admin';
```

### Login Credentials

- **Email**: `smbilocal@thebayislands.au`
- **Password**: `SMBILocal123$`
- **URL**: https://thebayislands.au/login

### First Login Steps

1. Visit https://thebayislands.au/login
2. Enter email: `smbilocal@thebayislands.au`
3. Enter password: `SMBILocal123$`
4. Click "Sign In"
5. Navigate to `/admin` to access the admin dashboard

### Dashboard Features Available

With admin role, you'll have access to:

- **📊 Moderation Dashboard**: View pending approvals, reports, and moderation statistics
- **📋 Approval Queue**: Review and approve/reject user submissions (listings, events, jobs, etc.)
- **🚩 Reports Management**: Handle user reports of inappropriate content
- **🔔 Notifications**: Receive alerts for moderation actions
- **🔧 Legacy Admin**: Original admin panel with directory, jobs, events, classifieds, users, and analytics

### Change Password

After first login:
1. Go to Account Settings (if available) or use the password reset feature
2. Update to your preferred secure password
3. Save changes

### Security Notes

- ⚠️ **Change the default password immediately** after first login
- ✅ Use a strong, unique password with uppercase, lowercase, numbers, and symbols
- 🔐 Never share your admin credentials
- 📝 The password `SMBILocal123$` should only be used for initial setup

### Adding More Admins

To add additional admin users:
1. Follow the same process above (Steps 1-6 in Option 1)
2. Set their role to `'admin'` in the user_profiles table
3. Share their login credentials securely

### Troubleshooting

**Issue**: "Access Denied" on `/admin` page
- **Solution**: Verify your user role is set to 'admin' in the user_profiles table

**Issue**: Can't log in
- **Solution**: Check that the user exists in Supabase auth.users and use the correct password

**Issue**: Password reset needed
- **Solution**: Use the "Forgot Password" link on the login page at `/forgot-password`

---

**Last Updated**: January 22, 2026
**Version**: 1.0
