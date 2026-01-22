import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

/**
 * GET /api/admin/approval-queue
 * Fetch pending content for moderation
 */
export async function GET(request: NextRequest) {
  try {
    // Check authorization
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    
    // Verify user is admin/moderator
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check user role
    const { data: userData, error: userError } = await supabaseAdmin
      .from('users')
      .select('user_role')
      .eq('id', user.id)
      .single();

    if (userError || !userData || !['admin', 'moderator'].includes(userData.user_role)) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'pending';
    const contentType = searchParams.get('contentType');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Build query
    let query = supabaseAdmin
      .from('approval_queue')
      .select(
        `
        id,
        content_id,
        content_type,
        submitted_by,
        submission_content,
        status,
        reviewed_by,
        reviewed_at,
        rejection_reason,
        revision_notes,
        priority,
        created_at,
        updated_at,
        users:submitted_by (
          id,
          username,
          email,
          avatar_url
        )
        `,
        { count: 'exact' }
      )
      .eq('status', status)
      .order('priority', { ascending: false })
      .order('created_at', { ascending: true })
      .range(offset, offset + limit - 1);

    if (contentType) {
      query = query.eq('content_type', contentType);
    }

    const { data, count, error } = await query;

    if (error) {
      console.error('Approval queue fetch error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      items: data,
      total: count,
      limit,
      offset,
    });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * POST /api/admin/approval-queue
 * Approve or reject content
 */
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Verify admin role
    const { data: userData } = await supabaseAdmin
      .from('users')
      .select('user_role')
      .eq('id', user.id)
      .single();

    if (!userData || userData.user_role !== 'admin') {
      return NextResponse.json({ error: 'Only admins can approve content' }, { status: 403 });
    }

    const { queueId, action, rejectionReason, revisionNotes } = await request.json();

    if (!queueId || !action) {
      return NextResponse.json(
        { error: 'Missing required fields: queueId, action' },
        { status: 400 }
      );
    }

    const validActions = ['approved', 'rejected', 'needs_revision'];
    if (!validActions.includes(action)) {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    // Update approval queue
    const { error: updateError } = await supabaseAdmin
      .from('approval_queue')
      .update({
        status: action,
        reviewed_by: user.id,
        reviewed_at: new Date().toISOString(),
        rejection_reason: rejectionReason,
        revision_notes: revisionNotes,
        updated_at: new Date().toISOString(),
      })
      .eq('id', queueId);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    // Log moderation action
    await supabaseAdmin.from('moderation_logs').insert({
      action_type: action === 'approved' ? 'approved' : action === 'rejected' ? 'rejected' : 'flag_resolved',
      moderator_id: user.id,
      reason: rejectionReason || `Content ${action}`,
      new_status: action,
    });

    return NextResponse.json({ success: true, action });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
