-- Supabase Admin SQL Helpers
-- Run these in Supabase SQL Editor as needed

-- ========================================
-- DATA VALIDATION & INSPECTION
-- ========================================

-- View all users with their role
SELECT id, email, username, user_role, is_premium, created_at 
FROM public.users 
ORDER BY created_at DESC;

-- Count all content by type
SELECT 
  (SELECT COUNT(*) FROM directory_listings WHERE status = 'active') as active_businesses,
  (SELECT COUNT(*) FROM jobs WHERE status = 'active') as active_jobs,
  (SELECT COUNT(*) FROM events WHERE status != 'deleted') as active_events,
  (SELECT COUNT(*) FROM classifieds WHERE status = 'active') as active_classifieds;

-- View pending approvals
SELECT id, content_type, status, priority, created_at 
FROM public.approval_queue 
WHERE status = 'pending' 
ORDER BY priority DESC, created_at ASC;

-- View flagged content
SELECT id, content_id, content_type, report_reason, status, created_at 
FROM public.content_reports 
WHERE status = 'open' 
ORDER BY created_at DESC;

-- ========================================
-- USER MANAGEMENT
-- ========================================

-- Promote user to admin
UPDATE public.users 
SET user_role = 'admin', is_moderator = true 
WHERE email = 'admin@example.com';

-- Demote admin to regular user
UPDATE public.users 
SET user_role = 'user', is_moderator = false 
WHERE email = 'admin@example.com';

-- Disable user account
UPDATE public.users 
SET moderation_status = 'suspended' 
WHERE email = 'problem@example.com';

-- Re-enable user account
UPDATE public.users 
SET moderation_status = 'active' 
WHERE email = 'problem@example.com';

-- View user's content
SELECT id, business_name, status, approval_status, created_at 
FROM public.directory_listings 
WHERE user_id = 'USER_ID_UUID' 
ORDER BY created_at DESC;

-- ========================================
-- CONTENT MODERATION
-- ========================================

-- Auto-approve recent listings from verified users
UPDATE public.directory_listings 
SET approval_status = 'approved', status = 'active' 
WHERE approval_status = 'pending' 
  AND created_at > NOW() - INTERVAL '1 hour'
  AND user_id IN (
    SELECT id FROM public.users WHERE is_premium = true
  );

-- Delete spam listings
DELETE FROM public.directory_listings 
WHERE id IN (
  SELECT content_id FROM public.content_reports 
  WHERE content_type = 'directory' AND report_reason = 'spam' AND status = 'open'
);

-- View moderation history
SELECT action_type, content_type, moderator_id, reason, created_at 
FROM public.moderation_logs 
ORDER BY created_at DESC 
LIMIT 50;

-- ========================================
-- PERFORMANCE & INSIGHTS
-- ========================================

-- Most viewed listings
SELECT business_name, category, views, featured 
FROM public.directory_listings 
WHERE status = 'active' 
ORDER BY views DESC 
LIMIT 20;

-- Top rated businesses
SELECT d.business_name, AVG(r.rating) as avg_rating, COUNT(r.id) as total_ratings 
FROM public.directory_listings d 
LEFT JOIN public.ratings r ON d.id = r.listing_id 
WHERE r.status = 'active' 
GROUP BY d.id, d.business_name 
ORDER BY avg_rating DESC 
LIMIT 20;

-- User activity (last 7 days)
SELECT 
  DATE_TRUNC('day', created_at) as day,
  COUNT(*) as new_listings
FROM public.directory_listings 
WHERE created_at > NOW() - INTERVAL '7 days' 
GROUP BY DATE_TRUNC('day', created_at) 
ORDER BY day DESC;

-- Search frequency (if search_text is logged)
SELECT search_text, COUNT(*) as times_searched 
FROM public.moderation_logs 
WHERE created_at > NOW() - INTERVAL '30 days' 
GROUP BY search_text 
ORDER BY times_searched DESC 
LIMIT 20;

-- ========================================
-- MAINTENANCE
-- ========================================

-- Expire old classifieds (older than 60 days)
UPDATE public.classifieds 
SET status = 'deleted' 
WHERE expires_at < NOW() AND status = 'active';

