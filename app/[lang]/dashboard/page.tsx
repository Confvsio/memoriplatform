'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { getDictionary } from '@/lib/dictionary'

export default function Dashboard({ params: { lang } }: { params: { lang: string } }) {
  const [user, setUser] = useState<any>(null)
  const [dict, setDict] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    getDictionary(lang).then(setDict)
  }, [lang])

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      } else {
        router.push(`/${lang}/auth`)
      }
    }
    getUser()
  }, [router, lang])

  if (!dict || !user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{dict.dashboard.welcome}</h1>
      <p>{dict.dashboard.description}</p>
      <button
        onClick={() => supabase.auth.signOut()}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        {dict.dashboard.signOut}
      </button>
    </div>
  )
}