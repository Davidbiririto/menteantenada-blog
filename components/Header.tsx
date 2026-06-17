import Link from 'next/link'

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyanx/15 text-cyanx ring-1 ring-cyanx/30">⌁</span>
          <span className="font-display text-xl font-extrabold tracking-tight">Mente <span className="text-cyanx">Antenada</span></span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-cyanx">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#newsletter" className="btn-primary px-4 py-2 text-sm">Inscrever-se</Link>
          <Link href="/admin" className="btn-ghost hidden px-4 py-2 text-sm sm:inline-flex">Admin</Link>
        </div>
      </div>
    </header>
  )
}
