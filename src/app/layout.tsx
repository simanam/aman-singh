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

const basePath = process.env.NODE_ENV === 'production' ? '/aman-singh' : ''
const siteUrl = 'https://simanam.github.io/aman-singh'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aman Singh | Enterprise AI Systems Designer',
    template: '%s | Aman Singh',
  },
  description: 'Enterprise AI Systems Designer specializing in Data Governance, Compliance, and Security at Scale. Building production AI platforms serving 30,000+ users at USPS. Founder of Logixtecs Solutions LLC.',
  keywords: [
    'Aman Singh',
    'Enterprise AI',
    'AI Systems Designer',
    'Data Governance',
    'AI Architecture',
    'Machine Learning',
    'USPS AI Platform',
    'Logixtecs',
    'AI Product Manager',
    'RAG Systems',
    'LangChain',
    'Azure OpenAI',
    'Compliance AI',
    'Enterprise Security',
  ],
  authors: [{ name: 'Aman Singh', url: siteUrl }],
  creator: 'Aman Singh',
  publisher: 'Aman Singh',
  icons: {
    icon: `${basePath}/favicon.svg`,
    apple: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: 'Aman Singh | Enterprise AI Systems Designer',
    description: 'Building production AI platforms with data governance, compliance, and security at scale. 30,000+ users served.',
    url: siteUrl,
    siteName: 'Aman Singh Portfolio',
    images: [
      {
        url: `${basePath}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Aman Singh - Enterprise AI Systems Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Singh | Enterprise AI Systems Designer',
    description: 'Building production AI platforms with data governance, compliance, and security at scale.',
    images: [`${basePath}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
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
