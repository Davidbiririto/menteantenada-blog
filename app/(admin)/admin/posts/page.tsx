import Link from 'next/link'
import DeletePostButton from '@/components/DeletePostButton'
import { createClient } from '@/lib/supabase/server'
import { formatDate } from '@/lib/utils'

export default async function AdminPostsPage() {
  const supabase = createClient()
  const { data: posts } = await supabase.from('posts').select('*, categories(*)').order('created_at', { ascending: false })
  return (
    <div>
      <div className="flex items-center justify-between gap-4"><h1 className="font-display text-3xl font-extrabold">Posts</h1><Link href="/admin/posts/novo" className="btn-primary">Novo post</Link></div>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-cyanx/10">
        <table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-white/5"><tr><th className="p-4">Título</th><th>Categoria</th><th>Status</th><th>Data</th><th>Ações</th></tr></thead><tbody>{(posts || []).map(post => <tr key={post.id} className="border-t border-white/5"><td className="p-4 font-semibold">{post.title}</td><td>{post.categories?.name || '-'}</td><td><span className="rounded-full bg-cyanx/10 px-3 py-1 text-xs text-cyanx">{post.status === 'published' ? 'Publicado' : 'Rascunho'}</span></td><td>{formatDate(post.published_at)}</td><td className="space-x-3"><Link href={`/admin/posts/${post.id}`} className="text-cyanx">Editar</Link><DeletePostButton id={post.id} /></td></tr>)}</tbody></table>
      </div>
    </div>
  )
}
