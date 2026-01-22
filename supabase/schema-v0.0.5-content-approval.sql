-- Bay Islands v0.0.5 Migration: Content Approval System
-- Run this in Supabase SQL Editor after schema-v0.0.2.sql

-- ========================================
-- 1. Content Approval Queue Table
-- ========================================
-- Tracks all submissions pending review

CREATE TABLE IF NOT EXISTS public.approval_queue (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('directory', 'job', 'event', 'classified')),
  submitted_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  submission_content JSONB NOT NULL, -- Full snapshot of submitted content for review
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'needs_revision')),
  reviewed_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  rejection_reason TEXT,
  revision_notes TEXT,
  priority INTEGER DEFAULT 0, -- Higher = more urgent
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Indexes for efficient querying
  CONSTRAINT content_exists CHECK (content_id != '00000000-0000-0000-0000-000000000000'::uuid)
);

CREATE INDEX IF NOT EXISTS idx_approval_queue_status ON public.approval_queue(status);
CREATE INDEX IF NOT EXISTS idx_approval_queue_content_type ON public.approval_queue(content_type);
CREATE INDEX IF NOT EXISTS idx_approval_queue_submitted_by ON public.approval_queue(submitted_by);
CREATE INDEX IF NOT EXISTS idx_approval_queue_reviewed_by ON public.approval_queue(reviewed_by);
CREATE INDEX IF NOT EXISTS idx_approval_queue_created_at ON public.approval_queue(created_at DESC);

-- ========================================
-- 2. Moderation Audit Log
-- ========================================
-- Track all moderation actions for compliance

CREATE TABLE IF NOT EXISTS public.moderation_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  action_type TEXT NOT NULL CHECK (action_type IN ('approved', 'rejected', 'suspended', 'deleted', 'flag_resolved', 'user_warned')),
  content_id UUID,
  content_type TEXT CHECK (content_type IN ('directory', 'job', 'event', 'classified', 'user', 'comment')),
  moderator_id UUID NOT NULL REFERENCES public.users(id) ON DELETE RESTRICT,
  reason TEXT NOT NULL,
  previous_status TEXT,
  new_status TEXT,
  metadata JSONB, -- Store additional context (IP, reason codes, etc)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_moderation_logs_action_type ON public.moderation_logs(action_type);
CREATE INDEX IF NOT EXISTS idx_moderation_logs_moderator_id ON public.moderation_logs(moderator_id);
CREATE INDEX IF NOT EXISTS idx_moderation_logs_content_id ON public.moderation_logs(content_id);
CREATE INDEX IF NOT EXISTS idx_moderation_logs_created_at ON public.moderation_logs(created_at DESC);

-- ========================================
-- 3. Content Flags/Reports
-- ========================================
-- User reports for problematic content (spam, scam, inappropriate)

CREATE TABLE IF NOT EXISTS public.content_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('directory', 'job', 'event', 'classified', 'user')),
  reported_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  report_reason TEXT NOT NULL CHECK (report_reason IN ('spam', 'scam', 'illegal', 'inappropriate', 'misinformation', 'harassment', 'other')),
  description TEXT,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'investigating', 'resolved', 'dismissed')),
  moderator_notes TEXT,
  resolved_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  resolved_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Prevent duplicate reports from same user
  UNIQUE(content_id, reported_by)
);

CREATE INDEX IF NOT EXISTS idx_content_reports_status ON public.content_reports(status);
CREATE INDEX IF NOT EXISTS idx_content_reports_reason ON public.content_reports(report_reason);
CREATE INDEX IF NOT EXISTS idx_content_reports_reported_by ON public.content_reports(reported_by);
CREATE INDEX IF NOT EXISTS idx_content_reports_created_at ON public.content_reports(created_at DESC);

-- ========================================
-- 4. Role-Based Access Control
-- ========================================
-- Add moderator role tracking to users table

