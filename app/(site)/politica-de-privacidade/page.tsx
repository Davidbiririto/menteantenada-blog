import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Política de Privacidade | Mente Antenada',
  description: 'Entenda como o Mente Antenada trata informações, newsletter, contato, cookies e dados de navegação.'
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="bg-grid">
      <section className="relative overflow-hidden border-b border-cyanx/10 bg-gradient-to-r from-[#0F3A7D] via-[#0b2c61] to-cyanx/60 px-4 py-20 text-center">
        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md"><ShieldCheck className="h-4 w-4" /> Legal</p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">Política de Privacidade</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">Conheça como tratamos e protegemos informações relacionadas ao uso do Mente Antenada.</p>
          <p className="mt-3 text-sm text-white/70">Última atualização: junho de 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <article className="article-content glass rounded-3xl p-8 md:p-10">
          <p>A privacidade dos nossos leitores é importante para nós. Esta Política de Privacidade explica como o Mente Antenada pode coletar, usar, armazenar e proteger informações pessoais e técnicas relacionadas ao uso do blog.</p>

          <h2>1. Quem somos</h2>
          <p>O Mente Antenada é um blog informativo sobre tecnologia, inteligência artificial, marketing digital, ferramentas, produtividade, curiosidades e tendências do mundo digital.</p>

          <h2>2. Quais dados podem ser coletados</h2>
          <p>Dependendo da forma como você utiliza o site, poderemos coletar informações como:</p>
          <ul>
            <li><strong>Nome:</strong> informado voluntariamente em formulários de contato, feedback ou newsletter.</li>
            <li><strong>E-mail:</strong> usado para contato, resposta a mensagens e envio de newsletter quando houver inscrição.</li>
            <li><strong>Mensagens:</strong> conteúdo enviado por formulários de contato, feedback ou colaboração.</li>
            <li><strong>Dados técnicos:</strong> informações como dispositivo, navegador, páginas acessadas, data de acesso e IP aproximado, quando ferramentas de análise estiverem ativas.</li>
          </ul>

          <h2>3. Finalidade do uso dos dados</h2>
          <p>Os dados podem ser utilizados para responder mensagens, gerenciar inscrições na newsletter, melhorar conteúdos, analisar desempenho do site, manter a segurança da plataforma e cumprir obrigações legais quando necessário.</p>

          <h2>4. Newsletter</h2>
          <p>Ao se cadastrar na newsletter, você autoriza o envio de comunicações relacionadas a novos conteúdos, tecnologia, IA, marketing digital, ferramentas e atualizações do Mente Antenada. Você poderá solicitar o cancelamento quando desejar.</p>

          <h2>5. Cookies e tecnologias semelhantes</h2>
          <p>O site poderá utilizar cookies ou tecnologias semelhantes para melhorar sua experiência, entender a navegação, medir desempenho, lembrar preferências e manter funcionalidades essenciais. Você pode controlar cookies nas configurações do navegador.</p>

          <h2>6. Ferramentas de terceiros</h2>
          <p>O blog pode usar serviços de terceiros para hospedagem, banco de dados, analytics, formulários, newsletter, automações, segurança e compartilhamento de conteúdo. Esses serviços podem tratar dados conforme suas próprias políticas.</p>

          <h2>7. Compartilhamento de dados</h2>
          <p>O Mente Antenada não vende dados pessoais. Informações poderão ser compartilhadas apenas quando necessário para operar o site, responder solicitações, cumprir obrigações legais ou usar ferramentas essenciais ao funcionamento do blog.</p>

          <h2>8. Segurança</h2>
          <p>Buscamos adotar medidas técnicas e organizacionais razoáveis para proteger informações contra acesso não autorizado, alteração, divulgação ou destruição. Ainda assim, nenhum sistema online é totalmente livre de riscos.</p>

          <h2>9. Seus direitos</h2>
          <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você pode solicitar acesso, correção, exclusão, portabilidade, revogação de consentimento ou informações sobre o tratamento dos seus dados pessoais.</p>

          <h2>10. Retenção de dados</h2>
          <p>Os dados serão mantidos pelo tempo necessário para atender às finalidades informadas, cumprir obrigações legais ou garantir segurança e funcionamento do site.</p>

          <h2>11. Links externos</h2>
          <p>O blog pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de cada plataforma acessada.</p>

          <h2>12. Atualizações desta política</h2>
          <p>Esta Política de Privacidade poderá ser atualizada conforme o blog evoluir, novas ferramentas forem adicionadas ou exigências legais mudarem. A versão mais recente estará sempre disponível nesta página.</p>

          <h2>13. Contato</h2>
          <p>Para questões sobre privacidade, solicitações relacionadas a dados pessoais ou dúvidas sobre esta política, utilize a página de contato do Mente Antenada.</p>

          <div className="mt-10 rounded-2xl border border-cyanx/20 bg-cyanx/10 p-6">
            <p className="m-0">Tem dúvidas sobre privacidade?</p>
            <Link href="/contato" className="btn-primary mt-5">Fale conosco</Link>
          </div>
        </article>
      </section>
    </main>
  )
}
