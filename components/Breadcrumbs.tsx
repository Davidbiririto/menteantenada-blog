import Link from 'next/link'

export default function Breadcrumbs({ items }: { items: { label: string, href?: string }[] }) {
  return (
    <nav className="mb-5 text-sm text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-cyanx">Início</Link></li>
        {items.map((item, idx) => (
          <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? <Link href={item.href} className="hover:text-cyanx">{item.label}</Link> : <span className="text-slate-300">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
