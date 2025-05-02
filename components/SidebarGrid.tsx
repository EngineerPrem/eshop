// // components/SidebarGrid.tsx
// 'use client'

// import Link from 'next/link'
// import { Home, Package, User, Settings, LogOut, Bell, BarChart2 } from 'lucide-react'

// const navItems = [
//   {
//     href: '/',
//     label: 'Main Home',
//     icon: <Home className="w-8 h-8 text-blue-500" />,
//   },
//   {
//     href: '/dashboard/orders',
//     label: 'Orders',
//     icon: <Package className="w-8 h-8 text-blue-500" />,
//   },
//   {
//     href: '/dashboard/profile',
//     label: 'Profile',
//     icon: <User className="w-8 h-8 text-blue-500" />,
//   },
//   {
//     href: '/dashboard/settings',
//     label: 'Settings',
//     icon: <Settings className="w-8 h-8 text-blue-500" />,
//   },
//   {
//     href: '/',
//     label: 'Logout',
//     icon: <LogOut className="w-8 h-8 text-blue-500" />,
//   },
// ]

// export default function SidebarGrid() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {navItems.map((item) => (
//         <Link
//           key={item.href}
//           href={item.href}
//           className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
//         >
//           <div className="flex flex-col items-center text-center space-y-2">
//             {item.icon}
//             <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">{item.label}</h3>
//           </div>
//         </Link>
//       ))}

//       {/* Extra Cards for Future */}
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-2 hover:shadow-xl hover:scale-[1.02] transition">
//         <BarChart2 className="w-8 h-8 text-blue-500" />
//         <h3 className="text-lg font-semibold">Analytics</h3>
//         <p className="text-sm text-gray-500 dark:text-gray-400">Track sales & stats</p>
//       </div>

//       <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-2 hover:shadow-xl hover:scale-[1.02] transition">
//         <Bell className="w-8 h-8 text-blue-500" />
//         <h3 className="text-lg font-semibold">Notifications</h3>
//         <p className="text-sm text-gray-500 dark:text-gray-400">Stay up-to-date</p>
//       </div>
//     </div>
//   )
// }


'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, Package, User, Settings, LogOut, Bell, BarChart2 } from 'lucide-react'

const navItems = [
  {
    href: '/',
    label: 'Main Home',
    icon: <Home className="w-8 h-8 text-blue-500" />,
  },
  {
    href: '/dashboard/orders',
    label: 'Orders',
    icon: <Package className="w-8 h-8 text-blue-500" />,
  },
  {
    href: '/dashboard/profile',
    label: 'Profile',
    icon: <User className="w-8 h-8 text-blue-500" />,
  },
  {
    href: '/dashboard/settings',
    label: 'Settings',
    icon: <Settings className="w-8 h-8 text-blue-500" />,
  },
]

export default function SidebarGrid() {
  const router = useRouter()

  const handleGoToLogin = () => {
    router.push('/login')
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
        >
          <div className="flex flex-col items-center text-center space-y-2">
            {item.icon}
            <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">{item.label}</h3>
          </div>
        </Link>
      ))}

      {/* Logout Button */}
      <button
        onClick={handleGoToLogin}
        className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 flex flex-col items-center text-center space-y-2"
      >
        <LogOut className="w-8 h-8 text-blue-500" />
        <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">Logout</h3>
      </button>

      {/* Extra Cards */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-2 hover:shadow-xl hover:scale-[1.02] transition">
        <BarChart2 className="w-8 h-8 text-blue-500" />
        <h3 className="text-lg font-semibold">Analytics</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Track sales & stats</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-2 hover:shadow-xl hover:scale-[1.02] transition">
        <Bell className="w-8 h-8 text-blue-500" />
        <h3 className="text-lg font-semibold">Notifications</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Stay up-to-date</p>
      </div>
    </div>
  )
}
