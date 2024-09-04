import { getDictionary } from '../../lib/dictionary'

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{dict.welcome}</h1>
    </main>
  )
}