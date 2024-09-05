import { getDictionary } from '../../../lib/dictionary'
import Link from 'next/link'
import { Dictionary } from '../../../types/dictionary'

export default async function FeaturesPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      <div className="animated-blob"></div>
      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <Link href={`/${lang}`} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          memori.
        </Link>
        <div className="flex space-x-4">
          <Link href="/login" className="text-white hover:text-blue-300 transition">
            {dict.nav.login}
          </Link>
          <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out">
            {dict.nav.signup}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 relative z-10">
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    {feature.free ? <span className="text-green-500 text-2xl">✓</span> : <span className="text-red-500 text-2xl">✗</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    {feature.premium ? <span className="text-green-500 text-2xl">✓</span> : <span className="text-red-500 text-2xl">✗</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    {feature.family ? <span className="text-green-500 text-2xl">✓</span> : <span className="text-red-500 text-2xl">✗</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="bg-gray-900 py-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">memori.</h1>
            </div>
            <nav className="flex flex-wrap justify-center space-x-6">
              <Link href={`/${lang}#features`} className="text-gray-400 hover:text-white transition">{dict.nav.features}</Link>
              <Link href={`/${lang}#pricing`} className="text-gray-400 hover:text-white transition">{dict.nav.pricing}</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition">{dict.footer.terms}</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition">{dict.footer.privacy}</Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2024 memori. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}