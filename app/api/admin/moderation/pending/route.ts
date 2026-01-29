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

export async function GET(request: NextRequest) {
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

    const [directoryResult, jobsResult, classifiedsResult] = await Promise.all([
      supabase
        .from('directory_listings')
        .select('*')
        .eq('moderation_status', 'pending')
        .order('created_at', { ascending: false }),
      supabase
        .from('jobs')
        .select('*')
        .eq('moderation_status', 'pending')
        .order('created_at', { ascending: false }),
      supabase
        .from('classifieds')
        .select('*')
        .eq('moderation_status', 'pending')
        .order('created_at', { ascending: false })
    ]);

    const response = {
      directory_listings: directoryResult.data || [],
      jobs: jobsResult.data || [],
      classifieds: classifiedsResult.data || [],
      counts: {
        directory_listings: directoryResult.data?.length || 0,
        jobs: jobsResult.data?.length || 0,
        classifieds: classifiedsResult.data?.length || 0,
        total: (directoryResult.data?.length || 0) + 
               (jobsResult.data?.length || 0) + 
               (classifiedsResult.data?.length || 0)
      }
    };

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
