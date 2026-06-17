import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { isAdminRequest } from '@/lib/auth'

export async function GET() {
  if (!(await isAdminRequest())) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  const supabase = createClient()
  const { data, error } = await supabase.from('newsletter_subscribers').select('*').order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  const rows = [['nome','email','data'], ...(data || []).map(s => [s.name || '', s.email, s.created_at])]
  const csv = rows.map(row => row.map(v => `"${String(v).replaceAll('"','""')}"`).join(',')).join('\n')
  return new Response(csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="inscritos-mente-antenada.csv"' } })
}
