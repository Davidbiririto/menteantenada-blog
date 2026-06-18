import Link from 'next/link'
import heroBg from '../hero-bg.png'

export default function Hero() {
return ( <section className="relative min-h-[760px] overflow-hidden bg-ink"> <video
     className="absolute inset-0 h-full w-full object-cover"
     autoPlay
     muted
     loop
     playsInline
     preload="metadata"
     poster={heroBg.src}
   > <source src="/videos/hero-bg-loop.mp4" type="video/mp4" /> </video>

```
  <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/20" />
  <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/85" />

  <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">
    <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyanx/40 bg-slate-900/45 px-4 py-2 text-sm font-semibold text-cyanx backdrop-blur-md">
      <span className="h-2 w-2 rounded-full bg-cyanx" />
      Blog de tecnologia, IA e inovação
    </p>

    <h1 className="mx-auto max-w-5xl font-display text-4xl font-extrabold leading-tight text-white drop-shadow-2xl md:text-7xl">
      Fique <span className="text-cyanx">Antenado</span>
      <br />
      com Insights que
      <br />
      Importam
    </h1>

    <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-100 drop-shadow md:text-xl">
      Tecnologia, Marketing Digital, Inteligência Artificial, Ferramentas e Curiosidades.
      Tudo que você precisa para evoluir no mundo digital.
    </p>

    <div className="mt-9 flex flex-wrap justify-center gap-4">
      <Link href="#artigos" className="btn-primary">
        Explorar Conteúdo →
      </Link>

      <Link href="/sobre" className="btn-ghost border-white/30 bg-white/10 text-white hover:bg-white/20">
        Saber Mais
      </Link>
    </div>

    <div className="mx-auto mt-14 grid max-w-4xl gap-8 text-white md:grid-cols-3">
      <div>
        <div className="text-3xl font-extrabold text-cyanx">5</div>
        <div className="text-sm font-semibold text-slate-100">Categorias principais</div>
      </div>

      <div>
        <div className="text-3xl font-extrabold text-cyanx">Novidades</div>
        <div className="text-sm font-semibold text-slate-100">Toda semana</div>
      </div>

      <div>
        <div className="text-3xl font-extrabold text-cyanx">Guias</div>
        <div className="text-sm font-semibold text-slate-100">e ferramentas</div>
      </div>
    </div>

    <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center gap-2 text-white/80">
        <div className="flex h-14 w-8 animate-bounce items-start justify-center rounded-full border-2 border-white/70 p-2">
          <span className="h-3 w-1 rounded-full bg-white/90" />
        </div>
        <span className="text-xl leading-none">⌄</span>
      </div>
    </div>
  </div>
</section>
```

)
}
