// app/[lang]/features/page.tsx

import { getDictionary } from '../../../lib/dictionary'
import Link from 'next/link'

export default async function FeaturesPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href={`/${lang}`} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          memori.
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          {dict.featuresPage.title}
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-700 bg-opacity-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {dict.featuresPage.feature}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {dict.featuresPage.free}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {dict.featuresPage.premium}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {dict.featuresPage.family}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {dict.featuresPage.features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-900 bg-opacity-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{feature.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{feature.free ? '✓' : '✗'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{feature.premium ? '✓' : '✗'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{feature.family ? '✓' : '✗'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="py-10">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          © 2024 memori. All rights reserved.
        </div>
      </footer>
    </div>
  )
}