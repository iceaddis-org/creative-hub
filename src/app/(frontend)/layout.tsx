import { Metadata as M } from 'next'
import { GoogleAnalytics as A } from '@next/third-parties/google'
import { cn as C } from '@/utilities/ui'
import { GeistMono as $ } from 'geist/font/mono'
import { GeistSans as J } from 'geist/font/sans'
import R from 'react'
import l from 'next/font/local'
import './globals.css'
import { getServerSideURL as U } from '@/utilities/getURL'
import { mergeOpenGraph as O } from '@/utilities/mergeOpenGraph'
import { mergeTwitterCard as T } from '@/utilities/mergeTwitterCard'
import S from 'next/script'
import { organizationSchema as L } from '@/components/Schema'
import P from '@/components/ui/SplashScreen'
import { Providers } from '@/providers'
import { Footer } from '@/components/layout'

const _ = l({ src: '../../../public/fonts/Supreme-Variable.ttf', variable: '--font-display' })
const k = l({ src: '../../../public/fonts/Poppins-Variable.ttf', variable: '--font-sans' })
export default async function H({ children: N }: { children: R.ReactNode }) {
  const d = new Date().getFullYear()
  return (
    <html className={C(J.variable, $.variable)} lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-default.ico" rel="icon" sizes="48x48" type="image/x-icon" />
      </head>
      <body
        className={`${_.variable} ${k.variable} bg-background font-sans leading-6 text-foreground antialiased`}
      >
        <Providers>
          <P>
            {N}
            <Footer serverYear={d} />
          </P>
        </Providers>
        <S id="organization-schema" type="application/ld+json" strategy="lazyOnload">
          {JSON.stringify(L())}
        </S>
        <A gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  )
}
export const metadata: M = {
  metadataBase: new URL(U()),
  generator: 'React.js | Next.js | Payload',
  applicationName: 'Creative Hub Ethiopia',
  title: {
    template: '%s | Creative Hub Ethiopia',
    default: 'Creative Hub Ethiopia | Design, Innovation & SME Support in Addis Ababa',
  },
  description:
    'Creative Hub Ethiopia empowers designers, SMEs, and innovators with global design & industrial training, state-of-the-art tools, and partnerships with industries and government. Join us to transform your ideas.',
  keywords: [
    'Creative Hub Ethiopia',
    'innovation Ethiopia',
    'SME support Addis Ababa',
    'design training Ethiopia',
    'government partnerships Ethiopia',
    'prototyping resources',
    'creative entrepreneurship Ethiopia',
  ],
  category: 'Innovation, Education, Business, Design',
  creator: 'Ras-Tech Team',
  openGraph: O(),
  twitter: T(),
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.ico', type: 'image/x-icon', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: `${U()}/manifest.json`,
}