ALTER TABLE public.users ADD COLUMN IF NOT EXISTS user_role TEXT DEFAULT 'user' CHECK (user_role IN ('user', 'moderator', 'admin'));
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS is_moderator BOOLEAN DEFAULT FALSE;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS moderation_status TEXT DEFAULT 'active' CHECK (moderation_status IN ('active', 'suspended', 'inactive'));

CREATE INDEX IF NOT EXISTS idx_users_user_role ON public.users(user_role);
CREATE INDEX IF NOT EXISTS idx_users_is_moderator ON public.users(is_moderator);

-- ========================================
-- 5. Content Publication Workflow
-- ========================================
-- Add approval fields to existing listing tables

ALTER TABLE public.directory_listings ADD COLUMN IF NOT EXISTS approval_id UUID REFERENCES public.approval_queue(id) ON DELETE SET NULL;
ALTER TABLE public.directory_listings ADD COLUMN IF NOT EXISTS approval_status TEXT DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected', 'needs_revision'));

ALTER TABLE public.jobs ADD COLUMN IF NOT EXISTS approval_id UUID REFERENCES public.approval_queue(id) ON DELETE SET NULL;
ALTER TABLE public.jobs ADD COLUMN IF NOT EXISTS approval_status TEXT DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected', 'needs_revision'));

ALTER TABLE public.events ADD COLUMN IF NOT EXISTS approval_id UUID REFERENCES public.approval_queue(id) ON DELETE SET NULL;
ALTER TABLE public.events ADD COLUMN IF NOT EXISTS approval_status TEXT DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected', 'needs_revision'));

-- If classifieds table exists, add approval fields
ALTER TABLE public.classifieds ADD COLUMN IF NOT EXISTS approval_id UUID REFERENCES public.approval_queue(id) ON DELETE SET NULL;
ALTER TABLE public.classifieds ADD COLUMN IF NOT EXISTS approval_status TEXT DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected', 'needs_revision'));

-- ========================================
-- 6. Notification Queue for Moderators
-- ========================================
-- Track pending notifications for moderators

CREATE TABLE IF NOT EXISTS public.mod_notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  moderator_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  notification_type TEXT NOT NULL CHECK (notification_type IN ('new_submission', 'flagged_content', 'user_warning', 'bulk_action')),
  content_id UUID,
  title TEXT NOT NULL,
  message TEXT,
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP WITH TIME ZONE,
  action_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mod_notifications_moderator_id ON public.mod_notifications(moderator_id);
CREATE INDEX IF NOT EXISTS idx_mod_notifications_read ON public.mod_notifications(read);
CREATE INDEX IF NOT EXISTS idx_mod_notifications_created_at ON public.mod_notifications(created_at DESC);

-- ========================================
-- 7. Moderation Rules/Policies
-- ========================================
-- Store moderation configuration

CREATE TABLE IF NOT EXISTS public.moderation_rules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  rule_name TEXT NOT NULL UNIQUE,
  rule_category TEXT NOT NULL CHECK (rule_category IN ('spam', 'scam', 'harmful', 'policy_violation')),
  description TEXT,
  action TEXT NOT NULL CHECK (action IN ('auto_reject', 'flag_for_review', 'auto_approve', 'require_revision')),
  keywords TEXT[], -- Keywords that trigger this rule
  enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_moderation_rules_enabled ON public.moderation_rules(enabled);
CREATE INDEX IF NOT EXISTS idx_moderation_rules_category ON public.moderation_rules(rule_category);

-- ========================================
-- 8. Moderation Statistics/Dashboard Data
-- ========================================
-- View for moderator dashboard metrics

