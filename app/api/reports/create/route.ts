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

const reportSchema = z.object({
  content_id: z.string().uuid(),
  content_type: z.enum(['directory', 'job', 'event', 'classified', 'user', 'comment']),
  report_reason: z.enum(['spam', 'scam', 'illegal', 'inappropriate', 'misinformation', 'harassment', 'other']),
  description: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const supabase = await getSupabaseServer()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = reportSchema.parse(body)

    // Check for existing report from this user
    const { data: existing } = await supabase
      .from('content_reports')
      .select('id')
      .eq('content_id', validatedData.content_id)
      .eq('reported_by', user.id)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'You have already reported this content' },
        { status: 409 }
      )
    }

    const { data, error } = await supabase
      .from('content_reports')
      .insert([
        {
          ...validatedData,
          reported_by: user.id,
          status: 'open',
        }
      ])
      .select()

    if (error) throw error

    // Notify admins (non-blocking)
    const { data: admins } = await supabase
      .from('users')
      .select('id')
      .eq('user_role', 'admin')

    if (admins && admins.length > 0) {
      await supabase
        .from('mod_notifications')
        .insert(
          admins.map(admin => ({
            moderator_id: admin.id,
            notification_type: 'flagged_content',
            content_id: validatedData.content_id,
            title: `New ${validatedData.report_reason} report`,
            message: `Content flagged as ${validatedData.report_reason}`,
            priority: validatedData.report_reason === 'illegal' ? 'urgent' : 'high',
          }))
        )
        .catch((err) => console.error('Notification creation failed:', err))
    }

    return NextResponse.json(data[0], { status: 201 })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 })
    }
    console.error('Report creation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
