import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
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

const ratingCreateSchema = z.object({
  listing_id: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  review_text: z.string().max(2000).optional(),
})

export async function GET(request: NextRequest) {
  try {
    const supabase = await getSupabaseServer()
    const searchParams = request.nextUrl.searchParams
    const listingId = searchParams.get('listing_id')

    if (!listingId) {
      return NextResponse.json({ error: 'listing_id required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('ratings')
      .select('id,rating,review_text,created_at,helpful_count,users(username)')
      .eq('listing_id', listingId)
      .eq('status', 'active')
      .order('created_at', { ascending: false })

    if (error) throw error

    const avgRating = data && data.length > 0
      ? (data.reduce((sum, r) => sum + r.rating, 0) / data.length).toFixed(1)
      : 0

    return NextResponse.json({
      ratings: data || [],
      average_rating: avgRating,
      total_ratings: data?.length || 0,
    })
  } catch (error: any) {
    console.error('Ratings fetch error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await getSupabaseServer()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = ratingCreateSchema.parse(body)

    // Check for existing rating from this user
    const { data: existing } = await supabase
      .from('ratings')
      .select('id')
      .eq('listing_id', validatedData.listing_id)
      .eq('user_id', user.id)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'You have already rated this listing' },
        { status: 409 }
      )
    }

    const { data, error } = await supabase
      .from('ratings')
      .insert([
        {
          ...validatedData,
          user_id: user.id,
          status: 'pending',
        }
      ])
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 201 })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 })
    }
    console.error('Rating creation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
