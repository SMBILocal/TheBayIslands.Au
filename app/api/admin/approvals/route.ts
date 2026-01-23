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
      .from('approval_queue')
      .select('*')
      .eq('status', 'pending')
      .order('priority', { ascending: false })
      .order('created_at', { ascending: true })

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error: any) {
    console.error('Pending approvals fetch error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

const approvalSchema = z.object({
  approval_id: z.string().uuid(),
  action: z.enum(['approve', 'reject']),
  revision_notes: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const supabase = await getSupabaseServer()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !(await isAdmin(user.id))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { approval_id, action, revision_notes } = approvalSchema.parse(body)

    const { data: approval, error: fetchError } = await supabase
      .from('approval_queue')
      .select('*')
      .eq('id', approval_id)
      .single()

    if (fetchError || !approval) {
      return NextResponse.json({ error: 'Approval not found' }, { status: 404 })
    }

    // Update approval queue
    const { error: updateError } = await supabase
      .from('approval_queue')
      .update({
        status: action === 'approve' ? 'approved' : 'rejected',
        reviewed_by: user.id,
        reviewed_at: new Date().toISOString(),
        revision_notes,
      })
      .eq('id', approval_id)

    if (updateError) throw updateError

    // Log moderation action
    await supabase
      .from('moderation_logs')
      .insert([
        {
          action_type: action === 'approve' ? 'approved' : 'rejected',
          content_id: approval.content_id,
          content_type: approval.content_type,
          moderator_id: user.id,
          reason: revision_notes || `${action}d via approval queue`,
          new_status: action === 'approve' ? 'active' : 'deleted',
        }
      ])

    return NextResponse.json({ success: true, status: action })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 })
    }
    console.error('Approval action error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
