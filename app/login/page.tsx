'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuthStore } from '@/store/useAuthStore'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const router = useRouter();
  const { login } = useAuthStore();

  const handleLogin = async () => {
    setError('');
    setSuccess('');

    // Check if fields are empty
    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess('Login successful!');
      setIsLoggedIn(true);
      setUserId(data.user.email);
      login(data.user); // update Zustand store
      setTimeout(() => {
        router.push('/'); // redirect to homepage
      }, 1000);
    } else {
      setError(data.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Login</h1>

        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-1 border rounded-lg bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-1 border rounded-lg bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>

        <Button onClick={handleLogin} className="w-full py-3 mt-4 text-white bg-blue-600 hover:bg-blue-500 rounded-lg">
          Login
        </Button>

        <div className="mt-4 text-center">
          <Link href="/signup" className="text-sm text-blue-600 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
