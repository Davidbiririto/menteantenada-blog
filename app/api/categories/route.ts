import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { isAdminRequest } from '@/lib/auth'

export async function POST(request: Request) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const body = await request.json()
  const supabase = createClient()
  const { data, error } = await supabase.from('categories').insert(body).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
