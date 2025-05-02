'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/useAuthStore'

export default function SessionInitializer() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const setUser = useAuthStore((state) => state.setUser)

  useEffect(() => {
    if (isLoggedIn) {
      fetch('/api/me')
        .then((res) => res.json())
        .then((data) => {
          if (data?.user) {
            setUser(data.user)
          }
        })
        .catch((err) => console.error('Failed to fetch user', err))
    }
  }, [isLoggedIn, setUser])

  return null // this component doesn't render anything
}
