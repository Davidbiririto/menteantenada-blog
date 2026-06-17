import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createClient } from '@/lib/supabase/server'

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const supabase = createClient()
  const { data: category } = await supabase.from('categories').select('*').eq('slug', params.slug).maybeSingle()
  if (!category) notFound()

  const { data: posts } = await supabase
    .from('posts')
    .select('*, categories(*)')
    .eq('status', 'published')
    .eq('category_id', category.id)
    .order('published_at', { ascending: false })

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <Breadcrumbs items={[{ label: category.name }]} />
      <h1 className="font-display text-4xl font-extrabold">{category.name}</h1>
      <p className="mt-3 max-w-3xl text-slate-400">{category.description || 'Conteúdos publicados nesta categoria.'}</p>
      {posts?.length ? <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map(post => <PostCard key={post.id} post={post} />)}</div> : (
        <div className="glass mt-8 rounded-3xl p-10 text-center">
          <h2 className="font-display text-2xl font-bold">Ainda não há artigos nesta categoria</h2>
          <p className="mt-3 text-slate-400">Em breve novos conteúdos estarão disponíveis aqui. Continue acompanhando o Mente Antenada.</p>
          <a href="/" className="btn-primary mt-6">Voltar para o início</a>
        </div>
      )}
    </main>
  )
}
