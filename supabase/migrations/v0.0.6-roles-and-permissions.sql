-- Migration: v0.0.6-roles-and-permissions.sql
-- Description: Add role-based access control system
-- Status: Ready for deployment
-- Date: January 23, 2026

-- ========================================
-- ENABLE REQUIRED EXTENSIONS
-- ========================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================
-- EXTEND USERS TABLE WITH ROLE FIELDS
-- ========================================

ALTER TABLE public.users
ADD COLUMN IF NOT EXISTS user_role TEXT DEFAULT 'user' 
  CHECK (user_role IN ('super_admin', 'admin', 'moderator', 'editor', 'user')),
ADD COLUMN IF NOT EXISTS permissions JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS managed_by UUID REFERENCES public.users(id),
ADD COLUMN IF NOT EXISTS admin_since TIMESTAMP,
ADD COLUMN IF NOT EXISTS display_name TEXT,
ADD COLUMN IF NOT EXISTS avatar_url TEXT,
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS last_login TIMESTAMP;

-- ========================================
-- CREATE ROLE PERMISSIONS REFERENCE TABLE
-- ========================================

CREATE TABLE IF NOT EXISTS public.role_permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role TEXT UNIQUE NOT NULL CHECK (role IN ('super_admin', 'admin', 'moderator', 'editor', 'user')),
  description TEXT,
  permissions JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ========================================
-- SEED ROLE PERMISSIONS
-- ========================================

INSERT INTO public.role_permissions (role, description, permissions) VALUES
('super_admin', 'Platform owner - complete system access', '{
  "content": ["create", "read", "update", "delete", "approve", "feature"],
  "users": ["create", "read", "update", "delete", "suspend", "promote"],
  "admins": ["create", "read", "update", "delete"],
  "moderation": ["view", "approve", "reject", "resolve", "ban"],
  "articles": ["read", "create", "update", "delete", "approve", "publish"],
  "comments": ["read", "create", "update", "delete", "moderate"],
  "reports": ["read", "create", "update", "delete", "resolve"],
  "system": ["configure", "backup", "restore", "logs", "analytics"],
  "ratings": ["read", "create", "update", "delete"]
}'),
('admin', 'Site administrator - manage content and staff', '{
  "content": ["read", "update", "approve"],
  "users": ["read", "update", "suspend"],
  "admins": [],
  "moderation": ["view", "approve", "reject", "resolve"],
  "articles": ["read", "create", "update", "approve"],
  "comments": ["read", "moderate", "delete"],
  "reports": ["read", "update", "resolve"],
  "system": ["analytics"],
  "ratings": ["read", "update"]
}'),
('moderator', 'Content moderator and editor', '{
  "content": ["read", "update"],
  "users": [],
  "admins": [],
  "moderation": ["view", "approve", "reject"],
  "articles": ["read", "create", "update", "approve"],
  "comments": ["read", "moderate"],
  "reports": ["read"],
  "system": [],
  "ratings": ["read"]
}'),
('editor', 'Content creator and writer', '{
  "content": ["create", "read", "update"],
  "users": [],
  "admins": [],
  "moderation": [],
  "articles": ["read", "create", "update"],
  "comments": ["read", "create"],
  "reports": [],
  "system": [],
  "ratings": ["create", "read"]
}'),
('user', 'Community member', '{
  "content": ["create", "read"],
  "users": [],
  "admins": [],
  "moderation": [],
  "articles": ["read"],
  "comments": ["read", "create"],
  "reports": ["create"],
  "system": [],
  "ratings": ["create", "read"]
}')
ON CONFLICT (role) DO NOTHING;

-- ========================================
-- CREATE ROLE AUDIT TABLE
-- ========================================

CREATE TABLE IF NOT EXISTS public.role_audit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  changed_by UUID NOT NULL REFERENCES public.users(id),
  target_user UUID NOT NULL REFERENCES public.users(id),
  old_role TEXT NOT NULL,
  new_role TEXT NOT NULL,
  reason TEXT,
  ip_address TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_role_audit_changed_by ON public.role_audit(changed_by);
CREATE INDEX IF NOT EXISTS idx_role_audit_target_user ON public.role_audit(target_user);
CREATE INDEX IF NOT EXISTS idx_role_audit_created_at ON public.role_audit(created_at);

-- ========================================
-- CREATE ADMIN INVITES TABLE
-- ========================================

CREATE TABLE IF NOT EXISTS public.admin_invites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'moderator', 'editor')),
  invite_code TEXT UNIQUE NOT NULL,
  invited_by UUID NOT NULL REFERENCES public.users(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'expired')),
  expires_at TIMESTAMP NOT NULL,
  accepted_at TIMESTAMP,
  accepted_by_user_id UUID REFERENCES public.users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_admin_invites_email ON public.admin_invites(email);
CREATE INDEX IF NOT EXISTS idx_admin_invites_code ON public.admin_invites(invite_code);
CREATE INDEX IF NOT EXISTS idx_admin_invites_status ON public.admin_invites(status);

-- ========================================
-- EXTEND COMMENTS TABLE
-- ========================================

ALTER TABLE public.comments
ADD COLUMN IF NOT EXISTS comment_type TEXT DEFAULT 'user' CHECK (comment_type IN ('user', 'admin', 'moderator')),
ADD COLUMN IF NOT EXISTS is_flagged BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS flagged_reason TEXT,
ADD COLUMN IF NOT EXISTS moderation_status TEXT DEFAULT 'approved' CHECK (moderation_status IN ('pending', 'approved', 'rejected'));

