import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/service'
import { getReadingTime } from '@/lib/utils'

export async function POST(request: Request) {
  const secret = request.headers.get('x-webhook-secret')
  if (!process.env.WEBHOOK_SECRET || secret !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }
  const body = await request.json()
  if (!body.title || !body.slug) return NextResponse.json({ error: 'title e slug são obrigatórios' }, { status: 400 })
  const supabase = createServiceClient()
  const now = new Date().toISOString()
  const { data, error } = await supabase.from('posts').insert({
    title: body.title,
    slug: body.slug,
    excerpt: body.excerpt || '',
    content: body.content || '',
    featured_image_url: body.featured_image_url || body.featuredImage || null,
    category_id: body.category_id || body.categoryId || null,
    status: body.status || 'draft',
    reading_time: getReadingTime(body.content || ''),
    published_at: body.status === 'published' ? now : null,
    created_at: now,
    updated_at: now
  }).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, post: data })
}