CREATE MATERIALIZED VIEW public.moderation_dashboard_stats AS
SELECT
  DATE_TRUNC('day', q.created_at) as date,
  q.content_type,
  COUNT(*) as total_submissions,
  COUNT(CASE WHEN q.status = 'pending' THEN 1 END) as pending_count,
  COUNT(CASE WHEN q.status = 'approved' THEN 1 END) as approved_count,
  COUNT(CASE WHEN q.status = 'rejected' THEN 1 END) as rejected_count,
  COUNT(CASE WHEN q.status = 'needs_revision' THEN 1 END) as revision_count,
  AVG(EXTRACT(EPOCH FROM (q.reviewed_at - q.created_at))) as avg_review_time_seconds
FROM public.approval_queue q
GROUP BY DATE_TRUNC('day', q.created_at), q.content_type;

-- ========================================
-- 9. Permissions & Policies (RLS)
-- ========================================
-- Role-based access control policies

-- Enable RLS
ALTER TABLE public.approval_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.moderation_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mod_notifications ENABLE ROW LEVEL SECURITY;

-- Approval Queue Policies
CREATE POLICY "Admins and mods can view approval queue"
ON public.approval_queue FOR SELECT
USING (
  auth.uid() = submitted_by OR
  (SELECT user_role FROM public.users WHERE id = auth.uid()) IN ('admin', 'moderator')
);

CREATE POLICY "Only admins can approve/reject content"
ON public.approval_queue FOR UPDATE
USING (
  (SELECT user_role FROM public.users WHERE id = auth.uid()) = 'admin'
);

-- Content Reports Policies
CREATE POLICY "Anyone can report content"
ON public.content_reports FOR INSERT
WITH CHECK (auth.uid() = reported_by);

CREATE POLICY "Users can view their own reports"
ON public.content_reports FOR SELECT
USING (
  auth.uid() = reported_by OR
  (SELECT user_role FROM public.users WHERE id = auth.uid()) IN ('admin', 'moderator')
);

-- Moderation Logs Policies (audit trail - admins only)
CREATE POLICY "Only admins can view moderation logs"
ON public.moderation_logs FOR SELECT
USING (
  (SELECT user_role FROM public.users WHERE id = auth.uid()) = 'admin'
);

-- Moderator Notifications Policies
CREATE POLICY "Users can view their own notifications"
ON public.mod_notifications FOR SELECT
USING (auth.uid() = moderator_id);

CREATE POLICY "Users can update their own notifications"
ON public.mod_notifications FOR UPDATE
USING (auth.uid() = moderator_id);

-- ========================================
-- 10. Functions for Workflow
-- ========================================

