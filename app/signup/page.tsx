'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SignupPage() {
  const [age, setAge] = useState<number | ''>('')

  useEffect(() => {
    const dobInput = document.getElementById('dob') as HTMLInputElement
    dobInput?.addEventListener('change', () => {
      const dateOfBirth = new Date(dobInput.value)
      const today = new Date()
      let calculatedAge = today.getFullYear() - dateOfBirth.getFullYear()
      const m = today.getMonth() - dateOfBirth.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) {
        calculatedAge--
      }
      setAge(calculatedAge)
    })
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      <main className="flex justify-center items-center p-6">
        <form
          action="/api/signup"
          method="POST"
          className="w-full max-w-md p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg space-y-4"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

          <InputField label="Name" name="name" type="text" placeholder="Enter your name" required />
          <InputField label="Phone Number" name="phoneNumber" type="text" placeholder="Enter your phone number" required />
          <InputField label="Date of Birth" name="dateOfBirth" type="date" id="dob" required />
          <InputField label="Email" name="email" type="email" placeholder="Enter your email" required />
          <InputField label="Password" name="password" type="password" placeholder="Enter your password" required />
          <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm your password" required />

          {/* Disable button if age < 18 */}
          <Button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
            disabled={age !== '' && age < 18}
          >
            Sign Up
          </Button>

          <div className="mt-4 text-center">
            <Link href="/login" className="text-sm text-blue-600 hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}

function InputField({ label, name, type, placeholder, required = false, id }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        id={id}
        className="w-full p-3 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
      />
    </div>
  )
}
