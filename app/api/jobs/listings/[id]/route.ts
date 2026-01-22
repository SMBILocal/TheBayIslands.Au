import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { z } from 'zod';

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

const jobUpdateSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  description: z.string().min(1).optional(),
  company_name: z.string().min(1).max(200).optional(),
  location: z.string().min(1).max(100).optional(),
  job_type: z.string().optional(),
  salary_range: z.string().optional(),
  contact_email: z.string().email().optional(),
  contact_phone: z.string().optional(),
  application_url: z.string().url().optional(),
  status: z.enum(['pending', 'active', 'closed', 'expired']).optional(),
});

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = await getSupabaseServer();
    
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = await getSupabaseServer();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    const validatedData = jobUpdateSchema.parse(body);

    const { data: job } = await supabase
      .from('jobs')
      .select('user_id')
      .eq('id', params.id)
      .single();

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    if (job.user_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { data, error } = await supabase
      .from('jobs')
      .update({
        ...validatedData,
        updated_at: new Date().toISOString()
      })
      .eq('id', params.id)
      .select();

    if (error) throw error;
    return NextResponse.json(data[0]);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = await getSupabaseServer();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: job } = await supabase
      .from('jobs')
      .select('user_id')
      .eq('id', params.id)
      .single();

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    if (job.user_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { error } = await supabase
      .from('jobs')
      .delete()
      .eq('id', params.id);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
