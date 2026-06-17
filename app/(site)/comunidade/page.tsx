import Link from 'next/link'
import { Users, MessageCircle, Share2, Bell, Rocket } from 'lucide-react'

export const metadata = {
  title: 'Comunidade | Mente Antenada',
  description: 'Participe da comunidade do Mente Antenada e acompanhe conteúdos sobre tecnologia, IA e marketing digital.'
}

export default function ComunidadePage() {
  return (
    <main className="bg-grid">
      <section className="relative overflow-hidden border-b border-cyanx/10 bg-gradient-to-r from-[#0F3A7D] via-[#0b2c61] to-cyanx/60 px-4 py-20 text-center">
        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md"><Users className="h-4 w-4" /> Comunidade</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Nossa Comunidade</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">Conecte-se com profissionais e entusiastas do mundo digital.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">Faça parte da Comunidade Mente Antenada</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">A comunidade Mente Antenada é um espaço onde profissionais, empreendedores, estudantes, criadores e entusiastas podem acompanhar conhecimento, experiências e insights sobre tecnologia, inteligência artificial, marketing digital e ferramentas inovadoras.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-3xl p-7">
            <Users className="h-9 w-9 text-cyanx" />
            <h3 className="mt-4 text-2xl font-extrabold text-white">Conecte-se</h3>
            <p className="mt-3 leading-7 text-slate-300">Conheça ideias, conteúdos e pessoas que compartilham interesses no mundo digital.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <MessageCircle className="h-9 w-9 text-cyanx" />
            <h3 className="mt-4 text-2xl font-extrabold text-white">Compartilhe</h3>
            <p className="mt-3 leading-7 text-slate-300">Envie sugestões, faça perguntas e ajude a direcionar novos conteúdos para o blog.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <Share2 className="h-9 w-9 text-cyanx" />
            <h3 className="mt-4 text-2xl font-extrabold text-white">Aprenda</h3>
            <p className="mt-3 leading-7 text-slate-300">Adquira novos conhecimentos com artigos, ferramentas, tendências e guias práticos.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_.85fr]">
          <div className="glass rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-white">Próximos passos</h2>
            <p className="mt-5 leading-8 text-slate-300">Estamos desenvolvendo um espaço cada vez mais útil para leitores que acompanham tecnologia e inovação. Em breve, a comunidade poderá ganhar novos formatos de participação.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Participar de discussões e fóruns.</li>
              <li>✓ Compartilhar projetos, ferramentas e ideias.</li>
              <li>✓ Receber materiais exclusivos e atualizações.</li>
              <li>✓ Colaborar com pautas e sugestões de conteúdo.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-cyanx/20 bg-cyanx/10 p-8 text-center">
            <Bell className="mx-auto h-10 w-10 text-cyanx" />
            <h2 className="mt-4 text-2xl font-extrabold text-white">Como participar agora?</h2>
            <p className="mt-4 leading-7 text-slate-300">Acompanhe os artigos, assine a newsletter e envie sugestões pelo contato ou feedback.</p>
            <div className="mt-7 flex flex-col gap-3">
              <Link href="/#newsletter" className="btn-primary"><Rocket className="h-4 w-4" /> Assinar newsletter</Link>
              <Link href="/feedback" className="btn-ghost">Enviar feedback</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
