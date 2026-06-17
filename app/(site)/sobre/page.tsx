import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = { title: 'Sobre o Mente Antenada | Mente Antenada' }

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumbs items={[{ label: 'Sobre o Mente Antenada' }]} />
      <h1 className="font-display text-4xl font-extrabold">Sobre o Mente Antenada</h1>
      <div className="article-content mt-8"><p>O <strong>Mente Antenada</strong> nasceu para reunir conteúdos claros, práticos e acessíveis sobre tecnologia, inteligência artificial, marketing digital, ferramentas e curiosidades do mundo digital.</p><p>Nosso objetivo é ajudar pessoas que querem aprender, se atualizar e evoluir sem complicação.</p></div>
    </main>
  )
}
