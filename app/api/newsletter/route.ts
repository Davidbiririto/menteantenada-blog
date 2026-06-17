import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const { name, email } = await request.json().catch(() => ({}))
  if (!email) return NextResponse.json({ error: 'E-mail é obrigatório.' }, { status: 400 })
  const supabase = createClient()
  const { error } = await supabase.from('newsletter_subscribers').insert({ name: name || null, email })
  if (error) {
    if (error.code === '23505') return NextResponse.json({ error: 'Este e-mail já está inscrito.' }, { status: 409 })
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
