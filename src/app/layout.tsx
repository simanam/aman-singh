import type { Metadata } from 'next'
import { Bitter, Inter } from 'next/font/google'
import './globals.css'

const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Amandeep Singh | Enterprise AI Systems Designer',
  description: 'Enterprise AI Systems Designer specializing in Data Governance, Compliance, and Security at Scale. Built production AI platforms serving 30,000+ users.',
  keywords: ['AI', 'Enterprise Systems', 'Data Governance', 'Machine Learning', 'Product Management', 'USPS', 'AI Platform'],
  authors: [{ name: 'Amandeep Singh' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Amandeep Singh | Enterprise AI Systems Designer',
    description: 'Enterprise AI Systems Designer specializing in Data Governance, Compliance, and Security at Scale.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bitter.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
