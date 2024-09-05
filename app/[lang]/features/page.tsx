"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getDictionary } from '../../../lib/dictionary'
import { Dictionary } from '../../../types/dictionary'

export default function FeaturesPage({ params: { lang } }: { params: { lang: string } }) {
  const [dict, setDict] = useState<Dictionary | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    getDictionary(lang).then(setDict)
  }, [lang])

  if (!dict) return null // or a loading spinner

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="animated-blob w-64 h-64 rounded-full absolute"
             style={{
               background: `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.1)`,
               left: `${Math.random()*100}%`,
               top: `${Math.random()*100}%`,
               animation: `blob-animation ${20 + i * 2}s infinite alternate`,
             }}
        ></div>
      ))}

      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <Link href={`/${lang}`} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          memori.
        </Link>
        <div className="flex items-center">
          <Link href="/signup" className="custom-button text-white px-6 py-2 rounded-full mr-4">
            {dict.nav.signup}
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 right-0 left-0 bg-gray-900 z-20">
          <Link href={`/${lang}#features`} className="block py-2 px-4 text-sm hover:bg-gray-800">{dict.nav.features}</Link>
          <Link href={`/${lang}#pricing`} className="block py-2 px-4 text-sm hover:bg-gray-800">{dict.nav.pricing}</Link>
        </div>
      )}

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
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {dict.featuresPage.free}
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {dict.featuresPage.premium}
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {dict.featuresPage.family}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {dict.featuresPage.features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-900 bg-opacity-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{feature.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    {typeof feature.free === 'boolean' ? (
                      feature.free ? (
                        <svg className="h-6 w-6 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )
                  ) : (
                    <span className="text-gray-300">{feature.free}</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  {feature.premium ? (
                    <svg className="h-6 w-6 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  {feature.family ? (
                    <svg className="h-6 w-6 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
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