import Link from 'next/link'

export default function AdminNav() {
  return (
    <nav className="border-b border-cyanx/10 bg-[#06101e]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/admin" className="font-display text-xl font-extrabold">Admin Mente Antenada</Link>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <Link href="/admin/posts" className="hover:text-cyanx">Posts</Link>
          <Link href="/admin/categorias" className="hover:text-cyanx">Categorias</Link>
          <Link href="/admin/inscritos" className="hover:text-cyanx">Inscritos</Link>
          <Link href="/" className="hover:text-cyanx">Ver site</Link>
          <form action="/api/auth/logout" method="POST"><button className="hover:text-cyanx">Sair</button></form>
        </div>
      </div>
    </nav>
  )
}
