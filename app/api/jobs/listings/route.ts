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

const jobCreateSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1),
  company_name: z.string().min(1).max(200),
  location: z.string().min(1).max(100),
  job_type: z.string().optional(),
  salary_range: z.string().optional(),
  contact_email: z.string().email().optional(),
  contact_phone: z.string().optional(),
  application_url: z.string().url().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const supabase = await getSupabaseServer();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: jobs, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json(jobs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await getSupabaseServer();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    const validatedData = jobCreateSchema.parse(body);

    const { data, error } = await supabase
      .from('jobs')
      .insert([
        {
          ...validatedData,
          user_id: user.id,
          status: 'pending'
        }
      ])
      .select();

    if (error) throw error;
    return NextResponse.json(data[0], { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