-- ========================================
-- EXTEND ARTICLES TABLE (if not exists)
-- ========================================

CREATE TABLE IF NOT EXISTS public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image_url TEXT,
  category TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'approved', 'published', 'rejected', 'archived')),
  approval_status TEXT DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected')),
  approved_by UUID REFERENCES public.users(id),
  rejection_reason TEXT,
  views INT DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  featured_until TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  published_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_articles_user_id ON public.articles(user_id);
CREATE INDEX IF NOT EXISTS idx_articles_status ON public.articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_approval_status ON public.articles(approval_status);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON public.articles(published_at);

-- ========================================
-- EXTEND RATINGS TABLE
-- ========================================

ALTER TABLE public.ratings
ADD COLUMN IF NOT EXISTS helpful_count INT DEFAULT 0,
ADD COLUMN IF NOT EXISTS unhelpful_count INT DEFAULT 0;

-- ========================================
-- CREATE COMMENT LIKES/REACTIONS TABLE
-- ========================================

CREATE TABLE IF NOT EXISTS public.comment_reactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id UUID NOT NULL REFERENCES public.comments(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id),
  reaction_type TEXT NOT NULL CHECK (reaction_type IN ('like', 'love', 'helpful', 'unhelpful')),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(comment_id, user_id, reaction_type)
);

CREATE INDEX IF NOT EXISTS idx_comment_reactions_comment_id ON public.comment_reactions(comment_id);
CREATE INDEX IF NOT EXISTS idx_comment_reactions_user_id ON public.comment_reactions(user_id);

-- ========================================
-- CREATE COMMENT THREADS TABLE (for nested comments)
-- ========================================

CREATE TABLE IF NOT EXISTS public.comment_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_comment_id UUID NOT NULL REFERENCES public.comments(id) ON DELETE CASCADE,
  reply_comment_id UUID NOT NULL REFERENCES public.comments(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(parent_comment_id, reply_comment_id)
);

CREATE INDEX IF NOT EXISTS idx_comment_threads_parent ON public.comment_threads(parent_comment_id);
CREATE INDEX IF NOT EXISTS idx_comment_threads_reply ON public.comment_threads(reply_comment_id);

-- ========================================
-- UPDATE RLS POLICIES FOR EXTENDED SCHEMA
-- ========================================

-- Users table RLS
DROP POLICY IF EXISTS "Users can view own profile" ON public.users;
DROP POLICY IF EXISTS "Admins can view all users" ON public.users;
DROP POLICY IF EXISTS "Users can update own profile" ON public.users;

CREATE POLICY "Users can view own profile"
ON public.users FOR SELECT
USING (auth.uid() = id OR current_setting('request.jwt.claims')::json->>'role' IN ('admin', 'super_admin'));

CREATE POLICY "Users can update own profile"
ON public.users FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can update user roles"
ON public.users FOR UPDATE
USING (current_setting('request.jwt.claims')::json->>'role' = 'super_admin')
WITH CHECK (current_setting('request.jwt.claims')::json->>'role' = 'super_admin');

-- Comments table RLS (extended)
DROP POLICY IF EXISTS "Comments are viewable by everyone" ON public.comments;
DROP POLICY IF EXISTS "Users can create comments" ON public.comments;
DROP POLICY IF EXISTS "Users can delete own comments" ON public.comments;

CREATE POLICY "Comments are viewable by everyone"
ON public.comments FOR SELECT
USING (status = 'active' OR auth.uid() = user_id OR current_setting('request.jwt.claims')::json->>'role' IN ('admin', 'super_admin', 'moderator'));

CREATE POLICY "Users can create comments"
ON public.comments FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments"
ON public.comments FOR UPDATE
USING (auth.uid() = user_id OR current_setting('request.jwt.claims')::json->>'role' IN ('admin', 'super_admin', 'moderator'))
WITH CHECK (auth.uid() = user_id OR current_setting('request.jwt.claims')::json->>'role' IN ('admin', 'super_admin', 'moderator'));

CREATE POLICY "Users can delete own comments"
ON public.comments FOR DELETE
USING (auth.uid() = user_id OR current_setting('request.jwt.claims')::json->>'role' IN ('admin', 'super_admin'));

-- ========================================
-- CREATE INDEXES FOR PERFORMANCE
-- ========================================

CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(user_role);
CREATE INDEX IF NOT EXISTS idx_users_status ON public.users(status);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON public.users(created_at);

-- ========================================
-- CREATE TRIGGER FOR UPDATED_AT
-- ========================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_articles_updated_at ON public.articles;
CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON public.articles
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- VERIFICATION QUERIES
-- ========================================

-- Verify tables exist
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;

-- Verify columns added
-- SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'users' ORDER BY ordinal_position;

-- Verify role_permissions seeded
-- SELECT role, permissions FROM public.role_permissions ORDER BY role;

-- ========================================
-- SUCCESS MESSAGE
-- ========================================

-- All migrations completed successfully!
-- Schema now includes:
-- - Extended users table with role fields
-- - role_permissions reference table (seeded with 5 roles)
-- - role_audit logging table (tracks role changes)
-- - admin_invites table (invitation system)
-- - articles table (content management)
-- - Extended comments with moderation
-- - comment_reactions table (engagement)
-- - comment_threads table (nested comments)
-- - Updated RLS policies (role-based access)
-- - Performance indexes

-- Next: Seed demo users with different roles
