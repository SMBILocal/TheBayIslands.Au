-- ============================================
-- ASSIGN CONTENT TO SUPER ADMIN USER
-- Run this AFTER fix-profile-and-comments.sql
-- ============================================

-- Get the super admin user ID
DO $$
DECLARE
  super_admin_id UUID;
  article_ids UUID[];
  directory_ids UUID[];
  job_ids UUID[];
  event_ids UUID[];
  classified_ids UUID[];
BEGIN
  -- Get super admin ID
  SELECT id INTO super_admin_id FROM public.users WHERE email = 'smbilocal@gmail.com';
  
  IF super_admin_id IS NULL THEN
    RAISE EXCEPTION 'Super admin user not found. Please run fix-profile-and-comments.sql first.';
  END IF;

  RAISE NOTICE 'Super Admin ID: %', super_admin_id;

  -- ============================================
  -- 1. UPDATE EXISTING ARTICLES
  -- ============================================
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'articles') THEN
    -- Update up to 5 articles to belong to super admin
    UPDATE public.articles 
    SET 
      user_id = super_admin_id,
      status = 'published',
      approval_status = 'approved',
      approved_by = super_admin_id,
      published_at = COALESCE(published_at, created_at)
    WHERE id IN (
      SELECT id FROM public.articles 
      WHERE status IN ('published', 'approved', 'draft')
      ORDER BY created_at DESC 
      LIMIT 5
    )
    RETURNING id INTO article_ids;
    
    RAISE NOTICE 'Updated % articles for super admin', array_length(article_ids, 1);
  ELSE
    RAISE NOTICE 'Articles table does not exist yet';
  END IF;

  -- ============================================
  -- 2. UPDATE EXISTING DIRECTORY LISTINGS
  -- ============================================
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'directory_listings') THEN
    UPDATE public.directory_listings 
    SET 
      user_id = super_admin_id,
      status = 'active',
      featured = true,
      featured_until = NOW() + interval '30 days'
    WHERE id IN (
      SELECT id FROM public.directory_listings 
      WHERE status = 'active'
      ORDER BY created_at DESC 
      LIMIT 3
    )
    RETURNING id INTO directory_ids;
    
    RAISE NOTICE 'Updated % directory listings for super admin', array_length(directory_ids, 1);
  ELSE
    RAISE NOTICE 'Directory_listings table does not exist yet';
  END IF;

  -- ============================================
  -- 3. UPDATE EXISTING JOB POSTINGS
  -- ============================================
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'jobs') THEN
    UPDATE public.jobs 
    SET 
      user_id = super_admin_id,
      status = 'active'
    WHERE id IN (
      SELECT id FROM public.jobs 
      WHERE status = 'active'
      ORDER BY created_at DESC 
      LIMIT 2
    )
    RETURNING id INTO job_ids;
    
    RAISE NOTICE 'Updated % jobs for super admin', array_length(job_ids, 1);
  ELSE
    RAISE NOTICE 'Jobs table does not exist yet';
  END IF;

  -- ============================================
  -- 4. UPDATE EXISTING EVENTS
  -- ============================================
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'events') THEN
    UPDATE public.events 
    SET 
      user_id = super_admin_id,
      status = 'active'
    WHERE id IN (
      SELECT id FROM public.events 
      WHERE status = 'active' AND event_date >= NOW()
      ORDER BY event_date ASC 
      LIMIT 2
    )
    RETURNING id INTO event_ids;
    
    RAISE NOTICE 'Updated % events for super admin', array_length(event_ids, 1);
  ELSE
    RAISE NOTICE 'Events table does not exist yet';
  END IF;

  -- ============================================
  -- 5. UPDATE EXISTING CLASSIFIEDS
  -- ============================================
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'classifieds') THEN
    UPDATE public.classifieds 
    SET 
      user_id = super_admin_id,
      status = 'active'
    WHERE id IN (
      SELECT id FROM public.classifieds 
      WHERE status = 'active'
      ORDER BY created_at DESC 
      LIMIT 2
    )
    RETURNING id INTO classified_ids;
    
    RAISE NOTICE 'Updated % classifieds for super admin', array_length(classified_ids, 1);
  ELSE
    RAISE NOTICE 'Classifieds table does not exist yet';
  END IF;

  -- ============================================
  -- 6. UPDATE COMMENTS TO USE REAL CONTENT IDs
  -- ============================================
  
  -- Update article comments with real article IDs
  IF array_length(article_ids, 1) > 0 THEN
    UPDATE public.comments 
    SET content_id = article_ids[1]
    WHERE user_id = super_admin_id 
      AND content_type = 'article' 
      AND created_at = (
        SELECT MAX(created_at) 
        FROM public.comments 
        WHERE user_id = super_admin_id AND content_type = 'article'
      );
    
    IF array_length(article_ids, 1) > 1 THEN
      UPDATE public.comments 
      SET content_id = article_ids[2]
      WHERE user_id = super_admin_id 
        AND content_type = 'article' 
        AND created_at = (
          SELECT MIN(created_at) 
          FROM public.comments 
          WHERE user_id = super_admin_id AND content_type = 'article'
        );
    END IF;
  END IF;

  -- Update directory comments with real directory IDs
  IF array_length(directory_ids, 1) > 0 THEN
    UPDATE public.comments 
    SET content_id = directory_ids[1]
    WHERE user_id = super_admin_id 
      AND content_type = 'directory' 
      AND created_at = (
        SELECT MAX(created_at) 
        FROM public.comments 
        WHERE user_id = super_admin_id AND content_type = 'directory'
      );
    
    IF array_length(directory_ids, 1) > 1 THEN
      UPDATE public.comments 
      SET content_id = directory_ids[2]
      WHERE user_id = super_admin_id 
        AND content_type = 'directory' 
        AND created_at = (
          SELECT MIN(created_at) 
          FROM public.comments 
          WHERE user_id = super_admin_id AND content_type = 'directory'
        );
    END IF;
  END IF;

  -- Update event comments
  IF array_length(event_ids, 1) > 0 THEN
    UPDATE public.comments 
    SET content_id = event_ids[1]
    WHERE user_id = super_admin_id AND content_type = 'event';
  END IF;

  -- Update job comments
  IF array_length(job_ids, 1) > 0 THEN
    UPDATE public.comments 
    SET content_id = job_ids[1]
    WHERE user_id = super_admin_id AND content_type = 'job';
  END IF;

  -- Update classified comments
  IF array_length(classified_ids, 1) > 0 THEN
    UPDATE public.comments 
    SET content_id = classified_ids[1]
    WHERE user_id = super_admin_id AND content_type = 'classified';
  END IF;

