import { Mail, MessageCircle, Clock, Send, Handshake, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Contato | Mente Antenada',
  description: 'Entre em contato com o Mente Antenada para dúvidas, sugestões, parcerias e oportunidades.'
}

export default function ContatoPage() {
  return (
    <main className="bg-grid">
      <section className="relative overflow-hidden border-b border-cyanx/10 bg-gradient-to-r from-[#0F3A7D] via-[#0b2c61] to-cyanx/60 px-4 py-20 text-center">
        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md"><MessageCircle className="h-4 w-4" /> Contato</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Entre em Contato</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">Tem alguma dúvida, sugestão ou quer colaborar? Estamos aqui para ouvir.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-white">Fale com o Mente Antenada</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">Use este espaço para enviar sugestões de conteúdo, dúvidas, propostas de parceria, ideias para o blog ou avisar sobre algo que precisa ser corrigido.</p>

            <div className="mt-8 grid gap-4">
              <div className="glass rounded-3xl p-6">
                <Lightbulb className="h-7 w-7 text-cyanx" />
                <h3 className="mt-3 text-xl font-extrabold text-white">Sugestões de conteúdo</h3>
                <p className="mt-2 leading-7 text-slate-300">Envie temas sobre tecnologia, IA, marketing digital, ferramentas ou curiosidades que você gostaria de ver no blog.</p>
              </div>
              <div className="glass rounded-3xl p-6">
                <Handshake className="h-7 w-7 text-cyanx" />
                <h3 className="mt-3 text-xl font-extrabold text-white">Parcerias e oportunidades</h3>
                <p className="mt-2 leading-7 text-slate-300">Para propostas comerciais, divulgação, collabs ou projetos relacionados ao mundo digital.</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <Mail className="mx-auto h-6 w-6 text-cyanx" />
                <h3 className="mt-2 font-bold text-white">E-mail</h3>
                <p className="mt-1 text-xs text-slate-300">contato@menteantenada.blog</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <MessageCircle className="mx-auto h-6 w-6 text-cyanx" />
                <h3 className="mt-2 font-bold text-white">Redes</h3>
                <p className="mt-1 text-xs text-slate-300">@menteantenada</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <Clock className="mx-auto h-6 w-6 text-cyanx" />
                <h3 className="mt-2 font-bold text-white">Resposta</h3>
                <p className="mt-1 text-xs text-slate-300">Assim que possível</p>
              </div>
            </div>
          </div>

          <form action="mailto:contato@menteantenada.blog" method="post" encType="text/plain" className="glass rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-white">Envie sua mensagem</h2>
            <p className="mt-3 text-slate-300">Preencha os campos abaixo. Caso seu navegador abra o aplicativo de e-mail, revise a mensagem antes de enviar.</p>

            <div className="mt-7 grid gap-5">
              <label className="block text-sm font-bold text-slate-200">Nome
                <input className="input-dark mt-2" name="nome" placeholder="Seu nome" required />
              </label>
              <label className="block text-sm font-bold text-slate-200">E-mail
                <input className="input-dark mt-2" name="email" type="email" placeholder="seu@email.com" required />
              </label>
              <label className="block text-sm font-bold text-slate-200">Assunto
                <input className="input-dark mt-2" name="assunto" placeholder="Assunto da mensagem" required />
              </label>
              <label className="block text-sm font-bold text-slate-200">Mensagem
                <textarea className="input-dark mt-2 min-h-40" name="mensagem" placeholder="Escreva sua mensagem aqui..." required />
              </label>
              <button className="btn-primary w-full" type="submit"><Send className="h-4 w-4" /> Enviar mensagem</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
