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
