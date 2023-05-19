import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}
export function Title({ children }: TitleProps) {
  return (
    <h1 className="font-sans text-5xl font-bold leading-tight text-gray-50">
      {children}
    </h1>
  )
}
