import { cn } from '@/utilis/cn'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'destructive'; // ✅ Added 'destructive'
}

export const Button = ({ children, className, variant = 'default', ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        'px-4 py-2 rounded-lg text-sm font-semibold transition',
        variant === 'default' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'outline' && 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700',
        className
      )}
    >
      {children}
    </button>
  )
}
