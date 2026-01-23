'use server';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

/**
 * SERVER-ONLY: Check if user has specific permission
 * This function uses next/headers which only works in Server Components/Actions
 */
export async function hasPermission(
  userId: string,
  resource: string,
  action: string
): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

    const { data: userData } = await supabase
      .from('users')
      .select('user_role')
      .eq('id', userId)
      .single();

    if (!userData?.user_role) {
      return false;
    }

    const { data: rolePerms } = await supabase
      .from('role_permissions')
      .select('permissions')
      .eq('role', userData.user_role)
      .single();

    const permissions = rolePerms?.permissions || {};
    const resourcePerms = permissions[resource] || [];

    return resourcePerms.includes(action);
  } catch (error) {
    console.error('Error checking permission:', error);
    return false;
  }
}

/**
 * SERVER-ONLY: Get user's current role
 */
export async function getUserRole(userId: string): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

    const { data: userData } = await supabase
      .from('users')
      .select('user_role')
      .eq('id', userId)
      .single();

    return userData?.user_role || null;
  } catch (error) {
    console.error('Error fetching user role:', error);
    return null;
  }
}

/**
 * SERVER-ONLY: Get user's permissions
 */
export async function getUserPermissions(
  userId: string
): Promise<Record<string, string[]> | null> {
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

    const { data: userData } = await supabase
      .from('users')
      .select('user_role')
      .eq('id', userId)
      .single();

    if (!userData?.user_role) {
      return null;
    }

    const { data: rolePerms } = await supabase
      .from('role_permissions')
      .select('permissions')
      .eq('role', userData.user_role)
      .single();

    return rolePerms?.permissions || null;
  } catch (error) {
    console.error('Error fetching user permissions:', error);
    return null;
  }
}

/**
 * SERVER-ONLY: Check if user is at or above a specific role level
 */
export async function checkUserRoleLevel(
  userId: string,
  minimumLevel: string
): Promise<boolean> {
  const userRole = await getUserRole(userId);
  if (!userRole) return false;

  const roleMap: Record<string, number> = {
    super_admin: 5,
    admin: 4,
    moderator: 3,
    editor: 2,
    user: 1,
  };

  const userLevel = roleMap[userRole] || 0;
  const minimumRequired = roleMap[minimumLevel] || 0;

  return userLevel >= minimumRequired;
}
