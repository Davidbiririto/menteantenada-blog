import Hero from '@/components/Hero'
import NewsletterForm from '@/components/NewsletterForm'
import PostCard from '@/components/PostCard'
import { createClient } from '@/lib/supabase/server'

export default async function HomePage() {
  const supabase = createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('*, categories(*)')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(6)

  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  return (
    <>
      <Hero />
      <main className="mx-auto max-w-7xl px-4 py-16">
        <section className="mb-16">
          <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">Categorias principais</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {(categories || []).map(cat => <a key={cat.id} href={`/categoria/${cat.slug}`} className="rounded-full border border-cyanx/20 bg-cyanx/10 px-4 py-2 text-sm font-semibold text-cyanx hover:bg-cyanx/20">{cat.name}</a>)}
          </div>
        </section>
        <section id="artigos">
          <h2 className="mb-8 text-center font-display text-3xl font-extrabold md:text-4xl">Artigos recentes</h2>
          {posts?.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map(post => <PostCard key={post.id} post={post} />)}</div> : <p className="text-center text-slate-400">Nenhum artigo publicado ainda.</p>}
        </section>
        <NewsletterForm />
      </main>
    </>
  )
}
