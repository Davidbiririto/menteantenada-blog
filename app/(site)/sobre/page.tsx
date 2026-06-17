import Link from 'next/link'

export const metadata = {
  title: 'Sobre | Mente Antenada',
  description: 'Conheça o Mente Antenada, um blog sobre tecnologia, inteligência artificial, marketing digital, ferramentas e tendências.'
}

export default function SobrePage() {
  return (
    <main className="bg-grid">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-sm font-bold text-cyanx">Sobre o projeto</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Mente Antenada: tecnologia explicada de forma clara, prática e atual</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">O Mente Antenada nasceu para ajudar pessoas curiosas, estudantes, criadores, profissionais e pequenos negócios a acompanharem o mundo digital sem complicação.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-3xl p-7">
            <div className="text-3xl">🧠</div>
            <h2 className="mt-4 text-xl font-extrabold text-white">Mente</h2>
            <p className="mt-3 leading-7 text-slate-300">Conteúdos pensados para desenvolver conhecimento, visão crítica e aprendizado contínuo.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <div className="text-3xl">📡</div>
            <h2 className="mt-4 text-xl font-extrabold text-white">Antenada</h2>
            <p className="mt-3 leading-7 text-slate-300">Um espaço para ficar por dentro de tendências, ferramentas, IA, marketing digital e inovação.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <div className="text-3xl">⚡</div>
            <h2 className="mt-4 text-xl font-extrabold text-white">Prática</h2>
            <p className="mt-3 leading-7 text-slate-300">Informação útil, linguagem simples e assuntos que podem ajudar no estudo, trabalho e projetos digitais.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="glass rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-white">Nossa proposta</h2>
            <div className="article-content mt-5">
              <p>O mundo digital muda rápido. Novas ferramentas surgem, a inteligência artificial avança, o marketing se transforma e a tecnologia passa a fazer parte de cada vez mais áreas da vida pessoal e profissional.</p>
              <p>O Mente Antenada existe para organizar esse movimento em conteúdos acessíveis, objetivos e relevantes. A ideia é transformar assuntos complexos em explicações mais simples, sem perder qualidade.</p>
              <p>Aqui você encontra artigos sobre tecnologia, IA, marketing digital, ferramentas, produtividade, curiosidades e tendências para quem quer evoluir no ambiente digital.</p>
            </div>
          </div>

          <aside className="rounded-3xl border border-cyanx/20 bg-ink/70 p-8 shadow-2xl shadow-cyanx/5">
            <h2 className="text-2xl font-extrabold text-white">Categorias principais</h2>
            <div className="mt-6 space-y-3">
              {['Tecnologia', 'IA', 'Marketing Digital', 'Ferramentas', 'Curiosidades'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">{item}</div>
              ))}
            </div>
            <Link href="/blog" className="btn-primary mt-7 w-full">Explorar artigos</Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
