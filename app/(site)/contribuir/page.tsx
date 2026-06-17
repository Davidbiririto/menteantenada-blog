import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = { title: 'Contribuir | Mente Antenada' }

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumbs items={[{ label: 'Contribuir' }]} />
      <h1 className="font-display text-4xl font-extrabold">Contribuir</h1>
      <div className="article-content mt-8"><p>Quer sugerir temas, ferramentas ou ideias de artigos? Esta página existe para receber contribuições futuras da comunidade.</p></div>
    </main>
  )
}
