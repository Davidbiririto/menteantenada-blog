export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://menteantenada.blog'
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml`, { headers: { 'Content-Type': 'text/plain' } })
}
