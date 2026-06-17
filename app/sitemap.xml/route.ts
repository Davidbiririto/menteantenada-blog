import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://menteantenada.blog'
  const supabase = createClient()
  const { data: posts } = await supabase.from('posts').select('slug, updated_at').eq('status', 'published')
  const { data: categories } = await supabase.from('categories').select('slug')
  const fixed = ['', '/blog', '/sobre', '/contato', '/politica-de-privacidade', '/termos-de-uso', '/comunidade', '/contribuir', '/feedback']
  const urls = [
    ...fixed.map(loc => `${site}${loc}`),
    ...(posts || []).map(p => `${site}/post/${p.slug}`),
    ...(categories || []).map(c => `${site}/categoria/${c.slug}`)
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u => `<url><loc>${u}</loc></url>`).join('')}</urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