END $$;

-- ============================================
-- VERIFICATION
-- ============================================

-- Show what content is now owned by super admin
SELECT 'Super Admin Content Summary' as report;

SELECT 
  'Articles' as content_type,
  COUNT(*) as owned_by_super_admin
FROM public.articles a
JOIN public.users u ON a.user_id = u.id
WHERE u.email = 'smbilocal@gmail.com'
UNION ALL
SELECT 
  'Directory Listings' as content_type,
  COUNT(*) as owned_by_super_admin
FROM public.directory_listings d
JOIN public.users u ON d.user_id = u.id
WHERE u.email = 'smbilocal@gmail.com'
UNION ALL
SELECT 
  'Jobs' as content_type,
  COUNT(*) as owned_by_super_admin
FROM public.jobs j
JOIN public.users u ON j.user_id = u.id
WHERE u.email = 'smbilocal@gmail.com'
UNION ALL
SELECT 
  'Events' as content_type,
  COUNT(*) as owned_by_super_admin
FROM public.events e
JOIN public.users u ON e.user_id = u.id
WHERE u.email = 'smbilocal@gmail.com'
UNION ALL
SELECT 
  'Classifieds' as content_type,
  COUNT(*) as owned_by_super_admin
FROM public.classifieds c
JOIN public.users u ON c.user_id = u.id
WHERE u.email = 'smbilocal@gmail.com'
UNION ALL
SELECT 
  'Comments' as content_type,
  COUNT(*) as owned_by_super_admin
FROM public.comments cm
JOIN public.users u ON cm.user_id = u.id
WHERE u.email = 'smbilocal@gmail.com';
