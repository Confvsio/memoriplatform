'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard({ params: { lang } }: { params: { lang: string } }) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push(`/${lang}`)
    }
  }, [user, router, lang])

  if (!user) return null

  return (
    <div>
      <h1>Welcome to your dashboard, {user.email}</h1>
      {/* Add more dashboard content here */}
    </div>
  )
}