-- Auto-create approval queue entry when new listing submitted
CREATE OR REPLACE FUNCTION public.auto_create_approval_queue()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.approval_status = 'pending' THEN
    INSERT INTO public.approval_queue (
      content_id,
      content_type,
      submitted_by,
      submission_content,
      status,
      priority
    ) VALUES (
      NEW.id,
      TG_ARGV[0]::TEXT,
      NEW.user_id,
      ROW_TO_JSON(NEW),
      'pending',
      0
    );
    
    -- Notify moderators
    INSERT INTO public.mod_notifications (
      moderator_id,
      notification_type,
      content_id,
      title,
      message,
      priority
    )
    SELECT
      u.id,
      'new_submission',
      NEW.id,
      'New ' || TG_ARGV[0] || ' awaiting approval',
      'A new ' || TG_ARGV[0] || ' from ' || (SELECT username FROM public.users WHERE id = NEW.user_id) || ' needs review',
      'normal'
    FROM public.users u
    WHERE u.user_role IN ('admin', 'moderator');
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update approval status when queue is approved
CREATE OR REPLACE FUNCTION public.update_listing_status_on_approval()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'approved' AND OLD.status != 'approved' THEN
    CASE NEW.content_type
      WHEN 'directory' THEN
        UPDATE public.directory_listings SET approval_status = 'approved', status = 'active', updated_at = NOW() WHERE id = NEW.content_id;
      WHEN 'job' THEN
        UPDATE public.jobs SET approval_status = 'approved', status = 'active', updated_at = NOW() WHERE id = NEW.content_id;
      WHEN 'event' THEN
        UPDATE public.events SET approval_status = 'approved', status = 'upcoming', updated_at = NOW() WHERE id = NEW.content_id;
      WHEN 'classified' THEN
        UPDATE public.classifieds SET approval_status = 'approved', status = 'active', updated_at = NOW() WHERE id = NEW.content_id;
    END CASE;
    
    INSERT INTO public.moderation_logs (
      action_type,
      content_id,
      content_type,
      moderator_id,
      reason,
      new_status
    ) VALUES (
      'approved',
      NEW.content_id,
      NEW.content_type,
      NEW.reviewed_by,
      'Content approved via approval queue',
      'approved'
    );
  END IF;
  
  IF NEW.status = 'rejected' AND OLD.status != 'rejected' THEN
    CASE NEW.content_type
      WHEN 'directory' THEN
        UPDATE public.directory_listings SET approval_status = 'rejected', status = 'deleted', updated_at = NOW() WHERE id = NEW.content_id;
      WHEN 'job' THEN
        UPDATE public.jobs SET approval_status = 'rejected', status = 'deleted', updated_at = NOW() WHERE id = NEW.content_id;
      WHEN 'event' THEN
        UPDATE public.events SET approval_status = 'rejected', status = 'cancelled', updated_at = NOW() WHERE id = NEW.content_id;
      WHEN 'classified' THEN
        UPDATE public.classifieds SET approval_status = 'rejected', status = 'deleted', updated_at = NOW() WHERE id = NEW.content_id;
    END CASE;
    
    INSERT INTO public.moderation_logs (
      action_type,
      content_id,
      content_type,
      moderator_id,
      reason,
      new_status
    ) VALUES (
      'rejected',
      NEW.content_id,
      NEW.content_type,
      NEW.reviewed_by,
      COALESCE(NEW.rejection_reason, 'No reason provided'),
      'rejected'
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Triggers for approval workflow
DROP TRIGGER IF EXISTS on_approval_queue_update ON public.approval_queue;
CREATE TRIGGER on_approval_queue_update
AFTER UPDATE ON public.approval_queue
FOR EACH ROW EXECUTE PROCEDURE public.update_listing_status_on_approval();

-- Trigger for directory listings
DROP TRIGGER IF EXISTS on_directory_insert ON public.directory_listings;
CREATE TRIGGER on_directory_insert
AFTER INSERT ON public.directory_listings
FOR EACH ROW EXECUTE PROCEDURE public.auto_create_approval_queue('directory');

-- Trigger for jobs
DROP TRIGGER IF EXISTS on_job_insert ON public.jobs;
CREATE TRIGGER on_job_insert
AFTER INSERT ON public.jobs
FOR EACH ROW EXECUTE PROCEDURE public.auto_create_approval_queue('job');

-- Trigger for events
DROP TRIGGER IF EXISTS on_event_insert ON public.events;
CREATE TRIGGER on_event_insert
AFTER INSERT ON public.events
FOR EACH ROW EXECUTE PROCEDURE public.auto_create_approval_queue('event');

-- ========================================
-- 11. Grant Permissions
-- ========================================

GRANT SELECT, INSERT, UPDATE ON public.approval_queue TO anon, authenticated;
GRANT SELECT, INSERT ON public.content_reports TO anon, authenticated;
GRANT SELECT ON public.moderation_logs TO authenticated;
GRANT SELECT, UPDATE ON public.mod_notifications TO authenticated;
GRANT SELECT ON public.moderation_dashboard_stats TO authenticated;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW public.moderation_dashboard_stats;

COMMENT ON TABLE public.approval_queue IS 'Content approval workflow - tracks all submissions pending moderation';
COMMENT ON TABLE public.moderation_logs IS 'Audit trail of all moderation actions';
COMMENT ON TABLE public.content_reports IS 'User reports for problematic content (spam, scam, etc)';
COMMENT ON TABLE public.mod_notifications IS 'Notifications for moderators about pending items';
