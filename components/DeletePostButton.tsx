'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DeletePostButton({ id }: { id: number }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  async function del() {
    if (!confirm('Excluir este post?')) return
    setLoading(true)
    await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    router.refresh()
  }
  return <button onClick={del} disabled={loading} className="text-red-300 hover:text-red-200">{loading ? 'Excluindo...' : 'Excluir'}</button>
}
