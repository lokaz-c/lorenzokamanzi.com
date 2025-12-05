import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './styles/themes.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lorenzo Kamanzi | Software Engineer & Co-Founder',
  description: 'Lorenzo Kamanzi - Computer Science & Finance at Rutgers University. Co-Founder at Creo. Building scalable AI systems and full-stack applications.',
  keywords: ['Lorenzo Kamanzi', 'Software Engineer', 'Full-Stack Developer', 'AI SaaS', 'Rutgers', 'Computer Science', 'Finance', 'Creo'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} data-theme="tech">
      <body>
        {children}
      </body>
    </html>
  )
}
