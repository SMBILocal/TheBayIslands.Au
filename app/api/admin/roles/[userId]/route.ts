import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { z } from 'zod';

const UpdateRoleSchema = z.object({
  userId: z.string().uuid('Invalid user ID'),
  newRole: z.enum(['super_admin', 'admin', 'moderator', 'editor', 'user']),
  reason: z.string().optional(),
});

/**
 * GET /api/admin/roles/[userId]
 * Get a specific user's role and permissions
 * Requires: admin or higher
 */
export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
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

    // Verify auth
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if user is admin
    const { data: adminUser } = await supabase
      .from('users')
      .select('user_role')
      .eq('id', user.id)
      .single();

    if (!['super_admin', 'admin'].includes(adminUser?.user_role)) {
      return NextResponse.json(
        { error: 'Forbidden - admin access required' },
        { status: 403 }
      );
    }

    // Get target user's role
    const { data: targetUser, error } = await supabase
      .from('users')
      .select('id, email, username, display_name, user_role, created_at, status')
      .eq('id', params.userId)
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Get role permissions
    const { data: rolePerms } = await supabase
      .from('role_permissions')
      .select('permissions')
      .eq('role', targetUser.user_role)
      .single();

    return NextResponse.json({
      user: targetUser,
      permissions: rolePerms?.permissions || {},
    });
  } catch (error) {
    console.error('Error fetching role:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/roles/update
 * Update user role (Super Admin only)
 */
export async function POST(request: Request) {
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

    // Verify auth
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if user is super admin
    const { data: adminUser } = await supabase
      .from('users')
      .select('user_role')
      .eq('id', user.id)
      .single();

    if (adminUser?.user_role !== 'super_admin') {
      return NextResponse.json(
        { error: 'Forbidden - super admin access required' },
        { status: 403 }
      );
    }

    // Parse request body
    const body = await request.json();
    const validated = UpdateRoleSchema.parse(body);

    // Get target user's current role
    const { data: targetUser, error: fetchError } = await supabase
      .from('users')
      .select('user_role, email')
      .eq('id', validated.userId)
      .single();

    if (fetchError) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Update user role
    const { error: updateError } = await supabase
      .from('users')
      .update({
        user_role: validated.newRole,
        admin_since: validated.newRole.includes('admin')
          ? new Date().toISOString()
          : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', validated.userId);

    if (updateError) {
      throw updateError;
    }

    // Log the change
    const { error: auditError } = await supabase
      .from('role_audit')
      .insert({
        changed_by: user.id,
        target_user: validated.userId,
        old_role: targetUser.user_role,
        new_role: validated.newRole,
        reason: validated.reason || 'No reason provided',
        ip_address: request.headers.get('x-forwarded-for') || 'Unknown',
      });

    if (auditError) {
      console.error('Audit log error:', auditError);
    }

    // Create notification for target user (optional)
    // Send email notification
    console.log(
      `✅ User ${targetUser.email} role changed from ${targetUser.user_role} to ${validated.newRole}`
    );

    return NextResponse.json({
      success: true,
      message: `Role updated to ${validated.newRole}`,
      user: {
        id: validated.userId,
        role: validated.newRole,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Error updating role:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
