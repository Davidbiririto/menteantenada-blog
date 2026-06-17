import Link from 'next/link'

export const metadata = {
  title: 'Comunidade | Mente Antenada',
  description: 'Participe da comunidade do Mente Antenada e acompanhe conteúdos sobre tecnologia, IA e marketing digital.'
}

export default function ComunidadePage() {
  return (
    <main className="bg-grid">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-sm font-bold text-cyanx">Comunidade</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Um espaço para quem quer evoluir no mundo digital</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">A comunidade do Mente Antenada é pensada para reunir pessoas interessadas em tecnologia, inteligência artificial, ferramentas, criatividade e oportunidades digitais.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-3xl p-7">
            <h2 className="text-xl font-extrabold text-white">Aprender junto</h2>
            <p className="mt-3 leading-7 text-slate-300">Conteúdos, guias e ideias para quem está começando ou quer acompanhar tendências digitais de forma prática.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <h2 className="text-xl font-extrabold text-white">Compartilhar ideias</h2>
            <p className="mt-3 leading-7 text-slate-300">Sugestões de temas, dúvidas e experiências podem ajudar a criar conteúdos mais úteis para todos.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <h2 className="text-xl font-extrabold text-white">Acompanhar novidades</h2>
            <p className="mt-3 leading-7 text-slate-300">Fique por dentro de novas ferramentas, possibilidades de IA, automações e estratégias de presença digital.</p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-cyanx/20 bg-cyanx/10 p-8 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white">Como participar?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">Por enquanto, a melhor forma é acompanhar os artigos, assinar a newsletter e enviar sugestões pelo contato ou feedback. Conforme o projeto crescer, novos canais de comunidade poderão ser adicionados.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/#newsletter" className="btn-primary">Assinar newsletter</Link>
            <Link href="/feedback" className="btn-ghost">Enviar feedback</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
