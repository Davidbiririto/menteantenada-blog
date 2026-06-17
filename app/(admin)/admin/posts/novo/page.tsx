import PostEditor from '@/components/PostEditor'
import { createClient } from '@/lib/supabase/server'

export default async function NewPostPage() {
  const supabase = createClient()
  const { data: categories } = await supabase.from('categories').select('*').order('name')
  return <div><h1 className="font-display text-3xl font-extrabold">Novo post</h1><PostEditor categories={categories || []} /></div>
}
