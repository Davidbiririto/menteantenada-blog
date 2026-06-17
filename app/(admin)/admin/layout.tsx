import AdminNav from '@/components/AdminNav'
import { requireAdmin } from '@/lib/auth'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin()
  return <div className="min-h-screen bg-ink text-white"><AdminNav /><main className="mx-auto max-w-7xl px-4 py-8">{children}</main></div>
}
