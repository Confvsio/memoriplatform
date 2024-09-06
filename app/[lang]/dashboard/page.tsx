'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard({ params: { lang } }: { params: { lang: string } }) {
  const { user, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push(`/${lang}`)
    }
  }, [user, router, lang])

  if (!user) return null

  const handleSignOut = async () => {
    await signOut()
    router.push(`/${lang}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to your dashboard, {user.email}</h1>
      <button
        onClick={handleSignOut}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Sign Out
      </button>
    </div>
  )
}