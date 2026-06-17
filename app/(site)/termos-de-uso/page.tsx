import Link from 'next/link'
import { FileText } from 'lucide-react'

export const metadata = {
  title: 'Termos de Uso | Mente Antenada',
  description: 'Conheça as regras de uso, responsabilidades e condições aplicáveis ao uso do blog Mente Antenada.'
}

export default function TermosDeUsoPage() {
  return (
    <main className="bg-grid">
      <section className="relative overflow-hidden border-b border-cyanx/10 bg-gradient-to-r from-[#0F3A7D] via-[#0b2c61] to-cyanx/60 px-4 py-20 text-center">
        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md"><FileText className="h-4 w-4" /> Legal</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Termos de Uso</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">Conheça as condições de uso do blog Mente Antenada.</p>
          <p className="mt-3 text-sm text-white/70">Última atualização: junho de 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <article className="article-content glass rounded-3xl p-8 md:p-10">
          <p>Bem-vindo ao Mente Antenada. Ao acessar e usar este site, você concorda em cumprir estes Termos de Uso. Caso não concorde com alguma condição, recomendamos que não utilize o site.</p>

          <h2>1. Objetivo do blog</h2>
          <p>O Mente Antenada é um blog dedicado a fornecer conteúdo informativo e educativo sobre tecnologia, inteligência artificial, marketing digital, ferramentas, produtividade, curiosidades e tendências do mundo digital.</p>

          <h2>2. Caráter informativo e educativo</h2>
          <p>Todo conteúdo publicado no Mente Antenada é disponibilizado com fins informativos e educativos. Os artigos, guias e indicações não substituem consultoria profissional especializada quando o assunto exigir análise individual.</p>

          <h2>3. Conteúdo publicado</h2>
          <p>O blog pode publicar conteúdos sobre tecnologia, IA, marketing digital, redes sociais, ferramentas digitais, produtividade, automação, curiosidades e tendências. As informações podem mudar com o tempo conforme plataformas, ferramentas e políticas forem atualizadas.</p>

          <h2>4. Responsabilidade do usuário</h2>
          <p>Você é responsável por avaliar as informações antes de tomar decisões baseadas nelas. O Mente Antenada não se responsabiliza por decisões, ações ou consequências resultantes do uso dos conteúdos publicados.</p>

          <h2>5. Uso adequado do site</h2>
          <p>Ao utilizar o blog, você se compromete a navegar de forma ética, não tentar comprometer a segurança do site, não usar formulários para spam e não enviar conteúdos ofensivos, ilegais, falsos ou prejudiciais.</p>

          <h2>6. Propriedade intelectual</h2>
          <p>Textos, identidade visual, estrutura, organização, design e materiais do Mente Antenada são protegidos por direitos autorais. Não é permitido copiar, reproduzir, distribuir, modificar ou explorar comercialmente conteúdos sem autorização, exceto pequenos trechos com crédito e link para a fonte.</p>

          <h2>7. Links externos</h2>
          <p>O Mente Antenada pode conter links para sites de terceiros. Não controlamos esses sites e não somos responsáveis por conteúdo, disponibilidade, precisão, práticas comerciais ou políticas de privacidade dessas plataformas.</p>

          <h2>8. Afiliados, anúncios e parcerias</h2>
          <p>No futuro, o Mente Antenada poderá utilizar links de afiliados, publicidade, publieditoriais ou parcerias. Quando aplicável, essas relações poderão ser sinalizadas no conteúdo ou em áreas específicas do site.</p>

          <h2>9. Newsletter e comunicação</h2>
          <p>Ao se cadastrar na newsletter, você concorda em receber comunicações relacionadas ao blog. O cancelamento poderá ser solicitado conforme a Política de Privacidade.</p>

          <h2>10. Atualizações dos termos</h2>
          <p>Estes Termos de Uso podem ser atualizados a qualquer momento para refletir mudanças no blog, novas funcionalidades ou exigências legais. A continuidade do uso do site após alterações indica aceitação dos termos atualizados.</p>

          <h2>11. Contato</h2>
          <p>Para dúvidas sobre estes termos, utilize a página de contato do Mente Antenada.</p>

          <div className="mt-10 rounded-2xl border border-cyanx/20 bg-cyanx/10 p-6">
            <p className="m-0">Tem dúvidas sobre nossos termos?</p>
            <Link href="/contato" className="btn-primary mt-5">Fale conosco</Link>
          </div>
        </article>
      </section>
    </main>
  )
}
