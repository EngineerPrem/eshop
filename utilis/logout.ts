'use client'

import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'

export const useLogout = () => {
  const router = useRouter()
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()               // Clear the login state
    router.push('/login')   // Redirect to login page
  }

  return handleLogout
}
