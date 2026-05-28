import { useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

interface FadeUpProps {
  children: React.ReactNode
  delay?: 'd1' | 'd2' | 'd3'
  className?: string
}

export function FadeUp({ children, delay, className }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
        })
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn('fade-up', delay, className)}>
      {children}
    </div>
  )
}
