import PostCard from '@/components/PostCard'
import { createClient } from '@/lib/supabase/server'

export default async function ArtigosPage() {
  const supabase = createClient()

  const { data: posts } = await supabase
    .from('posts')
    .select('*, categories(*)')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(60)

  return (
    <main className="mx-auto max-w-[1500px] px-4 py-16">
      <section className="mb-12 text-center">
        <p className="mx-auto mb-4 inline-flex rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-sm font-semibold text-cyanx">
          Conteúdos do Mente Antenada
        </p>

        <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">
          Todos os artigos
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Explore conteúdos sobre tecnologia, inteligência artificial, marketing digital,
          ferramentas e curiosidades para ficar por dentro do mundo digital.
        </p>
      </section>

      {posts?.length ? (
  <>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>

    <div className="mt-12 flex justify-center">
      <a href="/artigos" className="btn-primary">
        Ver todos os artigos →
      </a>
    </div>
  </>
) : (
  <p className="text-center text-slate-400">
    Nenhum artigo publicado ainda.
  </p>
)}
    </main>
  )
}
