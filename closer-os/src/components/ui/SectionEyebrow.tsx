import { cn } from '../../lib/utils'

interface SectionEyebrowProps {
  children: React.ReactNode
  align?: 'center' | 'left'
  className?: string
}

export function SectionEyebrow({ children, align = 'center', className }: SectionEyebrowProps) {
  return (
    <div className={cn('section-eyebrow fade-up', align === 'left' && 'left', className)}>
      {children}
    </div>
  )
}
