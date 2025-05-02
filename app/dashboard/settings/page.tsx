// app/settings/page.tsx
import ThemeToggle from '@/components/Themetoggle'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">⚙ Settings</h1>
      <ThemeToggle />
      <Link
        href="/"
        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
      >
        Back to Home
      </Link>
    </main>
  )
}
