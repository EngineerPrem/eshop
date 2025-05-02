// app/dashboard/admin/page.tsx
'use client'

import { ShieldCheck, DollarSign, Users, PackageCheck } from 'lucide-react'

const widgets = [
  {
    title: 'Total Revenue',
    value: '$12,345',
    icon: <DollarSign className="text-green-500" size={32} />,
  },
  {
    title: 'Total Orders',
    value: '1,024',
    icon: <PackageCheck className="text-blue-500" size={32} />,
  },
  {
    title: 'Pending Orders',
    value: '56',
    icon: <ShieldCheck className="text-yellow-500" size={32} />,
  },
  {
    title: 'Total Users',
    value: '734',
    icon: <Users className="text-purple-500" size={32} />,
  },
]

export default function AdminDashboard() {
  return (
    <main className="p-6 text-black dark:text-white bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {widgets.map((w, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4">
              {w.icon}
              <div>
                <h3 className="text-sm text-gray-500 dark:text-gray-300">{w.title}</h3>
                <p className="text-xl font-semibold">{w.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
