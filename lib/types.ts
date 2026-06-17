export type Category = {
  id: number
  name: string
  slug: string
  description: string | null
  created_at: string
}

export type Post = {
  id: number
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  featured_image_url: string | null
  category_id: number | null
  status: 'draft' | 'published'
  reading_time: number | null
  published_at: string | null
  created_at: string
  updated_at: string
  categories?: Category | null
}

export type Subscriber = {
  id: number
  name: string | null
  email: string
  created_at: string
}
