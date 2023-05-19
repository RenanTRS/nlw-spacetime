'use client'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  onclick?: () => void
}

export function Button({
  children,
  asChild = false,
  onclick,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      {...props}
      onClick={onclick}
      className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black ring-green-500 ring-offset-2 ring-offset-gray-900 transition-colors hover:bg-green-600 focus:outline-none focus:ring-2"
    >
      {children}
    </Component>
  )
}
