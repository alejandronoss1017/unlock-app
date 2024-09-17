import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import { Providers } from '@/components/providers'

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Unlock App',
  description:
    'Get access to your lodgings in your favorites events, just with a click.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
