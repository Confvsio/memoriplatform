'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard() {
  const { user, signOut } = useAuth()

  return (
    <div>
      <h1>Welcome to the Dashboard, {user?.email}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}