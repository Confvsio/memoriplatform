import { getDictionary } from '../../../../lib/dictionary'

export default async function Dashboard({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">{dict.dashboard.welcome}</h1>
      <p>{dict.dashboard.description}</p>
    </div>
  )
}