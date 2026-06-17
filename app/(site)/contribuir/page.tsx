import Link from 'next/link'

export const metadata = {
  title: 'Contribuir | Mente Antenada',
  description: 'Saiba como contribuir com ideias, sugestões, pautas e melhorias para o Mente Antenada.'
}

export default function ContribuirPage() {
  return (
    <main className="bg-grid">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-sm font-bold text-cyanx">Contribuir</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Ajude o Mente Antenada a ficar ainda mais útil</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">Sua contribuição pode vir em forma de ideia, sugestão de pauta, indicação de ferramenta, correção ou feedback sobre a experiência no blog.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Ideias de pauta', 'Sugira temas sobre IA, tecnologia, marketing digital, ferramentas ou curiosidades.'],
            ['Ferramentas úteis', 'Indique plataformas que ajudam em produtividade, criação, estudo ou automação.'],
            ['Correções', 'Encontrou alguma informação desatualizada ou erro? Avise para melhorarmos.'],
            ['Experiência do leitor', 'Conte o que poderia deixar o blog mais fácil, bonito e útil.']
          ].map(([title, text]) => (
            <div key={title} className="glass rounded-3xl p-6">
              <h2 className="text-lg font-extrabold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_.8fr]">
          <div className="glass rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-white">Como enviar uma contribuição</h2>
            <ol className="mt-6 space-y-4 text-slate-300">
              <li><strong className="text-cyanx">1.</strong> Escolha o tipo de contribuição: ideia, ferramenta, correção ou sugestão.</li>
              <li><strong className="text-cyanx">2.</strong> Explique de forma simples por que aquilo pode ser útil para os leitores.</li>
              <li><strong className="text-cyanx">3.</strong> Envie pelo contato ou pela página de feedback.</li>
            </ol>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-extrabold text-white">Pronto para contribuir?</h2>
            <p className="mt-4 leading-7 text-slate-300">Toda sugestão será analisada com cuidado para manter o foco do blog: conteúdo claro, útil e ligado ao mundo digital.</p>
            <div className="mt-7 flex flex-col gap-3">
              <Link href="/contato" className="btn-primary">Enviar pelo contato</Link>
              <Link href="/feedback" className="btn-ghost">Dar feedback</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
