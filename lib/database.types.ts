// Auto-generated types from Supabase schema
// This file defines all database tables and their relationships

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          username: string
          avatar_url: string | null
          bio: string | null
          is_premium: boolean
          premium_until: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          username: string
          avatar_url?: string | null
          bio?: string | null
          is_premium?: boolean
          premium_until?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          username?: string
          avatar_url?: string | null
          bio?: string | null
          is_premium?: boolean
          premium_until?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      directory_listings: {
        Row: {
          id: string
          user_id: string
          business_name: string
          description: string
          category: string
          subcategory: string | null
          location: string // enum: russell | macleay | lamb | karragarra | redland-bay | victoria-point | cleveland | capalaba
          phone: string | null
          email: string | null
          website: string | null
          address: string
          lat: number | null
          lng: number | null
          image_urls: string[] | null
          hours: string | null
          featured: boolean
          featured_until: string | null
          views: number
          status: 'active' | 'pending' | 'suspended' | 'deleted'
          created_at: string
          updated_at: string
          expires_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          business_name: string
          description: string
          category: string
          subcategory?: string | null
          location: string
          phone?: string | null
          email?: string | null
          website?: string | null
          address: string
          lat?: number | null
          lng?: number | null
          image_urls?: string[] | null
          hours?: string | null
          featured?: boolean
          featured_until?: string | null
          views?: number
          status?: 'active' | 'pending' | 'suspended' | 'deleted'
          created_at?: string
          updated_at?: string
          expires_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          business_name?: string
          description?: string
          category?: string
          subcategory?: string | null
          location?: string
          phone?: string | null
          email?: string | null
          website?: string | null
          address?: string
          lat?: number | null
          lng?: number | null
          image_urls?: string[] | null
          hours?: string | null
          featured?: boolean
          featured_until?: string | null
          views?: number
          status?: 'active' | 'pending' | 'suspended' | 'deleted'
          created_at?: string
          updated_at?: string
          expires_at?: string | null
        }
      }
      jobs: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string
          company_name: string
          category: string
          employment_type: 'full-time' | 'part-time' | 'contract' | 'casual' | 'volunteer'
          location: string // enum like directory_listings
          salary_min: number | null
          salary_max: number | null
          salary_currency: string
          experience_level: 'entry' | 'mid' | 'senior' | 'executive'
          image_url: string | null
          featured: boolean
          featured_until: string | null
          views: number
          applications: number
          status: 'active' | 'pending' | 'closed' | 'deleted'
          created_at: string
          updated_at: string
          expires_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description: string
          company_name: string
          category: string
          employment_type: 'full-time' | 'part-time' | 'contract' | 'casual' | 'volunteer'
          location: string
          salary_min?: number | null
          salary_max?: number | null
          salary_currency?: string
          experience_level: 'entry' | 'mid' | 'senior' | 'executive'
          image_url?: string | null
          featured?: boolean
          featured_until?: string | null
          views?: number
          applications?: number
          status?: 'active' | 'pending' | 'closed' | 'deleted'
          created_at?: string
          updated_at?: string
          expires_at: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string
          company_name?: string
          category?: string
          employment_type?: 'full-time' | 'part-time' | 'contract' | 'casual' | 'volunteer'
          location?: string
          salary_min?: number | null
          salary_max?: number | null
          salary_currency?: string
          experience_level?: 'entry' | 'mid' | 'senior' | 'executive'
          image_url?: string | null
          featured?: boolean
          featured_until?: string | null
          views?: number
          applications?: number
          status?: 'active' | 'pending' | 'closed' | 'deleted'
          created_at?: string
          updated_at?: string
          expires_at?: string
        }
      }
      events: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string
          category: string
          location: string // enum like directory_listings
          start_date: string
          end_date: string
          start_time: string | null
          end_time: string | null
          address: string
          lat: number | null
          lng: number | null
          image_url: string | null
          ticket_url: string | null
          ticket_price: number | null
          featured: boolean
          featured_until: string | null
          views: number
          registrations: number
          status: 'upcoming' | 'live' | 'past' | 'cancelled' | 'deleted'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description: string
          category: string
          location: string
          start_date: string
          end_date: string
          start_time?: string | null
          end_time?: string | null
          address: string
          lat?: number | null
          lng?: number | null
          image_url?: string | null
          ticket_url?: string | null
          ticket_price?: number | null
          featured?: boolean
          featured_until?: string | null
          views?: number
          registrations?: number
          status?: 'upcoming' | 'live' | 'past' | 'cancelled' | 'deleted'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string
          category?: string
          location?: string
          start_date?: string
          end_date?: string
          start_time?: string | null
          end_time?: string | null
          address?: string
          lat?: number | null
          lng?: number | null
          image_url?: string | null
          ticket_url?: string | null
          ticket_price?: number | null
          featured?: boolean
          featured_until?: string | null
          views?: number
          registrations?: number
          status?: 'upcoming' | 'live' | 'past' | 'cancelled' | 'deleted'
          created_at?: string
          updated_at?: string
        }
      }
      classifieds: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string
          category: string
          subcategory: string | null
          condition: 'new' | 'like-new' | 'good' | 'fair' | 'for-parts' | 'unknown'
          location: string // enum like directory_listings
          price: number
          negotiable: boolean
          image_urls: string[] | null
          contact_method: 'email' | 'phone' | 'both' | 'in-app'
          contact_info: string | null
          featured: boolean
          featured_until: string | null
          views: number
          inquiries: number
          status: 'active' | 'pending' | 'sold' | 'deleted'
          created_at: string
          updated_at: string
          expires_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description: string
          category: string
          subcategory?: string | null
          condition: 'new' | 'like-new' | 'good' | 'fair' | 'for-parts' | 'unknown'
          location: string
          price: number
          negotiable?: boolean
          image_urls?: string[] | null
          contact_method: 'email' | 'phone' | 'both' | 'in-app'
          contact_info?: string | null
          featured?: boolean
          featured_until?: string | null
          views?: number
          inquiries?: number
          status?: 'active' | 'pending' | 'sold' | 'deleted'
          created_at?: string
          updated_at?: string
          expires_at: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string
          category?: string
          subcategory?: string | null
          condition?: 'new' | 'like-new' | 'good' | 'fair' | 'for-parts' | 'unknown'
          location?: string
          price?: number
          negotiable?: boolean
          image_urls?: string[] | null
          contact_method?: 'email' | 'phone' | 'both' | 'in-app'
          contact_info?: string | null
          featured?: boolean
          featured_until?: string | null
          views?: number
          inquiries?: number
          status?: 'active' | 'pending' | 'sold' | 'deleted'
          created_at?: string
          updated_at?: string
          expires_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          user_id: string
          listing_type: 'directory' | 'job' | 'event' | 'classified'
          listing_id: string
          content: string
          rating: number | null
          status: 'active' | 'pending' | 'deleted'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          listing_type: 'directory' | 'job' | 'event' | 'classified'
          listing_id: string
          content: string
          rating?: number | null
          status?: 'active' | 'pending' | 'deleted'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          listing_type?: 'directory' | 'job' | 'event' | 'classified'
          listing_id?: string
          content?: string
          rating?: number | null
          status?: 'active' | 'pending' | 'deleted'
          created_at?: string
          updated_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          listing_type: 'directory' | 'job' | 'event' | 'classified'
          listing_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          listing_type: 'directory' | 'job' | 'event' | 'classified'
          listing_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          listing_type?: 'directory' | 'job' | 'event' | 'classified'
          listing_id?: string
          created_at?: string
        }
      }
      saved_searches: {
        Row: {
          id: string
          user_id: string
          query: string
          filters: Record<string, any>
          search_type: 'directory' | 'jobs' | 'events' | 'classifieds'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          query: string
          filters: Record<string, any>
          search_type: 'directory' | 'jobs' | 'events' | 'classifieds'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          query?: string
          filters?: Record<string, any>
          search_type?: 'directory' | 'jobs' | 'events' | 'classifieds'
          created_at?: string
        }
      }
      approval_queue: {
        Row: {
          id: string
          content_id: string
          content_type: 'directory' | 'job' | 'event' | 'classified'
          submitted_by: string
          submission_content: Record<string, any>
          status: 'pending' | 'approved' | 'rejected' | 'needs_revision'
          reviewed_by: string | null
          reviewed_at: string | null
          rejection_reason: string | null
          revision_notes: string | null
          priority: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          content_id: string
          content_type: 'directory' | 'job' | 'event' | 'classified'
          submitted_by: string
          submission_content: Record<string, any>
          status?: 'pending' | 'approved' | 'rejected' | 'needs_revision'
          reviewed_by?: string | null
          reviewed_at?: string | null
          rejection_reason?: string | null
          revision_notes?: string | null
          priority?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          content_id?: string
          content_type?: 'directory' | 'job' | 'event' | 'classified'
          submitted_by?: string
          submission_content?: Record<string, any>
          status?: 'pending' | 'approved' | 'rejected' | 'needs_revision'
          reviewed_by?: string | null
          reviewed_at?: string | null
          rejection_reason?: string | null
          revision_notes?: string | null
          priority?: number
          created_at?: string
          updated_at?: string
        }
      }
      moderation_logs: {
        Row: {
          id: string
          action_type: 'approved' | 'rejected' | 'suspended' | 'deleted' | 'flag_resolved' | 'user_warned'
          content_id: string | null
          content_type: 'directory' | 'job' | 'event' | 'classified' | 'user' | 'comment' | null
          moderator_id: string
          reason: string
          previous_status: string | null
          new_status: string | null
          metadata: Record<string, any> | null
          created_at: string
        }
        Insert: {
          id?: string
          action_type: 'approved' | 'rejected' | 'suspended' | 'deleted' | 'flag_resolved' | 'user_warned'
          content_id?: string | null
          content_type?: 'directory' | 'job' | 'event' | 'classified' | 'user' | 'comment' | null
          moderator_id: string
          reason: string
          previous_status?: string | null
          new_status?: string | null
          metadata?: Record<string, any> | null
          created_at?: string
        }
        Update: {
          id?: string
          action_type?: 'approved' | 'rejected' | 'suspended' | 'deleted' | 'flag_resolved' | 'user_warned'
          content_id?: string | null
          content_type?: 'directory' | 'job' | 'event' | 'classified' | 'user' | 'comment' | null
          moderator_id?: string
          reason?: string
          previous_status?: string | null
          new_status?: string | null
          metadata?: Record<string, any> | null
          created_at?: string
        }
      }
      content_reports: {
        Row: {
          id: string
          content_id: string
          content_type: 'directory' | 'job' | 'event' | 'classified' | 'user'
          reported_by: string
          report_reason: 'spam' | 'scam' | 'illegal' | 'inappropriate' | 'misinformation' | 'harassment' | 'other'
          description: string | null
          status: 'open' | 'investigating' | 'resolved' | 'dismissed'
          moderator_notes: string | null
          resolved_by: string | null
          resolved_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          content_id: string
          content_type: 'directory' | 'job' | 'event' | 'classified' | 'user'
          reported_by: string
          report_reason: 'spam' | 'scam' | 'illegal' | 'inappropriate' | 'misinformation' | 'harassment' | 'other'
          description?: string | null
          status?: 'open' | 'investigating' | 'resolved' | 'dismissed'
          moderator_notes?: string | null
          resolved_by?: string | null
          resolved_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          content_id?: string
          content_type?: 'directory' | 'job' | 'event' | 'classified' | 'user'
          reported_by?: string
          report_reason?: 'spam' | 'scam' | 'illegal' | 'inappropriate' | 'misinformation' | 'harassment' | 'other'
          description?: string | null
          status?: 'open' | 'investigating' | 'resolved' | 'dismissed'
          moderator_notes?: string | null
          resolved_by?: string | null
          resolved_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      mod_notifications: {
        Row: {
          id: string
          moderator_id: string
          notification_type: 'new_submission' | 'flagged_content' | 'user_warning' | 'bulk_action'
          content_id: string | null
          title: string
          message: string | null
          priority: 'low' | 'normal' | 'high' | 'urgent'
          read: boolean
          read_at: string | null
          action_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          moderator_id: string
          notification_type: 'new_submission' | 'flagged_content' | 'user_warning' | 'bulk_action'
          content_id?: string | null
          title: string
          message?: string | null
          priority?: 'low' | 'normal' | 'high' | 'urgent'
          read?: boolean
          read_at?: string | null
          action_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          moderator_id?: string
          notification_type?: 'new_submission' | 'flagged_content' | 'user_warning' | 'bulk_action'
          content_id?: string | null
          title?: string
          message?: string | null
          priority?: 'low' | 'normal' | 'high' | 'urgent'
          read?: boolean
          read_at?: string | null
          action_url?: string | null
          created_at?: string
        }
      }
      moderation_rules: {
        Row: {
          id: string
          rule_name: string
          rule_category: 'spam' | 'scam' | 'harmful' | 'policy_violation'
          description: string | null
          action: 'auto_reject' | 'flag_for_review' | 'auto_approve' | 'require_revision'
          keywords: string[] | null
          enabled: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          rule_name: string
          rule_category: 'spam' | 'scam' | 'harmful' | 'policy_violation'
          description?: string | null
          action: 'auto_reject' | 'flag_for_review' | 'auto_approve' | 'require_revision'
          keywords?: string[] | null
          enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          rule_name?: string
          rule_category?: 'spam' | 'scam' | 'harmful' | 'policy_violation'
          description?: string | null
          action?: 'auto_reject' | 'flag_for_review' | 'auto_approve' | 'require_revision'
          keywords?: string[] | null
          enabled?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      moderation_dashboard_stats: {
        Row: {
          date: string | null
          content_type: string | null
          total_submissions: number | null
          pending_count: number | null
          approved_count: number | null
          rejected_count: number | null
          revision_count: number | null
          avg_review_time_seconds: number | null
        }
      }
    }
    Functions: {}
    Enums: {
      user_role: 'user' | 'admin' | 'moderator'
      listing_status: 'active' | 'pending' | 'suspended' | 'deleted'
      approval_status: 'pending' | 'approved' | 'rejected' | 'needs_revision'
    }
  }
}
