import Link from 'next/link'
import { Post } from '@/lib/types'
import { formatDate } from '@/lib/utils'

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.slug}`} className="group block overflow-hidden rounded-3xl border border-cyanx/10 bg-white/[.045] shadow-glow transition hover:-translate-y-1 hover:border-cyanx/35 hover:bg-white/[.065]">
      <div className="aspect-[16/10] overflow-hidden bg-slate-900">
        {post.featured_image_url ? <img src={post.featured_image_url} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : null}
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs text-slate-400">
          <span className="rounded-full bg-cyanx/10 px-3 py-1 font-semibold text-cyanx">{post.categories?.name || 'Blog'}</span>
          <span>{formatDate(post.published_at)}</span>
        </div>
        <h3 className="font-display text-xl font-bold leading-tight text-white group-hover:text-cyanx">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{post.excerpt}</p>
      </div>
    </Link>
  )
}
