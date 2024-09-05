// app/[lang]/page.tsx

import { getDictionary } from '../../lib/dictionary'
import Link from 'next/link'
import Image from 'next/image'

export default async function LandingPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          memori.
        </h1>
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="hover:text-blue-400 transition">{dict.nav.features}</Link>
          <Link href="#pricing" className="hover:text-blue-400 transition">{dict.nav.pricing}</Link>
          <Link href="#about" className="hover:text-blue-400 transition">{dict.nav.about}</Link>
          <Link href="/login" className="hover:text-blue-400 transition">{dict.nav.login}</Link>
        </nav>
        <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition transform hover:scale-105">
          {dict.nav.signup}
        </Link>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          {dict.hero.title}
        </h2>
        <p className="text-xl mb-8 text-blue-200">{dict.hero.subtitle}</p>
        <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition transform hover:scale-105 inline-flex items-center">
          {dict.hero.cta}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {dict.features.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {dict.features.items.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold mb-3 text-blue-400">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {dict.pricing.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {dict.pricing.plans.map((plan, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-8 rounded-lg text-center shadow-lg backdrop-filter backdrop-blur-lg transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold mb-4 text-blue-400">{plan.name}</h4>
                <p className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  {plan.price}
                </p>
                <ul className="mb-6 text-left">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="mb-2 flex items-center">
                      <svg className="h-5 w-5 mr-2 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition transform hover:scale-105 inline-block">
                  {dict.pricing.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {dict.cta.title}
          </h3>
          <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold inline-block transition transform hover:scale-105">
            {dict.cta.button}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 bg-opacity-50 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                memori.
              </h1>
            </div>
            <nav className="flex space-x-6">
              <Link href="#features" className="hover:text-blue-400 transition">{dict.nav.features}</Link>
              <Link href="#pricing" className="hover:text-blue-400 transition">{dict.nav.pricing}</Link>
              <Link href="#about" className="hover:text-blue-400 transition">{dict.nav.about}</Link>
              <Link href="/terms" className="hover:text-blue-400 transition">{dict.footer.terms}</Link>
              <Link href="/privacy" className="hover:text-blue-400 transition">{dict.footer.privacy}</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}