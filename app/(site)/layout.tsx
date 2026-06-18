import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
return ( <div className="site-shell min-h-screen bg-ink text-white transition-colors duration-300"> <Header />
{children} <Footer /> </div>
)
}
