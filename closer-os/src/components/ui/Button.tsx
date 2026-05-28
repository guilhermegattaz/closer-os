import { cn } from '../../lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'white' | 'accent' | 'oferta'
  size?: 'default' | 'large'
  href?: string
  children: React.ReactNode
  className?: string
}

export function Button({ variant = 'primary', size = 'default', href, children, className }: ButtonProps) {
  const base = cn(
    'btn-primary',
    variant === 'accent' && 'accent-btn',
    variant === 'ghost' && 'btn-ghost',
    variant === 'white' && 'btn-white',
    variant === 'oferta' && 'btn-oferta',
    size === 'large' && 'large',
    className
  )

  if (href) {
    return (
      <a href={href} className={base} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return <button className={base}>{children}</button>
}
