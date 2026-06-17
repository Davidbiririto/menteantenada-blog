import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 text-center md:py-32">
        <p className="mx-auto mb-5 inline-flex rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-sm font-semibold text-cyanx">Blog de tecnologia, IA e inovação</p>
        <h1 className="mx-auto max-w-5xl font-display text-4xl font-extrabold leading-tight md:text-7xl">
          Fique Antenado com <span className="text-cyanx">Insights</span> que Importam
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          Tecnologia, Marketing Digital, Inteligência Artificial, Ferramentas e Curiosidades. Tudo que você precisa para evoluir no mundo digital.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="#artigos" className="btn-primary">Explorar Conteúdo</Link>
          <Link href="/sobre" className="btn-ghost">Saber Mais</Link>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
          <div className="glass rounded-2xl p-5"><div className="text-3xl font-extrabold text-cyanx">5</div><div className="text-sm text-slate-300">Categorias principais</div></div>
          <div className="glass rounded-2xl p-5"><div className="text-3xl font-extrabold text-cyanx">Novidades</div><div className="text-sm text-slate-300">Toda semana</div></div>
          <div className="glass rounded-2xl p-5"><div className="text-3xl font-extrabold text-cyanx">Guias</div><div className="text-sm text-slate-300">e ferramentas</div></div>
        </div>
      </div>
    </section>
  )
}
