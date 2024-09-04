// app/[lang]/page.tsx

import { getDictionary } from '../../lib/dictionary'
import Link from 'next/link'

export default async function LandingPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold">memori.</h1>
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="hover:text-blue-300 transition">{dict.nav.features}</Link>
          <Link href="#pricing" className="hover:text-blue-300 transition">{dict.nav.pricing}</Link>
          <Link href="#about" className="hover:text-blue-300 transition">{dict.nav.about}</Link>
          <Link href="/login" className="hover:text-blue-300 transition">{dict.nav.login}</Link>
        </nav>
        <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition">
          {dict.nav.signup}
        </Link>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 text-center">
        <h2 className="text-6xl font-bold mb-4">{dict.hero.title}</h2>
        <p className="text-xl mb-8">{dict.hero.subtitle}</p>
        <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition">
          {dict.hero.cta}
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">{dict.features.title}</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {dict.features.items.map((feature, index) => (
              <div key={index} className="bg-purple-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-purple-900">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">{dict.pricing.title}</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {dict.pricing.plans.map((plan, index) => (
              <div key={index} className="bg-blue-800 p-8 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105">
                <h4 className="text-2xl font-semibold mb-4">{plan.name}</h4>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition">
                  {dict.pricing.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-20 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6">{dict.cta.title}</h3>
          <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold inline-block transition">
            {dict.cta.button}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold">memori.</h1>
            </div>
            <nav className="flex space-x-6">
              <Link href="#features" className="hover:text-blue-300 transition">{dict.nav.features}</Link>
              <Link href="#pricing" className="hover:text-blue-300 transition">{dict.nav.pricing}</Link>
              <Link href="#about" className="hover:text-blue-300 transition">{dict.nav.about}</Link>
              <Link href="/terms" className="hover:text-blue-300 transition">{dict.footer.terms}</Link>
              <Link href="/privacy" className="hover:text-blue-300 transition">{dict.footer.privacy}</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}