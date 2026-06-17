import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createClient } from '@/lib/supabase/server'

export const metadata = { title: 'Artigos | Mente Antenada' }

export default async function BlogPage() {
  const supabase = createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('*, categories(*)')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <h1 className="font-display text-4xl font-extrabold">Todos os artigos</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {(posts || []).map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </main>
  )
}
