export const metadata = {
  title: 'Contato | Mente Antenada',
  description: 'Entre em contato com o Mente Antenada para dúvidas, sugestões, parcerias e oportunidades.'
}

export default function ContatoPage() {
  return (
    <main className="bg-grid">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="inline-flex rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-sm font-bold text-cyanx">Contato</p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Fale com o Mente Antenada</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">Tem uma sugestão de pauta, dúvida, proposta de parceria ou encontrou algo que pode ser melhorado? Este é o espaço para falar com a gente.</p>

            <div className="mt-8 grid gap-4">
              <div className="glass rounded-3xl p-6">
                <h2 className="text-xl font-extrabold text-white">Sugestões de conteúdo</h2>
                <p className="mt-2 text-slate-300">Envie temas sobre tecnologia, IA, marketing digital, ferramentas ou curiosidades que você gostaria de ver no blog.</p>
              </div>
              <div className="glass rounded-3xl p-6">
                <h2 className="text-xl font-extrabold text-white">Parcerias e oportunidades</h2>
                <p className="mt-2 text-slate-300">Para propostas comerciais, divulgação, collabs ou projetos relacionados ao mundo digital.</p>
              </div>
            </div>
          </div>

          <form action="mailto:contato@menteantenada.blog" method="post" encType="text/plain" className="glass rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-white">Envie sua mensagem</h2>
            <p className="mt-3 text-slate-300">Preencha os campos abaixo. Caso seu navegador abra o aplicativo de e-mail, revise a mensagem antes de enviar.</p>

            <div className="mt-7 grid gap-5">
              <label className="block text-sm font-bold text-slate-200">Nome
                <input className="input-dark mt-2" name="nome" placeholder="Seu nome" />
              </label>
              <label className="block text-sm font-bold text-slate-200">E-mail
                <input className="input-dark mt-2" name="email" type="email" placeholder="seu@email.com" required />
              </label>
              <label className="block text-sm font-bold text-slate-200">Assunto
                <input className="input-dark mt-2" name="assunto" placeholder="Sobre o que você quer falar?" />
              </label>
              <label className="block text-sm font-bold text-slate-200">Mensagem
                <textarea className="input-dark mt-2 min-h-40" name="mensagem" placeholder="Escreva sua mensagem aqui..." required />
              </label>
              <button className="btn-primary w-full" type="submit">Enviar mensagem</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
