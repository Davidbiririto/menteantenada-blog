import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = { title: 'Política de Privacidade | Mente Antenada' }

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumbs items={[{ label: 'Política de Privacidade' }]} />
      <h1 className="font-display text-4xl font-extrabold">Política de Privacidade</h1>
      <div className="article-content mt-8"><p>O Mente Antenada respeita a privacidade dos visitantes. Podemos coletar nome e e-mail quando o usuário se inscreve na newsletter, além de dados técnicos básicos para funcionamento e melhoria do site.</p><p>Não vendemos dados pessoais. O usuário pode solicitar correção ou exclusão de dados quando desejar.</p></div>
    </main>
  )
}
