import CategoryManager from '@/components/CategoryManager'
import { createClient } from '@/lib/supabase/server'

export default async function CategoriesPage() {
  const supabase = createClient()
  const { data: categories } = await supabase.from('categories').select('*').order('name')
  return <div><h1 className="mb-6 font-display text-3xl font-extrabold">Categorias</h1><CategoryManager categories={categories || []} /></div>
}
