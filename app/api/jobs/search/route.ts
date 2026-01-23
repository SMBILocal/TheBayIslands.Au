import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { z } from 'zod'

async function getSupabaseServer() {
  const cookieStore = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
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

const searchSchema = z.object({
  q: z.string().optional().default(''),
  location: z.string().optional(),
  category: z.string().optional(),
  employment_type: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
  sort: z.enum(['newest', 'featured', 'salary_high']).default('newest'),
})

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const params = searchSchema.parse({
      q: searchParams.get('q'),
      location: searchParams.get('location'),
      category: searchParams.get('category'),
      employment_type: searchParams.get('employment_type'),
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
      sort: searchParams.get('sort'),
    })

    const supabase = await getSupabaseServer()
    const offset = (params.page - 1) * params.limit

    let query = supabase
      .from('jobs')
      .select('*', { count: 'exact' })
      .eq('status', 'active')
      .eq('approval_status', 'approved')
      .gt('expires_at', new Date().toISOString())

    if (params.q) {
      query = query.or(`title.ilike.%${params.q}%,description.ilike.%${params.q}%,company_name.ilike.%${params.q}%`)
    }
    if (params.location) {
      query = query.eq('location', params.location)
    }
    if (params.category) {
      query = query.eq('category', params.category)
    }
    if (params.employment_type) {
      query = query.eq('employment_type', params.employment_type)
    }

    const orderField = params.sort === 'featured' ? 'featured' : params.sort === 'salary_high' ? 'salary_max' : 'created_at'
    const orderAsc = params.sort === 'salary_high'
    query = query.order(orderField, { ascending: orderAsc }).range(offset, offset + params.limit - 1)

    const { data, error, count } = await query

    if (error) throw error

    return NextResponse.json({
      data: data || [],
      pagination: {
        page: params.page,
        limit: params.limit,
        total: count || 0,
        pages: Math.ceil((count || 0) / params.limit),
      },
    })
  } catch (error: any) {
    console.error('Jobs search error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
