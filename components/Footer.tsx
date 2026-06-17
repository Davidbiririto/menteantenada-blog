import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-cyanx/10 bg-[#06101e]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-extrabold">Mente <span className="text-cyanx">Antenada</span></h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">Tecnologia, IA, marketing digital, ferramentas e curiosidades para evoluir no mundo digital.</p>
        </div>
        <div>
          <h4 className="font-bold text-white">Categorias</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/categoria/tecnologia">Tecnologia</Link></li>
            <li><Link href="/categoria/ia">IA</Link></li>
            <li><Link href="/categoria/marketing-digital">Marketing Digital</Link></li>
            <li><Link href="/categoria/ferramentas">Ferramentas</Link></li>
            <li><Link href="/categoria/curiosidades">Curiosidades</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white">Institucional</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/comunidade">Comunidade</Link></li>
            <li><Link href="/contribuir">Contribuir</Link></li>
            <li><Link href="/feedback">Feedback</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
            <li><Link href="/termos-de-uso">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 px-4 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} Mente Antenada. Todos os direitos reservados.</div>
    </footer>
  )
}
