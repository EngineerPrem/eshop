import React from 'react'
import SidebarGrid from '@/components/SidebarGrid'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <h1 className="text-3xl font-bold text-center pt-10 text-black dark:text-white">Dashboard</h1>
      <SidebarGrid />
    </main>
  )
}