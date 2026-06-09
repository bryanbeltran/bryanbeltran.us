import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Analytics } from '@vercel/analytics/next'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata, Viewport } from 'next'

const basePath = process.env.BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  icons: {
    icon: [
      {
        url: `${basePath}/static/favicons/favicon-32x32.png`,
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: `${basePath}/static/favicons/favicon-16x16.png`,
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: `${basePath}/static/favicons/apple-touch-icon.png`,
    other: [
      {
        rel: 'mask-icon',
        url: `${basePath}/static/favicons/safari-pinned-tab.svg`,
        color: '#5bbad5',
      },
    ],
  },
  manifest: `${basePath}/static/favicons/site.webmanifest`,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
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
  other: {
    'msapplication-TileColor': '#000000',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteMetadata.language} className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground pl-[calc(100vw-100%)] antialiased">
        <ThemeProviders>
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header />
              <main className="mb-auto">{children}</main>
            </SearchProvider>
            <Footer />
          </SectionContainer>
        </ThemeProviders>
        <Analytics />
      </body>
    </html>
  )
}
