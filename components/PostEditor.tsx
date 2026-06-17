'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Category, Post } from '@/lib/types'

type Props = { post?: Post | null, categories: Category[] }

export default function PostEditor({ post, categories }: Props) {
  const router = useRouter()
  const [form, setForm] = useState({
    title: post?.title || '', slug: post?.slug || '', excerpt: post?.excerpt || '', content: post?.content || '',
    featured_image_url: post?.featured_image_url || '', category_id: post?.category_id ? String(post.category_id) : '',
    status: post?.status || 'draft'
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  function set(name: string, value: string) { setForm(prev => ({ ...prev, [name]: value })) }

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setSaving(true); setError('')
    const payload = { ...form, category_id: form.category_id ? Number(form.category_id) : null }
    const url = post?.id ? `/api/posts/${post.id}` : '/api/posts'
    const res = await fetch(url, { method: post?.id ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) { setError(data.error || 'Erro ao salvar'); setSaving(false); return }
    router.push('/admin/posts'); router.refresh()
  }

  return (
    <form onSubmit={submit} className="glass mt-6 rounded-3xl p-6 space-y-5">
      <label className="block"><span className="text-sm text-slate-300">Título</span><input className="input-dark mt-2" value={form.title} onChange={e => set('title', e.target.value)} required /></label>
      <label className="block"><span className="text-sm text-slate-300">Slug</span><input className="input-dark mt-2" value={form.slug} onChange={e => set('slug', e.target.value)} required /></label>
      <label className="block"><span className="text-sm text-slate-300">Resumo</span><textarea className="input-dark mt-2 min-h-24" value={form.excerpt} onChange={e => set('excerpt', e.target.value)} /></label>
      <label className="block"><span className="text-sm text-slate-300">URL da imagem principal</span><input className="input-dark mt-2" value={form.featured_image_url} onChange={e => set('featured_image_url', e.target.value)} /></label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block"><span className="text-sm text-slate-300">Categoria</span><select className="input-dark mt-2" value={form.category_id} onChange={e => set('category_id', e.target.value)}><option value="">Sem categoria</option>{categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
        <label className="block"><span className="text-sm text-slate-300">Status</span><select className="input-dark mt-2" value={form.status} onChange={e => set('status', e.target.value)}><option value="draft">Rascunho</option><option value="published">Publicado</option></select></label>
      </div>
      <label className="block"><span className="text-sm text-slate-300">Conteúdo do artigo em HTML</span><textarea className="input-dark mt-2 min-h-[420px] font-mono text-sm" value={form.content} onChange={e => set('content', e.target.value)} /></label>
      {error ? <p className="text-red-300">{error}</p> : null}
      <div className="flex gap-3"><button className="btn-primary" disabled={saving}>{saving ? 'Salvando...' : 'Salvar artigo'}</button><button type="button" className="btn-ghost" onClick={() => router.back()}>Cancelar</button></div>
    </form>
  )
}