-- Expire old jobs (older than 30 days)
UPDATE public.jobs 
SET status = 'closed' 
WHERE expires_at < NOW() AND status = 'active';

-- Clean up duplicate favorites (keep latest)
DELETE FROM public.favorites 
WHERE id NOT IN (
  SELECT DISTINCT ON (user_id, listing_type, listing_id) id 
  FROM public.favorites 
  ORDER BY user_id, listing_type, listing_id, created_at DESC
);

-- Archive old moderation logs (optional, for analytics)
CREATE TABLE IF NOT EXISTS public.moderation_logs_archive AS 
SELECT * FROM public.moderation_logs 
WHERE created_at < NOW() - INTERVAL '1 year';

-- ========================================
-- BATCH OPERATIONS
-- ========================================

-- Feature all listings from premium users
UPDATE public.directory_listings 
SET featured = true, featured_until = NOW() + INTERVAL '30 days' 
WHERE user_id IN (
  SELECT id FROM public.users WHERE subscription_tier != 'free'
);

-- Send admin notification (create notification record for batch review)
INSERT INTO public.mod_notifications (moderator_id, notification_type, title, message, priority)
SELECT id, 'bulk_action', 'Batch Action Complete', 'Featured all premium listings', 'normal'
FROM public.users 
WHERE user_role = 'admin';

-- ========================================
-- BACKUP & EXPORT
-- ========================================

-- Export active listings for backup
COPY (
  SELECT id, business_name, category, location, phone, email, website, created_at 
  FROM public.directory_listings 
  WHERE status = 'active' 
  ORDER BY created_at DESC
) TO STDOUT WITH CSV HEADER;

-- ========================================
-- AUDIT & COMPLIANCE
-- ========================================

-- GDPR: Find all user data
SELECT * FROM public.users WHERE email = 'user@example.com';
SELECT * FROM public.directory_listings WHERE user_id = 'USER_ID_UUID';
SELECT * FROM public.jobs WHERE user_id = 'USER_ID_UUID';
SELECT * FROM public.classifieds WHERE user_id = 'USER_ID_UUID';
SELECT * FROM public.ratings WHERE user_id = 'USER_ID_UUID';
SELECT * FROM public.favorites WHERE user_id = 'USER_ID_UUID';
SELECT * FROM public.saved_searches WHERE user_id = 'USER_ID_UUID';

-- GDPR: Delete all user data (DESTRUCTIVE - use with caution)
-- DELETE FROM public.favorites WHERE user_id = 'USER_ID_UUID';
-- DELETE FROM public.saved_searches WHERE user_id = 'USER_ID_UUID';
-- DELETE FROM public.ratings WHERE user_id = 'USER_ID_UUID';
-- DELETE FROM public.directory_listings WHERE user_id = 'USER_ID_UUID';
-- DELETE FROM public.jobs WHERE user_id = 'USER_ID_UUID';
-- DELETE FROM public.classifieds WHERE user_id = 'USER_ID_UUID';
-- DELETE FROM public.comments WHERE user_id = 'USER_ID_UUID';
-- DELETE FROM public.users WHERE id = 'USER_ID_UUID';

-- ========================================
-- MONITORING QUERIES
-- ========================================

-- Database size
SELECT 
  pg_size_pretty(pg_total_relation_size('public.users')) as users_size,
  pg_size_pretty(pg_total_relation_size('public.directory_listings')) as directory_size,
  pg_size_pretty(pg_total_relation_size('public.jobs')) as jobs_size,
  pg_size_pretty(pg_total_relation_size('public.classifieds')) as classifieds_size;

-- Active connections
SELECT datname, usename, COUNT(*) FROM pg_stat_activity GROUP BY datname, usename;

-- Slow queries (requires slow query log enabled)
SELECT query, calls, mean_time, max_time 
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;

-- Index usage
SELECT schemaname, tablename, indexname, idx_scan 
FROM pg_stat_user_indexes 
ORDER BY idx_scan DESC;

-- ========================================
-- NOTES
-- ========================================
-- • Always backup before running DELETE or UPDATE on large datasets
-- • Test queries on staging first
-- • Use transactions for complex operations
-- • Monitor query performance with EXPLAIN
-- • Log all admin actions for compliance
