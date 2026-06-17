import Link from 'next/link'
import { Brain, Radio, Sparkles, Cpu, Bot, Megaphone, Wrench, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Sobre | Mente Antenada',
  description: 'Conheça o Mente Antenada, um blog sobre tecnologia, inteligência artificial, marketing digital, ferramentas e tendências digitais.'
}

const themes = [
  { title: 'Tecnologia', text: 'Tendências, novidades e explicações sobre o universo digital.', icon: Cpu },
  { title: 'Inteligência Artificial', text: 'Ferramentas, automações, usos práticos e impactos da IA no dia a dia.', icon: Bot },
  { title: 'Marketing Digital', text: 'Conteúdo, estratégia, SEO, redes sociais, anúncios e presença online.', icon: Megaphone },
  { title: 'Ferramentas', text: 'Plataformas úteis para produtividade, criação, organização e automação.', icon: Wrench }
]

export default function SobrePage() {
  return (
    <main className="bg-grid">
      <section className="relative overflow-hidden border-b border-cyanx/10 bg-gradient-to-r from-[#0F3A7D] via-[#0b2c61] to-cyanx/60 px-4 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.14),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(0,217,255,.22),transparent_30%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md">
            <Sparkles className="h-4 w-4" /> Sobre o projeto
          </p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Sobre o Mente Antenada
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Um espaço dedicado a reunir conteúdos sobre tecnologia, inteligência artificial, marketing digital, ferramentas e tendências do mundo digital.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass rounded-3xl p-7">
            <Brain className="h-9 w-9 text-cyanx" />
            <h2 className="mt-4 text-2xl font-extrabold text-white">Mente</h2>
            <p className="mt-3 leading-7 text-slate-300">Conteúdos pensados para desenvolver conhecimento, visão crítica e aprendizado contínuo.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <Radio className="h-9 w-9 text-cyanx" />
            <h2 className="mt-4 text-2xl font-extrabold text-white">Antenada</h2>
            <p className="mt-3 leading-7 text-slate-300">Um blog para acompanhar tendências, ferramentas, IA, marketing digital e inovação de forma simples.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <Lightbulb className="h-9 w-9 text-cyanx" />
            <h2 className="mt-4 text-2xl font-extrabold text-white">Prática</h2>
            <p className="mt-3 leading-7 text-slate-300">Informação útil, linguagem clara e assuntos que podem ajudar no estudo, trabalho e projetos digitais.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.08fr_.92fr]">
          <article className="glass rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-white">O que é o Mente Antenada?</h2>
            <div className="article-content mt-5">
              <p>O Mente Antenada é um blog criado para reunir conteúdos sobre tecnologia, inteligência artificial, marketing digital, ferramentas, produtividade, curiosidades e tendências do mundo digital.</p>
              <p>Nosso objetivo é ajudar pessoas que querem aprender, se atualizar e evoluir pessoal e profissionalmente de forma simples, prática e acessível.</p>
              <p>O mundo digital muda todos os dias. Novas ferramentas surgem, a IA avança, o marketing se transforma e a tecnologia passa a fazer parte de cada vez mais áreas da vida pessoal e profissional. O Mente Antenada existe para organizar esse movimento em conteúdos fáceis de entender.</p>

              <h2>Nossa missão</h2>
              <p>Democratizar o conhecimento sobre tecnologia e inovação digital, tornando conteúdos complexos mais acessíveis e práticos para profissionais, empreendedores, estudantes e entusiastas que desejam se manter atualizados.</p>

              <h2>Para quem é este blog?</h2>
              <ul>
                <li>Para quem quer se manter atualizado sobre tendências tecnológicas e digitais.</li>
                <li>Para quem busca aprender sobre inteligência artificial e suas aplicações.</li>
                <li>Para quem trabalha ou estuda marketing digital e quer aprimorar sua visão.</li>
                <li>Para quem procura ferramentas para aumentar produtividade e criatividade.</li>
                <li>Para quem tem curiosidade sobre como a tecnologia transforma o mundo.</li>
              </ul>

              <h2>Como o conteúdo é produzido?</h2>
              <p>Os artigos são criados com foco em clareza, utilidade e relevância. A proposta é entregar conteúdos pesquisados, organizados e revisados para ajudar o leitor a entender temas digitais sem precisar lidar com linguagem complicada.</p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-cyanx/20 bg-ink/70 p-8 shadow-2xl shadow-cyanx/5">
              <h2 className="text-2xl font-extrabold text-white">Temas abordados</h2>
              <div className="mt-6 grid gap-4">
                {themes.map(({ title, text, icon: Icon }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Icon className="h-6 w-6 text-cyanx" />
                    <h3 className="mt-3 font-extrabold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyanx/20 bg-cyanx/10 p-8">
              <h2 className="text-2xl font-extrabold text-white">Comece a explorar</h2>
              <p className="mt-3 leading-7 text-slate-300">Navegue pelos artigos e fique antenado sobre tecnologia, IA, marketing digital e ferramentas.</p>
              <Link href="/blog" className="btn-primary mt-6 w-full">Ver todos os artigos</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
