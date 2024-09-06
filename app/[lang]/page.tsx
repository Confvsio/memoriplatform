"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getDictionary } from '../../lib/dictionary'
import { Dictionary } from '../../types/dictionary'
import { useAuth } from '@/contexts/AuthContext'

export default function LandingPage({ params: { lang } }: { params: { lang: string } }) {
  const [dict, setDict] = useState<Dictionary | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    getDictionary(lang).then(setDict)
  }, [lang])

  if (!dict) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      <div className="animated-blob"></div>
      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">memori.</h1>
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition">{dict.nav.features}</Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition">{dict.nav.pricing}</Link>
        </nav>
        <Link href={user ? `/${lang}/dashboard` : `/${lang}/auth`} className="hidden md:inline-block custom-button text-white px-6 py-2 rounded-full">
          {user ? dict.nav.dashboard : dict.nav.signup}
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div className={`md:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-95 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="#features" className="text-white text-2xl mb-4" onClick={() => setIsMenuOpen(false)}>{dict.nav.features}</Link>
          <Link href="#pricing" className="text-white text-2xl mb-4" onClick={() => setIsMenuOpen(false)}>{dict.nav.pricing}</Link>
          <Link href={user ? `/${lang}/dashboard` : `/${lang}/auth`} className="custom-button text-white px-6 py-2 rounded-full text-2xl" onClick={() => setIsMenuOpen(false)}>
            {user ? dict.nav.dashboard : dict.nav.signup}
          </Link>
        </div>
      </div>

      <section className="container mx-auto px-6 py-20 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {dict.hero.title}
        </h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">{dict.hero.subtitle}</p>
        <Link href={`/${lang}/auth`} className="custom-button text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center">
          {dict.hero.cta}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </section>

      <section id="features" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {dict.features.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {dict.features.items.map((feature, index) => (
              <div key={index} className="feature-box bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg relative overflow-hidden">
                <div className="border-animation absolute inset-0"></div>
                <h4 className="text-xl font-semibold mb-3 text-blue-400">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {dict.pricing.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {dict.pricing.plans.map((plan, index) => (
              <div key={index} className="feature-box bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center shadow-lg backdrop-filter backdrop-blur-lg relative overflow-hidden">
                <div className="border-animation absolute inset-0"></div>
                <h4 className="text-2xl font-semibold mb-4 text-blue-400">{plan.name}</h4>
                <p className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {plan.price}
                </p>
                <ul className="mb-6 text-left">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="mb-2 flex items-center text-gray-300">
                      <svg className="h-5 w-5 mr-2 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/${lang}/auth`} className="custom-button text-white px-6 py-2 rounded-full inline-block">
                  {dict.pricing.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`/${lang}/features`} className="custom-button text-white px-8 py-3 rounded-full inline-block">
              {dict.pricing.viewFeatures}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 text-center relative z-10">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {dict.cta.title}
          </h3>
          <Link href={`/${lang}/auth`} className="custom-button text-white px-8 py-3 rounded-full text-lg font-semibold inline-block">
            {dict.cta.button}
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 py-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">memori.</h1>
            </div>
            <nav className="flex flex-wrap justify-center space-x-6">
              <Link href="#features" className="text-gray-400 hover:text-white transition">{dict.nav.features}</Link>
              <Link href="#pricing" className="text-gray-400 hover:text-white transition">{dict.nav.pricing}</Link>
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