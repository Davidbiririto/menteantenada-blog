import { createClient } from '@/lib/supabase/server'

export default async function AdminPage() {
  const supabase = createClient()
  const [{ count: all }, { count: published }, { count: drafts }, { count: categories }, { count: subscribers }] = await Promise.all([
    supabase.from('posts').select('*', { count: 'exact', head: true }),
    supabase.from('posts').select('*', { count: 'exact', head: true }).eq('status', 'published'),
    supabase.from('posts').select('*', { count: 'exact', head: true }).eq('status', 'draft'),
    supabase.from('categories').select('*', { count: 'exact', head: true }),
    supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true })
  ])
  const cards = [
    ['Total de posts', all || 0], ['Publicados', published || 0], ['Rascunhos', drafts || 0], ['Categorias', categories || 0], ['Inscritos', subscribers || 0]
  ]
  return <div><h1 className="font-display text-3xl font-extrabold">Dashboard</h1><div className="mt-8 grid gap-5 md:grid-cols-5">{cards.map(([label, value]) => <div key={label} className="glass rounded-2xl p-5"><p className="text-sm text-slate-400">{label}</p><p className="mt-2 text-3xl font-extrabold text-cyanx">{value}</p></div>)}</div></div>
}
