'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError('Login inválido. Verifique e-mail e senha.')
    else router.push('/admin')
    setLoading(false)
  }

  return (
    <form onSubmit={onSubmit} className="glass mx-auto max-w-md rounded-3xl p-8">
      <h1 className="font-display text-3xl font-extrabold">Acesso Admin</h1>
      <p className="mt-2 text-sm text-slate-400">Entre com o e-mail administrador cadastrado no Supabase.</p>
      <div className="mt-6 space-y-4">
        <input className="input-dark" type="email" required placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="input-dark" type="password" required placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <button disabled={loading} className="btn-primary w-full">{loading ? 'Entrando...' : 'Entrar'}</button>
      </div>
    </form>
  )
}
