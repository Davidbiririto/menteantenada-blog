import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = { title: 'Comunidade | Mente Antenada' }

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumbs items={[{ label: 'Comunidade' }]} />
      <h1 className="font-display text-4xl font-extrabold">Comunidade</h1>
      <div className="article-content mt-8"><p>A comunidade do Mente Antenada é um espaço para quem quer aprender, compartilhar ideias e acompanhar novidades do mundo digital.</p></div>
    </main>
  )
}
