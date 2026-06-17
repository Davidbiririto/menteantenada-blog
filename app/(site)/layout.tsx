import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
