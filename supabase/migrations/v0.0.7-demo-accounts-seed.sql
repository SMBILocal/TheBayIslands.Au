-- ========================================
-- DEMO ACCOUNTS SEED SCRIPT
-- ========================================
-- Creates demo user accounts for testing all roles and features
-- Run this AFTER v0.0.6-roles-and-permissions.sql migration
-- ========================================

-- NOTE: In production Supabase, users are created via Auth API or signup flow
-- This script provides the SQL structure for reference
-- You should create these accounts via Supabase Dashboard > Authentication > Users

/*
  DEMO ACCOUNTS TO CREATE:

  1. Super Admin
     - Email: admin@thebayislands.au
     - Password: Admin123!@# (change after first login)
     - Role: super_admin

  2. Content Manager  
     - Email: content@thebayislands.au
     - Password: Content123!@#
     - Role: content_manager

  3. Premium Business Owner
     - Email: business.premium@thebayislands.au
     - Password: Premium123!@#
     - Role: premium_user

  4. Basic Business Owner
     - Email: business.basic@thebayislands.au
     - Password: Business123!@#
     - Role: business_user

  5. Standard User
     - Email: user@thebayislands.au
     - Password: User123!@#
     - Role: user
*/

-- ========================================
-- STEP 1: Create users via Supabase Auth Dashboard
-- ========================================
-- Go to: Supabase Dashboard > Authentication > Users > Add User
-- Use the emails and passwords above
-- Then run the SQL below to assign roles and metadata

-- ========================================
-- STEP 2: Update user profiles after creation
-- ========================================

-- Get the user IDs (run this after creating users in Auth dashboard)
-- SELECT id, email FROM auth.users WHERE email IN (
--   'admin@thebayislands.au',
--   'content@thebayislands.au',
--   'business.premium@thebayislands.au',
--   'business.basic@thebayislands.au',
--   'user@thebayislands.au'
-- );

-- ========================================
-- STEP 3: Assign roles to demo users
-- ========================================

-- Update Super Admin (replace USER_ID with actual UUID)
-- UPDATE public.users 
-- SET 
--   role = 'super_admin',
--   role_expires_at = NULL,
--   display_name = 'Demo Super Admin',
--   email_verified = true
-- WHERE auth_id = 'SUPER_ADMIN_USER_ID';

-- Update Content Manager
-- UPDATE public.users 
-- SET 
--   role = 'content_manager',
--   role_expires_at = NULL,
--   display_name = 'Demo Content Manager',
--   email_verified = true
-- WHERE auth_id = 'CONTENT_MANAGER_USER_ID';

-- Update Premium Business User
-- UPDATE public.users 
-- SET 
--   role = 'premium_user',
--   role_expires_at = NOW() + INTERVAL '1 year',
--   display_name = 'Demo Premium Business',
--   email_verified = true
-- WHERE auth_id = 'PREMIUM_USER_ID';

-- Update Business User
-- UPDATE public.users 
-- SET 
--   role = 'business_user',
--   role_expires_at = NULL,
--   display_name = 'Demo Business Owner',
--   email_verified = true
-- WHERE auth_id = 'BUSINESS_USER_ID';

-- Update Standard User
-- UPDATE public.users 
-- SET 
--   role = 'user',
--   role_expires_at = NULL,
--   display_name = 'Demo Standard User',
--   email_verified = true
-- WHERE auth_id = 'STANDARD_USER_ID';

-- ========================================
-- STEP 4: Create sample business listings for demo accounts
-- ========================================

-- Sample featured business for premium user
-- INSERT INTO public.directory_listings (
--   business_name,
--   description,
--   category,
--   location,
--   phone,
--   email,
--   website,
--   status,
--   featured,
--   user_id
-- ) VALUES (
--   'Island Paradise Resort',
--   'Luxury accommodation on Macleay Island with stunning water views, spa facilities, and fine dining.',
--   'Accommodation & Lodging',
--   'macleay-island',
--   '07 1234 5678',
--   'info@islandparadise.com.au',
--   'https://islandparadise.com.au',
--   'active',
--   true,
--   'PREMIUM_USER_ID'
-- );

-- Sample basic business for business user
-- INSERT INTO public.directory_listings (
--   business_name,
--   description,
--   category,
--   location,
--   phone,
--   status,
--   featured,
--   user_id
-- ) VALUES (
--   'Bay Islands Bakery',
--   'Fresh bread, pastries, and coffee daily on Russell Island',
--   'Food & Dining',
--   'russell-island',
--   '07 9876 5432',
--   'active',
--   false,
--   'BUSINESS_USER_ID'
-- );

