import { getDictionary } from '../../lib/dictionary'
import Link from 'next/link'

export default async function LandingPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{dict.landing.welcome}</h1>
      <p className="mb-8">{dict.landing.description}</p>
      <div>
        <Link href={`/${lang}/dashboard`} className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
          {dict.landing.loginButton}
        </Link>
        <Link href={`/${lang}/dashboard`} className="bg-green-500 text-white px-4 py-2 rounded">
          {dict.landing.signupButton}
        </Link>
      </div>
    </div>
  )
}