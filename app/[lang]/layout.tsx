// app/[lang]/layout.tsx

import '../globals.css'
import { Metadata } from 'next'
import { getDictionary } from '../../lib/dictionary'

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const dict = await getDictionary(lang)
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    icons: {
      icon: '/favicon.ico',
    },
  }
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
      <body>{children}</body>
    </html>
  )
}