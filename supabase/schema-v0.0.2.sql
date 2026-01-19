-- Bay Islands v0.0.2 Database Schema
-- Run this in Supabase SQL Editor

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgtrgm"; -- For full-text search
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Users table
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  is_premium BOOLEAN DEFAULT FALSE,
  premium_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sync auth.users → public.users for profile data
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

-- Directory listings table (businesses)
CREATE TABLE IF NOT EXISTS public.directory_listings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  business_name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  location TEXT NOT NULL, -- russell, macleay, lamb, karragarra, redland-bay, victoria-point, cleveland, capalaba
  phone TEXT,
  email TEXT,
  website TEXT,
  address TEXT NOT NULL,
  lat DECIMAL(10, 8),
  lng DECIMAL(11, 8),
  image_urls TEXT[] DEFAULT '{}',
  hours TEXT,
  featured BOOLEAN DEFAULT FALSE,
  featured_until TIMESTAMP WITH TIME ZONE,
  views INTEGER DEFAULT 0,
  status TEXT DEFAULT 'pending', -- active, pending, suspended, deleted
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE,
  search_text TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(business_name, '') || ' ' || coalesce(description, '') || ' ' || coalesce(category, '') || ' ' || coalesce(location, ''))
  ) STORED
);

-- Jobs table
CREATE TABLE IF NOT EXISTS public.jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  company_name TEXT NOT NULL,
  category TEXT NOT NULL,
  employment_type TEXT NOT NULL, -- full-time, part-time, contract, casual, volunteer
  location TEXT NOT NULL,
  salary_min DECIMAL(10, 2),
  salary_max DECIMAL(10, 2),
  salary_currency TEXT DEFAULT 'AUD',
  experience_level TEXT DEFAULT 'mid', -- entry, mid, senior, executive
  image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  featured_until TIMESTAMP WITH TIME ZONE,
  views INTEGER DEFAULT 0,
  applications INTEGER DEFAULT 0,
  status TEXT DEFAULT 'pending', -- active, pending, closed, deleted
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  search_text TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, '') || ' ' || coalesce(company_name, '') || ' ' || coalesce(category, ''))
  ) STORED
);

-- Events table
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  start_time TIME,
  end_time TIME,
  address TEXT NOT NULL,
  lat DECIMAL(10, 8),
  lng DECIMAL(11, 8),
  image_url TEXT,
  ticket_url TEXT,
  ticket_price DECIMAL(10, 2),
  featured BOOLEAN DEFAULT FALSE,
  featured_until TIMESTAMP WITH TIME ZONE,
  views INTEGER DEFAULT 0,
  registrations INTEGER DEFAULT 0,
  status TEXT DEFAULT 'upcoming', -- upcoming, live, past, cancelled, deleted
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  search_text TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, '') || ' ' || coalesce(category, ''))
  ) STORED
);

-- Classifieds table (Buy & Sell)
CREATE TABLE IF NOT EXISTS public.classifieds (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  condition TEXT NOT NULL, -- new, like-new, good, fair, for-parts, unknown
  location TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  negotiable BOOLEAN DEFAULT FALSE,
  image_urls TEXT[] DEFAULT '{}',
  contact_method TEXT NOT NULL, -- email, phone, both, in-app
  contact_info TEXT,
  featured BOOLEAN DEFAULT FALSE,
  featured_until TIMESTAMP WITH TIME ZONE,
  views INTEGER DEFAULT 0,
  inquiries INTEGER DEFAULT 0,
  status TEXT DEFAULT 'pending', -- active, pending, sold, deleted
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  search_text TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, '') || ' ' || coalesce(category, '') || ' ' || coalesce(condition, ''))
  ) STORED
);

-- Comments table
CREATE TABLE IF NOT EXISTS public.comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  listing_type TEXT NOT NULL, -- directory, job, event, classified
  listing_id UUID NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER,
  status TEXT DEFAULT 'pending', -- active, pending, deleted
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  listing_type TEXT NOT NULL, -- directory, job, event, classified
  listing_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, listing_type, listing_id)
);

-- Saved searches table
CREATE TABLE IF NOT EXISTS public.saved_searches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  query TEXT NOT NULL,
  filters JSONB DEFAULT '{}',
  search_type TEXT NOT NULL, -- directory, jobs, events, classifieds
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_directory_listings_location ON public.directory_listings(location);
CREATE INDEX idx_directory_listings_category ON public.directory_listings(category);
CREATE INDEX idx_directory_listings_status ON public.directory_listings(status);
CREATE INDEX idx_directory_listings_search ON public.directory_listings USING GIN (search_text);
CREATE INDEX idx_directory_listings_user_id ON public.directory_listings(user_id);

CREATE INDEX idx_jobs_location ON public.jobs(location);
CREATE INDEX idx_jobs_category ON public.jobs(category);
CREATE INDEX idx_jobs_status ON public.jobs(status);
CREATE INDEX idx_jobs_search ON public.jobs USING GIN (search_text);
CREATE INDEX idx_jobs_user_id ON public.jobs(user_id);

CREATE INDEX idx_events_location ON public.events(location);
CREATE INDEX idx_events_category ON public.events(category);
CREATE INDEX idx_events_start_date ON public.events(start_date);
CREATE INDEX idx_events_search ON public.events USING GIN (search_text);
CREATE INDEX idx_events_user_id ON public.events(user_id);

CREATE INDEX idx_classifieds_location ON public.classifieds(location);
CREATE INDEX idx_classifieds_category ON public.classifieds(category);
CREATE INDEX idx_classifieds_status ON public.classifieds(status);
CREATE INDEX idx_classifieds_search ON public.classifieds USING GIN (search_text);
CREATE INDEX idx_classifieds_user_id ON public.classifieds(user_id);

CREATE INDEX idx_comments_listing ON public.comments(listing_type, listing_id);
CREATE INDEX idx_favorites_user ON public.favorites(user_id);
CREATE INDEX idx_saved_searches_user ON public.saved_searches(user_id);

-- Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.directory_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classifieds ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_searches ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access
CREATE POLICY "Users are viewable by everyone" ON public.users
  FOR SELECT USING (true);

CREATE POLICY "Active directory listings are viewable by everyone" ON public.directory_listings
  FOR SELECT USING (status = 'active');

CREATE POLICY "Active jobs are viewable by everyone" ON public.jobs
  FOR SELECT USING (status = 'active');

CREATE POLICY "Active events are viewable by everyone" ON public.events
  FOR SELECT USING (status != 'deleted');

CREATE POLICY "Active classifieds are viewable by everyone" ON public.classifieds
  FOR SELECT USING (status = 'active');

-- RLS Policies for user-specific operations
CREATE POLICY "Users can create their own listings" ON public.directory_listings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own listings" ON public.directory_listings
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can create jobs" ON public.jobs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own jobs" ON public.jobs
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can create events" ON public.events
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own events" ON public.events
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can create classifieds" ON public.classifieds
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own classifieds" ON public.classifieds
  FOR UPDATE USING (auth.uid() = user_id);

-- Comments and favorites
CREATE POLICY "Comments are viewable by everyone" ON public.comments
  FOR SELECT USING (status = 'active');

CREATE POLICY "Users can create comments" ON public.comments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments" ON public.comments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments" ON public.comments
  FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Favorites are private" ON public.favorites
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create favorites" ON public.favorites
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites" ON public.favorites
  FOR DELETE USING (auth.uid() = user_id);

-- Saved searches
CREATE POLICY "Saved searches are private" ON public.saved_searches
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can save searches" ON public.saved_searches
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own saved searches" ON public.saved_searches
  FOR DELETE USING (auth.uid() = user_id);
