import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getReadingTime } from '@/lib/utils'
import { isAdminRequest } from '@/lib/auth'

export async function POST(request: Request) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const body = await request.json()
  const supabase = createClient()
  const now = new Date().toISOString()
  const payload = { ...body, reading_time: getReadingTime(body.content), published_at: body.status === 'published' ? now : null, created_at: now, updated_at: now }
  const { data, error } = await supabase.from('posts').insert(payload).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
