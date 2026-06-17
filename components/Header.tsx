.
-import Image from 'next/image'
import Link from 'next/link'
import logoMente from '../logo-mente-antenada-header.png'

const nav = [
  ['Tecnologia', '/categoria/tecnologia'],
  ['IA', '/categoria/ia'],
  ['Marketing', '/categoria/marketing-digital'],
  ['Ferramentas', '/categoria/ferramentas'],
  ['Curiosidades', '/categoria/curiosidades']
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyanx/10 bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src={logoMente}
            alt="Logo Mente Antenada"
            width={260}
            height={90}
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

<div className="flex shrink-0 items-center gap-2">
  <Link
    href="/#newsletter"
    className="btn-primary whitespace-nowrap px-4 py-3 text-sm font-bold sm:px-5"
  >
    <span className="sm:hidden">Newsletter</span>
    <span className="hidden sm:inline">Inscrever-se</span>
  </Link>

  <Link
    href="/admin"
    className="btn-ghost hidden whitespace-nowrap px-4 py-3 text-sm font-bold sm:inline-flex"
  >
    Admin
  </Link>
</div>
      </div>
    </header>
  )
}
