import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getReadingTime } from '@/lib/utils'
import { isAdminRequest } from '@/lib/auth'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const body = await request.json()
  const supabase = createClient()
  const { data: current } = await supabase.from('posts').select('published_at').eq('id', params.id).maybeSingle()
  const payload = { ...body, reading_time: getReadingTime(body.content), updated_at: new Date().toISOString(), published_at: body.status === 'published' ? (current?.published_at || new Date().toISOString()) : null }
  const { data, error } = await supabase.from('posts').update(payload).eq('id', params.id).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const supabase = createClient()
  const { error } = await supabase.from('posts').delete().eq('id', params.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
