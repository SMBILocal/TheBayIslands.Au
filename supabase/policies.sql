-- Enable Row Level Security and allow safe public reads for anon/public usage
-- Run these statements in the Supabase SQL editor (Project -> SQL Editor)

-- Articles
ALTER TABLE IF EXISTS public.articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "public_select_articles" ON public.articles
  FOR SELECT USING (true);

-- Jobs
ALTER TABLE IF EXISTS public.jobs ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "public_select_jobs" ON public.jobs
  FOR SELECT USING (true);

-- Events
ALTER TABLE IF EXISTS public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "public_select_events" ON public.events
  FOR SELECT USING (true);

-- Businesses
ALTER TABLE IF EXISTS public.businesses ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "public_select_businesses" ON public.businesses
  FOR SELECT USING (true);

-- Classifieds
ALTER TABLE IF EXISTS public.classifieds ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "public_select_classifieds" ON public.classifieds
  FOR SELECT USING (true);

-- Notes:
-- 1) These policies allow anonymous/public reads via the anon/public key while keeping writes
--    restricted. Adjust policies to include checks (e.g. published flag) if needed.
-- 2) The service_role key bypasses RLS and should be kept secret.
