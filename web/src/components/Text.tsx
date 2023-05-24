import { ReactNode } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const textStyles = cva('font-sans text-gray-100', {
  variants: {
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
    leading: {
      relaxed: 'leading-relaxed',
      snug: 'leading-snug',
    },
  },
})

export interface TextProps extends VariantProps<typeof textStyles> {
  children: ReactNode
  className?: string
}

export function Text({
  children,
  size = 'lg',
  leading = 'relaxed',
  className,
}: TextProps) {
  return (
    <p className={`${textStyles({ size, leading })} ${className}`}>
      {children}
    </p>
  )
}
