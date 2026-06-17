'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Category } from '@/lib/types'

export default function CategoryManager({ categories }: { categories: Category[] }) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  async function add(e: React.FormEvent) {
    e.preventDefault()
    await fetch('/api/categories', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, slug, description }) })
    setName(''); setSlug(''); setDescription(''); router.refresh()
  }
  async function del(id: number) {
    if (!confirm('Excluir categoria?')) return
    await fetch(`/api/categories/${id}`, { method: 'DELETE' })
    router.refresh()
  }
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
      <form onSubmit={add} className="glass rounded-3xl p-6 space-y-4"><h2 className="font-display text-xl font-bold">Nova categoria</h2><input className="input-dark" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required /><input className="input-dark" placeholder="slug" value={slug} onChange={e => setSlug(e.target.value)} required /><textarea className="input-dark" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} /><button className="btn-primary">Salvar</button></form>
      <div className="glass rounded-3xl p-6"><h2 className="font-display text-xl font-bold">Categorias</h2><div className="mt-4 space-y-3">{categories.map(cat => <div key={cat.id} className="flex items-center justify-between rounded-xl bg-white/5 p-3"><div><p className="font-bold">{cat.name}</p><p className="text-sm text-slate-400">/{cat.slug}</p></div><button onClick={() => del(cat.id)} className="text-red-300">Excluir</button></div>)}</div></div>
    </div>
  )
}
