import { notFound } from 'next/navigation'
import PostEditor from '@/components/PostEditor'
import { createClient } from '@/lib/supabase/server'

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const [{ data: post }, { data: categories }] = await Promise.all([
    supabase.from('posts').select('*, categories(*)').eq('id', params.id).maybeSingle(),
    supabase.from('categories').select('*').order('name')
  ])
  if (!post) notFound()
  return <div><h1 className="font-display text-3xl font-extrabold">Editar post</h1><PostEditor post={post} categories={categories || []} /></div>
}
