import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Mente Antenada | Tecnologia, IA e Marketing Digital',
  description: 'Conteúdos sobre tecnologia, inteligência artificial, marketing digital, ferramentas e curiosidades para evoluir no mundo digital.',
  openGraph: {
    title: 'Mente Antenada',
    description: 'Fique antenado com insights que importam.',
    type: 'website',
    locale: 'pt_BR'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-ink text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
