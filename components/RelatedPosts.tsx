import PostCard from '@/components/PostCard'
import { Post } from '@/lib/types'

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts.length) return null
  return (
    <section className="mt-14 border-t border-cyanx/10 pt-10">
      <h2 className="mb-6 font-display text-2xl font-extrabold">Artigos relacionados</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  )
}
