-- ============================================
-- FIX PROFILE PAGE & ADD COMMENTS SYSTEM
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgtrgm";

-- ============================================
-- 1. CREATE USERS TABLE (if not exists)
-- ============================================
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  is_premium BOOLEAN DEFAULT FALSE,
  premium_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sync trigger: auth.users → public.users
CREATE OR REPLACE FUNCTION public.handle_auth_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, username, avatar_url, created_at, updated_at)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'username', NEW.email),
    NEW.raw_user_meta_data->>'avatar_url',
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE
    SET email = EXCLUDED.email,
        username = COALESCE(EXCLUDED.username, public.users.username),
        avatar_url = COALESCE(EXCLUDED.avatar_url, public.users.avatar_url),
        updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT OR UPDATE ON auth.users
FOR EACH ROW EXECUTE PROCEDURE public.handle_auth_user();

-- Sync existing auth users to public.users
INSERT INTO public.users (id, email, username, avatar_url, created_at, updated_at)
SELECT 
  id,
  email,
  COALESCE(raw_user_meta_data->>'username', COALESCE(raw_user_meta_data->>'full_name', email)),
  raw_user_meta_data->>'avatar_url',
  created_at,
  updated_at
FROM auth.users
ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email,
      username = COALESCE(EXCLUDED.username, public.users.username),
      updated_at = NOW();

-- Update super admin user specifically
UPDATE public.users 
SET 
  username = 'SMBI Local - The Bay Islands .Au',
  bio = 'The official local news and community portal for the Southern Moreton Bay Islands',
  is_premium = true
WHERE email = 'smbilocal@gmail.com';

-- ============================================
-- 2. CREATE COMMENTS TABLE (if not exists)
-- ============================================
CREATE TABLE IF NOT EXISTS public.comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  content_type TEXT NOT NULL, -- 'article', 'directory', 'job', 'event', 'classified'
  content_id UUID NOT NULL,
  parent_id UUID REFERENCES public.comments(id) ON DELETE CASCADE, -- for threaded replies
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  status TEXT DEFAULT 'active', -- 'active', 'pending', 'deleted', 'flagged'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for comments
CREATE INDEX IF NOT EXISTS idx_comments_content ON public.comments(content_type, content_id);
CREATE INDEX IF NOT EXISTS idx_comments_user ON public.comments(user_id);
CREATE INDEX IF NOT EXISTS idx_comments_parent ON public.comments(parent_id);
CREATE INDEX IF NOT EXISTS idx_comments_created ON public.comments(created_at DESC);

-- ============================================
-- 3. ROW LEVEL SECURITY POLICIES
-- ============================================

-- Users table policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users are viewable by everyone" ON public.users;
CREATE POLICY "Users are viewable by everyone" ON public.users
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.users;
CREATE POLICY "Users can update their own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Comments table policies
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Comments are viewable by everyone" ON public.comments;
CREATE POLICY "Comments are viewable by everyone" ON public.comments
  FOR SELECT USING (status = 'active' OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Authenticated users can create comments" ON public.comments;
CREATE POLICY "Authenticated users can create comments" ON public.comments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own comments" ON public.comments;
CREATE POLICY "Users can update their own comments" ON public.comments
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own comments" ON public.comments;
CREATE POLICY "Users can delete their own comments" ON public.comments
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================
-- 4. ADD DUMMY COMMENTS FOR SUPER ADMIN
-- ============================================

-- Get the super admin user ID
DO $$
DECLARE
  super_admin_id UUID;
BEGIN
  SELECT id INTO super_admin_id FROM public.users WHERE email = 'smbilocal@gmail.com';
  
  IF super_admin_id IS NOT NULL THEN
    -- Add some sample comments (you'll need to replace UUIDs with actual content IDs)
    INSERT INTO public.comments (user_id, content_type, content_id, content, rating, status, created_at) 
    VALUES
      (super_admin_id, 'article', gen_random_uuid(), 'Great article about the local community! Thanks for sharing this important information.', 5, 'active', NOW() - interval '2 days'),
      (super_admin_id, 'article', gen_random_uuid(), 'This is exactly what our islands need - more coverage of local events and news.', 5, 'active', NOW() - interval '5 days'),
      (super_admin_id, 'directory', gen_random_uuid(), 'Excellent service! Highly recommend to all locals and visitors.', 5, 'active', NOW() - interval '1 week'),
      (super_admin_id, 'directory', gen_random_uuid(), 'The best place for fresh seafood on the islands. Support local!', 5, 'active', NOW() - interval '10 days'),
      (super_admin_id, 'event', gen_random_uuid(), 'Looking forward to this event! Great initiative for the community.', NULL, 'active', NOW() - interval '3 days'),
      (super_admin_id, 'job', gen_random_uuid(), 'Great opportunity for local job seekers. Good luck to all applicants!', NULL, 'active', NOW() - interval '1 week'),
      (super_admin_id, 'classified', gen_random_uuid(), 'Still available? Interested in learning more about this.', NULL, 'active', NOW() - interval '4 days');
    
    RAISE NOTICE 'Added 7 sample comments for super admin';
  END IF;
END $$;

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Check users table
SELECT 'Users Count' as check_name, COUNT(*)::TEXT as result FROM public.users
UNION ALL
SELECT 'Super Admin User', username FROM public.users WHERE email = 'smbilocal@gmail.com'
UNION ALL
SELECT 'Comments Count', COUNT(*)::TEXT FROM public.comments
UNION ALL
SELECT 'Super Admin Comments', COUNT(*)::TEXT FROM public.comments c 
  JOIN public.users u ON c.user_id = u.id 
  WHERE u.email = 'smbilocal@gmail.com';
