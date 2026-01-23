import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

/**
 * GET /api/admin/dashboard-stats
 * Get moderation dashboard statistics
 */
export async function GET(request: NextRequest) {
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

    // Check user role
    const { data: userData } = await supabaseAdmin
      .from('users')
      .select('user_role')
      .eq('id', user.id)
      .single();

    if (!userData || !['admin', 'moderator'].includes(userData.user_role)) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    // Get queue stats
    const { data: queueStats } = await supabaseAdmin
      .from('approval_queue')
      .select('status, content_type', { count: 'exact' });

    const { data: pendingByType } = await supabaseAdmin
      .from('approval_queue')
      .select('content_type', { count: 'exact' })
      .eq('status', 'pending');

    // Get report stats
    const { data: reportStats } = await supabaseAdmin
      .from('content_reports')
      .select('status, report_reason', { count: 'exact' });

    const { data: openReports, count: openCount } = await supabaseAdmin
      .from('content_reports')
      .select('*', { count: 'exact' })
      .eq('status', 'open');

    // Get recent logs
    const { data: recentLogs } = await supabaseAdmin
      .from('moderation_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    // Calculate stats
    const pendingCount = (queueStats || []).filter(q => q.status === 'pending').length;
    const approvedCount = (queueStats || []).filter(q => q.status === 'approved').length;
    const rejectedCount = (queueStats || []).filter(q => q.status === 'rejected').length;

    const typeBreakdown: Record<string, number> = {};
    (pendingByType || []).forEach(item => {
      typeBreakdown[item.content_type] = (typeBreakdown[item.content_type] || 0) + 1;
    });

    const reasonBreakdown: Record<string, number> = {};
    (reportStats || []).forEach(item => {
      reasonBreakdown[item.report_reason] = (reasonBreakdown[item.report_reason] || 0) + 1;
    });

    return NextResponse.json({
      queue: {
        pending: pendingCount,
        approved: approvedCount,
        rejected: rejectedCount,
        byType: typeBreakdown,
      },
      reports: {
        open: openCount || 0,
        byReason: reasonBreakdown,
      },
      recentActions: recentLogs,
    });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
