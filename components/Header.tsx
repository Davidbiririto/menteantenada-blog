import Image from 'next/image'
import Link from 'next/link'
import logoMente from '../logo-mente-antenada.png'

const nav = [
  ['Tecnologia', '/categoria/tecnologia'],
  ['IA', '/categoria/ia'],
  ['Marketing', '/categoria/marketing-digital'],
  ['Ferramentas', '/categoria/ferramentas'],
  ['Curiosidades', '/categoria/curiosidades']
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyanx/10 bg-ink/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src={logoMente}
            alt="Logo Mente Antenada"
            width={230}
            height={80}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-cyanx">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#newsletter" className="btn-primary px-4 py-2 text-sm">
            Inscrever-se
          </Link>
          <Link href="/admin" className="btn-ghost hidden px-4 py-2 text-sm sm:inline-flex">
            Admin
          </Link>
        </div>
      </div>
    </header>
  )
}
