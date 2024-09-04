import '../globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'memori.',
  description: 'Your personal learning and productivity platform',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}