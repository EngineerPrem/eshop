// /store/useAuthStore.ts
// import { create } from 'zustand'

// type User = {
//   id: string
//   name: string
//   email: string
//   phoneNumber: string
//   dateOfBirth: string
// }

// interface AuthState {
//   isLoggedIn: boolean
//   userId: string | null
//   user: User | null
//   setUser: (user: User) => void
//   login: (user: User) => void
//   logout: () => void
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   isLoggedIn: false,
//   userId: null,
//   user: null,
//   setUser: (user) =>
//     set({ user, userId: user?.id ?? null, isLoggedIn: !!user }),
//   login: (user) =>
//     set({ user, userId: user?.id ?? null, isLoggedIn: true }),
//   logout: () => set({ user: null, userId: null, isLoggedIn: false }),
// }))

// store/authStore.ts
import { create } from 'zustand'

interface User {
  email: string
  name: string
  phoneNumber: string
  dateOfBirth: string
}

interface AuthState {
  isLoggedIn: boolean
  user: User | null
  login: (user: User) => void
  logout: () => void
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>((set) => {
  // Check for sessionStorage (browser only)
  let storedUser: User | null = null
  let loggedIn = false

  if (typeof window !== 'undefined') {
    const userData = sessionStorage.getItem('user')
    const isLogged = sessionStorage.getItem('isLoggedIn') === 'true'

    if (userData && isLogged) {
      storedUser = JSON.parse(userData)
      loggedIn = true
    }
  }

  return {
    isLoggedIn: loggedIn,
    user: storedUser,

    login: (user: User) => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('isLoggedIn', 'true')
        sessionStorage.setItem('user', JSON.stringify(user))
      }
      set({ isLoggedIn: true, user })
    },

    logout: () => {
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('isLoggedIn')
        sessionStorage.removeItem('user')
      }
      set({ isLoggedIn: false, user: null })
    },

    setUser: (user: User) => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('user', JSON.stringify(user))
      }
      set({ user })
    },
  }
})






// store/useAuthStore.ts
// import { create } from 'zustand';

// type User = {
//   id: string
//   name: string
//   email: string
//   phoneNumber: string
//   dateOfBirth: string
// }

// type AuthState = {
//   user: User | null
//   isLoggedIn: boolean;
//   login: (user: User) => void
//   logout: () => void
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   isLoggedIn: false,
//   login: (user) => set({ user }),
//   logout: () => set({ user: null }),
// }))
