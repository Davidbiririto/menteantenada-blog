import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = { title: 'Feedback | Mente Antenada' }

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumbs items={[{ label: 'Feedback' }]} />
      <h1 className="font-display text-4xl font-extrabold">Feedback</h1>
      <div className="article-content mt-8"><p>Sua opinião ajuda a melhorar o Mente Antenada. Envie sugestões sobre conteúdos, navegação, temas e melhorias para o blog.</p></div>
    </main>
  )
}
