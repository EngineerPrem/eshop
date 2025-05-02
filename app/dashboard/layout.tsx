// app/dashboard/layout.tsx
'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { SessionProvider } from 'next-auth/react'
import {
  FaHome, FaBox, FaUser, FaThList, FaCog, FaSignOutAlt
} from 'react-icons/fa'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/dashboard', icon: <FaHome /> },
    { label: 'Orders', href: '/dashboard/orders', icon: <FaBox /> },
    { label: 'Profile', href: '/dashboard/profile', icon: <FaUser /> },
    { label: 'Categories', href: '/dashboard/categories', icon: <FaThList /> },
    { label: 'Settings', href: '/dashboard/settings', icon: <FaCog /> },
  ]

  return (
    <SessionProvider>
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="w-64 p-6 bg-white dark:bg-gray-800 shadow-md"
      >
        <div className="text-2xl font-bold text-blue-600 mb-8">ShopX Dashboard</div>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-2 p-2 rounded-md transition ${
                pathname === item.href
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <button
          onClick={() => alert('Logout clicked')}
          className="mt-8 flex items-center space-x-2 text-red-500 hover:text-red-700"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
    </SessionProvider>
  )
}
