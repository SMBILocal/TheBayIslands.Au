import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { z } from 'zod';

const PermissionSchema = z.object({
  role: z.enum(['super_admin', 'admin', 'moderator', 'editor', 'user']),
});

/**
 * GET /api/auth/permissions
 * Returns current user's role and permissions
 */
export async function GET(request: Request) {
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
    
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get user's role
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('user_role, permissions')
      .eq('id', user.id)
      .single();

    if (userError) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Get role permissions from reference table
    const { data: rolePerms } = await supabase
      .from('role_permissions')
      .select('permissions')
      .eq('role', userData.user_role)
      .single();

    return NextResponse.json({
      role: userData.user_role,
      permissions: rolePerms?.permissions || {},
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error fetching permissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