-- ========================================
-- VERIFICATION QUERIES
-- ========================================

-- Check all demo users and their roles
-- SELECT 
--   u.id,
--   u.email,
--   pu.role,
--   pu.display_name,
--   pu.role_expires_at,
--   pu.email_verified
-- FROM auth.users u
-- LEFT JOIN public.users pu ON u.id = pu.auth_id
-- WHERE u.email LIKE '%@thebayislands.au'
-- ORDER BY pu.role;

-- Check role permissions
-- SELECT * FROM public.role_permissions ORDER BY role;

-- Check directory listings by demo users
-- SELECT 
--   dl.business_name,
--   dl.category,
--   dl.location,
--   dl.status,
--   dl.featured,
--   u.email AS owner_email
-- FROM public.directory_listings dl
-- LEFT JOIN public.users pu ON dl.user_id = pu.auth_id
-- LEFT JOIN auth.users u ON pu.auth_id = u.id
-- WHERE u.email LIKE '%@thebayislands.au';

-- ========================================
-- MANUAL CREATION STEPS (Recommended)
-- ========================================

/*
  FOR PRODUCTION DEPLOYMENT:

  1. Go to Supabase Dashboard > Authentication > Users
  
  2. Click "Add User" for each demo account:
  
     a) Super Admin
        Email: admin@thebayislands.au
        Password: (generate strong password)
        Auto Confirm: Yes
     
     b) Content Manager
        Email: content@thebayislands.au
        Password: (generate strong password)
        Auto Confirm: Yes
     
     c) Premium Business
        Email: business.premium@thebayislands.au
        Password: (generate strong password)
        Auto Confirm: Yes
     
     d) Basic Business
        Email: business.basic@thebayislands.au
        Password: (generate strong password)
        Auto Confirm: Yes
     
     e) Standard User
        Email: user@thebayislands.au
        Password: (generate strong password)
        Auto Confirm: Yes

  3. After creating each user, note their UUID from auth.users table

  4. Run the UPDATE queries above with actual UUIDs

  5. Test login with each account

  6. Verify role-based access controls work correctly

*/

-- ========================================
-- ALTERNATIVE: PROGRAMMATIC CREATION
-- ========================================

-- You can also create users via Supabase Admin API:
-- POST https://YOUR_PROJECT.supabase.co/auth/v1/admin/users
-- Headers: 
--   Authorization: Bearer YOUR_SERVICE_ROLE_KEY
--   apikey: YOUR_SERVICE_ROLE_KEY
--   Content-Type: application/json
-- Body:
-- {
--   "email": "admin@thebayislands.au",
--   "password": "STRONG_PASSWORD",
--   "email_confirm": true,
--   "user_metadata": {
--     "role": "super_admin",
--     "display_name": "Demo Super Admin"
--   }
-- }

-- ========================================
-- SECURITY NOTES
-- ========================================

/*
  1. CHANGE DEFAULT PASSWORDS immediately after creation
  2. Use strong, unique passwords for each account
  3. Enable 2FA for admin accounts in production
  4. Regularly audit user permissions
  5. Set role_expires_at for temporary elevated privileges
  6. Monitor role_audit table for unauthorized changes
  7. Delete or disable demo accounts before going live
*/

-- ========================================
-- SUCCESS MESSAGE
-- ========================================

DO $$
BEGIN
  RAISE NOTICE '======================================';
  RAISE NOTICE 'DEMO ACCOUNTS SEED SCRIPT';
  RAISE NOTICE '======================================';
  RAISE NOTICE '';
  RAISE NOTICE 'To create demo accounts:';
  RAISE NOTICE '1. Go to Supabase Dashboard > Authentication > Users';
  RAISE NOTICE '2. Add each user with emails listed above';
  RAISE NOTICE '3. Note each user UUID';
  RAISE NOTICE '4. Run UPDATE queries with actual UUIDs';
  RAISE NOTICE '5. Test role-based access';
  RAISE NOTICE '';
  RAISE NOTICE 'Demo Accounts to Create:';
  RAISE NOTICE '- admin@thebayislands.au (super_admin)';
  RAISE NOTICE '- content@thebayislands.au (content_manager)';
  RAISE NOTICE '- business.premium@thebayislands.au (premium_user)';
  RAISE NOTICE '- business.basic@thebayislands.au (business_user)';
  RAISE NOTICE '- user@thebayislands.au (user)';
  RAISE NOTICE '';
  RAISE NOTICE '======================================';
END $$;
