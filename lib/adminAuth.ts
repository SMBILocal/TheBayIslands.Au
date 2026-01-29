// Helper function for admin API routes to check user permissions
import { User } from '@supabase/supabase-js';

export function checkAdminAccess(user: User | null): { hasAccess: boolean; role: string; error?: string } {
  if (!user) {
    return { hasAccess: false, role: 'none', error: 'Unauthorized - No user session' };
  }

  // Get role from app_metadata (set during user creation) or user_metadata (fallback)
  const role = (user as any).app_metadata?.role || (user as any).user_metadata?.role || 'user';
  
  // Admin access for super_admin, administrator, and moderator roles
  const hasAdminAccess = ['super_admin', 'administrator', 'moderator'].includes(role);
  
  return {
    hasAccess: hasAdminAccess,
    role,
    error: hasAdminAccess ? undefined : `Forbidden - Role '${role}' does not have admin access`
  };
}

export function checkSuperAdminAccess(user: User | null): { hasAccess: boolean; role: string; error?: string } {
  if (!user) {
    return { hasAccess: false, role: 'none', error: 'Unauthorized - No user session' };
  }

  const role = (user as any).app_metadata?.role || (user as any).user_metadata?.role || 'user';
  const hasSuperAdminAccess = role === 'super_admin';
  
  return {
    hasAccess: hasSuperAdminAccess,
    role,
    error: hasSuperAdminAccess ? undefined : `Forbidden - Super admin access required`
  };
}
