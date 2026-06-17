import Link from 'next/link'
import { Lightbulb, BookOpen, Share2, CheckCircle, Wrench, MessageSquare } from 'lucide-react'

export const metadata = {
  title: 'Contribuir | Mente Antenada',
  description: 'Saiba como contribuir com ideias, sugestões, pautas e melhorias para o Mente Antenada.'
}

const ways = [
  { title: 'Sugira tópicos', text: 'Tem uma ideia de artigo que gostaria de ver no blog? Envie sugestões sobre tecnologia, IA, marketing digital ou ferramentas.', icon: Lightbulb, link: '/contato', cta: 'Enviar sugestão' },
  { title: 'Seja um colaborador', text: 'Se você tem experiência em algum dos nossos temas, pode propor colaboração, artigo ou análise para o Mente Antenada.', icon: BookOpen, link: '/contato', cta: 'Propor colaboração' },
  { title: 'Compartilhe com sua rede', text: 'Compartilhar conteúdos úteis ajuda a espalhar conhecimento e fortalecer a comunidade digital.', icon: Share2, link: '/blog', cta: 'Ver artigos' },
  { title: 'Envie correções', text: 'Encontrou algo desatualizado, link quebrado ou informação que pode melhorar? Avise pelo feedback.', icon: Wrench, link: '/feedback', cta: 'Dar feedback' }
]

export default function ContribuirPage() {
  return (
    <main className="bg-grid">
      <section className="relative overflow-hidden border-b border-cyanx/10 bg-gradient-to-r from-[#0F3A7D] via-[#0b2c61] to-cyanx/60 px-4 py-20 text-center">
        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md"><CheckCircle className="h-4 w-4" /> Contribuir</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Contribua com o Mente Antenada</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">Ajude-nos a criar conteúdo ainda melhor para a comunidade digital.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ title, text, icon: Icon, link, cta }) => (
            <div key={title} className="glass flex flex-col rounded-3xl p-7">
              <Icon className="h-9 w-9 text-cyanx" />
              <h2 className="mt-4 text-xl font-extrabold text-white">{title}</h2>
              <p className="mt-3 flex-1 leading-7 text-slate-300">{text}</p>
              <Link href={link} className="mt-5 font-bold text-cyanx hover:underline">{cta} →</Link>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_.82fr]">
          <div className="glass rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-white">Diretrizes para contribuições</h2>
            <div className="article-content mt-5">
              <p>Para manter o Mente Antenada útil, profissional e confiável, toda contribuição deve respeitar alguns princípios editoriais.</p>
              <ul>
                <li><strong>Qualidade:</strong> conteúdo bem pesquisado e claro.</li>
                <li><strong>Originalidade:</strong> ideias próprias ou com devida atribuição.</li>
                <li><strong>Relevância:</strong> temas alinhados a tecnologia, IA, marketing digital, ferramentas e tendências.</li>
                <li><strong>Profissionalismo:</strong> linguagem acessível, respeitosa e útil para o leitor.</li>
                <li><strong>Atualização:</strong> informações recentes e verificáveis sempre que possível.</li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-cyanx/20 bg-cyanx/10 p-8">
            <MessageSquare className="h-10 w-10 text-cyanx" />
            <h2 className="mt-4 text-2xl font-extrabold text-white">Pronto para contribuir?</h2>
            <p className="mt-4 leading-7 text-slate-300">Envie sua ideia, proposta ou sugestão. Toda contribuição será analisada com cuidado para manter o foco do blog: conteúdo claro, útil e ligado ao mundo digital.</p>
            <div className="mt-7 flex flex-col gap-3">
              <Link href="/contato" className="btn-primary">Entrar em contato</Link>
              <Link href="/feedback" className="btn-ghost">Enviar feedback</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
