import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedPosts from '@/components/RelatedPosts'
import ShareButtons from '@/components/ShareButtons'
import { createClient } from '@/lib/supabase/server'
import { absoluteUrl, formatDate, getReadingTime } from '@/lib/utils'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const supabase = createClient()
  const { data: post } = await supabase.from('posts').select('title, excerpt, featured_image_url, slug').eq('slug', params.slug).eq('status', 'published').maybeSingle()
  if (!post) return {}
  return {
    title: `${post.title} | Mente Antenada`,
    description: post.excerpt || '',
    openGraph: { title: post.title, description: post.excerpt || '', images: post.featured_image_url ? [post.featured_image_url] : [] }
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const supabase = createClient()
  const { data: post } = await supabase
    .from('posts')
    .select('*, categories(*)')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .maybeSingle()
  if (!post) notFound()

  const { data: related } = await supabase
    .from('posts')
    .select('*, categories(*)')
    .eq('status', 'published')
    .eq('category_id', post.category_id)
    .neq('id', post.id)
    .limit(3)

  const url = absoluteUrl(`/post/${post.slug}`)
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumbs items={[{ label: post.categories?.name || 'Categoria', href: post.categories ? `/categoria/${post.categories.slug}` : undefined }, { label: post.title }]} />
      <span className="rounded-full bg-cyanx/10 px-3 py-1 text-sm font-bold text-cyanx">{post.categories?.name}</span>
      <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-6xl">{post.title}</h1>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400"><span>{formatDate(post.published_at)}</span><span>•</span><span>{post.reading_time || getReadingTime(post.content)} min de leitura</span></div>
      {post.featured_image_url ? <img src={post.featured_image_url} alt={post.title} className="mt-8 aspect-[16/8] w-full rounded-3xl object-cover shadow-glow" /> : null}
      <article className="article-content mt-10" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
      <div className="mt-12 border-t border-cyanx/10 pt-8">
        <p className="mb-4 font-bold">Compartilhe este artigo</p>
        <ShareButtons url={url} title={post.title} />
      </div>
      <RelatedPosts posts={related || []} />
    </main>
  )
}
