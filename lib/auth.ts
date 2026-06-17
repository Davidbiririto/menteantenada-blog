import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function getCurrentUser() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function requireAdmin() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user?.email) redirect('/login')

  const { data: admin } = await supabase
    .from('admins')
    .select('email')
    .eq('email', user.email)
    .maybeSingle()

  if (!admin) redirect('/')
  return user
}

export async function isAdminRequest() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user?.email) return false
  const { data: admin } = await supabase
    .from('admins')
    .select('email')
    .eq('email', user.email)
    .maybeSingle()
  return Boolean(admin)
}
