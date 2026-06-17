export const metadata = {
  title: 'Feedback | Mente Antenada',
  description: 'Envie feedback sobre o Mente Antenada e ajude a melhorar a experiência do blog.'
}

export default function FeedbackPage() {
  return (
    <main className="bg-grid">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-sm font-bold text-cyanx">Feedback</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Sua opinião ajuda o blog a evoluir</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">Conte o que você achou do visual, dos artigos, da navegação, das categorias e do que poderia melhorar no Mente Antenada.</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="glass rounded-3xl p-6">
              <h2 className="text-xl font-extrabold text-white">O que avaliar?</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Qualidade dos conteúdos</li>
                <li>• Facilidade de navegação</li>
                <li>• Design e leitura no celular</li>
                <li>• Temas que você gostaria de ver</li>
                <li>• Problemas ou links quebrados</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-cyanx/20 bg-cyanx/10 p-6">
              <h2 className="text-xl font-extrabold text-white">Feedback simples e direto</h2>
              <p className="mt-3 leading-7 text-slate-300">Não precisa escrever perfeito. Uma opinião sincera já ajuda a deixar o projeto mais profissional e útil para os leitores.</p>
            </div>
          </div>

          <form action="mailto:contato@menteantenada.blog" method="post" encType="text/plain" className="glass rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-white">Enviar feedback</h2>
            <div className="mt-7 grid gap-5">
              <label className="block text-sm font-bold text-slate-200">Nome opcional
                <input className="input-dark mt-2" name="nome" placeholder="Seu nome" />
              </label>
              <label className="block text-sm font-bold text-slate-200">E-mail opcional
                <input className="input-dark mt-2" name="email" type="email" placeholder="seu@email.com" />
              </label>
              <label className="block text-sm font-bold text-slate-200">Tipo de feedback
                <select className="input-dark mt-2" name="tipo" defaultValue="">
                  <option value="" disabled>Selecione uma opção</option>
                  <option>Conteúdo</option>
                  <option>Design</option>
                  <option>Navegação</option>
                  <option>Erro encontrado</option>
                  <option>Sugestão de pauta</option>
                </select>
              </label>
              <label className="block text-sm font-bold text-slate-200">Mensagem
                <textarea className="input-dark mt-2 min-h-40" name="mensagem" placeholder="Escreva seu feedback aqui..." required />
              </label>
              <button className="btn-primary w-full" type="submit">Enviar feedback</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
