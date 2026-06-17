import { createClient } from '@/lib/supabase/server'
import { formatDate } from '@/lib/utils'

export default async function SubscribersPage() {
  const supabase = createClient()
  const { data: subscribers } = await supabase.from('newsletter_subscribers').select('*').order('created_at', { ascending: false })
  return (
    <div>
      <div className="flex items-center justify-between"><h1 className="font-display text-3xl font-extrabold">Inscritos da newsletter</h1><a href="/api/newsletter/export" className="btn-primary">Exportar CSV</a></div>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-cyanx/10"><table className="w-full min-w-[600px] text-left text-sm"><thead className="bg-white/5"><tr><th className="p-4">Nome</th><th>E-mail</th><th>Data</th></tr></thead><tbody>{(subscribers || []).map(s => <tr key={s.id} className="border-t border-white/5"><td className="p-4">{s.name || '-'}</td><td>{s.email}</td><td>{formatDate(s.created_at)}</td></tr>)}</tbody></table></div>
    </div>
  )
}
