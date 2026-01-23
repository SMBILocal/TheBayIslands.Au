export type SubscriptionTier = 'free' | 'standard' | 'professional' | 'custom';
export type UserRole = 'user' | 'moderator' | 'editor' | 'admin';

export interface UserPermissions {
  role: UserRole;
  subscription_tier: SubscriptionTier;
}

export const LISTING_LIMITS: Record<SubscriptionTier, number | null> = {
  free: 1,
  standard: 5,
  professional: null, // unlimited
  custom: null, // unlimited
};

export function getListingLimit(tier: SubscriptionTier): number | null {
  return LISTING_LIMITS[tier];
}

export function canCreateListing(tier: SubscriptionTier, currentCount: number): boolean {
  const limit = getListingLimit(tier);
  if (limit === null) return true;
  return currentCount < limit;
}

export function isAdmin(role: UserRole): boolean {
  return role === 'admin';
}

export function isModerator(role: UserRole): boolean {
  return role === 'moderator' || role === 'admin';
}

export function isEditor(role: UserRole): boolean {
  return role === 'editor' || role === 'admin';
}

export function canModerate(role: UserRole): boolean {
  return isModerator(role);
}

export function canEdit(role: UserRole): boolean {
  return isEditor(role);
}

// ============================================================================
// v0.0.5 Client-Safe Role Helpers (no server APIs)
// ============================================================================

export type UserRoleV2 = 'super_admin' | 'admin' | 'moderator' | 'editor' | 'user';

/**
 * Helper: Check if user is admin or higher (CLIENT-SAFE)
 */
export function isAdminOrHigher(userRole: string): boolean {
  return ['super_admin', 'admin'].includes(userRole);
}

/**
 * Helper: Check if user is super admin (CLIENT-SAFE)
 */
export function isSuperAdmin(userRole: string): boolean {
  return userRole === 'super_admin';
}

/**
 * Helper: Check if user is moderator or higher (CLIENT-SAFE)
 */
export function isModeratorOrHigher(userRole: string): boolean {
  return ['super_admin', 'admin', 'moderator'].includes(userRole);
}

/**
 * Helper: Get role hierarchy level (CLIENT-SAFE)
 * Returns numeric level where higher = more permissions
 */
export function getRoleLevel(userRole: string): number {
  const levels: Record<string, number> = {
    super_admin: 5,
    admin: 4,
    moderator: 3,
    editor: 2,
    user: 1,
  };
  return levels[userRole] || 0;
}

/**
 * Helper: Check if roleA has higher or equal permissions than roleB (CLIENT-SAFE)
 */
export function hasHigherOrEqualRole(roleA: string, roleB: string): boolean {
  return getRoleLevel(roleA) >= getRoleLevel(roleB);
}
