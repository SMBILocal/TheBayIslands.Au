import { NextRequest, NextResponse } from 'next/server'
import supabaseAdmin from '../../../lib/supabaseAdmin'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const SUPER_ADMIN_ID = 'fd3284e3-ff1c-4b33-a1bf-921267fc6fbe'
const SUPER_ADMIN_NAME = 'SMBI Local - The Bay Islands .Au'

const mockArticles = [
  {id:'6b0d4f6a-3f7f-4e1d-8dfb-1b7a0b9f8b01', slug:'complete-guide-russell-island', title:'Complete Guide to Russell Island', excerpt:'Discover the charm, history, and attractions of Russell Island.', content:'Russell Island is the northernmost island in the Bay Islands, known for its pristine beaches, local shops, and warm community. Popular attractions include Russell Island State School historic site, local cafes, and water activities. The island offers a perfect blend of natural beauty and modern amenities, making it ideal for both residents and visitors.', author:SUPER_ADMIN_NAME, user_id:SUPER_ADMIN_ID, category:'Island Guides', created_at:'2026-01-10'},
  {id:'c1b0a6fd-40db-4a1b-bf45-8b0d47a6c203', slug:'macleay-island-gateway-paradise', title:'Macleay Island: Gateway to Paradise', excerpt:'Your complete guide to exploring Macleay Island.', content:'Macleay Island offers stunning coastal views, excellent dining options, and world-class accommodations. Known for eco-tourism, water sports, and vibrant community events throughout the year. The island features beautiful walking trails, local markets, and a thriving arts community.', author:SUPER_ADMIN_NAME, user_id:SUPER_ADMIN_ID, category:'Island Guides', created_at:'2026-01-11'},
  {id:'8d1ce1c4-2f66-49a2-9c2a-19a7c2a5e19f', slug:'sustainable-tourism-bay-islands', title:'Sustainable Tourism in the Bay Islands', excerpt:'How visitors can help preserve our islands while enjoying them.', content:'Learn about reef-safe practices, responsible wildlife viewing, and supporting local businesses. The Bay Islands are committed to preserving their natural beauty for future generations. Visitors are encouraged to minimize their environmental impact through conscious travel choices.', author:SUPER_ADMIN_NAME, user_id:SUPER_ADMIN_ID, category:'Environment', created_at:'2026-01-12'},
  {id:'3d153ad2-39b3-4f5f-8b1a-c9cd8d2b8d21', slug:'2026-community-events-calendar', title:'2026 Community Events Calendar', excerpt:'All the festivals, markets, and events happening this year.', content:'January brings the Summerfest celebration, February features the local fishing competition, and throughout the year there are monthly markets, beach cleanups, and cultural celebrations. Join us for unforgettable community experiences.', author:SUPER_ADMIN_NAME, user_id:SUPER_ADMIN_ID, category:'Events', created_at:'2026-01-13'}
]

const slugify = (value: string) => value
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .slice(0, 80)

const getSupabaseServer = () => {
  const cookieStore = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        }
      }
    }
  )
}

export async function GET(){
  try {
    const { data, error } = await supabaseAdmin.from('articles').select('*').order('created_at', {ascending:false}).limit(50)
    if (error || !data || data.length === 0) {
      return NextResponse.json(mockArticles)
    }

    const normalized = data.map((article: any) => ({
      ...article,
      slug: article.slug || slugify(article.title || ''),
      author: article.author || SUPER_ADMIN_NAME,
      user_id: article.user_id || SUPER_ADMIN_ID
    }))

    return NextResponse.json(normalized)
  } catch {
    return NextResponse.json(mockArticles)
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabaseServer()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const title = String(body.title || '').trim()
    const excerpt = String(body.excerpt || '').trim()
    const content = String(body.content || '').trim()
    const category = String(body.category || 'News').trim()
    const featured_image_url = body.featured_image_url ? String(body.featured_image_url) : null
    const status = body.status && ['draft', 'pending', 'approved', 'published', 'rejected', 'archived'].includes(body.status)
      ? body.status
      : 'published'

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('articles')
      .insert({
        user_id: user.id,
        title,
        slug: slugify(title),
        excerpt,
        content,
        category,
        featured_image_url,
        status,
        approval_status: 'approved',
        approved_by: user.id,
        published_at: status === 'published' ? new Date().toISOString() : null
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({
      ...data,
      author: user.user_metadata?.full_name || SUPER_ADMIN_NAME
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to create article' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = getSupabaseServer()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'Missing article id' }, { status: 400 })

    const body = await request.json()
    const updates: Record<string, any> = {}

    if (body.title) {
      updates.title = String(body.title).trim()
      updates.slug = slugify(updates.title)
    }
    if (body.excerpt !== undefined) updates.excerpt = String(body.excerpt)
    if (body.content !== undefined) updates.content = String(body.content)
    if (body.category !== undefined) updates.category = String(body.category)
    if (body.featured_image_url !== undefined) updates.featured_image_url = body.featured_image_url
    if (body.status && ['draft', 'pending', 'approved', 'published', 'rejected', 'archived'].includes(body.status)) {
      updates.status = body.status
    }
    updates.updated_at = new Date().toISOString()

    const { data: existing } = await supabase
      .from('articles')
      .select('user_id')
      .eq('id', id)
      .single()

    if (!existing) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    if (existing.user_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { data, error } = await supabase
      .from('articles')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({
      ...data,
      author: user.user_metadata?.full_name || SUPER_ADMIN_NAME
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update article' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = getSupabaseServer()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'Missing article id' }, { status: 400 })

    const { data: existing } = await supabase
      .from('articles')
      .select('user_id')
      .eq('id', id)
      .single()

    if (!existing) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    if (existing.user_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to delete article' }, { status: 500 })
  }
}
