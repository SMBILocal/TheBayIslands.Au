import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

async function getSupabaseServer() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );

  return supabase;
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await getSupabaseServer();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check role from app_metadata
    const role = (user as any).app_metadata?.role || (user as any).user_metadata?.role || 'user';
    const hasAdminAccess = ['super_admin', 'administrator', 'moderator'].includes(role);

    if (!hasAdminAccess) {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 });
    }

    const body = await request.json();
    const { content_type, content_id } = body;

    if (!content_type || !content_id) {
      return NextResponse.json({ error: 'Missing content_type or content_id' }, { status: 400 });
    }

    const validContentTypes = ['directory_listings', 'jobs', 'classifieds'];
    if (!validContentTypes.includes(content_type)) {
      return NextResponse.json({ error: 'Invalid content_type' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from(content_type)
      .update({
        moderation_status: 'approved',
        moderated_by: user.id,
        moderated_at: new Date().toISOString()
      })
      .eq('id', content_id)
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data: data[0] });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
