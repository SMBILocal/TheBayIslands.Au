import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { z } from 'zod'

async function getSupabaseServer() {
  const cookieStore = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )
}

async function isAdmin(userId: string): Promise<boolean> {
  const supabase = await getSupabaseServer()
  const { data } = await supabase
    .from('users')
    .select('user_role')
    .eq('id', userId)
    .single()

  return data?.user_role === 'admin'
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await getSupabaseServer()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !(await isAdmin(user.id))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { data, error } = await supabase
      .from('content_reports')
      .select('*')
      .eq('status', 'open')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error: any) {
    console.error('Content reports fetch error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

const reportActionSchema = z.object({
  report_id: z.string().uuid(),
  action: z.enum(['dismiss', 'resolved']),
  moderator_notes: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const supabase = await getSupabaseServer()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !(await isAdmin(user.id))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { report_id, action, moderator_notes } = reportActionSchema.parse(body)

    const { data: report, error: fetchError } = await supabase
      .from('content_reports')
      .select('*')
      .eq('id', report_id)
      .single()

    if (fetchError || !report) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 })
    }

    // Update report
    const { error: updateError } = await supabase
      .from('content_reports')
      .update({
        status: action === 'dismiss' ? 'dismissed' : 'resolved',
        resolved_by: user.id,
        resolved_at: new Date().toISOString(),
        moderator_notes,
      })
      .eq('id', report_id)

    if (updateError) throw updateError

    return NextResponse.json({ success: true, status: action })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 })
    }
    console.error('Report action error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
