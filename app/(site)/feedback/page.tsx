import { MessageSquare, Star, Zap, Bug, Send } from 'lucide-react'

export const metadata = {
  title: 'Feedback | Mente Antenada',
  description: 'Envie feedback sobre o Mente Antenada e ajude a melhorar a experiência do blog.'
}

export default function FeedbackPage() {
  return (
    <main className="bg-grid">
      <section className="relative overflow-hidden border-b border-cyanx/10 bg-gradient-to-r from-[#0F3A7D] via-[#0b2c61] to-cyanx/60 px-4 py-20 text-center">
        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md"><MessageSquare className="h-4 w-4" /> Feedback</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Seu Feedback Importa</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">Ajude-nos a melhorar o Mente Antenada com suas sugestões, comentários e opiniões.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">Compartilhe sua opinião</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Queremos ouvir você. Seu feedback nos ajuda a criar conteúdos melhores, identificar problemas e entender o que você mais valoriza no Mente Antenada.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-3xl p-7">
            <Zap className="h-9 w-9 text-cyanx" />
            <h3 className="mt-4 text-xl font-extrabold text-white">Sugestões</h3>
            <p className="mt-3 leading-7 text-slate-300">Ideias para novos artigos, recursos, categorias ou melhorias no blog.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <Bug className="h-9 w-9 text-cyanx" />
            <h3 className="mt-4 text-xl font-extrabold text-white">Problemas</h3>
            <p className="mt-3 leading-7 text-slate-300">Reporte erros, links quebrados, problemas de leitura ou navegação.</p>
          </div>
          <div className="glass rounded-3xl p-7">
            <Star className="h-9 w-9 text-cyanx" />
            <h3 className="mt-4 text-xl font-extrabold text-white">Elogios</h3>
            <p className="mt-3 leading-7 text-slate-300">Compartilhe o que você gostou e o que deseja ver mais vezes.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-extrabold text-white">O que avaliar?</h2>
            <ul className="mt-5 space-y-3 leading-7 text-slate-300">
              <li>• Qualidade dos conteúdos</li>
              <li>• Facilidade de navegação</li>
              <li>• Design e leitura no celular</li>
              <li>• Temas que você gostaria de ver</li>
              <li>• Problemas ou links quebrados</li>
              <li>• Sugestões para a newsletter ou comunidade</li>
            </ul>
          </div>

          <form action="mailto:contato@menteantenada.blog" method="post" encType="text/plain" className="glass rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-white">Enviar feedback</h2>
            <p className="mt-3 text-slate-300">Escolha o tipo de feedback e escreva sua mensagem. Ela será enviada pelo seu aplicativo de e-mail.</p>

            <div className="mt-7 grid gap-5">
              <label className="block text-sm font-bold text-slate-200">Tipo de feedback
                <select className="input-dark mt-2" name="tipo">
                  <option>Sugestão</option>
                  <option>Problema</option>
                  <option>Elogio</option>
                  <option>Ideia de conteúdo</option>
                </select>
              </label>
              <label className="block text-sm font-bold text-slate-200">Seu e-mail
                <input className="input-dark mt-2" name="email" type="email" placeholder="seu@email.com" />
              </label>
              <label className="block text-sm font-bold text-slate-200">Seu feedback
                <textarea className="input-dark mt-2 min-h-44" name="feedback" placeholder="Escreva seu feedback aqui..." required />
              </label>
              <button className="btn-primary w-full" type="submit"><Send className="h-4 w-4" /> Enviar feedback</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
