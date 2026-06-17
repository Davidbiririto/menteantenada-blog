import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = { title: 'Termos de Uso | Mente Antenada' }

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumbs items={[{ label: 'Termos de Uso' }]} />
      <h1 className="font-display text-4xl font-extrabold">Termos de Uso</h1>
      <div className="article-content mt-8"><p>O conteúdo do Mente Antenada tem finalidade informativa e educativa. As informações podem mudar ao longo do tempo, principalmente em temas ligados à tecnologia e ferramentas digitais.</p><p>Ao usar o site, o visitante concorda em utilizar as informações com responsabilidade.</p></div>
    </main>
  )
}
