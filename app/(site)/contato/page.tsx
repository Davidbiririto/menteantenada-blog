import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = { title: 'Contato | Mente Antenada' }

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumbs items={[{ label: 'Contato' }]} />
      <h1 className="font-display text-4xl font-extrabold">Contato</h1>
      <div className="article-content mt-8"><p>Use esta página para dúvidas, sugestões, parcerias ou feedbacks sobre o Mente Antenada.</p><p>Em breve este formulário poderá ser conectado a uma ferramenta de envio de mensagens.</p></div>
    </main>
  )
}
