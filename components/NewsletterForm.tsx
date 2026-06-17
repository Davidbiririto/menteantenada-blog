'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    })
    const data = await res.json().catch(() => ({}))
    setMessage(res.ok ? 'Inscrição realizada com sucesso!' : data.error || 'Não foi possível cadastrar agora.')
    if (res.ok) { setName(''); setEmail('') }
    setLoading(false)
  }

  return (
    <section id="newsletter" className="mx-auto my-16 max-w-5xl rounded-3xl border border-cyanx/20 bg-gradient-to-br from-cyanx/12 to-blue-900/20 p-8 text-center shadow-glow md:p-12">
      <h2 className="font-display text-3xl font-extrabold md:text-4xl">Não perca nenhuma novidade</h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-300">Receba conteúdos sobre tecnologia, inteligência artificial, marketing digital, ferramentas e tendências para evoluir no mundo digital.</p>
      <form onSubmit={onSubmit} className="mx-auto mt-7 grid max-w-2xl gap-3 md:grid-cols-[1fr_1fr_auto]">
        <input className="input-dark" placeholder="Nome (opcional)" value={name} onChange={e => setName(e.target.value)} />
        <input className="input-dark" type="email" required placeholder="Seu e-mail" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="btn-primary" disabled={loading}>{loading ? 'Enviando...' : 'Quero receber'}</button>
      </form>
      {message ? <p className="mt-4 text-sm text-cyanx">{message}</p> : null}
    </section>
  )
}
